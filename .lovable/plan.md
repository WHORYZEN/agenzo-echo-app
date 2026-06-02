## Goal
Use the 4 portfolio images from the Framer Clone Craft project as the "Selected Work" images on the home page, matching them to the existing project titles.

## Mapping
- 01. MYAI500 → `portfolio-myai500.png`
- 02. MYNX Softwares Inc → `portfolio-mynx.png`
- 03. Jouri Law → `portfolio-jouri-law.png`
- 04. MYCA500 → `portfolio-myca500.png`

## Changes
1. Copy the 4 PNGs from Framer Clone Craft `public/` into this project's `/tmp/`, then upload each via `lovable-assets` to create `.asset.json` pointers in `src/assets/`:
   - `src/assets/work-myai500.png.asset.json`
   - `src/assets/work-mynx.png.asset.json`
   - `src/assets/work-jouri.png.asset.json`
   - `src/assets/work-myca500.png.asset.json`
2. In `src/components/site/HomeBelowFold.tsx`:
   - Remove the current `project1`/`project2`/`project3`/`project4` imports (including the previous MYai500 cover override).
   - Import the 4 new asset JSONs and use `.url` for each entry in the `PROJECTS` array.

## Verification
Visit `/` → "Selected Work" section shows the 4 new portfolio images in order.
