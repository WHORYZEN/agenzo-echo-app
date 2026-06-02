import { motion, useReducedMotion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageSquare, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo_digifrenzy_white.png";

export function Nav() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [merged, setMerged] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold = (typeof window !== "undefined" ? window.innerHeight : 800) * 0.5;
    setMerged(y > threshold);
  });

  // Close on route change
  const currentPath = routerState.location.pathname + routerState.location.hash;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useState(() => currentPath);

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 200, damping: 28, mass: 1 };

  const renderLogo = (invert: boolean) => (
    <motion.div layoutId="digifrenzy-logo" transition={spring} className="leading-none">
      <Link to="/" className="block">
        <img
          src={logo}
          alt="DigiFrenzy"
          className="h-7 w-auto"
          style={invert ? { filter: "invert(1)" } : undefined}
        />
      </Link>
    </motion.div>
  );
  const Logo = renderLogo(false);

  const menuItems: Array<{ l: string; to: string; hash?: string }> = [
    { l: "Home", to: "/" },
    { l: "Work", to: "/", hash: "work" },
    { l: "Services", to: "/services" },
    { l: "Pricing", to: "/pricing" },
  ];

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-5"
    >
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="min-w-[40px] md:min-w-[120px] flex items-center">
          {/* On mobile, always show logo. On desktop, hide when merged (merges into pill). */}
          <div className="md:hidden">{Logo}</div>
          <div className="hidden md:block">{!merged && Logo}</div>
        </div>

        {/* Center: Desktop pill nav */}
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

        {/* Right: CTA + (mobile) hamburger */}
        <div className="flex items-center gap-2">
          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-11 h-11 rounded-full glass flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Get in touch */}
          <Link
            to="/"
            hash="contact"
            aria-label="Get in touch"
            className="glass rounded-full p-1 md:pl-5 md:pr-2 md:py-2 flex items-center gap-3 text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:min-w-[100px] justify-end"
          >
            <span className="hidden md:inline">Get in touch</span>
            <span className="w-9 h-9 bg-foreground text-background rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-3 glass rounded-3xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <nav className="flex flex-col">
              {menuItems.map((it) => (
                <Link
                  key={it.l}
                  to={it.to}
                  hash={it.hash}
                  onClick={() => setMobileOpen(false)}
                  className="hover-tint-blue px-5 py-3 rounded-2xl text-sm font-medium"
                >
                  {it.l}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
