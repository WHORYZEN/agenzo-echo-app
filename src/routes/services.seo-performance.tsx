import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/seo-performance")({
  head: () => ({
    meta: [
      { title: "SEO & Performance — DIGIFRENZY." },
      {
        name: "description",
        content:
          "Data-driven SEO and performance optimization that ranks your brand at the top of search results and keeps your site lightning fast.",
      },
      { property: "og:title", content: "SEO & Performance — DIGIFRENZY." },
      {
        property: "og:description",
        content:
          "Technical SEO, keyword strategy, on-page optimization, and Core Web Vitals — performance SEO by DIGIFRENZY.",
      },
    ],
  }),
});
