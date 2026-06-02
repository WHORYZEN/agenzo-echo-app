## Goal
Replace the image in the "Why DigiFrenzy" section with the uploaded blue VR portrait.

## Changes
1. Upload `user-uploads://743586588516943616.jpeg` to Lovable Assets as `src/assets/why-digifrenzy.jpeg.asset.json`.
2. In `src/components/site/HomeBelowFold.tsx`:
   - Import the new asset JSON.
   - Replace `src={factCar}` (line 72, inside `WhyChooseUs`) with the new asset URL.
   - Leave the existing `factCar` import in place if it's used elsewhere; otherwise remove it.

## Verification
Check the `/` route preview — the left tile of the "Why DigiFrenzy" section should show the blue portrait.