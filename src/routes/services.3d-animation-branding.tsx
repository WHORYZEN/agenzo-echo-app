import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/3d-animation-branding")({
  head: () => ({
    meta: [
      { title: "3D Animation & Branding — DIGIFRENZY." },
      {
        name: "description",
        content:
          "Immersive 3D visuals and cohesive brand identity systems that set you apart from the competition and leave a lasting impression.",
      },
      { property: "og:title", content: "3D Animation & Branding — DIGIFRENZY." },
      {
        property: "og:description",
        content:
          "3D product rendering, motion graphics, brand identity systems, and visual storytelling by DIGIFRENZY.",
      },
    ],
  }),
});
