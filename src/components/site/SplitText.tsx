import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut, viewportOnce } from "@/lib/motion";

export function SplitText({
  text,
  delay = 0,
  stagger = 0.04,
  duration = 0.9,
  y = 80,
  trigger = "inView",
  className = "",
  suffix,
  accentFrom,
  accentClassName = "text-brand",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  trigger?: "inView" | "mount";
  className?: string;
  suffix?: ReactNode;
  /** Character index from which to apply the accent color class. */
  accentFrom?: number;
  accentClassName?: string;
}) {
  const useMount = trigger === "mount";
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className={`inline-block ${accentFrom !== undefined && i >= accentFrom ? accentClassName : ""}`}
          initial={{ y, opacity: 0 }}
          {...(useMount
            ? { animate: { y: 0, opacity: 1 } }
            : { whileInView: { y: 0, opacity: 1 }, viewport: viewportOnce })}
          transition={{ duration, ease: easeOut, delay: delay + i * stagger }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      {suffix}
    </span>
  );
}
