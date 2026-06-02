import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { PillButton } from "./PillButton";
import { easeOut, viewportOnce } from "@/lib/motion";
import logo from "@/assets/logo_digifrenzy_white.png";

const TEXT = "Let's talk";

export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 pt-28 pb-8">
      <div className="container-x text-center mb-12">
        <div className="eyebrow text-muted-foreground mb-6">— Let's build</div>
        <h2
          className="font-semibold leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 15vw, 14rem)", letterSpacing: "-0.08em" }}
        >
          <span className="inline-flex">
            {TEXT.split("").map((ch, i) => (
              <motion.span
                key={i}
                className={`inline-block ${i >= 6 ? "text-brand" : ""}`}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, ease: easeOut, delay: i * 0.05 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </span>
        </h2>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
        >
          <PillButton dark href="#contact">Start a Project</PillButton>
        </motion.div>
      </div>

      <div className="container-x border-t border-border/60 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="DigiFrenzy" className="h-6 w-auto" style={{ filter: "invert(1)" }} />
          <span>© {new Date().getFullYear()}. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:support@digifrenzy.com" className="hover:text-foreground transition-colors">support@digifrenzy.com</a>
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
        <div className="flex items-center gap-1">
          <Plus className="w-3 h-3" /> Crafted with care
        </div>
      </div>
    </footer>
  );
}
