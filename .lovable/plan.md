## Goal
Fix the header on mobile so the logo stays visible, the "Get in touch" CTA collapses into the message icon only, and a hamburger menu button appears next to it that opens the nav links.

## Changes (only `src/components/site/Nav.tsx`)

### 1. Keep logo visible on mobile
- Currently the left logo slot is hidden once `merged` is true (after scrolling 50vh) and the logo only re-appears inside the desktop pill nav (`hidden md:flex`). On mobile that pill never renders, so the logo disappears entirely once scrolled.
- Fix: always render the standalone `Logo` on mobile regardless of `merged`. Keep the existing merge-into-pill behavior on `md+` only.
  - Left slot: `{(!merged || isMobileBreakpoint) && Logo}` — simplest approach: render Logo always on `<md` via a wrapper with `md:hidden` when merged, and the existing logic on `md+`.

### 2. Get in touch button → icon-only on mobile
- Hide the "Get in touch" text on mobile, shrink the pill to just the circular message icon.
- On `md+` keep the current pill (text + icon) unchanged.
- Implementation: wrap the label in `<span class="hidden md:inline">Get in touch</span>`, and adjust the wrapper paddings so on mobile it becomes a compact circular icon button (e.g., `p-1 md:pl-5 md:pr-2 md:py-2`, remove `min-w-[100px]` on mobile).

### 3. Add hamburger menu button (mobile only)
- New button shown only on `<md`, placed to the LEFT of the icon-only Get in touch button (so the right side reads: [hamburger] [message icon]).
- Uses lucide `Menu` icon (and `X` when open), matching the glass-pill aesthetic (same circular `w-9 h-9` foreground-on-background style as the existing message icon, wrapped in a `glass` pill for consistency, or styled as a standalone circular button — will match the message icon styling for visual symmetry).
- Clicking toggles a mobile menu panel.

### 4. Mobile menu panel
- A `framer-motion` animated dropdown that slides/fades down from the header on mobile only.
- Contains the same `menuItems` (Home, Work, Services, Pricing) as vertical links, styled with the existing `hover-tint-blue` treatment, inside a `glass` rounded container with padding.
- Closes on link click and on route change.
- Respects `useReducedMotion` (instant open/close when reduced).

### 5. Technical notes
- Add `useState` for `mobileOpen`; add `Menu`, `X` imports from `lucide-react`.
- Use Tailwind responsive utilities (`md:hidden`, `hidden md:flex`) — no JS breakpoint hook needed.
- No changes outside `Nav.tsx`. No copy, color, or token changes. Desktop layout/behavior untouched.

### Out of scope
- No changes to other components, routes, or the merge-on-scroll animation behavior on desktop.
