## Plan: Looping video background for Hero

1. Upload the attached MP4 to Lovable Assets:
   - `lovable-assets create --file /mnt/user-uploads/fluid-mixing-creates-unique-abstract-background-2025-12-17-10-11-59-utc.mp4 --filename hero-bg.mp4 > src/assets/hero-bg.mp4.asset.json`

2. In `src/routes/index.tsx` Hero (lines 78-85):
   - Replace the `motion.div` image background with a `<video>` element using the asset URL.
   - Attributes: `autoPlay`, `loop`, `muted`, `playsInline`, no `controls`; classes `absolute inset-0 -z-10 w-full h-full object-cover`.
   - Keep the `bg-background/30` overlay div for text legibility.
   - Remove the now-unused `heroBg` import if no longer referenced.

No other files change.
