## Goal
Replace the existing "Our Crew" / Team section in `src/components/site/HomeBelowFold.tsx` with a new section showcasing product quality, using 3 cards that visually match the attached inspiration.

## New section content

Eyebrow: `— Why Our Products`
Heading: `Built for Quality.` (with accent on last word, matching existing SplitText pattern)

Three cards (in order):

1. **Seamless Integration**
   - Description: "Our products plug into your existing stack effortlessly, connecting tools and workflows without friction."
   - Chip label: `Effortless Connectivity`

2. **Exceptional Security**
   - Description: "We build with security-first principles — protecting your data and users at every layer of the product."
   - Chip label: `Enterprise-grade Security`

3. **High Performance**
   - Description: "Optimized infrastructure and lean code ensure fast load times and a snappy experience at any scale."
   - Chip label: `Speedy Experience`

## Card design (matching inspiration)

Each card:
- Tall rounded card (`rounded-3xl`, ~`aspect-[3/4]` or fixed min-height ~520px)
- Blue gradient background using brand blue (`var(--brand-blue)`) → lighter indigo, top-to-bottom
- White text
- Layout (top → bottom):
  - **Title** (large, bold, tight, 2 lines)
  - **Description** (small, white/70 opacity)
  - **Abstract 3D shape** in the middle area — generated as a transparent PNG asset per card (blob / gear / wave forms) so they visually match the inspiration without copying it
  - **Chip + circular arrow button** at the bottom: pill-shaped glassy chip on left with label, white circular button on right with `ArrowUpRight` icon (rotates 45° on hover, same as current team cards)
- Subtle hover lift (reuse existing `hoverLift` motion)
- Stagger-in animation reusing `staggerParent` + `fadeUp` (same pattern as other sections)

Grid: `md:grid-cols-3 gap-6 md:gap-8`, single column on mobile.

## Implementation steps

1. Generate 3 abstract 3D shape images (transparent PNG, blue/indigo tones) via `imagegen--generate_image` and save under `src/assets/`:
   - `quality-integration.png` — flowing liquid blob
   - `quality-security.png` — 3D gear / shield form
   - `quality-performance.png` — concentric speed rings / swoosh
2. In `src/components/site/HomeBelowFold.tsx`:
   - Remove `TEAM` array, `TeamSection` component, and the `team1/team2/team3` imports.
   - Add a new `QUALITIES` array and `QualitySection` component implementing the card design above.
   - Replace the `<TeamSection />` usage in the page with `<QualitySection />`.
3. Keep all existing sections, styling tokens, and motion helpers intact. No changes to global styles required (uses existing `--brand-blue` and `glass` utilities).

## Technical notes

- Reuses existing motion helpers: `staggerParent`, `fadeUp`, `viewportOnce`, `hoverLift`, `SplitText`, `PillButton`-style chip via inline `glass rounded-full` span.
- Cards link to `#` (non-navigating) since there are no target pages — arrow button is decorative, matching the inspiration.
- No new dependencies, no route changes, no backend work.
