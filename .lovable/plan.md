## Reduce High Performance Card Graphic Size by 20%

### What
Reduce the size of the 3D chess graphic inside the "High Performance" card in the Quality section by 20%, while keeping the other two cards (Seamless Integration, Exceptional Security) unchanged.

### How
1. Add a per-card `imgClass` property to the `QUALITIES` array entries.
2. Keep existing `w-56 md:w-60` for "Seamless Integration" and "Exceptional Security".
3. Use `w-44 md:w-48` (20% smaller) for "High Performance".
4. Update the shared card renderer to use `q.imgClass` (or a fallback) on the `<img>` element.

### Files
- `src/components/site/HomeBelowFold.tsx` — add `imgClass` to `QUALITIES` entries and apply it in `QualitySection` renderer.

### Why
Currently all three quality cards share the same hardcoded `w-56 md:w-60` image class. To target only the "High Performance" card, we need a per-item size override.