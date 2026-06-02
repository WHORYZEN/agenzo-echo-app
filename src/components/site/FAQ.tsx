import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const FAQS = [
  { q: "What does a project with D\ni\ng\ni\nF\nr\ne\nn\nz\ny* look like?", a: "We start with a discovery call to understand your goals, then build a custom strategy, execute with our creative team, and deliver measurable results — all within clear timelines." },
  { q: "How is your pricing structured?", a: "We offer flexible monthly retainer plans and one-time project pricing. Every package is tailored to your specific business needs and goals." },
  { q: "Do you work with fixed-scope projects?", a: "Yes. We offer both fixed-scope and ongoing retainer models depending on what works best for your brand." },
  { q: "What kind of ROI can I expect?", a: "Our clients typically see a 3–5x return on their marketing investment within the first 6 months, depending on industry and strategy." },
  { q: "How do you measure success?", a: "Through real KPIs — traffic growth, lead generation, conversion rates, ROAS, and revenue. No vanity metrics." },
  { q: "What do I need to get started?", a: "Just a 30-minute discovery call. We handle everything from strategy to execution." },
  { q: "Do I need to know anything about marketing?", a: "Not at all. We make the complex simple and keep you informed at every step without overwhelming you." },
  { q: "Can I pause or cancel my plan?", a: "Yes. All our plans are flexible — pause or cancel anytime with 30 days notice." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          className="md:col-span-5 md:sticky md:top-32 md:self-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="eyebrow text-muted-foreground mb-4">— FAQ</div>
          <h2 className="tighter font-semibold leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Answers Before
            <br /> You <span className="text-brand">Ask.</span>
          </h2>
        </motion.div>
        <div className="md:col-span-7 divide-y divide-border/60 border-t border-b border-border/60">
          {FAQS.map((f, i) => (
            <div key={i} className="transition-colors hover:bg-foreground/[0.02]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 px-2 flex items-center gap-4 text-left group"
              >
                <span className="text-xs text-muted-foreground w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg tight font-medium">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="text-2xl text-muted-foreground">
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pl-12 pb-6 pr-8 text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
