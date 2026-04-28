---
name: Growth & Cultivation
colors:
  surface: '#121221'
  surface-dim: '#121221'
  surface-bright: '#383849'
  surface-container-lowest: '#0d0d1c'
  surface-container-low: '#1a1a2a'
  surface-container: '#1e1e2e'
  surface-container-high: '#292839'
  surface-container-highest: '#333344'
  on-surface: '#e3e0f7'
  on-surface-variant: '#d2c3c1'
  inverse-surface: '#e3e0f7'
  inverse-on-surface: '#2f2f40'
  outline: '#9b8e8b'
  outline-variant: '#4e4543'
  surface-tint: '#d6c2be'
  primary: '#ffffff'
  on-primary: '#3a2e2b'
  primary-container: '#f3deda'
  on-primary-container: '#70615e'
  inverse-primary: '#6a5b58'
  secondary: '#e2bebe'
  on-secondary: '#412a2b'
  secondary-container: '#5a4041'
  on-secondary-container: '#d0adad'
  tertiary: '#ffffff'
  on-tertiary: '#472441'
  tertiary-container: '#ffd7f2'
  on-tertiary-container: '#805777'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f3deda'
  primary-fixed-dim: '#d6c2be'
  on-primary-fixed: '#241917'
  on-primary-fixed-variant: '#514441'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#e2bebe'
  on-secondary-fixed: '#2a1617'
  on-secondary-fixed-variant: '#5a4041'
  tertiary-fixed: '#ffd7f2'
  tertiary-fixed-dim: '#eab8dc'
  on-tertiary-fixed: '#2f0f2b'
  on-tertiary-fixed-variant: '#603a58'
  background: '#121221'
  on-background: '#e3e0f7'
  surface-variant: '#333344'
typography:
  display:
    fontFamily: Noto Serif
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Noto Serif
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.2'
  h2:
    fontFamily: Noto Serif
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Noto Serif
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 2rem
  margin-page: 5vw
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
---

## Brand & Style
The design system centers on the metaphor of "cultivation"—viewing code and career as a living, breathing ecosystem that evolves over time. It targets high-end creative agencies and tech startups looking for a developer who balances technical rigor with aesthetic sensibility. 

The visual style is **Organic Minimalism**, merging the structured clarity of a modern dashboard with the soft, fluid shapes of nature. It evokes feelings of tranquility, steady progress, and meticulous care. Key traits include expansive whitespace (breathing room), fluid motion, and a tactile quality that makes digital elements feel like they are "growing" or "blooming" rather than simply appearing.

## Colors
The palette is built upon the Catppuccin Mocha spectrum, utilizing deep charcoal bases to allow the "Rosewater" highlights to bloom with maximum contrast. 

- **Base Layer**: Use Mocha `Base` for the primary canvas to provide a calm, non-distracting environment.
- **Accents**: `Rosewater` is reserved for key calls-to-action and primary focal points. `Flamingo` and `Pink` act as transitional colors, used primarily for interaction feedback (hover/active states) to simulate a deepening of color as an element is engaged.
- **Semantic Usage**: Use `Green` for "stable" or "deployed" states and `Mauve` for "abstract" or "logic-based" highlights.

## Typography
The typographic hierarchy relies on a high-contrast pairing between an elegant serif and a technical sans-serif.

- **Headlines**: Use **Noto Serif** for all major titles. The serif details should feel like organic vine-like strokes.
- **Body**: Use **Manrope** for readability. Its balanced geometric construction provides a necessary anchor of professional stability against the more decorative headlines.
- **Execution**: Apply lowercase transformations to labels and small headers to enhance the "soft" and "approachable" nature of the design system.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 12-column grid for readability, but decorative "organic" elements (like background blobs or vines) are allowed to break the grid and bleed to the edges of the viewport.

- **Asymmetry**: Avoid perfect symmetry. Shift content columns slightly to one side to mimic natural growth patterns.
- **Rhythm**: Use generous vertical padding (`stack-lg`) between sections to represent the concept of "seasonal" transitions between different parts of the portfolio.

## Elevation & Depth
This design system avoids harsh drop shadows. Instead, it uses **Tonal Layering** and **Ambient Glows**:

- **Layering**: Depth is created by moving from the `Base` (#1e1e2e) to `Surface0` (#313244) and `Surface1` (#45475a). Higher elevation elements use lighter surface tones.
- **Blooming Glows**: Interactive elements use a subtle outer glow (box-shadow with high blur and low opacity) using the `Rosewater` color, suggesting a soft light emanating from the element.
- **Glassmorphism**: Project cards use a 10px backdrop blur with a 5% white-tinted fill to appear as semi-translucent frosted surfaces resting on the dark background.

## Shapes
Shapes are defined by "Squircle" geometry—avoiding perfect circles or sharp corners. 

- **Containers**: Use `rounded-xl` (1.5rem) for main content cards.
- **Organic Blobs**: Use non-uniform `border-radius` values (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`) for background decorative elements to create "pebble" or "leaf" shapes.
- **Clips**: Images should be clipped using organic, rounded paths rather than standard rectangles.

## Components
- **Buttons**: Primary buttons are pill-shaped with a `Rosewater` background and `Base` text. On hover, they transition to `Flamingo` and slightly "expand" (scale 1.05) to simulate growth.
- **Cards**: Project cards feature a subtle `Surface0` border. Upon hovering, the border "blooms" into a `Rosewater` gradient, and the internal image scales slightly.
- **Progress Indicators**: Instead of standard bars, use "vines" or "stalks" that fill with a `Green` to `Rosewater` gradient as they reach completion.
- **Chips/Tags**: Use `Surface1` backgrounds with `Text` color. They should have a high roundedness (pill-shaped) to match the organic theme.
- **Input Fields**: Minimalist design with only a bottom border (`Surface2`). When focused, the border expands from the center outward in `Rosewater`.
- **Custom Scrollbar**: A thin, `Rosewater` track with a `Flamingo` thumb, rounded for a tactile feel.