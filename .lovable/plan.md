## Fix scroll-trigger reveal logic site-wide

### Root cause
In `src/lib/motion.ts`, every section uses:

```ts
export const viewportOnce = { once: true, margin: "-15% 0px" } as const;
```

The `-15% 0px` rootMargin shrinks the IntersectionObserver trigger area by 15% top+bottom. An element only animates after its top edge has scrolled **15% of viewport height past the top of the screen**. Combined with Lenis smooth scrolling, several real-world failures happen:

- Tall sections (`SelectedWork` grid, `QualitySection` 520px cards, `ShowReel` 16/9, `Achievements`) — the section's bounding box is already partially visible long before the trigger fires; animations can pop in late or, on shorter viewports, not at all before the user has scrolled past.
- Short sections near the bottom of the page (`PartnersGrid` text, last `BigStat` tile) — the page may not have enough remaining scroll for the element to cross the -15% line, so the reveal never fires.
- Hash-anchor jumps via Lenis (`#work`, `#pricing`, `#contact`) — the user lands directly on the section; if the top edge is already at viewport top (margin 0), the negative top margin pushes it out of the trigger zone and the section appears already-hidden.

This affects every section in `HomeBelowFold.tsx` (Quality, Why Choose Us, Selected Work, Testimonials, StatsTrio, PartnersGrid, ShowReel, Achievements, ProcessSection, Pricing) plus `FAQ` and `Contact` which import the same constant.

### Fix
Switch the trigger to an `amount`-based threshold that fires reliably regardless of element height or scroll position:

```ts
// src/lib/motion.ts
export const viewportOnce = { once: true, amount: 0.15 } as const;
```

`amount: 0.15` = fire when 15% of the element is intersecting the viewport. This:
- Triggers naturally as the user scrolls a section into view from below.
- Triggers immediately on hash-anchor landings (element is already 100% visible → ≥15%).
- Works for both tall grids and short cards without per-section tuning.
- Keeps `once: true` so animations don't replay on scroll-up.

No other changes are needed — every `motion.*` element in the codebase already references `viewportOnce`, so this single edit propagates everywhere.

### Verification after change
- Scroll from top to bottom of `/` and confirm every section animates in (eyebrow + heading + cards).
- Click `Work`, `Pricing`, `Contact` nav anchors and confirm the destination section reveals (does not stay hidden).
- Hard refresh while scrolled mid-page and confirm sections above the fold are visible (not stuck at opacity 0).

### Files
- `src/lib/motion.ts` — change `viewportOnce` constant only.

### Not changing
- No content, copy, imagery, asset imports, layout, or component structure.
- `SmoothScroll` (Lenis), `PageTransition`, `LazyMount`, all variants (`fadeUp`, `fadeIn`, `scaleIn`, `staggerParent`), hover effects, marquee CSS, and `SplitText` are untouched.
- No per-section overrides added — the single constant fix is sufficient.
