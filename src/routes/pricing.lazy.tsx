import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { SplitText } from "@/components/site/SplitText";
import { LazyMount } from "@/components/LazyMount";
import { fadeUp, staggerParent, viewportOnce, easeOut } from "@/lib/motion";

const FAQ = lazy(() => import("@/components/site/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/site/Contact").then((m) => ({ default: m.Contact })));
const SiteFooter = lazy(() => import("@/components/site/SiteFooter").then((m) => ({ default: m.SiteFooter })));

export const Route = createLazyFileRoute("/pricing")({
  component: PricingPage,
});

const PLANS = [
  {
    name: "Starter",
    days: "Monthly",
    price: "₹29,999",
    blurb: "Perfect for startups and small businesses ready to establish a powerful digital presence.",
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Setup (On-page)",
      "Monthly Performance Report",
      "Email Support",
      "4 Graphic Design Requests/week",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Growth",
    days: "Monthly + GST",
    price: "₹49,999",
    blurb: "For growing businesses needing full-spectrum digital marketing and web support.",
    features: [
      "Social Media (4 platforms)",
      "Advanced SEO & Content",
      "Website Maintenance",
      "Paid Ads (Meta + Google)",
      "Weekly Reports & Strategy Calls",
      "10 Graphic Design Requests/week",
    ],
    featured: true,
  },
  {
    name: "Premium",
    days: "Monthly + GST",
    price: "₹89,999",
    blurb: "The complete package for brands serious about dominating their industry online.",
    features: [
      "Full Digital Marketing Suite",
      "3D Animation (4 videos/month)",
      "Priority Support & Dedicated Manager",
      "All Platform Management + PR",
      "Unlimited Graphic Design Requests",
      "Pause or cancel anytime",
    ],
  },
];

function PricingPage() {
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
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Premium Plans</motion.div>
          <motion.h1 variants={fadeUp} className="tighter font-semibold leading-[0.9]" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            <SplitText text="Our Pricing" trigger="mount" accentFrom={4} />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transparent pricing tailored to your brand's needs. Let's find the plan that takes your business to the next level.
          </motion.p>
        </motion.div>

        <motion.div
          className="container-x grid md:grid-cols-3 gap-6 md:gap-8 mt-20"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className={`rounded-3xl p-8 flex flex-col gap-6 border h-full ${
                p.featured
                  ? "bg-foreground text-background border-foreground shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] md:scale-[1.02]"
                  : "glass border-border/60"
              }`}
            >
              <div className="flex justify-between items-center text-xs">
                <span className={p.featured ? "text-background/70" : "text-muted-foreground"}>{p.name}</span>
                <span className={`rounded-full px-3 py-1 ${p.featured ? "bg-background/15" : "bg-background/60"}`}>{p.days}</span>
              </div>
              <div className="font-semibold tighter" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                {p.price}
              </div>
              <p className={`text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>{p.blurb}</p>
              <a
                href="#contact"
                className={`rounded-full px-5 py-3 text-sm font-medium flex items-center justify-between ${
                  p.featured ? "bg-background text-foreground" : "bg-foreground text-background"
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className={`text-xs uppercase tracking-widest ${p.featured ? "text-background/50" : "text-muted-foreground"}`}>
                What's included:
              </div>
              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.featured ? "text-background" : "text-foreground"}`} />
                    {f}
                  </li>
                ))}
              </ul>
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
