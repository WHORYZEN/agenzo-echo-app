Add external URLs to all four Selected Work cards so they become clickable links that open in a new tab.

- In `src/components/site/HomeBelowFold.tsx`:
  1. Add a `link` field to each object in the `PROJECTS` array, mapping in order:
     - Card 1 (n: "03.") → `https://myai500.com/`
     - Card 2 (n: "02.") → `https://www.mynxsoftwares.com/`
     - Card 3 (n: "01.") → `https://www.jourilaw.com/`
     - Card 4 (n: "04.") → `https://www.myca500.com/`
  2. Change the existing `<motion.a href="#">` to `<motion.a href={p.link} target="_blank" rel="noopener noreferrer">` so each card navigates to its respective URL in a new tab.