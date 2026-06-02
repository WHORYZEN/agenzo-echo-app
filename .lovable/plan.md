# Agenzo-style motion + layout polish

Mirror the feel of agenzo.framer.ai: long, gentle entrances, soft easing, stagger inside sections, subtle hover lifts. Tighten section rhythm and spacing.

## Motion language (applied consistently)

Centralize tokens in a new `src/lib/motion.ts`:

- `easeOut = [0.22, 1, 0.36, 1]` (Framer's "ease-out-quart" — matches Agenzo's gentle settle)
- `durations`: sm 0.5s, md 0.8s, lg 1.1s
- Variants:
  - `fadeUp` — opacity 0→1, y 40→0, duration `lg`, ease `easeOut`
  - `fadeIn` — opacity 0→1, duration `md`
  - `scaleIn` — opacity 0→1, scale 0.96→1, duration `md`
  - `staggerParent` — `staggerChildren: 0.08`, `delayChildren: 0.05`
- Default viewport: `{ once: true, margin: "-15% 0px" }` (triggers earlier, plays only once like Agenzo)

Replace ad-hoc `initial/animate/whileInView` props across sections with these variants so every section breathes at the same cadence.

## Per-section interactions

- **Hero**: headline words animate in with stagger (split per word), eyebrow + CTA fade up after, hero image scales from 1.04 → 1 over 1.2s. Slider keeps its CSS marquee but slows from 35s → 50s and adds left/right mask fade.
- **Nav merge**: keep existing logic; soften spring to `stiffness: 200, damping: 28, mass: 1` so the pill morph reads slower/smoother.
- **WhyChooseUs / FactSection / ShowReel / Achievements**: large display numbers fade-up; supporting copy staggers in after.
- **PartnerMarquee / PartnersGrid**: marquee slowed; grid logos `staggerChildren: 0.04`, scale-in.
- **SelectedWork**: cards animate with `fadeUp` + stagger; on hover, image `scale: 1.04` over 0.7s with `easeOut`, overlay arrow translates up-right 4px.
- **TeamSection**: 3 cards stagger; hover lifts card 6px and reveals role label.
- **Testimonials**: each quote fades + slides 30px from left, staggered 0.12s.
- **StatsTrio**: numbers count-up via `motion` `animate` on view; labels fade after.
- **ProcessSection**: vertical line draws (`pathLength 0→1`, 1.4s) as section enters; step cards stagger.
- **Pricing**: cards stagger; featured card scales 1.02 with soft shadow lift.
- **FAQ**: keep accordion; add subtle row hover (background tint).
- **FooterCTA**: giant "Let's talk" letters animate per-character on view (stagger 0.04s, y 60→0).

## Layout & spacing pass

- Standardize section vertical rhythm: `py-28 md:py-32` (was inconsistent 20/24/28). FooterCTA stays `pt-28 pb-8`.
- Horizontal padding: `px-6 md:px-10` everywhere for breathing room on desktop.
- Max content width: wrap each section's inner in `mx-auto max-w-[1400px]` so 1172px viewport feels intentional and ultra-wide stays controlled.
- Grid gaps: bump from `gap-5` → `gap-6 md:gap-8` on cards (Pricing, SelectedWork, Team).
- Section headers: unify to `eyebrow` + 80-160px display heading with `mb-16` to body.
- Hero: reduce `pt-32` → `pt-28` and let slider sit closer; add 96px bottom spacer before WhyChooseUs.
- Pricing: equalize card heights via `flex` + `mt-auto` on CTA so prices align.
- Testimonials: switch from current grid to 2-col on md, 3-col on xl with consistent gap.
- FAQ: tighten row padding `py-6` → `py-5`, header column sticky on md+.
- Footer CTA letters: kerning `-0.08em` (was -0.06) and clamp upper bound 16rem → 14rem so it doesn't overflow on 1172px.

## Files touched

- New: `src/lib/motion.ts` (tokens + variants)
- Edit: `src/routes/index.tsx` — swap motion props for variants, apply spacing tokens
- Edit: `src/routes/services.tsx`, `src/routes/pricing.tsx` — same variants + spacing
- Edit: `src/components/site/Nav.tsx` — softer spring
- Edit: `src/components/site/FAQ.tsx` — sticky header col, tightened rows, hover tint
- Edit: `src/components/site/SiteFooter.tsx` — per-char animation on "Let's talk"
- Edit: `src/styles.css` — slow marquee keyframes (40s → 60s), add `.section` utility (`py-28 md:py-32 px-6 md:px-10`), add `.container-x` (`mx-auto max-w-[1400px]`), add marquee mask gradient utility

## Out of scope

- No content/copy changes, no new images, no route additions, no token (color/font) changes.
