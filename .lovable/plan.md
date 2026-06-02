## Goal
Transform the floating nav so the top-left logo merges into the centered menu pill once the user scrolls past ~50% of the hero. The expanded pill (logo + menu) stays locked until the user scrolls back into the hero.

## Behavior
- **In hero (scrollY < 50% of viewport hero height):** current state — logo sits top-left, menu pill centered, CTA right.
- **Past threshold:** logo animates from its top-left position toward the center pill; pill width expands leftward with a springy "bubble" morph to absorb the logo on its left side; logo settles inside the pill. Pill remains in this merged state for the rest of the page.
- **Scrolling back into hero:** reverse the morph — logo detaches and returns to top-left, pill contracts back to menu-only.

## Implementation (frontend only)
1. **Nav component** (`src/routes/index.tsx` or extract `src/components/sections/Nav.tsx`):
   - Track scroll with framer-motion `useScroll` + `useTransform`, or `useMotionValueEvent` against the hero section ref.
   - Compute `merged` boolean when `scrollY > heroHeight * 0.5`.
2. **Shared layout animation** using framer-motion `layout` + `layoutId="agenzo-logo"`:
   - Render the logo in two possible slots: (a) top-left fixed wrapper when `!merged`, (b) inside the pill's left side when `merged`. Framer Motion's `layoutId` handles the smooth position/size morph automatically.
3. **Pill bubble morph:**
   - Wrap pill in `motion.div` with `layout` and a spring transition (`type: "spring", stiffness: 260, damping: 26`) for the elastic bubble feel.
   - Animate `paddingLeft`, `gap`, and add a subtle `scale`/blur on the logo entry (`initial={{scale:0.6, opacity:0}} animate={{scale:1, opacity:1}}`) for the bubble pop.
   - Add a tiny backdrop-blur + box-shadow tween to emphasize the merge.
4. **State lock:** no special lock needed — `merged` is purely derived from scroll position, so reversing scroll naturally reverses the morph. (User asked it to "remain constant until back to hero" — derived state already satisfies this.)
5. **Accessibility:** keep nav items in the same DOM order; respect `prefers-reduced-motion` by snapping instead of springing.

## Out of scope
- No changes to hero content, other sections, colors, or fonts.
- No new routes, no backend.
