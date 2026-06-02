## Plan: Fix hero background video

The hero `<video>` element is already wired in `src/routes/index.tsx` (lines 78-86) using `heroVideo.url` from `src/assets/hero-bg.mp4.asset.json`. The likely issue is that the previously uploaded 100MB asset failed to serve, so the video URL returns nothing and nothing renders behind the headline.

### Steps

1. Delete the existing asset pointer `src/assets/hero-bg.mp4.asset.json` (removes the broken CDN entry).
2. Re-upload the newly attached MP4 via the Lovable Assets CLI from `/mnt/user-uploads/fluid-mixing-creates-unique-abstract-background-2025-12-17-10-11-59-utc-2.mp4`, writing the new pointer back to `src/assets/hero-bg.mp4.asset.json`. No code change needed since `index.tsx` already imports that path.
3. Add `preload="auto"` and a `poster` fallback color via a wrapping `bg-black` on the section so something is visible while the video buffers.
4. Verify in the preview that the network request for the new asset URL returns 200 and the video plays muted on loop behind the H1.

No other files change.
