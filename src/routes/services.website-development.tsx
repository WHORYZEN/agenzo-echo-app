import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — DIGIFRENZY." },
      {
        name: "description",
        content:
          "Pixel-perfect, high-performance websites and web apps built with modern stacks that deliver exceptional user experiences and drive business results.",
      },
      { property: "og:title", content: "Website Development — DIGIFRENZY." },
      {
        property: "og:description",
        content:
          "Custom web applications, SaaS platforms, responsive sites, and CMS integrations by DIGIFRENZY.",
      },
    ],
  }),
});
