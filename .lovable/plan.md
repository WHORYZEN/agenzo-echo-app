## Problem
On mobile, the header logo renders directly over the dark hero video. The image is inverted (`filter: invert(1)`), turning the white logo black — which disappears against the dark hero background. On desktop it's readable because the logo sits inside the `glass` pill which provides a light backdrop.

## Fix (only `src/components/site/Nav.tsx`)

1. Remove the unconditional `filter: invert(1)` from the `<img>` inside `Logo`. Keep the logo in its natural white form so it's visible over the dark hero on mobile.
2. Apply the invert only when the logo is rendered inside the desktop glass pill (i.e. the `merged` state on `md+`), where the background is light. Simplest implementation: make `Logo` accept an `invert` boolean, render `<div className="md:hidden">{Logo(false)}</div>` and `<div className="hidden md:block">{!merged && Logo(false)}</div>` for the left slot (over hero = white), and `Logo(true)` inside the merged pill.
3. No other changes — desktop appearance, hamburger, CTA, and mobile menu remain untouched.

## Out of scope
Any change to the merge-on-scroll behavior, the hero, or other components.