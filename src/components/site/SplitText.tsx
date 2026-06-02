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
}: {
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  trigger?: "inView" | "mount";
  className?: string;
  suffix?: ReactNode;
}) {
  const animProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : { initial: "hidden" as const, whileInView: "show" as const, viewport: viewportOnce };

  return (
    <span className={`inline-flex flex-wrap ${className}`} {...animProps}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { y, opacity: 0 },
            show: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          {...(trigger === "mount"
            ? { animate: "show" }
            : { whileInView: "show", viewport: viewportOnce })}
          transition={{ duration, ease: easeOut, delay: delay + i * stagger }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      {suffix}
    </span>
  );
}
