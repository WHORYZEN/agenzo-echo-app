import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing — DIGIFRENZY." },
      {
        name: "description",
        content:
          "Scroll-stopping social media strategies that build communities, drive engagement, and convert followers into loyal customers across every platform.",
      },
      { property: "og:title", content: "Social Media Marketing — DIGIFRENZY." },
      {
        property: "og:description",
        content:
          "Content, paid ads, community, and analytics — full-funnel social media marketing by DIGIFRENZY.",
      },
    ],
  }),
});
