#!/usr/bin/env node

/**
 * Design-System Linter (Layer 3 of 5-layer enforcement)
 * gfmtf-v2 — Next.js 16 + Tailwind v4
 *
 * Scans source files for hardcoded colors, hex values, rgba, and font-family
 * declarations that should use design tokens from globals.css instead.
 *
 * Usage:
 *   node scripts/lint-design-system.mjs          # scan all source files
 *   node scripts/lint-design-system.mjs --staged  # scan only git-staged files
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Configuration ──────────────────────────────────────────────────────────

const SCAN_EXTENSIONS = new Set([".tsx", ".ts", ".css"]);

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  "dist",
  "scripts",
  "design-system",
  ".git",
  "public",
]);

const TOKEN_DEFINITION_FILES = new Set(["globals.css"]);

/** Exception marker — skip this line if present. */
const EXCEPTION_RE = /ds-exception:/;

/** Allowed hex values (common neutrals). */
const ALLOWED_HEX = new Set(["#fff", "#000", "#ffffff", "#000000"]);

// ── Rules ──────────────────────────────────────────────────────────────────

/** Each rule returns an array of { line, col, message } for a given line of text. */
const rules = [
  {
    id: "no-arbitrary-color",
    /** Tailwind arbitrary color bracket: bg-[#...], text-[#...], border-[#...] */
    test(line) {
      const hits = [];
      const re = /(?:bg|text|border|from|via|to|ring|outline|shadow|accent|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/g;
      let m;
      while ((m = re.exec(line)) !== null) {
        hits.push({ col: m.index + 1, message: `Arbitrary color "${m[0]}" — use a semantic token class instead.` });
      }
      return hits;
    },
  },
  {
    id: "no-hardcoded-hex",
    /**
     * Hex color literals in CSS values.
     * Skips: token definition blocks, SVG fill/stroke attributes, allowed hex.
     */
    test(line) {
      const hits = [];
      const re = /#([0-9a-fA-F]{3,8})\b/g;
      let m;
      while ((m = re.exec(line)) !== null) {
        const hex = m[0].toLowerCase();
        if (ALLOWED_HEX.has(hex)) continue;
        // Skip SVG attributes: fill="#...", stroke="#..."
        const before = line.slice(0, m.index);
        if (/(?:fill|stroke)\s*=\s*["']?\s*$/.test(before)) continue;
        // Skip URL-encoded hex in data URIs (e.g., %23ffffff)
        if (m.index >= 3 && line.slice(m.index - 3, m.index) === "%23") continue;
        hits.push({ col: m.index + 1, message: `Hardcoded hex "${m[0]}" — use a CSS variable (var(--...)) instead.` });
      }
      return hits;
    },
  },
  {
    id: "no-hardcoded-rgba",
    /** rgba() / rgb() with numeric args. */
    test(line) {
      const hits = [];
      const re = /rgba?\(\s*\d+/g;
      let m;
      while ((m = re.exec(line)) !== null) {
        hits.push({ col: m.index + 1, message: `Hardcoded rgba/rgb "${line.slice(m.index, m.index + 30).trim()}..." — use a CSS variable with opacity instead.` });
      }
      return hits;
    },
  },
  {
    id: "no-hardcoded-font",
    /** font-family with quoted font names (not via var()). */
    test(line) {
      const hits = [];
      const re = /font-family:\s*(?!var\()/g;
      let m;
      while ((m = re.exec(line)) !== null) {
        hits.push({ col: m.index + 1, message: `Hardcoded font-family — use var(--font-sans), var(--font-display), or var(--font-mono).` });
      }
      return hits;
    },
  },
];

// ── File Discovery ─────────────────────────────────────────────────────────

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    let stat;
    try { stat = statSync(full); } catch { continue; }
    if (stat.isDirectory()) {
      results.push(...walkDir(full));
    } else if (SCAN_EXTENSIONS.has(extname(full))) {
      results.push(full);
    }
  }
  return results;
}

function getStagedFiles() {
  try {
    const raw = execSync("git diff --cached --name-only --diff-filter=ACMR", {
      cwd: ROOT,
      encoding: "utf-8",
    });
    return raw
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f && (f.startsWith("app/") || f.startsWith("components/")))
      .filter((f) => SCAN_EXTENSIONS.has(extname(f)))
      .map((f) => join(ROOT, f));
  } catch {
    return [];
  }
}

// ── Linting Engine ─────────────────────────────────────────────────────────

function lintFile(filePath) {
  const source = readFileSync(filePath, "utf-8");
  const lines = source.split("\n");
  const relPath = relative(ROOT, filePath);
  const fileName = relPath.replace(/\\/g, "/").split("/").pop();
  const isTokenFile = TOKEN_DEFINITION_FILES.has(fileName);

  // Token definition files (globals.css) are the source of truth — skip entirely.
  // They define the variables, component patterns, and utility classes that
  // everything else should reference. Linting them would flag their own definitions.
  if (isTokenFile) return [];

  const errors = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    // Skip exception-marked lines
    if (EXCEPTION_RE.test(line)) continue;
    // Also check previous line for block exception comment
    if (i > 0 && EXCEPTION_RE.test(lines[i - 1])) continue;

    for (const rule of rules) {
      const hits = rule.test(line);
      for (const hit of hits) {
        errors.push({
          file: relPath,
          line: lineNum,
          col: hit.col,
          rule: rule.id,
          message: hit.message,
        });
      }
    }
  }

  return errors;
}

// ── Main ───────────────────────────────────────────────────────────────────

const isStaged = process.argv.includes("--staged");
const files = isStaged ? getStagedFiles() : walkDir(ROOT);

const allErrors = [];

for (const file of files) {
  const errors = lintFile(file);
  if (errors.length) allErrors.push(...errors);
}

// ── Output ─────────────────────────────────────────────────────────────────

if (allErrors.length === 0) {
  console.log(`\n  Design system lint: ${files.length} files scanned, 0 violations.\n`);
  process.exit(0);
} else {
  console.log(`\n  Design system lint: ${allErrors.length} violation(s) in ${files.length} files:\n`);
  for (const e of allErrors) {
    console.log(`  ${e.file}:${e.line}:${e.col}  ${e.rule}  ${e.message}`);
  }
  console.log(`\n  Fix violations or add /* ds-exception: reason */ to bypass.\n`);
  process.exit(1);
}
