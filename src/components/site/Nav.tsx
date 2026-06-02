import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_digifrenzy_white.png";

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
    : { type: "spring" as const, stiffness: 200, damping: 28, mass: 1 };

  const Logo = (
    <motion.div layoutId="digifrenzy-logo" transition={spring} className="leading-none">
      <Link to="/" className="block">
        <img
          src={logo}
          alt="D\ni\ng\ni\nF\nr\ne\nn\nz\ny*"
          className="h-7 w-auto"
          style={{ filter: "invert(1)" }}
        />
      </Link>
    </motion.div>
  );

  const menuItems: Array<{ l: string; to: string; hash?: string }> = [
    { l: "Home", to: "/" },
    { l: "Work", to: "/", hash: "work" },
    { l: "Services", to: "/services" },
    { l: "Pricing", to: "/pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <div className="flex items-center justify-between">
        <div className="min-w-[120px] flex items-center">{!merged && Logo}</div>

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
              className="hover-tint-blue px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-1"
            >
              {it.l}
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
