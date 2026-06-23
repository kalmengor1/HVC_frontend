---
name: Kinship Modern
colors:
  surface: "#f7f9fe"
  surface-dim: "#d7dadf"
  surface-bright: "#f7f9fe"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f1f4f9"
  surface-container: "#ebeef3"
  surface-container-high: "#e5e8ed"
  surface-container-highest: "#e0e3e8"
  on-surface: "#181c20"
  on-surface-variant: "#3f484f"
  inverse-surface: "#2d3135"
  inverse-on-surface: "#eef1f6"
  outline: "#707880"
  outline-variant: "#bfc7d1"
  surface-tint: "#006492"
  primary: "#006492"
  on-primary: "#ffffff"
  primary-container: "#4fa8e2"
  on-primary-container: "#003b58"
  inverse-primary: "#8cceff"
  secondary: "#676000"
  on-secondary: "#ffffff"
  secondary-container: "#f5e642"
  on-secondary-container: "#6e6600"
  tertiary: "#126493"
  on-tertiary: "#ffffff"
  tertiary-container: "#65a6d9"
  on-tertiary-container: "#003a5a"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#cae6ff"
  primary-fixed-dim: "#8cceff"
  on-primary-fixed: "#001e2f"
  on-primary-fixed-variant: "#004b6f"
  secondary-fixed: "#f5e642"
  secondary-fixed-dim: "#d8ca23"
  on-secondary-fixed: "#1f1c00"
  on-secondary-fixed-variant: "#4e4800"
  tertiary-fixed: "#cce5ff"
  tertiary-fixed-dim: "#91cdff"
  on-tertiary-fixed: "#001e31"
  on-tertiary-fixed-variant: "#004b72"
  background: "#f7f9fe"
  on-background: "#181c20"
  surface-variant: "#e0e3e8"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "700"
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 16px
  gutter: 12px
---

## Brand & Style

The design system is engineered for social and membership-driven applications where community and professional clarity intersect. It projects an atmosphere of **trust, energy, and efficiency**. By merging high-contrast functional elements with a soft, spacious interface, the system achieves a "Corporate-Social" balance—professional enough for financial or membership data, but vibrant enough for community engagement.

The visual style is **Corporate Modern**, characterized by:

- **Clarity First:** Information hierarchy is established through purposeful color blocking and generous whitespace.
- **Vibrant Precision:** The use of high-chroma primary colors (Blue and Yellow) serves as a functional tool for categorization and wayfinding.
- **Friendly Structure:** Softened edges and tactile shadows reduce the friction of data-heavy screens, making the app feel approachable and humane.

## Colors

The color palette is designed to maximize legibility and energy while maintaining a light, airy feel.

- **Primary Blue (#4FA8E2):** Used for primary actions, branding elements, and information-heavy status cards. It provides a stable, professional anchor.
- **Bright Yellow (#F5E642):** Used as a high-contrast accent. In a membership context, it highlights "Current Status," "Urgent Notifications," or "Active Balances." Due to its brightness, it should always be paired with dark text for accessibility.
- **Neutral Background (#F8F9FA):** A cool, light gray that prevents eye strain and allows the vibrant card components to "pop" without harsh white glare.
- **Tertiary Blue (#3A7FB0):** A deeper shade for active states, hover effects on desktop, or high-density text labels within blue components.

## Typography

This design system utilizes **Inter** for its exceptional legibility on mobile screens and its neutral, modern tone.

- **Scale & Contrast:** Large headlines use a tight negative letter-spacing to feel more impactful and "display-like."
- **Readability:** Body text maintains a generous line-height (1.5x) to ensure long-form membership updates or event descriptions are easy to digest.
- **Information Density:** Small labels use a bold weight and slight letter-spacing to remain legible at small sizes, particularly within status chips and data tables.

## Layout & Spacing

The system uses a **Fluid Grid** model optimized for mobile-first consumption.

- **Mobile (Default):** A 4-column grid with 16px outside margins and 12px gutters. All touch targets (buttons, inputs) must maintain a minimum height of 48px.
- **Tablet/Desktop:** Content is centered in a max-width container (1200px) with a 12-column grid.
- **Rhythm:** Spacing follows a 4px baseline. Components should generally use `md (16px)` for internal padding to maintain a spacious, premium feel.

## Elevation & Depth

To maintain a clean and modern look, the design system avoids heavy shadows in favor of **Tonal Layers** and **Ambient Depth**.

- **Level 0 (Base):** Background color (#F8F9FA).
- **Level 1 (Cards):** Pure white (#FFFFFF) surfaces with a subtle, highly diffused shadow (0px 4px 12px, 5% opacity black).
- **Level 2 (Active/Floating):** Used for FABs or active modals. Increased shadow spread (0px 8px 24px, 10% opacity black).
- **Functional Tinting:** Instead of deep shadows, use the Primary Blue or Bright Yellow as solid background fills for "Status Cards" to denote importance and hierarchy without adding visual clutter.

## Shapes

The shape language is defined by **Friendly Geometry**.

- **Standard Radius:** 12px (0.75rem) for primary cards and input fields.
- **Large Radius:** 24px (1.5rem) for global containers or oversized action buttons.
- **Pill Shapes:** Used exclusively for tags, chips, and status indicators to differentiate them from actionable buttons.

## Components

### Buttons

- **Primary:** Solid Blue (#4FA8E2) with White text. 12px corner radius.
- **Secondary:** Solid Yellow (#F5E642) with Dark Gray (#1A1C1E) text. Used for "Premium" or "Urgent" actions.
- **Ghost:** Transparent background with Blue border and text.

### Status Cards (High-Contrast)

These are the signature elements of the system.

- **Finance/Status Cards:** Large, solid-fill blocks in Blue or Yellow. Use white or high-contrast dark text respectively. Center-aligned icons and large typography for quick scanning of balances or attendance.

### Input Fields

- White background with a 1px border (#E0E0E0).
- On focus, the border transitions to Primary Blue with a soft 2px outer glow.

### Lists & Cells

- Membership directories and event lists should use white cards with `md` (16px) padding.
- Use horizontal dividers (1px, #F1F3F4) between list items.

### Iconography

- Use a consistent 24px grid.
- Icons should be "Outline" style with a 2px stroke width to match the modern, clean aesthetic of the Inter typeface.
