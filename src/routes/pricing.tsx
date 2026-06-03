import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DIGIFRENZY. Digital Agency" },
      { name: "description", content: "Transparent monthly plans for digital marketing, SEO, web development, and 3D branding. Starter, Growth, and Premium." },
      { property: "og:title", content: "Pricing — DIGIFRENZY." },
      { property: "og:description", content: "Plans built for growth — Starter, Growth, and Premium retainers." },
    ],
  }),
});
