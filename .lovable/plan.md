### Make Quality Cards Navigate to Services Page

**What:** Convert the three cards in the "Why Our Products" (`QualitySection`) from static `<motion.div>` elements into clickable links that take the visitor to `/services`.

**Where:** `src/components/site/HomeBelowFold.tsx` — the `QualitySection` component.

**How:**
1. Import `Link` from `@tanstack/react-router`.
2. Wrap each card in the `QUALITIES.map()` loop with `<Link to="/services">`.
3. Ensure the `motion.div` hover lift animation and layout still work correctly inside the link wrapper.
4. Keep the arrow button and chip styling unchanged.

**No other changes.** The services page already exists at `src/routes/services.tsx`.