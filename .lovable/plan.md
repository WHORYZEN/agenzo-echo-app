## Goal
Finish the Agenzo motion parity pass by applying the three remaining template patterns — marquee edge masking, hover-lift across cards, and per-character entrances — consistently to every section, so timings feel identical site-wide.

## What's already in place
- `marquee-mask` exists and is used on the hero slider + `PartnerMarquee`.
- Per-character entrance exists on the Hero `DigiFrenzy` headline and `SiteFooter` "Let's talk".
- Hover lift exists on Team, Process, and Pricing cards.

## Gaps to close

### 1. Marquee masking — apply everywhere a track runs
- `src/routes/index.tsx` Hero slider already has it. Confirm.
- `PartnersGrid` is a static grid; not a marquee → skip.
- No other marquees today. Action: harden `.slider-track` so it inherits the same 6% fade as `.marquee-mask` by composing the mask on the wrapper (already done) — verify visually only.

### 2. Per-character entrance — extend beyond hero/footer
Create a shared `<SplitText />` helper in `src/lib/motion.ts` (or new `src/components/site/SplitText.tsx`) wrapping the existing per-letter stagger (y 80→0, opacity 0→1, 0.9s `easeOut`, stagger 0.04–0.05s, `viewportOnce`). Apply to:
- `SelectedWork` H2 "Selected Work."
- `Testimonials` H2 "Trusted By Many."
- `Pricing` H2 "Pricing."
- `pricing.tsx` H1 "Our Pricing"
- `services.tsx` H1 "Our Services"
- `ShowReel` overlay words "Every Pixel" + "Crafted"

Smaller section headers driven by `SectionHeader` keep their current `fadeUp` (mass entrance), to preserve hierarchy — only the largest display H1/H2s get per-character.

### 3. Hover lift — apply to remaining card surfaces
Add `whileHover={{ y: -6 }}` with `transition={{ duration: 0.5, ease: easeOut }}` and a subtle shadow tween to:
- `WhyChooseUs` glass copy card + both `StatTile`s
- `FactSection` image card (lift -4)
- `Testimonials` large quote card + each small testimonial card
- `StatsTrio` `BigStat` cards
- `PartnersGrid` cells (lift -4, no shadow — keeps grid feel)
- `Achievements` image card + each award row (already has bg hover; add subtle `x: 4` on row hover for parity with Agenzo)
- `ShowReel` outer card (scale 1.01 on hover)
- `services.tsx` service rows (lift -6)

Use a tiny shared helper object `hoverLift` in `src/lib/motion.ts` to keep timings identical (`{ y: -6, transition: { duration: 0.5, ease: easeOut } }`) and a `hoverLiftSm` variant (`y: -4`).

## Files
- edit `src/lib/motion.ts` — export `hoverLift`, `hoverLiftSm`
- new `src/components/site/SplitText.tsx` — reusable per-character entrance
- edit `src/routes/index.tsx` — wire SplitText to listed H2s, apply hover lifts
- edit `src/routes/services.tsx` — SplitText on H1, hover lift on rows
- edit `src/routes/pricing.tsx` — SplitText on H1

## Out of scope
No new sections, copy, colors, or layout/spacing changes. Motion timings stay on the existing `easeOut [0.22, 1, 0.36, 1]` curve and `durations` scale already defined in `src/lib/motion.ts`.