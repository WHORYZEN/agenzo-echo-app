## Plan

Add the uploaded 3D shield graphic (background removed) to the "Exceptional Security" card in the Quality section.

### Steps
1. Run `imagegen--edit_image` on the uploaded shield with `transparent_background: true` → `src/assets/quality-shield.png`.
2. Upload via `lovable-assets` to create `.asset.json`, remove local PNG.
3. In `src/components/site/HomeBelowFold.tsx`: import the new asset, add `img: qualityShield.url` to the "Exceptional Security" entry in `QUALITIES`. Existing render handles the overlay.

### Preserved
Other cards, layout, gradient, hover unchanged.
