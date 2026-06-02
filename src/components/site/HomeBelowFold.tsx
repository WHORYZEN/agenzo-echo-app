import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

import factCar from "@/assets/fact-car.jpg";
import flower from "@/assets/unisure-phone.jpeg.asset.json";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
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

import { PillButton } from "@/components/site/PillButton";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerParent,
  viewportOnce,
  easeOut,
  hoverLift,
  hoverLiftSm,
} from "@/lib/motion";
import { SplitText } from "@/components/site/SplitText";

function SectionHeader({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <motion.div variants={staggerParent()} initial="hidden" whileInView="show" viewport={viewportOnce}>
      <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">{eyebrow}</motion.div>
      <motion.h2
        variants={fadeUp}
        className="tighter font-semibold leading-[0.95]"
        style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
      >
        {children}
      </motion.h2>
    </motion.div>
  );
}

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10">
          <SectionHeader eyebrow="— WHY DIGIFRNEZNY*">
            Transforming Brands
            <br /> <span className="text-brand">Digitally.</span>
          </SectionHeader>
        </div>

        <motion.div
          className="grid md:grid-cols-12 gap-6 md:gap-8"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={scaleIn} className="md:col-span-7 rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px]">
            <img src={factCar} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            <motion.div variants={fadeUp} whileHover={hoverLift} className="glass rounded-3xl p-8 flex-1">
              <p className="text-xl leading-snug tight">
                We specialize in turning brands into <strong>digital powerhouses</strong> — from stunning websites to data-driven marketing campaigns built to deliver results that move the needle.
              </p>
            </motion.div>
            <motion.div variants={staggerParent(0.08)} className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div variants={fadeUp} whileHover={hoverLift}>
                <StatTile
                  label="Clients Served"
                  value="299+"
                  right={
                    <div className="flex -space-x-2">
                      {[avatar1, avatar2, avatar3].map((a, i) => (
                        <img key={i} src={a} className="w-9 h-9 rounded-full border-2 border-background object-cover" alt="" loading="lazy" decoding="async" />
                      ))}
                    </div>
                  }
                />
              </motion.div>
              <motion.div variants={fadeUp} whileHover={hoverLift}>
                <StatTile label="Years in Industry" value="10+" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatTile({ label, value, right }: { label: string; value: string; right?: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-6 flex flex-col justify-between min-h-[180px] h-full">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-5xl font-semibold tighter">{value}</div>
        {right}
      </div>
    </div>
  );
}

const LOGOS = ["MYAI500", "MYNX", "JOURI LAW", "MYCA500", "ACT CLINIC", "PLANTSMED", "BAARAT", "HIDEOUT"];
const LOGOS2 = ["DIGIFRENZY", "STUDIO", "GROWTH LAB", "PIXEL CRAFT", "BRAND FORGE", "MEDIA HOUSE", "SCALE CO", "NORTH STAR"];

function PartnerMarquee() {
  return (
    <section className="section border-y border-border/60">
      <div className="container-x flex items-center gap-8 mb-10">
        <div className="eyebrow text-muted-foreground">— Trusted Partners</div>
        <div className="ml-auto">
          <PillButton dark href="/pricing">Choose Plan</PillButton>
        </div>
      </div>

      <div className="space-y-6 overflow-hidden marquee-mask">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="text-3xl md:text-4xl font-semibold tighter mx-10 opacity-70">{l}</div>
          ))}
        </div>
        <div className="marquee-track-reverse">
          {[...LOGOS2, ...LOGOS2].map((l, i) => (
            <div key={i} className="text-3xl md:text-4xl font-light italic mx-10 opacity-60">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactSection() {
  return (
    <section className="section">
      <motion.div
        className="container-x grid md:grid-cols-12 gap-6 md:gap-8"
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div variants={scaleIn} whileHover={hoverLiftSm} className="md:col-span-5 rounded-3xl overflow-hidden aspect-square">
          <img src={flower.url} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />)
        </motion.div>
        <div className="md:col-span-7 flex flex-col justify-between gap-6">
          <motion.div variants={fadeIn} className="flex items-center justify-between">
            <div className="eyebrow text-muted-foreground">— DIGIFRNEZNY* FACT</div>
          </motion.div>
          <div>
            <motion.div
              variants={fadeUp}
              className="font-semibold tighter leading-[0.9]"
              style={{ fontSize: "clamp(5rem, 14vw, 14rem)" }}
            >
              90+
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-xl max-w-md">
              Projects delivered for clients across industries globally.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const PROJECTS = [
  { n: "01.", t: "MYAI500", y: "2025", tags: ["Portfolio", "AI Voice Assistant"], img: project1, ratio: "aspect-[16/10]" },
  { n: "02.", t: "MYNX Softwares Inc", y: "2024", tags: ["IT Services", "Software Dev"], img: project2, ratio: "aspect-[4/5]" },
  { n: "03.", t: "Jouri Law", y: "2024", tags: ["Law Firm", "Accident Cases"], img: project3, ratio: "aspect-[4/5]" },
  { n: "04.", t: "MYCA500", y: "2024", tags: ["AI Voice", "SaaS Product"], img: project4, ratio: "aspect-[4/5]" },
];

function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="container-x">
        <motion.div
          className="flex items-end justify-between mb-10 flex-wrap gap-6"
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Featured Works</motion.div>
            <motion.h2 variants={fadeUp} className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
              <SplitText text="Selected Work." accentFrom={9} />
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-muted-foreground">
            Showcasing our best client work — bold designs crafted to elevate brands and captivate audiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-6 md:gap-8 overflow-x-auto pb-6 -mx-6 md:-mx-10 px-6 md:px-10 snap-x"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROJECTS.map((p) => (
            <motion.a
              key={p.n}
              variants={fadeUp}
              href="#"
              className={`group flex-shrink-0 ${p.ratio === "aspect-[16/10]" ? "w-[680px]" : "w-[360px]"} snap-start`}
            >
              <div className={`rounded-3xl overflow-hidden ${p.ratio} bg-muted`}>
                <img
                  src={p.img}
                  alt={p.t}
                  className="w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{p.t}</span>
                </div>
                <div className="flex items-center gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-3 py-1 glass rounded-full">{t}</span>
                  ))}
                  <span className="text-muted-foreground ml-2">{p.y}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TEAM = [
  { role: "Strategy Lead", tag: "#growth", name: "Strategy Team", img: team1 },
  { role: "Design Lead", tag: "#craft", name: "Design Team", img: team2 },
  { role: "Growth Lead", tag: "#performance", name: "Performance Team", img: team3 },
];

function TeamSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10">
          <SectionHeader eyebrow="— Our Crew">
            Meet the Minds
            <br />Behind the Work.
          </SectionHeader>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {TEAM.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5] group"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex justify-between text-xs">
                <span className="glass rounded-full px-3 py-1.5">{m.role}</span>
                <span className="glass rounded-full px-3 py-1.5">{m.tag}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <h3 className="text-2xl font-medium tight">{m.name}</h3>
                <span className="w-10 h-10 bg-white text-foreground rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const TESTIMONIALS_SMALL = [
  { name: "Priya Iyer", role: "Founder, D2C Brand", text: "I was a bit unsure in the beginning, but the team handled everything so patiently. From content to ads, they took care of it all. Very happy with how our brand looks now.", img: avatar2 },
  { name: "Rohan Mehta", role: "CEO, SaaS Startup", text: "These guys really know their stuff. The website they built for us is fast, clean, and our customers love it. Best decision we took this year for the business.", img: avatar3 },
  { name: "Ananya Reddy", role: "Marketing Head", text: "Loved the whole experience. Proper updates, never had to chase them, and the creatives were top-notch. Will definitely keep working with them long term.", img: avatar1 },
];

function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          className="flex items-end justify-between flex-wrap gap-6 mb-10"
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Client Voices</motion.div>
            <motion.h2 variants={fadeUp} className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
              <SplitText text="Trusted By Many." accentFrom={11} />
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-muted-foreground">
            Real stories from real clients. See how our work has transformed and elevated businesses.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-12 gap-6 md:gap-8"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            whileHover={hoverLift}
            className="md:col-span-7 glass rounded-3xl p-10 flex flex-col justify-between min-h-[420px]"
          >
            <p className="text-2xl md:text-3xl tight leading-snug">
              "Honestly, working with DIGIFRNEZNY* has been such a smooth ride. They actually listen, deliver on time, and the results speak for themselves. Our enquiries doubled in just two months."
            </p>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <img src={avatar1} alt="" className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
                <div>
                  <div className="font-medium">Aarav Sharma</div>
                  <div className="text-xs text-muted-foreground">Director, Local Business</div>
                </div>
              </div>
              <div />
            </div>
          </motion.div>
          <div className="md:col-span-5 flex flex-col gap-6">
            {TESTIMONIALS_SMALL.map((t) => (
              <motion.div key={t.name} variants={fadeUp} whileHover={hoverLift} className="glass rounded-3xl p-6">
                <p className="text-sm leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={t.img} alt="" className="w-9 h-9 rounded-full object-cover" loading="lazy" decoding="async" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsTrio() {
  return (
    <section className="section">
      <motion.div
        className="container-x grid md:grid-cols-3 gap-6 md:gap-8"
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <BigStat label="Years in Industry" value="10+" hint="Delivering digital excellence worldwide." />
        <BigStat label="Projects Delivered" value="90+" hint="For clients across industries globally." />
        <BigStat label="Client Satisfaction" value="50+" hint="Consistently exceeding expectations." />
      </motion.div>
    </section>
  );
}

function BigStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <motion.div variants={fadeUp} whileHover={hoverLift} className="glass rounded-3xl p-8 min-h-[260px] flex flex-col justify-between">
      <div className="eyebrow text-muted-foreground">{label}</div>
      <div>
        <div className="font-semibold tighter leading-none" style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}>
          {value}
        </div>
        {hint && <p className="text-sm text-muted-foreground mt-4 max-w-[260px]">{hint}</p>}
      </div>
    </motion.div>
  );
}

function PartnersGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          className="text-center mb-12"
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-3">— Our Relationships</motion.div>
          <motion.p variants={fadeUp} className="text-lg">Trusted by brands worldwide.</motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden"
          variants={staggerParent(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {["MYAI500", "MYNX", "JOURI", "MYCA500", "ACT", "PLANTSMED", "HIDEOUT"].map((l) => (
            <motion.div
              key={l}
              variants={scaleIn}
              whileHover={hoverLiftSm}
              className="bg-background py-10 flex items-center justify-center text-lg font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {l}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ShowReel() {
  return (
    <section className="section">
      <motion.div
        className="container-x relative rounded-[2rem] overflow-hidden aspect-[16/9]"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        whileHover={{ scale: 1.01, transition: { duration: 0.6, ease: easeOut } }}
        transition={{ duration: 1.1, ease: easeOut }}
      >
        <img src={showreel} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-8 left-8 right-8 flex justify-between text-white">
          <div className="eyebrow">Show reel</div>
          <div className="eyebrow">2025</div>
        </div>
        <button className="absolute inset-0 m-auto w-24 h-24 bg-white text-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
          <Play className="w-7 h-7 fill-current" />
        </button>
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
          <h2 className="font-semibold tighter leading-none" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            <SplitText text="Every Pixel" />
          </h2>
          <div className="font-semibold tighter" style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}>
            <SplitText text="Crafted" accentFrom={0} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const AWARDS = [
  { n: "Speed", org: "Speed", t: "Launch your site in just 30 minutes" },
  { n: "Platform", org: "Platform", t: "From 0 to 100 — all in one platform" },
  { n: "Support", org: "Support", t: "24/6 dedicated team, always available" },
  { n: "Scale", org: "Scale", t: "Built to grow with your business" },
];

function Achievements() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="eyebrow text-muted-foreground mb-12"
        >
          — Why Choose D\ni\ng\ni\nF\nr\ne\nn\nz\ny*
        </motion.div>
        <motion.div
          className="grid md:grid-cols-12 gap-6 md:gap-8"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={scaleIn} whileHover={hoverLiftSm} className="md:col-span-5 rounded-3xl overflow-hidden bg-muted min-h-[400px]">
            <img src={award} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>
          <div className="md:col-span-7 divide-y divide-border/60">
            {AWARDS.map((a) => (
              <motion.div
                key={a.n}
                variants={fadeUp}
                whileHover={{ x: 4, transition: { duration: 0.4, ease: easeOut } }}
                className="py-8 grid grid-cols-12 gap-4 items-center group hover:bg-foreground/[0.02] transition-colors px-2 rounded-2xl"
              >
                <div className="col-span-4 text-sm font-medium">{a.org}</div>
                <div className="col-span-7 text-xl tight">{a.t}</div>
                <div className="col-span-1 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const PROCESS = [
  { n: ".01", title: "Strategy & Planning", sub: "Discovery, research, and roadmap", img: process1 },
  { n: ".02", title: "Design & Development", sub: "Brand, web, and creative execution", img: process2 },
  { n: ".03", title: "Launch & Growth", sub: "Go-live, optimise, scale results", img: process3 },
];

function ProcessSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10">
          <SectionHeader eyebrow="— Our Approach">
            From Vision to
            <br /> Measurable Value.
          </SectionHeader>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-md text-muted-foreground mt-6"
          >
            A clear, proven process — from understanding your goals to launching and scaling with confidence.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="rounded-3xl overflow-hidden bg-muted relative aspect-[4/5] group"
            >
              <img
                src={p.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
              <div className="absolute top-5 left-5 right-5 flex justify-between text-white text-xs">
                <span className="glass-dark text-white rounded-full px-3 py-1.5">D\ni\ng\ni\nF\nr\ne\nn\nz\ny*</span>
                <span>{i === 0 ? "FREE" : p.n}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xl font-medium tight">{p.title}</div>
                <div className="text-sm text-white/70 mt-1">{p.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <motion.div
          className="flex items-end justify-between flex-wrap gap-6 mb-10"
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div>
            <motion.div variants={fadeUp} className="eyebrow text-muted-foreground mb-4">— Plans Built for Growth</motion.div>
            <motion.h2 variants={fadeUp} className="tighter font-semibold" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
              <SplitText text="Pricing." accentFrom={0} />
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-muted-foreground">
            Transparent pricing tailored to your brand. Find the plan that takes your business to the next level.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
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
                className={`rounded-full px-5 py-3 text-sm font-medium flex items-center justify-between transition-transform hover:scale-[1.02] ${
                  p.featured ? "bg-background text-foreground" : "bg-foreground text-background"
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className={`text-xs uppercase tracking-widest ${p.featured ? "text-background/50" : "text-muted-foreground"}`}>
                What's included:
              </div>
              <ul className="space-y-3 text-sm mt-auto">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.featured ? "bg-background" : "bg-foreground"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function HomeBelowFold() {
  return (
    <>
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
      <FAQ />
      <Contact />
      <SiteFooter />
    </>
  );
}
