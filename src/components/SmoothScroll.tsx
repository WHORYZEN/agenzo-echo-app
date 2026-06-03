import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Site-wide Framer-style inertia/smooth scroll using Lenis.
 * Mounted once at the root. Skipped during SSR and respects prefers-reduced-motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      // Framer-like ease-out curve
      easing: (t: number) => Math.min(1, 