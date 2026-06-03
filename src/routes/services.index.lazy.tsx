import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, hoverLift, easeOut } from "@/lib/motion";

import s1 from "@/assets/quantstamp-social.jpeg.asset.json";
import s2 from "@/assets/seo-performance.jpeg.asset.json";
import s3 from "@/assets/forma-studio.jpeg.asset.json";
import s4 from "@/assets/3d-branding.jpeg.asset.json";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/services/")({
  component: ServicesPage,
});

const SERVICES: { title: string; tag: string; description: string; features: string[]; img: string; href: string }[] = [
  {
    title: "Social Media Marketing",
    tag: "Marketing",
    description: "Scroll-stopping social strategies that build communities, drive engagement, and convert followers into loyal customers across every platform.",
    features: ["Content Strategy & Calendar", "Paid Ad Campaigns", "Community Management", "Analytics & Reporting"],
    img: s1.url,
    href: "/services/social-media-marketing",
  },
  {
    title: "SEO & Performance",
    tag: "Optimization",
    description: "Data-driven SEO and performance optimization that puts your brand at the top of search results and keeps your site lightning fast.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Core Web Vitals"],
    img: s2.url,
    href: "/services/seo-performance",
  },
  {
    title: "Website Development",
    tag: "Development",
    description: "Pixel-perfect, high-performance websites built with modern stacks that deliver exceptional user experiences and drive business results.",
    features: ["Custom Web Applications", "SaaS Software Solutions", "Responsive Design", "CMS Integration"],
    img: s3.url,
    href: "/services/website-development",
  },
  {
    title: "3D Animation & Branding",
    tag: "Branding",
    description: "Immersive 3D visuals and cohesive brand identities that set you apart from the competition and leave a lasting impression.",
    features: ["3D Product Rendering", "Motion Graphics", "Brand Identity Systems", "Visual Storytelling"],
    img: s4.url,
    href: "/#contact",
  },
];

function ServicesPage() {
  const fallback = <div style={{ minHeight: "60vh" }} />;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main className="pt-40 pb-12 px-6 md:px-10">
        <motion.div
          className="container-x"
          variants={staggerParent(0.08, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— What We Do</motion.div>
          <motion.h1 variants={fadeUp} className="tighter font-semibold leading-[0.9]" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            <SplitText text="Our Services" trigger="mount" accentFrom={4} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            End-to-end digital solutions designed to elevate your brand, accelerate growth, and create unforgettable experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="container-x mt-20 space-y-12 md:space-y-16"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={hoverLift}
              transition={{ duration: 0.6, ease: easeOut }}
              onClick={(e) => {
                // navigate when clicking blank areas of the card; PillButton handles its own click
                if ((e.target as HTMLElement).closest("a,button")) return;
                window.location.assign(s.href);
              }}
              className="glass rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 cursor-pointer"
            >
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
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
                  <PillButton dark href={s.href}>Get started</PillButton>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <LazyMount fallback={fallback}>
        <Suspense fallback={fallback}>
          <FAQ />
          <Contact />
          <SiteFooter />
        </Suspense>
      </LazyMount>
    </div>
  );
}
