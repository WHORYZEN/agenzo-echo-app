## Remove Card Images from Quality Section

### What
Remove the graphics/images displayed inside the three Quality cards (Seamless Integration, Exceptional Security, High Performance) in the "WHY OUR PRODUCTS" section on the home page.

### Changes
1. **Remove the `<img>` element** inside each Quality card in `HomeBelowFold.tsx` (lines 366-372)
2. **Remove the `img` property** from each object in the `QUALITIES` array (lines 305-324)
3. **Remove unused image imports** (`qualityIntegration`, `qualitySecurity`, `qualityPerformance`) from the top of `HomeBelowFold.tsx` (lines 15-17)

### Preserved
- Card gradient backgrounds, titles, descriptions, chip labels, arrow icons
- Card hover animation (lift effect)
- Click-through to `/services` page
- All other sections untouched