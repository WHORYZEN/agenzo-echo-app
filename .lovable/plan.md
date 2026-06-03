## Issue

The Selected Work section contains 4 projects, but only 3 are visible. The container uses `overflow-x-auto` horizontal scroll, so the 4th card sits off-screen to the right and isn't discoverable.

## Plan

Switch the Selected Work layout in `src/components/site/HomeBelowFold.tsx` (around lines 255–293) from a single-row horizontal scroller to a responsive grid so all 4 projects render on screen:

- Replace the `flex gap-6 ... overflow-x-auto ... snap-x` container with a CSS grid:
  - mobile: 1 column
  - md: 2 columns
  - xl: 4 columns
- Remove the per-card fixed widths (`w-[680px]` / `w-[360px]`) and `flex-shrink-0` / `snap-start`, letting cards fill grid tracks.
- Keep card visuals (rounded image, aspect ratio, hover zoom, tags, year) unchanged.

No data, copy, or other sections are touched.
