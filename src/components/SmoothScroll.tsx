import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Site-wide Framer-style inertia/smooth scroll using Lenis.
 * Mounted once at the root. Skipped during SSR.
 */
export function SmoothScroll({ children }: { children: React