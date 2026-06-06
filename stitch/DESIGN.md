---
name: GridPulse Lite Design System
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e3fdff'
  on-primary: '#00373a'
  primary-container: '#00f3ff'
  on-primary-container: '#006b71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#e8ffda'
  on-tertiary: '#053900'
  tertiary-container: '#36fd0f'
  on-tertiary-container: '#107000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  score-readout:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-velocity engagement and cognitive focus. It centers on a **Neon-Tech** aesthetic that blends the precision of **Modern Minimalism** with the atmospheric depth of **Glassmorphism**. 

The target audience consists of competitive gamers and rhythm-puzzle enthusiasts who value low-latency visual feedback. The UI should evoke a sense of digital "flow state"—calm in its structural organization but high-energy in its reactive elements. Visuals utilize dark, recessive backgrounds to make interactive "energy" components appear self-illuminated, mimicking the glow of a high-end HUD or a futuristic terminal.

## Colors
The palette is built on a "Midnight Spectrum" to maximize contrast and reduce eye strain during rapid gameplay.
- **Primary (Electric Cyan):** Used for critical path actions, active states, and primary HUD readouts.
- **Secondary (Neon Magenta):** Reserved for high-energy multipliers, rare rewards, and secondary navigation.
- **Tertiary (Lime Green):** Applied to success states, health/stability bars, and "Go" indicators.
- **Neutral / Background:** A deep #050508 canvas ensures the neon accents pop. Surfaces use a semi-transparent charcoal to create depth without losing the tech-noir atmosphere.

## Typography
The typographic hierarchy distinguishes between **Operational UI** (Hanken Grotesk) and **Performance Data** (JetBrains Mono).
- **Display & Headlines:** Use Space Grotesk for its geometric, futuristic feel. These should be tight and impactful.
- **Monospaced Data:** JetBrains Mono is utilized for scores, timers, and level numbers to ensure character alignment and a "coded" aesthetic.
- **Functional Labels:** All-caps monospaced labels provide a technical, instrument-cluster feel for settings and HUD metadata.

## Layout & Spacing
The design system employs a **Modular Grid** optimized for 16:9 aspect ratios but fluid enough to adapt to mobile portrait views.
- **HUD Layout:** Critical gameplay data is pinned to "Safe Zone" corners. The center remains clear for the puzzle grid.
- **The Playfield:** A centered 12-column grid system where the playfield occupies the central 8 columns on desktop and the full width (minus margins) on mobile.
- **Spacing Logic:** A strict 4px base unit ensures mathematical precision. Use `md` (24px) for most container padding and `sm` (16px) for internal element grouping.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Luminance**, rather than traditional shadows.
- **Layer 0 (Canvas):** The base background, dark and static.
- **Layer 1 (Panels):** Semi-transparent surfaces with a `backdrop-filter: blur(12px)`. These panels feature a 1px "inner-glow" border in a low-opacity Primary color.
- **Layer 2 (Active Elements):** Elements that are "on" or "active" utilize an outer bloom (box-shadow with high blur, low spread) that matches their brand color, creating a neon light effect.
- **Focus States:** High-contrast outlines that appear to "vibrate" or pulse slightly when interaction is required.

## Shapes
This design system uses **Soft** geometry (0.25rem - 0.75rem radii). Sharp 90-degree corners are avoided to maintain a sleek, high-tech "hardware" feel, but radii remain small to prevent the UI from looking too friendly or "bubbly." The focus is on precision-engineered edges.

## Components
- **Neon Buttons:** Ghost-style buttons with 1px solid borders. On hover, the border and text glow intensely; on click, the background fills with a low-opacity version of the primary color.
- **HUD Chips:** Small, monospaced data tags used for displaying level stats (e.g., "BPM: 140", "STREAK: 52"). Backgrounds are dark charcoal with a leading edge colored by the current status.
- **Energy Sliders:** Settings sliders use a solid neon track for the "active" portion and a dim, dashed line for the "inactive" track. The thumb is a glowing vertical bar.
- **The Puzzle Grid:** Square tiles with subtle inner bevels. Active tiles pulse with Primary Cyan; "Trap" tiles flicker with Magenta.
- **Glass Cards:** Used for post-game summaries. These occupy the center of the screen with a heavy backdrop blur, effectively isolating the user from the background grid for focused review.
- **Toggle Switches:** Compact, rectangular toggles that slide horizontally. When "ON," the entire switch housing emits a soft glow.