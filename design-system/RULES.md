# GFM Training Academy - Design System Rules

## Core Rules

1. **Use semantic Tailwind classes, not arbitrary colors.**
   Write `bg-ink`, `text-brass`, `border-chalk` -- not `bg-[#0F0F0F]` or `text-[#F59E0B]`.
   All color tokens are registered in `@theme inline` in `globals.css`.

2. **Use CSS variables from globals.css, not hardcoded hex/rgba.**
   Write `var(--primary)` or `var(--brass)` -- not `#DC2626` or `rgba(220, 38, 38, 0.4)`.
   See TOKENS.md for the full variable map.

3. **Use font tokens, not hardcoded font-family.**
   Write `font-sans`, `font-display`, `font-mono` (Tailwind) or `var(--font-sans)`, `var(--font-display)`, `var(--font-mono)` (CSS).
   Never write `font-family: 'Bebas Neue'` or `font-family: 'DM Sans'` directly.

4. **No arbitrary Tailwind color classes.**
   Write `bg-homeschool` -- not `bg-blue-600` or `bg-[#2563EB]`.
   Every color used in templates must exist in the `@theme inline` block.

## Exception Marker

If a value genuinely cannot be tokenized (e.g., SVG data URIs, third-party embed requirements), add an exception comment on the same or preceding line:

```css
/* ds-exception: SVG data URI pattern */
```

```tsx
{/* ds-exception: third-party embed color */}
// ds-exception: chart library requires hex
```

## Token Reference

See [TOKENS.md](./TOKENS.md) for all CSS custom properties and their values.
See [PATTERNS.md](./PATTERNS.md) for component class patterns (btn, card, badge, etc.).

## Enforcement

- **Lint:** `npm run lint:design-system` (Layer 3)
- **Pre-commit:** `.git/hooks/pre-commit` blocks commits with violations (Layer 4)
- **CI:** `.github/workflows/ci.yml` fails PR checks on violations (Layer 5)
