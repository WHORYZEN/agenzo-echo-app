## Restore Lenis smooth scroll + scroll animations

### What's wrong
The Framer Motion animations (fadeUp, staggerParent, SplitText, hover lifts, marquees, page transition) are all still wired up in `HomeBelowFold.tsx`, `index.tsx`, `Nav.tsx`, etc. However the Lenis-powered inertia scrolling is gone because `src/components/SmoothScroll.tsx` exists but is no longer mounted anywhere in the app (grep shows zero usages outside its own definition).

Without Lenis, scroll feels native/abrupt and the `whileInView` reveals fire all at once on fast scroll, which is likely why it reads as "no animations / no transitions".

### Fix
1. In `src/routes/__root.tsx`, import `SmoothScroll` and wrap the existing `<PageTransition><Outlet /></PageTransition>` tree with `<SmoothScroll>...</SmoothScroll>` inside `RootComponent`.
2. Leave `PageTransition`, all Framer Motion variants, marquee CSS, and asset imports untouched.

### Files
- `src/routes/__root.tsx` — add `SmoothScroll` import and wrap `<Outlet />` tree.

### Not changing
- No content, copy, layout, images, or assets are modified.
- No animation variants, durations, or hover behaviors are changed.
- `SmoothScroll.tsx` already respects `prefers-reduced-motion` and handles in-page hash anchors — kept as-is.
