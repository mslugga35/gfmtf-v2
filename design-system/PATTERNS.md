# GFM Training Academy - Component Patterns

All patterns defined in `app/globals.css`. Use these classes instead of rebuilding from scratch.

## Layout

### `.container`
Full-width wrapper with max-width and responsive horizontal padding.
```
max-width: var(--container-max) (1400px)
padding: clamp(1rem, 4vw, 2rem) horizontal
```

### `.section`
Standard section vertical padding.
```
padding: var(--section-padding) top/bottom
```

### `.dark-section`
Apply to any section to invert the semantic color variables. Switches background, foreground, border, and card tokens to dark variants.

## Buttons

### `.btn`
Base button: inline-flex, centered content, gap, padding, uppercase, tracked, no border-radius, smooth transition.

### `.btn-primary`
Red CTA: `var(--primary)` background, white text, red box-shadow. Hover: darker red, slight lift, stronger shadow.

### `.btn-secondary`
Ghost/outline: transparent background, foreground-colored border. Hover: fills with foreground color, text inverts.

### `.btn-homeschool`
Blue CTA: `var(--homeschool)` background, white text. Hover: lighter blue, slight lift.

## Cards

### `.card`
White background, 1px border, 2rem padding, smooth transition. Hover: cream background, lift (-4px), drop shadow.

### `.card-featured`
2px homeschool-blue border. Has `::before` pseudo-element with "FEATURED" label badge at top-right.

## Badges

### `.badge`
Inline-flex pill: small, uppercase, tracked, 2px radius.

| Variant | Background | Text |
|---------|-----------|------|
| `.badge-homeschool` | `var(--homeschool)` | white |
| `.badge-popular` | `var(--success)` | white |
| `.badge-brass` | `var(--brass)` | `var(--ink)` |

## Decorative

### `.divider`
Small accent bar: 60px wide, 3px tall, brass-colored.

### `.grid-bg`
Subtle grid pattern background (light mode): 40px grid with 3% black lines.

### `.dark-grid-bg`
Grid pattern for dark sections: 40px grid with 3% white lines.

### `.stat-number`
Large display number: display font, responsive clamp size, brass color.

### `.link-underline`
Animated underline effect: brass bar slides in from left on hover via `::after` pseudo-element.

## Utilities

### `.mono`
Applies mono font family (`var(--font-mono)`). Use for phone numbers, stats, codes.

### `.mobile-sticky-bar`
Fixed bottom bar on mobile (max-width: 768px): dark background, flex row, z-100. Hidden on desktop.
