# Design System Inspired by Catppuccin Mocha

## 1. Visual Theme & Atmosphere

Catppuccin Mocha is a warm, pastel-hued dark theme that wraps interfaces in deep indigo-grays (`#1e1e2e`, `#181825`, `#11111b`) accented with soft, desaturated pastels. Unlike high-contrast dark themes, Catppuccin prioritizes visual comfort — the palette is designed to reduce eye strain while maintaining clear hierarchy through subtle tonal variation. The design philosophy is "soothing darkness": surfaces recede into warm shadows while pastel accents provide gentle, readable highlights.

The palette is built on a careful balance: cool base tones (`#1e1e2e` base, `#313244` surface0) provide depth, while warm accent colors (rosewater `#f5e0dc`, peach `#fab387`, yellow `#f9e2af`) bring life to interactive elements without the harshness of fully saturated primaries. The blue `#89b4fa`, mauve `#cba6f7`, and lavender `#b4befe` form a cohesive cool accent family. Green `#a6e3a1` and teal `#94e2d5` complete the palette with natural, organic tones.

**Key Characteristics:**
- Deep indigo-black dark theme (`#1e1e2e`–`#11111b`) — warm, not cold
- Desaturated pastel accents — soothing, never harsh
- 26-color palette with cohesive tonal relationships
- Green accent (`#a6e3a1`) for CTAs and active states
- Tonal surfaces: `mantle` (`#181825`), `base` (`#1e1e2e`), `surface0-2` (`#313244`–`#585b70`)
- Layered text opacity: `text` → `subtext1` → `subtext0` → `overlay2` → `overlay0`
- Pill-and-circle geometry for interactive elements
- Heavy shadows for elevation against dark backgrounds

## 2. Color Palette & Roles

### Base & Surface
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ctp-crust` | `#11111b` | Deepest background, page root |
| `--color-ctp-mantle` | `#181825` | Cards, containers, elevated surfaces |
| `--color-ctp-base` | `#1e1e2e` | Primary surface — buttons, inputs, mid-level containers |
| `--color-ctp-surface0` | `#313244` | Elevated cards, hover states |
| `--color-ctp-surface1` | `#45475a` | Borders, dividers, subtle separation |
| `--color-ctp-surface2` | `#585b70` | Strong borders, disabled states |

### Overlay & Text
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ctp-overlay0` | `#6c7086` | Muted borders, subdued elements |
| `--color-ctp-overlay1` | `#7f849c` | Secondary dividers, placeholder text |
| `--color-ctp-overlay2` | `#9399b2` | Tertiary text, disabled labels |
| `--color-ctp-subtext0` | `#a6adc8` | Secondary text, muted labels |
| `--color-ctp-subtext1` | `#bac2de` | Near-primary text, metadata |
| `--color-ctp-text` | `#cdd6f4` | Primary text, headings |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ctp-green` | `#a6e3a1` | Brand accent, CTAs, active states |
| `--color-ctp-blue` | `#89b4fa` | Info states, links, announcements |
| `--color-ctp-mauve` | `#cba6f7` | Highlights, decorative accents |
| `--color-ctp-peach` | `#fab387` | Warning states, attention |
| `--color-ctp-red` | `#f38ba8` | Error states, destructive actions |
| `--color-ctp-yellow` | `#f9e2af` | Caution, pending states |
| `--color-ctp-teal` | `#94e2d5` | Success states, confirmations |
| `--color-ctp-pink` | `#f5c2e7` | Special accents, promotion |
| `--color-ctp-lavender` | `#b4befe` | Secondary highlights |
| `--color-ctp-sapphire` | `#74c7ec` | Informational accents |
| `--color-ctp-sky` | `#89dceb` | Light info, tags |
| `--color-ctp-rosewater` | `#f5e0dc` | Soft highlights, subtle emphasis |
| `--color-ctp-flamingo` | `#f2cdcd` | Muted alerts |
| `--color-ctp-maroon` | `#eba0ac` | Secondary error states |

### Mapped Tokens (backwards compatible)
| Token | Maps To | Usage |
|-------|---------|-------|
| `--color-green` | `--catppuccin-color-green` | Brand accent |
| `--color-surface` | `--catppuccin-color-mantle` | Card/container background |
| `--color-surface-mid` | `--catppuccin-color-base` | Button/input background |
| `--color-muted` | `--catppuccin-color-subtext0` | Secondary text |
| `--color-negative` | `--catppuccin-color-red` | Error states |
| `--color-warning` | `--catppuccin-color-peach` | Warning states |
| `--color-info` | `--catppuccin-color-blue` | Info states |

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Medium | `rgba(0,0,0,0.3) 0px 8px 8px` | Cards, dropdowns |
| Heavy | `rgba(0,0,0,0.5) 0px 8px 24px` | Dialogs, overlays |
| Inset | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | Input borders |

### Typography
| Role | Font | Size | Weight |
|------|------|------|--------|
| Section Title | SpotifyMixUITitle | 24px (1.50rem) | 700 |
| Feature Heading | SpotifyMixUI | 18px (1.13rem) | 600 |
| Body | SpotifyMixUI | 14–16px | 400 |
| Caption | SpotifyMixUI | 12–14px | 400 |
| Badge | SpotifyMixUI | 10.5px (0.66rem) | 600 |

### Border Radius
| Name | Value | Usage |
|------|-------|-------|
| Pill | 500px | Primary buttons, search input |
| Circle | 50% | Play buttons, avatars |
| Standard | 6px–8px | Cards, containers |
| Subtle | 4px | Inputs, small elements |

### Animations
| Token | Keyframes | Usage |
|-------|-----------|-------|
| `animate-fade-in` | `opacity: 0 → 1` | Page entry, reveal |
| `animate-fade-out` | `opacity: 1 → 0` | Dismiss, unmount |
| `animate-slide-up` | `translateY(1rem) + opacity` | Card/stagger entry |
| `animate-scale-in` | `scale(0.95) + opacity` | Modal, dialog appear |

Usage: `class="animate-fade-in"` (Tailwind v4 generates the `@keyframes` automatically).

## 3. Token Hierarchy

```
Brand Tokens (Catppuccin Mocha palette)
  └── Semantic Tokens (purpose-mapped)
      └── Component Tokens (variant-specific)
```

**Brand**: `--catppuccin-color-green`, `--catppuccin-color-mauve`, etc. — the raw palette.

**Semantic** (in `tailwind.css` `@theme`): `--color-surface`, `--color-muted`, `--color-negative` — mapped from brand by purpose.

**Component**: Applied directly in Vue/Astro via utility classes: `bg-surface`, `text-muted`, `border-border-gray`.

### Component Architecture Pattern

```
Base styles → Variants → Sizes → States → Overrides
```

**Example — Button:**
```
Base:   rounded-full font-bold uppercase tracking-[0.15em] text-xs
Var:    bg-green text-black / bg-surface-mid text-white / border border-border-light
Size:   px-5 py-1.5 / px-8 py-3
State:  hover:bg-green-border / hover:brightness-110 / hover:border-white
```

## 4. Spacing Scale (8pt Grid)

| Token | Rem | px |
|-------|-----|----|
| `p-1` | 0.25rem | 4px |
| `p-2` | 0.5rem | 8px |
| `p-3` | 0.75rem | 12px |
| `p-4` | 1rem | 16px |
| `p-5` | 1.25rem | 20px |
| `p-6` | 1.5rem | 24px |
| `p-8` | 2rem | 32px |
| `p-10` | 2.5rem | 40px |
| `p-12` | 3rem | 48px |
| `p-16` | 4rem | 64px |
| `p-20` | 5rem | 80px |

## 5. Do's and Don'ts

### Do
- Use `crust`/`mantle`/`base` as surface hierarchy — depth through tonal variation
- Apply green (`#a6e3a1`) for primary CTAs and active states
- Use pastel accents (mauve, blue, peach) for semantic roles — they carry meaning without harshness
- Leverage the full palette — Catppuccin's 26 colors are designed to coexist
- Use pill geometry (500px) for buttons and inputs
- Use heavy shadows (`0.3–0.5 opacity`) for elevation
- Keep text hierarchy clear: `text` → `subtext1` → `subtext0` → `overlay2`

### Don't
- Don't use fully saturated primaries — Catppuccin's desaturated quality is core
- Don't mix with cold blue-black backgrounds — stick to Catppuccin's warm indigo base
- Don't use light backgrounds as primary surfaces
- Don't skip the tonal surface layering — the subtle `mantle` → `base` → `surface0` progression is key
- Don't use thin shadows on dark backgrounds — they become invisible

## 6. Responsive Behavior

### Breakpoints
| Name | Width |
|------|-------|
| Mobile Small | <425px |
| Mobile | 425–576px |
| Tablet | 576–768px |
| Desktop Small | 896–1024px |
| Desktop | 1024–1280px |
| Large Desktop | >1280px |

### Strategy
- Grid columns: 5 → 3 → 2 → 1
- Pill inputs maintain shape, width adjusts
- Navigation collapses sidebar → bottom bar on mobile

## 7. Agent Prompt Guide

### Quick Color Reference
- Background: Crust (`#11111b`) / Mantle (`#181825`)
- Surface: Base (`#1e1e2e`) / Surface0 (`#313244`)
- Primary text: Text (`#cdd6f4`)
- Secondary text: Subtext0 (`#a6adc8`)
- Accent: Green (`#a6e3a1`)
- Borders: Surface1 (`#45475a`), Overlay0 (`#6c7086`)
- Error: Red (`#f38ba8`)
- Warning: Peach (`#fab387`)
- Info: Blue (`#89b4fa`)

### Example Component Prompts
- "Create a card: mantle background (#181825), 8px radius. Title at 16px weight 700, text color (#cdd6f4). Subtitle at 14px weight 400, subtext0 (#a6adc8). Shadow medium on hover."
- "Design a pill button: base background (#1e1e2e), text (#cdd6f4), 500px radius, 8px 16px padding. 14px weight 700, uppercase."
- "Build a circular button: green (#a6e3a1) background, crust (#11111b) icon, 50% radius."
- "Create search input: base (#1e1e2e) background, text (#cdd6f4), 500px radius. Inset border with overlay0 (#6c7086)."
- "Design navigation: crust (#11111b) sidebar. Active items white text weight 700. Inactive subtext0 weight 400."
