## Plan

Replace the "3D Animation & Branding" image (currently `src/assets/project-4.jpg`) on the Services page with the newly uploaded image.

### Steps
1. Upload the new image to Lovable Assets CDN via `lovable-assets create` from `/mnt/user-uploads/900931100475105883.jpeg`, writing pointer to `src/assets/3d-branding.jpeg.asset.json`.
2. In `src/routes/services.lazy.tsx`:
   - Replace the `import s4 from "@/assets/project-4.jpg"` with `import s4 from "@/assets/3d-branding.jpeg.asset.json"`.
   - Update the `img: s4` reference to use `s4.url`.

No other sections or pages are touched.
