import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Box, Film, Palette, Sparkles } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, hoverLift, easeOut } from "@/lib/motion";

import hero from "@/assets/3d-branding.jpeg.asset.json";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/services/3d-animation-branding")({
  component: ThreeDBrandingPage,
});

const FEATURES = [
  {
    icon: Box,
    title: "3D Product Rendering",
    desc: "Photoreal renders that showcase your product from every angle — built to sell, scale, and ship across every channel.",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    desc: "Kinetic typography, explainer reels, and brand films that turn complex ideas into scroll-stopping stories.",
  },
  {
    icon: Palette,
    title: "Brand Identity Systems",
    desc: "Logos, type, color, and guidelines engineered as a system — consistent across every surface and team.",
  },
  {
    icon: Sparkles,
    title: "Visual Storytelling",
    desc: "Narrative-led campaigns that fuse 3D, motion, and design into experiences people remember.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We unpack your brand, audience, and ambition to define the creative territory." },
  { step: "02", title: "Concept", desc: "Mood boards, style frames, and previs that lock the visual direction before we build." },
  { step: "03", title: "Produce", desc: "Modeling, animation, design, and finishing — crafted by senior artists, reviewed every sprint." },
  { step: "04", title: "Deliver", desc: "Master files, social cutdowns, and brand guidelines packaged for every team and channel." },
];

const TOOLS = ["Blender", "Cinema 4D", "Octane", "Redshift", "After Effects", "Figma", "Illustrator", "Photoshop"];

const STATS = [
  { value: "120+", label: "Brands crafted" },
  { value: "4K", label: "Render quality, every frame" },
  { value: "30+", label: "Award-worthy films shipped" },
];

function ThreeDBrandingPage() {
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
            — Service / Branding
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="tighter font-semibold leading-[0.9]"
            style={{ fontSize: "clamp(2.75rem, 9vw, 9rem)" }}
          >
            <SplitText text="3D Animation & Branding" trigger="mount" accentFrom={3} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We craft immersive 3D worlds and cohesive identity systems — turning brands
            into experiences people can feel, share, and remember.
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
              Brands that <span className="text-brand">move</span> — identities that last.
            </h2>
            <p className="text-muted-foreground mb-4">
              Most studios make assets. We build brand universes. 3D production, motion design,
              and identity systems — engineered as one creative engine that scales with you.
            </p>
            <p className="text-muted-foreground">
              From cinematic product films to full visual identities and launch campaigns, we
              plug in as your creative partner — concept, craft, and delivery in one loop.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={hero.url} alt="3D animation and branding" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            Everything your brand needs to stand out.
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
            From concept to <span className="text-brand">canon</span>.
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
            The best stack for craft.
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
              Ready to build a brand worth remembering?
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
