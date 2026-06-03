import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Search, KeyRound, FileText, Gauge } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, hoverLift, easeOut } from "@/lib/motion";

import hero from "@/assets/seo-performance.jpeg.asset.json";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/services/seo-performance")({
  component: SeoPerformancePage,
});

const FEATURES = [
  {
    icon: Search,
    title: "Technical SEO Audits",
    desc: "Deep crawl audits that uncover indexation, schema, and architecture issues holding your rankings back.",
  },
  {
    icon: KeyRound,
    title: "Keyword Research & Strategy",
    desc: "High-intent keyword mapping that targets the searches your buyers are actually making.",
  },
  {
    icon: FileText,
    title: "On-Page Optimization",
    desc: "Content, metadata, and internal linking tuned to win SERPs and convert clicks into customers.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    desc: "Performance engineering that lifts LCP, INP, and CLS — faster sites that Google and users reward.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We benchmark your site, competitors, and search landscape to map the opportunity." },
  { step: "02", title: "Audit", desc: "A full technical, on-page, and performance audit with a prioritized roadmap." },
  { step: "03", title: "Optimize", desc: "Hands-on fixes — schema, speed, content, links — shipped in tight sprints." },
  { step: "04", title: "Report", desc: "Transparent monthly dashboards tracking rankings, traffic, and conversions." },
];

const TOOLS = ["Google Search Console", "GA4", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights", "Lighthouse", "Schema Markup"];

const STATS = [
  { value: "Top 3", label: "Avg. ranking position" },
  { value: "200%+", label: "Organic traffic lift" },
  { value: "40+", label: "Sites optimized" },
];

function SeoPerformancePage() {
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
            — Service / Optimization
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="tighter font-semibold leading-[0.9]"
            style={{ fontSize: "clamp(2.75rem, 9vw, 9rem)" }}
          >
            <SplitText text="SEO & Performance" trigger="mount" accentFrom={6} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We engineer search visibility and site speed in one motion — winning rankings,
            earning clicks, and turning fast pages into pipeline.
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
              SEO that <span className="text-brand">compounds</span> — performance that converts.
            </h2>
            <p className="text-muted-foreground mb-4">
              Most agencies chase rankings. We chase revenue. Our SEO program blends technical
              engineering, editorial strategy, and Core Web Vitals work into one compounding system.
            </p>
            <p className="text-muted-foreground">
              From technical audits to content roadmaps and page-speed engineering, we plug into
              your team as your search growth engine — strategy, execution, and reporting in one loop.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={hero.url} alt="SEO and performance optimization" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            Everything you need to rank.
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
            From audit to <span className="text-brand">authority</span>.
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

        {/* Tools */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Tools we use</motion.div>
          <motion.h2 variants={fadeUp} className="tighter font-semibold leading-[0.95] mb-10" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            The best stack for search.
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {TOOLS.map((p) => (
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
              Ready to own the search results?
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
