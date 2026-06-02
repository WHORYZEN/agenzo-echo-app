import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

import s1 from "@/assets/project-1.jpg";
import s2 from "@/assets/project-2.jpg";
import s3 from "@/assets/project-3.jpg";
import s4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DigiFrenzy® Digital Agency" },
      { name: "description", content: "End-to-end digital services: social media marketing, SEO, website development, and 3D animation & branding." },
      { property: "og:title", content: "Services — DigiFrenzy®" },
      { property: "og:description", content: "Marketing, SEO, web development, and 3D branding by DigiFrenzy®." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Social Media Marketing",
    tag: "Marketing",
    description: "Scroll-stopping social strategies that build communities, drive engagement, and convert followers into loyal customers across every platform.",
    features: ["Content Strategy & Calendar", "Paid Ad Campaigns", "Community Management", "Analytics & Reporting"],
    img: s1,
  },
  {
    title: "SEO & Performance",
    tag: "Optimization",
    description: "Data-driven SEO and performance optimization that puts your brand at the top of search results and keeps your site lightning fast.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Core Web Vitals"],
    img: s2,
  },
  {
    title: "Website Development",
    tag: "Development",
    description: "Pixel-perfect, high-performance websites built with modern stacks that deliver exceptional user experiences and drive business results.",
    features: ["Custom Web Applications", "SaaS Software Solutions", "Responsive Design", "CMS Integration"],
    img: s3,
  },
  {
    title: "3D Animation & Branding",
    tag: "Branding",
    description: "Immersive 3D visuals and cohesive brand identities that set you apart from the competition and leave a lasting impression.",
    features: ["3D Product Rendering", "Motion Graphics", "Brand Identity Systems", "Visual Storytelling"],
    img: s4,
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main className="pt-40 pb-12 px-6 md:px-10">
        <motion.div className="container-x" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow text-muted-foreground mb-4">— What We Do</div>
          <h1 className="tighter font-semibold leading-[0.9]" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            Our Services<sup className="text-[0.25em] align-super">®</sup>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            End-to-end digital solutions designed to elevate your brand, accelerate growth, and create unforgettable experiences.
          </p>
        </motion.div>

        <div className="container-x mt-20 space-y-12 md:space-y-16">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs text-muted-foreground mb-4">({String(i + 1).padStart(2, "0")})</div>
                <h2 className="text-3xl font-semibold tight mb-2">{s.title}</h2>
                <div className="eyebrow text-muted-foreground mb-6">{s.tag}</div>
                <p className="text-muted-foreground mb-8">{s.description}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <PillButton dark href="/#contact">Get started</PillButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <FAQ />
      <Contact />
      <SiteFooter />
    </div>
  );
}
