import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
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
    <motion.div layoutId="digifrenzy-logo" transition={spring} className="leading-none">
      <Link to="/" className="text-[22px] font-semibold tighter leading-none whitespace-nowrap">
        DigiFrenzy<sup className="text-[10px] ml-0.5">®</sup>
      </Link>
    </motion.div>
  );

  const menuItems: Array<{ l: string; to: string; n?: string; hash?: string }> = [
    { l: "Home", to: "/" },
    { l: "Work", to: "/", hash: "work", n: "04" },
    { l: "Services", to: "/services" },
    { l: "Pricing", to: "/pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <div className="flex items-center justify-between">
        <div className="min-w-[100px] flex items-center">{!merged && Logo}</div>

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
            <Link
              key={it.l}
              to={it.to}
              hash={it.hash}
              className="px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/70 transition-colors flex items-center gap-1"
            >
              {it.l}
              {it.n && <sup className="text-[10px] text-muted-foreground">({it.n})</sup>}
            </Link>
          ))}
        </motion.nav>

        <Link
          to="/"
          hash="contact"
          className="glass rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-w-[100px] justify-end"
        >
          Get in touch
          <span className="w-9 h-9 bg-foreground text-background rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </header>
  );
}
