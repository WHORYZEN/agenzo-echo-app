## Problem
The `.section` utility in `src/styles.css` uses `padding: 7rem 1.5rem` (mobile) and `8rem 2.5rem` (desktop). With stacked sections, that creates ~256px of empty space between Hero → Why Us and similar transitions, making the page feel sparse.

Many other sections also use `py-20 md:py-24` (Partner marquee, Pricing band, Contact, etc.), which compound the same airy feel.

## Fix

1. **`src/styles.css` — `.section`**
   - Mobile: `padding: 4rem 1.5rem` (was 7rem)
   - Desktop: `padding: 5rem 2.5rem` (was 8rem)

2. **Standardize one-off section paddings on the home page** (`src/routes/index.tsx`) and sibling pages where `py-20 md:py-24` is used as section spacing — change to `py-14 md:py-16`:
   - PartnerMarquee, Pricing band, Contact area, FAQ, Footer top spacer if present
   - Same sweep across `src/routes/pricing.tsx` and `src/routes/services.tsx` for consistency

3. **Internal heading-to-content gaps**: where a SectionHeader is followed by `mb-16` / `mb-14`, reduce to `mb-10`. Limited to the home page Why Us, Works, Testimonials, Pricing, Services list intros.

No color, copy, or layout structure changes — purely vertical rhythm tightening.

## Files touched
- `src/styles.css`
- `src/routes/index.tsx`
- `src/routes/pricing.tsx`
- `src/routes/services.tsx`
