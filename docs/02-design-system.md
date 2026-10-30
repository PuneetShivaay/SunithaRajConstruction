# 02: Design System: "Gold & Steel" (Dark)

Derived from the logo: metallic gold, brushed steel, black outlines, wide caps.

## Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0E0F11` | Page background |
| `--surface` | `#17191C` | Cards, sections |
| `--surface-2` | `#22252A` | Raised / hover surfaces |
| `--line` | `#2C3036` | Borders, dividers |
| `--gold` | `#C9A227` | Primary accent, CTAs |
| `--gold-light` | `#E6C766` | Gradient highlight |
| `--gold-deep` | `#8C6A12` | Gradient shadow |
| `--steel` | `#A7ADB5` | Secondary accent |
| `--text` | `#F2F0EA` | Main text |
| `--muted` | `#8B9098` | Secondary text |
| `--stone` | `#F5F3EE` | Light contrast sections |
| `--wa` | `#1FAF5A` | WhatsApp buttons only |

**Ratio rule:** about 70% dark, 20% steel/neutral, 10% gold. Gold is rare, which keeps it premium.

**Gradients**
- Gold: `linear-gradient(135deg, #E6C766, #C9A227 50%, #8C6A12)`
- Steel: `linear-gradient(135deg, #D9DDE2, #A7ADB5 50%, #5E636B)`

## Typography

| Role | Font | Notes |
|---|---|---|
| Headings | **Clash Display** (600–700) | Self-hosted via `next/font/local` |
| Body | **Inter** (400–600) | `next/font/google` |
| Eyebrow labels | Inter 600, uppercase, `tracking-[0.3em]` | Echoes the logo wordmark |

**Type scale (fluid)**
- Display (hero): `clamp(48px, 8vw, 120px)`
- H2: `clamp(32px, 5vw, 64px)`
- H3: `clamp(22px, 2.5vw, 32px)`
- Body: 17px / 1.6, Small: 14–15px

## Layout and spacing
- Container: `max-w-[1240px]` with `px-5 md:px-8`
- Section padding: `py-20 md:py-32`
- Grid: 12 columns on desktop, single column on mobile
- Radius: **2–6px** (sharp, architectural); pills only for chips
- Breakpoints: Tailwind defaults (`sm 640`, `md 768`, `lg 1024`, `xl 1280`)

## Motifs
- **Skyline bars:** three vertical towers from the logo, used in the loader, dividers and watermark.
- **Blueprint grid:** faint 1px grid overlay on dark sections.
- **Thin gold rules:** underlines on key words and section eyebrows.
- **Outlined watermark:** large stroked "SUNITHARAJ" in the footer.

## Components (UI kit)
Button (primary gold / outline steel / WhatsApp), Eyebrow, SectionHeading, StatCard, ServiceCard, ProjectCard, Lightbox, Tabs/Filter chips, Accordion (FAQ), TestimonialCard, ClientLogoStrip, Timeline (process), QuoteForm, StickyMobileBar, Header, Footer.

## Motion
- Library: **Motion** (Framer Motion) and **Lenis** smooth scroll
- Reveal: fade + 24px rise, 600ms, `ease-out`, staggered 80ms
- Hero: subtle parallax and slow image crossfade
- Loader: skyline bars "build" upward (≤ 1.2s, shown once per session)
- Hover: image scale 1.04, gold border fade-in
- **Respect `prefers-reduced-motion`**: disable all non-essential motion

## Accessibility
- Gold `#C9A227` on `#0E0F11` passes AA for text ≥ 18px; use `--gold-light` for small text
- Visible focus ring: 2px gold outline + offset
- All images have meaningful `alt`; decorative images use `alt=""`
- Keyboard-navigable menus, dialog, and tabs (Radix / shadcn)
