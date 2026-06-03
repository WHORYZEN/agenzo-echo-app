import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Code2, Layers, Smartphone, Database } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, hoverLift, easeOut } from "@/lib/motion";

import hero from "@/assets/forma-studio.jpeg.asset.json";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/services/website-development")({
  component: WebsiteDevelopmentPage,
});

const FEATURES = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Bespoke, production-grade web apps engineered around your workflows — fast, accessible, and built to scale.",
  },
  {
    icon: Layers,
    title: "SaaS Software Solutions",
    desc: "End-to-end SaaS platforms with auth, billing, dashboards, and admin tooling shipped on a modern stack.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect interfaces that feel native on every screen — mobile-first, performance-first, no compromises.",
  },
  {
    icon: Database,
    title: "CMS Integration",
    desc: "Headless and traditional CMS setups that empower your team to ship content without touching code.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We dig into your business, users, and goals to define what success looks like." },
  { step: "02", title: "Design", desc: "Wireframes, prototypes, and design systems crafted around conversion and clarity." },
  { step: "03", title: "Build", desc: "Modern frameworks, clean code, and rigorous QA — performance baked in from day one." },
  { step: "04", title: "Launch & Iterate", desc: "We ship, measure, and keep optimizing so your site compounds in value." },
];

const STACK = ["React", "Next.js", "TanStack", "TypeScript", "Tailwind", "Node.js", "Supabase", "Shopify", "Webflow", "Headless CMS"];

const STATS = [
  { value: "100/100", label: "Lighthouse performance" },
  { value: "2x", label: "Avg. conversion lift" },
  { value: "50+", label: "Sites shipped" },
];

function WebsiteDevelopmentPage() {
  const fallback = <div style={{ minHeight: "60vh" }} />;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main className="pt-40 pb-12 px-6 md:px-10">
        {/* Hero */}
        <motion.div
          className="container-x"
          variants={staggerParent(0.08, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">
            — Service / Development
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="tighter font-semibold leading-[0.9]"
            style={{ fontSize: "clamp(2.75rem, 9vw, 9rem)" }}
          >
            <SplitText text="Website Development" trigger="mount" accentFrom={8} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We design and engineer high-performance websites and web apps that look
            sharp, load instantly, and turn visitors into customers.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillButton dark href="/#contact">Get a quote</PillButton>
            <PillButton href="/pricing">View pricing</PillButton>
          </motion.div>
        </motion.div>

        {/* Overview split */}
        <motion.div
          className="container-x mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow text-muted-foreground mb-4">— Overview</div>
            <h2 className="text-4xl md:text-5xl font-semibold tighter leading-[1] mb-6">
              Websites that <span className="text-brand">perform</span> — not just look pretty.
            </h2>
            <p className="text-muted-foreground mb-4">
              Anyone can ship a website. We build digital products: fast, accessible,
              SEO-friendly, and engineered to grow with your business.
            </p>
            <p className="text-muted-foreground">
              From marketing sites to complex SaaS dashboards, we plug into your team
              as a full product squad — design, engineering, and DevOps in one tight loop.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={hero.url} alt="Website development" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>
        </motion.div>

        {/* What's included */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— What's included</motion.div>
          <motion.h2 variants={fadeUp} className="tighter font-semibold leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Everything you need to ship.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={hoverLift}
                transition={{ duration: 0.6, ease: easeOut }}
                className="glass rounded-3xl p-8 md:p-10"
              >
                <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold tight mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Our Process</motion.div>
          <motion.h2 variants={fadeUp} className="tighter font-semibold leading-[0.95] mb-12" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            From idea to <span className="text-brand">launch</span>.
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <motion.div key={p.step} variants={fadeUp} className="glass rounded-3xl p-8">
                <div className="text-5xl font-semibold text-brand mb-6">{p.step}</div>
                <h3 className="text-xl font-semibold tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stack */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Our Stack</motion.div>
          <motion.h2 variants={fadeUp} className="tighter font-semibold leading-[0.95] mb-10" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Built with the best tools for the job.
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {STACK.map((p) => (
              <span key={p} className="glass rounded-full px-6 py-3 text-sm font-medium">{p}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="glass rounded-3xl p-10 text-center">
                <div className="tighter font-semibold leading-none mb-4" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                  {s.value}
                </div>
                <div className="text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA band */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl p-10 md:p-16 bg-foreground text-background flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <h2 className="tighter font-semibold leading-[0.95]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Ready to launch something exceptional?
            </h2>
            <PillButton href="/#contact">Start your project</PillButton>
          </motion.div>
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
