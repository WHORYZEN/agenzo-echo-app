import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import slideTote from "@/assets/hero-slide-tote.jpeg.asset.json";
import slideForma from "@/assets/hero-slide-forma.jpeg.asset.json";
import slideQuantstamp from "@/assets/hero-slide-quantstamp.jpeg.asset.json";
import slideTacobell from "@/assets/hero-slide-tacobell.jpeg.asset.json";

import { Nav } from "@/components/site/Nav";
import { PillButton } from "@/components/site/PillButton";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, easeOut } from "@/lib/motion";

const HomeBelowFold = lazy(() => import("@/components/site/HomeBelowFold"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIGIFRNEZY. — Digital Agency" },
      {
        name: "description",
        content:
          "DIGIFRNEZY. crafts bold brands, high-performance websites, and data-driven marketing strategies that move the needle.",
      },
      { property: "og:title", content: "DIGIFRNEZY* — Digital Agency" },
      { property: "og:description", content: "Bold brands. High-performance websites. Data-driven marketing." },
    ],
  }),
  component: Home,
});

const slides = [slideTote.url, slideForma.url, slideQuantstamp.url, slideTacobell.url];

function Home() {
  const fallback = <div style={{ minHeight: "60vh" }} />;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <LazyMount fallback={fallback}>
        <Suspense fallback={fallback}>
          <HomeBelowFold />
        </Suspense>
      </LazyMount>
    </div>
  );
}

function Hero() {
  const headline = "DIGIFRENZY.";
  return (
    <section data-hero className="relative isolate min-h-screen pt-40 pb-4 px-6 md:px-10 overflow-hidden bg-background">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-background/30" />

      <div className="container-x relative z-10">
        <h1
          className="text-white tighter font-bold leading-[0.85] mt-16 flex flex-wrap"
          style={{ fontSize: "clamp(4rem, 14vw, 16rem)" }}
        >
          {headline.split("").map((ch, i) => (
            <motion.span
              key={i}
              className={`inline-block ${i >= 4 ? "text-brand" : ""}`}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.1 + i * 0.04 }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-10 items-end"
          variants={staggerParent(0.15, 1.2)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-start gap-4 mb-8">
              <span className="text-2xl">/</span>
              <p className="text-lg max-w-md leading-snug">
                We craft bold brands, high-performance websites, and data-driven marketing strategies that move the
                needle.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <PillButton dark href="#work">
                View Our Work
              </PillButton>
              <PillButton dark href="#contact">
                Contact Us
              </PillButton>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl -mr-12 md:-mr-24 marquee-mask">
            <div className="slider-track">
              {slides.concat(slides).map((s, i) => (
                <div
                  key={i}
                  className="w-[320px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <img src={s} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
