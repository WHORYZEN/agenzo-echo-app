## Add Chess Graphic to High Performance Card

### What
Add the uploaded blue chess piece image (with background removed → transparent PNG) to ONLY the "High Performance" card in the Quality section on the home page. The other two cards (Seamless Integration, Exceptional Security) remain text-only as they are now.

### Steps
1. Use `imagegen--edit_image` with `transparent_background: true` on the uploaded chess image to produce a transparent PNG at `src/assets/quality-chess.png`.
2. Upload it via `lovable-assets` to create `src/assets/quality-chess.png.asset.json`, remove the local PNG.
3. In `src/components/site/HomeBelowFold.tsx`:
   - Import the new asset.
   - In the QUALITIES array, add an `img` field only on the "High Performance" entry.
   - In the card render, conditionally render an `<img>` overlay (absolute-positioned, right side of the card) when `img` is present.
4. Update `.lovable/plan.md` to reflect this addition.

### Preserved
- Other two cards untouched (no graphics).
- Card layout, gradient, hover, click-through behavior unchanged.
