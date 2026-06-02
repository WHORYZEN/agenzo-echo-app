import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — D\ni\ng\ni\nF\nr\ne\nn\nz\ny* Digital Agency" },
      { name: "description", content: "End-to-end digital services: social media marketing, SEO, website development, and 3D animation & branding." },
      { property: "og:title", content: "Services — D\ni\ng\ni\nF\nr\ne\nn\nz\ny*" },
      { property: "og:description", content: "Marketing, SEO, web development, and 3D branding by D\ni\ng\ni\nF\nr\ne\nn\nz\ny*." },
    ],
  }),
});
