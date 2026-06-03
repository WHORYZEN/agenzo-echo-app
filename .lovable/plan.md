## Plan

1. **Make scroll reveals more obvious and reliable**
   - Update the shared motion presets so section headings/cards start visibly offset and fade/slide into place.
   - Keep `once: true`, but use a more forgiving viewport trigger so animations fire as sections enter the screen.

2. **Fix nested heading animation conflicts**
   - `SectionHeader` already animates the heading container, but some headings also contain `SplitText` characters that each have their own `whileInView` observer. I’ll make these nested heading characters animate from the parent trigger instead, so the whole heading visibly reveals when its section enters.

3. **Ensure every homepage card group has a trigger**
   - Review homepage groups such as Quality, Selected Work, Why Choose Us, testimonials, stats, process, pricing, FAQ/contact/footer.
   - Add or adjust `initial="hidden"`, `whileInView="show"`, `viewport={viewportOnce}`, and staggered child variants where missing.
   - Do not change copy, images, links, forms, assets, or layout content.

4. **Preserve Lenis and existing functionality**
   - Leave `SmoothScroll`, routes, links, assets, and content intact.
   - No backend, credentials, auth, forms, or data changes.

5. **Verify after implementation**
   - Use the preview/browser to scroll through homepage sections and confirm headings/cards animate on entry without disappearing or breaking assets.