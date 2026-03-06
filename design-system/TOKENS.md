# GFM Training Academy - Design Tokens

All tokens defined in `app/globals.css`. Tailwind classes generated via `@theme inline`.

## Colors

### Core (Athletic Theme)
| Variable | Value | Tailwind Class | Usage |
|----------|-------|----------------|-------|
| `--ink` | `#0F0F0F` | `bg-ink`, `text-ink` | Primary dark / body text |
| `--stone` | `#1A1A1A` | `bg-stone`, `text-stone` | Dark section cards |
| `--charcoal` | `#2D2D2D` | `bg-charcoal`, `text-charcoal` | Dark section borders/accents |
| `--slate` | `#6B7280` | `bg-slate`, `text-slate` | Muted text |
| `--cream` | `#F9FAFB` | `bg-cream`, `text-cream` | Light backgrounds, dark-section text |
| `--chalk` | `#E5E7EB` | `bg-chalk`, `text-chalk` | Borders, light accents |
| `--white` | `#FFFFFF` | `bg-white`, `text-white` | Pure white |

### Accent (Red/Athletic)
| Variable | Value | Tailwind Class | Usage |
|----------|-------|----------------|-------|
| `--primary` | `#DC2626` | -- | Primary CTA (via `.btn-primary`) |
| `--primary-dark` | `#B91C1C` | -- | Primary hover state |
| `--rust` | `var(--primary)` | `bg-rust`, `text-rust` | Alias for primary in Tailwind |
| `--rust-dark` | `var(--primary-dark)` | `bg-rust-dark`, `text-rust-dark` | Alias for primary-dark |
| `--brass` | `#F59E0B` | `bg-brass`, `text-brass` | Accent highlights, dividers |
| `--success` | `#10B981` | `bg-success`, `text-success` | Success states, popular badge |

### Feature (Homeschool)
| Variable | Value | Tailwind Class | Usage |
|----------|-------|----------------|-------|
| `--homeschool` | `#2563EB` | `bg-homeschool`, `text-homeschool` | Homeschool feature color |
| `--homeschool-light` | `#3B82F6` | `bg-homeschool-light`, `text-homeschool-light` | Homeschool hover/accent |

### Semantic
| Variable | Value | Tailwind Class | Usage |
|----------|-------|----------------|-------|
| `--background` | `var(--white)` | `bg-background` | Page background |
| `--foreground` | `var(--ink)` | `text-foreground` | Default text |
| `--muted` | `var(--slate)` | `text-muted` | Muted text |
| `--border` | `var(--chalk)` | `border-border` | Default borders |
| `--card` | `var(--white)` | `bg-card` | Card backgrounds |
| `--card-hover` | `var(--cream)` | `bg-card-hover` | Card hover backgrounds |

### Dark Section Overrides (`.dark-section`)
| Variable | Overridden Value |
|----------|-----------------|
| `--background` | `var(--ink)` |
| `--foreground` | `var(--cream)` |
| `--border` | `var(--charcoal)` |
| `--card` | `var(--stone)` |
| `--card-hover` | `var(--charcoal)` |

## Typography

### Font Families
| Variable | Font | Tailwind Class |
|----------|------|----------------|
| `--font-sans` | DM Sans | `font-sans` |
| `--font-display` | Bebas Neue | `font-display` |
| `--font-mono` | JetBrains Mono | `font-mono` |

### Type Scale
| Variable | Value | Usage |
|----------|-------|-------|
| `--text-hero` | `clamp(3rem, 12vw, 7rem)` | Hero headlines |
| `--text-display` | `clamp(2.5rem, 8vw, 5rem)` | Display headlines |
| `--text-section` | `clamp(2rem, 6vw, 3.5rem)` | Section headings |
| `--text-card` | `clamp(1.25rem, 3vw, 1.75rem)` | Card titles |
| `--text-body` | `clamp(1rem, 2vw, 1.125rem)` | Body text |
| `--text-small` | `0.875rem` | Small text |
| `--text-xs` | `0.75rem` | Extra-small text |

## Spacing

| Variable | Value | Usage |
|----------|-------|-------|
| `--section-padding` | `clamp(4rem, 10vw, 8rem)` | Top/bottom section padding |
| `--container-max` | `1400px` | Max content width |

## Transitions

| Variable | Value | Usage |
|----------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth ease-out |
| `--duration-fast` | `150ms` | Quick interactions |
| `--duration-normal` | `300ms` | Standard transitions |
| `--duration-slow` | `500ms` | Deliberate animations |
