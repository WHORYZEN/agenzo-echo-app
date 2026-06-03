import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { CalendarDays, Megaphone, MessagesSquare, BarChart3 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, hoverLift, easeOut } from "@/lib/motion";

import hero from "@/assets/quantstamp-social.jpeg.asset.json";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/services/social-media-marketing")({
  component: SocialMediaMarketingPage,
});

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Content Strategy & Calendar",
    desc: "Channel-tailored content pillars, hooks, and a publishing calendar mapped to your business goals.",
  },
  {
    icon: Megaphone,
    title: "Paid Ad Campaigns",
    desc: "Performance-driven Meta, TikTok, LinkedIn, and YouTube ads with creative testing and budget pacing.",
  },
  {
    icon: MessagesSquare,
    title: "Community Management",
    desc: "On-brand replies, DMs, and conversation moderation that turn audiences into loyal communities.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Transparent monthly dashboards tracking reach, engagement, conversions, and ROAS.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We audit your brand, competitors, and audience to find the real opportunity." },
  { step: "02", title: "Strategize", desc: "A platform-by-platform plan with content pillars, KPIs, and a paid roadmap." },
  { step: "03", title: "Create", desc: "Thumb-stopping creative — reels, statics, carousels, and ad variants — produced in-house." },
  { step: "04", title: "Optimize", desc: "Weekly testing, learning, and iteration to compound results month over month." },
];

const PLATFORMS = ["Instagram", "TikTok", "LinkedIn", "X", "YouTube", "Facebook", "Threads", "Pinterest"];

const STATS = [
  { value: "5x", label: "Avg. engagement lift" },
  { value: "200%+", label: "Follower growth in 6 months" },
  { value: "40+", label: "Brands scaled with us" },
];

function SocialMediaMarketingPage() {
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
            — Service / Marketing
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="tighter font-semibold leading-[0.9]"
            style={{ fontSize: "clamp(2.75rem, 9vw, 9rem)" }}
          >
            <SplitText text="Social Media Marketing" trigger="mount" accentFrom={13} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We build social presences that actually move the needle — combining sharp creative,
            community building, and performance ads to turn scrolls into customers.
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
              Social that <span className="text-brand">stops the scroll</span> — and starts the sale.
            </h2>
            <p className="text-muted-foreground mb-4">
              Most brands post. Few build momentum. We treat social as a system: a steady stream of
              creative that earns attention, ads that compound performance, and conversations that
              turn followers into advocates.
            </p>
            <p className="text-muted-foreground">
              Whether you're launching a brand or scaling a category leader, we plug into your team
              as your social engine — strategy, creative, and media in one tight loop.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={hero.url} alt="Social media marketing" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            Everything you need to grow.
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
            From brief to <span className="text-brand">breakthrough</span>.
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

        {/* Platforms */}
        <motion.div
          className="container-x mt-28"
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Platforms we manage</motion.div>
          <motion.h2 variants={fadeUp} className="tighter font-semibold leading-[0.95] mb-10" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Wherever your audience scrolls.
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
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
              Ready to dominate the feed?
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
