import { Plus } from "lucide-react";
import { PillButton } from "./PillButton";

export function SiteFooter() {
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
          <PillButton dark href="#contact">Start a Project</PillButton>
        </div>
      </div>

      <div className="border-t border-border/60 pt-8 flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} DigiFrenzy®. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="mailto:support@digifrenzy.com" className="hover:text-foreground">support@digifrenzy.com</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
        </div>
        <div className="flex items-center gap-1">
          <Plus className="w-3 h-3" /> Crafted with care
        </div>
      </div>
    </footer>
  );
}
