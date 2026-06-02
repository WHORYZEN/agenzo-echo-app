import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Plus, MessageSquare, Check, Play } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import factCar from "@/assets/fact-car.jpg";
import flower from "@/assets/flower.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import showreel from "@/assets/showreel.jpg";
import award from "@/assets/award.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import testimonialImg from "@/assets/testimonial.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const slides = [slide1, slide2, slide3, slide1, slide2, slide3, slide1, slide2];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <WhyChooseUs />
      <PartnerMarquee />
      <FactSection />
      <SelectedWork />
      <TeamSection />
      <Testimonials />
      <StatsTrio />
      <PartnersGrid />
      <ShowReel />
      <Achievements />
      <ProcessSection />
      <Pricing />
      <FooterCTA />
    </div>
  );
}

/* ============ NAV ============ */
function Nav() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [merged, setMerged] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = (typeof window !== "undefined" ? window.innerHeight : 800) * 0.5;
    setMerged(y > threshold);
  });

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 26, mass: 0.9 };

  const Logo = (
    <motion.a
      layoutId="agenzo-logo"
      href="#"
      className="text-[22px] font-semibold tighter leading-none whitespace-nowrap"
      transition={spring}
    >
      Agenzo<sup className="text-[10px] ml-0.5">®</sup>
    </motion.a>
  );

  const menuItems = [
    { l: "Studio" },
    { l: "Project", n: "12" },
    { l: "Service" },
    { l: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <div className="flex items-center justify-between">
        {/* Left slot — holds logo only when not merged */}
        <div className="min-w-[100px] flex items-center">
          {!merged && Logo}
        </div>

        {/* Center pill — absorbs logo with bubble morph when merged */}
        <motion.nav
          layout
          transition={spring}
          className="hidden md:flex glass rounded-full py-2 items-center gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          style={{ paddingLeft: merged ? 18 : 8, paddingRight: 8 }}
        >
          {merged && (
            <>
              {Logo}
              <span className="mx-2 h-5 w-px bg-foreground/15" />
            </>
          )}
          {menuItems.map((it) => (
            <a
              key={it.l}
              href="#"
              className="px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/70 transition-colors flex items-center gap-1"
            >
              {it.l}
              {it.n && <sup className="text-[10px] text-muted-foreground">({it.n})</sup>}
            </a>
          ))}
        </motion.nav>

        <button className="glass rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-w-[100px] justify-end">
          Meet
          <span className="w-9 h-9 bg-foreground text-background rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </span>
        </button>
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-8 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-background/30" />

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 text-xs">
        <span className="rotate-180 [writing-mode:vertical-rl] tracking-widest">SCROLL DOWN</span>
        <div className="w-px h-32 bg-foreground/30" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-white tighter font-bold leading-[0.85] mt-16"
        style={{ fontSize: "clamp(5rem, 18vw, 20rem)" }}
      >
        Agenzo<sup className="text-[0.3em] align-super">®</sup>
      </motion.h1>

      <div className="mt-4 flex items-center gap-3 text-xs font-medium tracking-[0.2em]">
        <span className="w-8 h-px bg-foreground" />
        DESIGN AGENCY
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <div className="flex items-start gap-4 mb-8">
            <span className="text-2xl">/</span>
            <p className="text-lg max-w-md leading-snug">
              We craft futuristic experiences where technology, emotion, and visual storytelling merge into one seamless flow.
            </p>
          </div>
          <div className="flex gap-3">
            <PillButton dark>View Our Work</PillButton>
            <PillButton dark>Connect Us</PillButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl -mr-12 md:-mr-24">
          <div className="slider-track">
            {slides.concat(slides).map((s, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden flex-shrink-0"
              >
                <img src={s} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillButton({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`group rounded-full px-6 py-3.5 text-sm font-medium flex items-center gap-3 transition-all ${
        dark ? "bg-foreground text-background hover:bg-foreground/90" : "bg-white text-foreground hover:bg-white/90"
      } ${className}`}
    >
      {children}
      <span className="w-7 h-7 bg-background text-foreground rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
    </button>
  );
}

/* ============ WHY CHOOSE US / TEAM INTRO ============ */
function WhyChooseUs() {
  return (
    <section className="px-6 py-28">
      <div className="eyebrow text-muted-foreground mb-6">— Why choose us</div>
      <h2
        className="tighter font-semibold leading-[0.95] mb-16"
        style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
      >
        Meet the Minds
        <br /> Behind the Work.
      </h2>

      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-7 rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px]">
          <img src={factCar} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="glass rounded-3xl p-8 flex-1">
            <p className="text-xl leading-snug tight">
              At <strong>Agenzo® Studio</strong>, we bring together designers, strategists, and makers to craft bold, thoughtful digital experiences made with care and curiosity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatTile
              label="Over Fields"
              value="100+"
              right={
                <div className="flex -space-x-2">
                  {[avatar1, avatar2, avatar3].map((a, i) => (
                    <img
                      key={i}
                      src={a}
                      className="w-9 h-9 rounded-full border-2 border-background object-cover"
                      alt=""
                      loading="lazy"
                    />
                  ))}
                </div>
              }
            />
            <StatTile label="Countries Over World" value="12" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({
  label,
  value,
  right,
}: {
  label: string;
  value: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="glass rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-5xl font-semibold tighter">{value}</div>
        {right}
      </div>
    </div>
  );
}

/* ============ PARTNER MARQUEE ============ */
const LOGOS = [
  "FORMA", "OBJECT", "LUMEN", "AXIOM", "NORTH/", "VANTAGE", "ECHO®", "OBSCURA",
];
const LOGOS2 = ["NEBULA", "PARALLAX", "MERIDIAN", "ORBIT", "VECTOR", "FIELD", "MONOLITH", "STRATA"];

function PartnerMarquee() {
  return (
    <section className="py-20 border-y border-border/60">
      <div className="flex items-center gap-8 mb-8 px-6">
        <div className="eyebrow text-muted-foreground">— Trusted Partner</div>
        <div className="ml-auto">
          <PillButton dark>Choose Plan</PillButton>
        </div>
      </div>

      <div className="space-y-6 overflow-hidden">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="text-3xl font-semibold tighter mx-10 opacity-70">
              {l}
            </div>
          ))}
        </div>
        <div className="marquee-track-reverse">
          {[...LOGOS2, ...LOGOS2].map((l, i) => (
            <div key={i} className="text-3xl font-light italic mx-10 opacity-60">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FACT SECTION ============ */
function FactSection() {
  return (
    <section className="px-6 py-28">
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5 rounded-3xl overflow-hidden aspect-square">
          <img src={flower} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="md:col-span-7 flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between">
            <div className="eyebrow text-muted-foreground">— Agenzo Fact</div>
            <div className="text-xs text-muted-foreground">01 / 04</div>
          </div>
          <div>
            <div
              className="font-semibold tighter leading-[0.9]"
              style={{ fontSize: "clamp(5rem, 14vw, 14rem)" }}
            >
              100+
            </div>
            <p className="mt-6 text-xl max-w-md">Projects successfully launched worldwide across over 12 countries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SELECTED WORK ============ */
const PROJECTS = [
  { n: "01.", t: "Neon Frame System", y: "2025", img: project1, ratio: "aspect-[16/10]" },
  { n: "02.", t: "Lumen OS", y: "2024", img: project2, ratio: "aspect-[4/5]" },
  { n: "03.", t: "Botly® Port App", y: "2022", img: project3, ratio: "aspect-[4/5]" },
  { n: "04.", t: "Aurea Studio", y: "2020", img: project4, ratio: "aspect-[4/5]" },
  { n: "05.", t: "Core Identity", y: "2024", img: project5, ratio: "aspect-[4/5]" },
];

function SelectedWork() {
  return (
    <section className="px-6 py-28">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <div className="eyebrow text-muted-foreground mb-4">— Project showcase</div>
          <h2 className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
            Selected Work.<sup className="text-[0.25em] ml-2 text-muted-foreground">(5)</sup>
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          We've helped businesses across industries achieve their goals. Here are some of our recent projects.
        </p>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x">
        {PROJECTS.map((p) => (
          <a
            key={p.n}
            href="#"
            className={`group hover-lift flex-shrink-0 ${
              p.ratio === "aspect-[16/10]" ? "w-[680px]" : "w-[360px]"
            } snap-start`}
          >
            <div className={`rounded-3xl overflow-hidden ${p.ratio} bg-muted`}>
              <img
                src={p.img}
                alt={p.t}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">{p.n}</span>
                <span className="font-medium">{p.t}</span>
              </div>
              <span className="text-muted-foreground">{p.y}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============ TEAM ============ */
const TEAM = [
  { role: "Web Designer", tag: "#theleader", name: "Jame Nolan", img: team1 },
  { role: "UI Designer", tag: "#dynamic", name: "Jame Obsbon", img: team2 },
  { role: "Art Director", tag: "#thecreative", name: "Bruno Santos", img: team3 },
];

function TeamSection() {
  return (
    <section className="px-6 py-28">
      <div className="eyebrow text-muted-foreground mb-4">— Our Member</div>
      <h2
        className="tighter font-semibold leading-[0.95] mb-14"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        Meet the Team
        <br />Behind the Vision.
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {TEAM.map((m) => (
          <div key={m.name} className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5] group">
            <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex justify-between text-xs">
              <span className="glass rounded-full px-3 py-1.5">{m.role}</span>
              <span className="glass rounded-full px-3 py-1.5">{m.tag}</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <h3 className="text-2xl font-medium tight">{m.name}</h3>
              <span className="w-10 h-10 bg-white text-foreground rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  return (
    <section className="px-6 py-28">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <div className="eyebrow text-muted-foreground mb-4">— What Our Clients Say</div>
          <h2 className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
            Testimonials.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Agenzo® supports people from all over the world. Here's what they have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-7 glass rounded-3xl p-10 flex flex-col justify-between min-h-[420px]">
          <p className="text-2xl md:text-3xl tight leading-snug">
            "We were struggling to create a unified design experience until we worked with Agenzo®. The team not only brought consistency but elevated every screen with thoughtful detail."
          </p>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <img src={avatar1} alt="" className="w-12 h-12 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-medium">Liam Chen</div>
                <div className="text-xs text-muted-foreground">Product Manager, ALYN</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">01 / 04</div>
          </div>
        </div>
        <div className="md:col-span-5 rounded-3xl overflow-hidden">
          <img src={testimonialImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* ============ STATS TRIO ============ */
function StatsTrio() {
  return (
    <section className="px-6 py-20 grid md:grid-cols-3 gap-5">
      <BigStat label="Happy people" value="1M+" />
      <BigStat label="ROI Improvement" value="50%" hint="Clients reported better ROI within 1 month." />
      <BigStat label="Client Retention" value="50%" hint="Come back for second or third projects." />
    </section>
  );
}

function BigStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="glass rounded-3xl p-8 min-h-[260px] flex flex-col justify-between">
      <div className="eyebrow text-muted-foreground">{label}</div>
      <div>
        <div className="font-semibold tighter leading-none" style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}>
          {value}
        </div>
        {hint && <p className="text-sm text-muted-foreground mt-4 max-w-[260px]">{hint}</p>}
      </div>
    </div>
  );
}

/* ============ PARTNERS GRID ============ */
function PartnersGrid() {
  return (
    <section className="px-6 py-20">
      <div className="text-center mb-12">
        <div className="eyebrow text-muted-foreground mb-3">— Our Agenzo® relationships</div>
        <p className="text-lg">Trusted by over 1000+ companies around the world</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
        {["FORMA", "OBJECT®", "LUMEN", "AXIOM", "NORTH", "VANTAGE", "ECHO"].map((l) => (
          <div key={l} className="bg-background py-10 flex items-center justify-center text-lg font-medium opacity-70">
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ SHOW REEL ============ */
function ShowReel() {
  return (
    <section className="px-6 py-20">
      <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9]">
        <img src={showreel} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-8 left-8 right-8 flex justify-between text-white">
          <div className="eyebrow">Show reel</div>
          <div className="eyebrow">2025®</div>
        </div>
        <button className="absolute inset-0 m-auto w-24 h-24 bg-white text-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <Play className="w-7 h-7 fill-current" />
        </button>
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
          <h2 className="font-semibold tighter leading-none" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            Show reel
          </h2>
          <div className="font-semibold tighter" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            2025<sup className="text-[0.3em]">®</sup>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ACHIEVEMENTS ============ */
const AWARDS = [
  { n: "(01)", org: "Awwwards", t: "3× Nominated Agency of the year" },
  { n: "(02)", org: "Dribbble", t: "Featured in Dribbble Top Picks 2024" },
  { n: "(03)", org: "CSS Design Award", t: "Site of the Day x2 — 2023–2024" },
  { n: "(04)", org: "The FWA", t: "FWA Winner — Digital Innovation 2024" },
];

function Achievements() {
  return (
    <section className="px-6 py-28">
      <div className="eyebrow text-muted-foreground mb-12">— Our achievements</div>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-5 rounded-3xl overflow-hidden bg-muted">
          <img src={award} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="md:col-span-7 divide-y divide-border/60">
          {AWARDS.map((a) => (
            <div key={a.n} className="py-8 grid grid-cols-12 gap-4 items-center group">
              <div className="col-span-2 text-sm text-muted-foreground">{a.n}</div>
              <div className="col-span-3 text-sm">{a.org}</div>
              <div className="col-span-6 text-xl tight">{a.t}</div>
              <div className="col-span-1 flex justify-end">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
const PROCESS = [
  { n: ".01", title: "Project Kick-Off", sub: "Art Direction and Wireframing", img: process1 },
  { n: ".02", title: "Design Process", sub: "Design and Prototype Process", img: process2 },
  { n: ".03", title: "Testing", sub: "Product Testing, Quality Control", img: process3 },
];

function ProcessSection() {
  return (
    <section className="px-6 py-28">
      <div className="eyebrow text-muted-foreground mb-4">— Our Process</div>
      <h2 className="tighter font-semibold leading-[0.95] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
        From Vision to
        <br /> Measurable Value.
      </h2>
      <p className="max-w-md text-muted-foreground mb-14">
        From breakthrough portfolios to performance-driven platforms — our numbers speak louder than words.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {PROCESS.map((p) => (
          <div key={p.n} className="rounded-3xl overflow-hidden bg-muted relative aspect-[4/5]">
            <img src={p.img} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
            <div className="absolute top-5 left-5 right-5 flex justify-between text-white text-xs">
              <span className="glass-dark text-white rounded-full px-3 py-1.5">Agenza</span>
              <span>{p.n}</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-xl font-medium tight">{p.title}</div>
              <div className="text-sm text-white/70 mt-1">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ PRICING ============ */
const PLANS = [
  {
    name: "Low-budget",
    days: "4-7 Days",
    price: "$500",
    blurb: "Have design ready to build? Or small budget?",
    features: [
      "Wireframe-ready project required",
      "UI design using Figma or Framer",
      "Online/remote collaboration",
      "4–7 day turnaround",
      "Weekday delivery only",
    ],
  },
  {
    name: "Standard Plan",
    days: "15 Days",
    price: "$5,000",
    blurb: "For growing teams needing full design and build support.",
    features: [
      "Full UI/UX design system",
      "Brand identity refinement",
      "Up to 8 unique screens",
      "Prototype + animations",
      "Priority delivery",
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    days: "30 Days",
    price: "$12,000",
    blurb: "Complete end-to-end design and development partnership.",
    features: [
      "Unlimited screens & revisions",
      "Custom motion + interactions",
      "Webflow / Framer build",
      "Dedicated design lead",
      "Post-launch support",
    ],
  },
];

function Pricing() {
  return (
    <section className="px-6 py-28">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <div className="eyebrow text-muted-foreground mb-4">— Our Pricing</div>
          <h2 className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
            Pricing.<sup className="text-[0.25em] ml-2 text-muted-foreground">(3)</sup>
          </h2>
        </div>
        <div className="glass rounded-full p-1.5 flex text-sm">
          <button className="bg-foreground text-background rounded-full px-5 py-2">Monthly</button>
          <button className="px-5 py-2 text-muted-foreground">Yearly</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`rounded-3xl p-8 flex flex-col gap-6 border ${
              p.featured ? "bg-foreground text-background border-foreground" : "glass border-border/60"
            }`}
          >
            <div className="flex justify-between items-center text-xs">
              <span className={p.featured ? "text-background/70" : "text-muted-foreground"}>{p.name}</span>
              <span className={`rounded-full px-3 py-1 ${p.featured ? "bg-background/15" : "bg-background/60"}`}>
                {p.days}
              </span>
            </div>
            <div className="font-semibold tighter" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
              {p.price}
              <span className={`text-sm font-normal ml-1 ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>/ Month</span>
            </div>
            <p className={`text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>{p.blurb}</p>
            <button
              className={`rounded-full px-5 py-3 text-sm font-medium flex items-center justify-between ${
                p.featured ? "bg-background text-foreground" : "bg-foreground text-background"
              }`}
            >
              Choose Plan
              <ArrowUpRight className="w-4 h-4" />
            </button>
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
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ FOOTER CTA ============ */
function FooterCTA() {
  return (
    <footer className="px-6 pt-28 pb-8">
      <div className="text-center mb-12">
        <div className="eyebrow text-muted-foreground mb-6">— Let's build</div>
        <h2
          className="font-semibold tighter leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 16vw, 18rem)" }}
        >
          Let's talk<sup className="text-[0.25em] align-super">®</sup>
        </h2>
        <div className="mt-10 flex justify-center">
          <PillButton dark>Connect Us</PillButton>
        </div>
      </div>

      <div className="border-t border-border/60 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Agenzo® Studio. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">Twitter</a>
          <a href="#" className="hover:text-foreground">Dribbble</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
        </div>
        <div className="flex items-center gap-1">
          <Plus className="w-3 h-3" /> Crafted with care
        </div>
      </div>
    </footer>
  );
}
