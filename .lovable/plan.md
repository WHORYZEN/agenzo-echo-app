I found the issue: I did not remove your content/assets, but the current structure makes the below-fold animation bundle lazy-mount only after scrolling near it, and several Framer Motion reveal wrappers are now already rendered in their final state by the time you inspect them. That makes the site feel like the transitions are gone even though many `motion.*` calls still exist.

Plan to restore the earlier feel safely:

1. Keep Lenis smooth/inertia scrolling
   - Keep `SmoothScroll` wrapped around the app.
   - Do not ask for or touch credentials, backend, auth, forms, or private data.

2. Restore reliable section reveal behavior
   - Remove the homepage-level `LazyMount` wrapper around `HomeBelowFold` so all scroll-trigger sections exist in the DOM from page load.
   - Keep `React.lazy`/`Suspense` only if it does not interfere, or replace it with a direct import if needed for immediate animation readiness.
   - This preserves all content, copy, images, links, and assets.

3. Strengthen scroll trigger logic globally
   - Keep `viewportOnce` amount-based, but adjust it to fire earlier and consistently for tall/short sections.
   - Use a small positive threshold such as `amount: 0.08` so cards/headings animate as soon as they enter the viewport.

4. Restore more noticeable transitions/effects
   - Increase the existing reveal movement slightly (`fadeUp` y distance and duration/ease) so sections visibly slide/fade in like before.
   - Preserve existing hover lifts, marquees, hero character animation, SplitText, and page transitions.

5. Verify in preview
   - Scroll from hero to Quality, Work, cards, Pricing, FAQ, and Contact.
   - Confirm sections animate on entry and no assets/content disappear.
   - Check console for runtime errors after the change.