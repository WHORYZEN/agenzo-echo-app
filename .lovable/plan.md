## Plan

Add the uploaded 3D gear graphic (background removed) to the "Seamless Integration" card in the Quality section on the home page, mirroring how the chess graphic is rendered on the "High Performance" card.

### Steps

1. Run `imagegen--edit_image` on `user-uploads://Microsoft_s_Flip_3D_Branding.jpeg` with `transparent_background: true`, saving to `src/assets/quality-gear.png`.
2. Upload via `lovable-assets` to create `src/assets/quality-gear.png.asset.json`, then remove the local PNG.
3. In `src/components/site/HomeBelowFold.tsx`:
   - Import the new asset.
   - Add `img: qualityGear.url` to the "Seamless Integration" entry in the `QUALITIES` array.
   - No render changes needed — the existing `{q.img && <img ... />}` overlay already handles it identically to High Performance.

### Preserved
- Exceptional Security card untouched.
- High Performance chess graphic untouched.
- Card layout, gradient, sizing, hover, and link behavior unchanged.
