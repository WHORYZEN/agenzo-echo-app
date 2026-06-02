
## Goal
Improve perceived performance with lazy loading and add consistent Framer Motion animations across every page and shared component.

## Current state
- `framer-motion` is already used on the home page (`src/routes/index.tsx`).
- Images already use `loading="lazy"`.
- `pricing.tsx`, `services.tsx`, and most components under `src/components/site/*` (Nav, Contact, FAQ, SiteFooter, PillButton) have no motion or lazy treatment yet.
- All home sections are bundled together in `index.tsx`, inflating initial JS.

## Plan

### 1. Lazy loading
- Split the home page: keep `Hero` + `Nav` eager; convert all below-the-fold sections (`WhyChooseUs`, `PartnerMarquee`, `FactSection`, `SelectedWork`, `TeamSection`, `Testimonials`, `StatsTrio`, `PartnersGrid`, `ShowReel`, `Achievements`, `ProcessSection`, `Pricing`, `FAQ`, `Contact`, `SiteFooter`) into separate files under `src/components/site/sections/` and load them via `React.lazy` + `Suspense` with a lightweight skeleton fallback.
- Wrap each lazy section in an IntersectionObserver-based wrapper (`<LazyMount>`) so its chunk only fetches when it nears the viewport.
- Convert `pricing.tsx` and `services.tsx` to lazy file routes (`.lazy.tsx`) per TanStack code-splitting guidance; keep critical route config in the base file.
- Keep `loading="lazy"` on images; add `decoding="async"` where missing. Add `preload="metadata"` to the hero video.

### 2. Framer Motion coverage
- Reuse existing tokens in `src/lib/motion.ts` (`fadeUp`, `staggerParent`, `viewportOnce`, etc.).
- Add entry animations (fade/slide/stagger) to `Nav`, `Contact`, `FAQ`, `SiteFooter`, `PillButton` hover/tap.
- Add `whileInView` reveal animations to every section in `pricing.tsx` and `services.tsx` matching the home page rhythm.
- Add a global page transition: wrap `<Outlet />` in `__root.tsx` with `AnimatePresence` + a `motion.div` keyed by route pathname (fade + small y).
- Respect `prefers-reduced-motion` via a small helper that short-circuits variants to identity when reduced motion is set.

### 3. Technical notes
- Use `React.lazy(() => import(...))` per section; each `Suspense` fallback renders a `min-h-[60vh]` placeholder to prevent layout shift.
- `LazyMount` uses `IntersectionObserver` with `rootMargin: "300px"` to start fetching just before the section scrolls in.
- No new dependencies required (`framer-motion` already installed).
- No backend or data changes.

### Out of scope
- No copy, layout, or color changes.
- No changes to hero video behavior beyond `preload` hint.
