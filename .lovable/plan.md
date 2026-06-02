## Goal
Replace the 3 slideshow images in the hero section's bottom-right marquee with the 4 uploaded images.

## Changes
1. Upload each of the 4 user-uploaded images to Lovable Assets:
   - `user-uploads://Brand_Identity_-_Tote_Bag.jpeg` → `src/assets/hero-slide-tote.jpeg.asset.json`
   - `user-uploads://Furniture_Website_for_Forma_Studio.jpeg` → `src/assets/hero-slide-forma.jpeg.asset.json`
   - `user-uploads://Quantstamp_Social_Media_Templates_for_a_Web3_Security_Brand.jpeg` → `src/assets/hero-slide-quantstamp.jpeg.asset.json`
   - `user-uploads://Some_feel_good_photos_shot_for_the_Taco_Bell-2.jpeg` → `src/assets/hero-slide-tacobell.jpeg.asset.json`

2. In `src/routes/index.tsx`:
   - Replace the `slide1`, `slide2`, `slide3` imports with the 4 new asset JSON imports.
   - Update the `slides` array to use `[tote, forma, quantstamp, tacobell]` (the array is already duplicated in render via `.concat(slides)` for the marquee loop).
   - Use `.url` from each asset pointer when mapping.

## Verification
Visit `/` — the bottom-right marquee in the hero should cycle through the 4 new images.
