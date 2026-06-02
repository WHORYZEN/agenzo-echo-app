# Agenzo-style Agency Landing Page

A faithful structural and stylistic clone of the agenzo.framer.ai layout — same neutral light theme, oversized geometric sans display, pill-shaped floating nav, rounded card chips, and section rhythm. Original copy/imagery will be generated (no scraping of the source's protected assets) but composition, type scale, colors, radii, and motion will match closely.

## Visual system

- **Palette (light, warm-neutral):**
  - Background: `#EDEAE5` (warm beige/grey)
  - Foreground: `#0A0A0A` (near-black)
  - Card/Glass: `rgba(255,255,255,0.55)` with backdrop blur
  - Muted text: `#6B6B66`
  - Accent: pure white for hero headline, black for pill buttons
- **Typography:** Inter Tight / Geist (or similar geometric sans) for body; **Inter Display / Geist** Black for the massive hero wordmark. Tight tracking, uppercase eyebrow labels.
- **Radii:** Full pill (`9999px`) for nav and buttons, `1.25rem` (20px) for cards and image tiles.
- **Motion:** Framer Motion — hero word fade/scale-in, sticky scroll snap, horizontal marquee tickers, hover lift on project cards, slow auto-scroll on hero image slider.

## Sections (in order)

1. **Floating top nav** — left logo "Agenzo®", center pill containing Studio / Project⁽¹²⁾ / Service / Blog, right "Meet" pill with icon.
2. **Hero** — giant "Agenzo®" wordmark, "— DESIGN AGENCY" eyebrow, right-side vertical "Scroll down" label, descriptive paragraph bottom-left, two pill CTAs (View Our Work, Connect Us), bottom horizontal image slider strip.
3. **Why choose us / Team intro** — large heading "Meet the Minds Behind the Work", supporting paragraph, stat cards (100+ Fields, 12 Countries) with stacked avatars.
4. **Trusted partner marquee** — two horizontal rows of logos scrolling opposite directions, "Choose Plan" pill button beside.
5. **Agenzo Fact** — large image card with overlay stat "100+ Projects successfully launched".
6. **Selected Work** — section eyebrow + "Selected Work. (5)" heading, horizontal row of 5 project cover cards with index, title, year.
7. **Our Member** — "Meet the Team Behind the Vision" — 3 portrait cards with role tag, hashtag, name.
8. **Testimonials** — quote block with client photo, name, company logo, pagination "01/04".
9. **Stats trio** — Happy people 1M+, ROI 50%, Client Retention 50%.
10. **Trusted-by partner logos grid.**
11. **Show reel** — full-bleed video/image tile with overlay "Show reel — 2025®".
12. **Achievements** — Awwwards / Dribbble / CSS Design Award / FWA list with one featured image.
13. **Our Process** — 3 numbered process steps with imagery (.01 .02 .03).
14. **Pricing** — eyebrow + "Pricing (3)", Monthly/Yearly toggle, 3 pill-bordered plan cards (Low-budget $500, Standard $5,000, Premium) with feature checklist and Choose Plan CTA.
15. **Footer / CTA band** — big "Let's work together" wordmark, contact pill, social row, copyright.

## Technical details

- **Routing:** Single page at `src/routes/index.tsx`. Replace placeholder. Add section components under `src/components/sections/`.
- **Styling:** Update `src/styles.css` tokens — set `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--radius` to match warm-neutral system in `oklch`. Load Google Fonts (Inter Tight + a display variant) via `<link>` in `__root.tsx` head.
- **Assets:** Generate placeholder imagery with `imagegen` for: hero slider tiles (3–5), team portraits (3), project covers (5), process imagery (3), show-reel still, awards still, fact card image. Logos rendered as simple SVG monograms.
- **Components:** Reusable `PillButton`, `SectionEyebrow`, `Marquee` (CSS keyframes), `ProjectCard`, `TeamCard`, `PricingCard`, `StatTile`.
- **Animation:** `framer-motion` (already common; install if missing) for entrance fades and scroll-driven transforms. Marquees via pure CSS `@keyframes`.
- **SEO:** Per-route `head()` with title "Agenzo — Design Agency", meta description, OG tags.
- **No backend** required.

## Out of scope

- Sub-routes (Project detail, Blog, Contact pages) — nav links scroll to sections or are placeholders.
- CMS, forms submission, dark mode toggle.
- Exact reproduction of source images/logos (will use generated equivalents).
