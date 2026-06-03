import type { Variants, Transition } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeSmooth = [0.6, 0.05, 0.1, 0.95] as const;

export const durations = { sm: 0.5, md: 0.8, lg: 1.1, xl: 1.4 };

export const viewportOnce = { once: true, amount: 0.15 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: durations.lg, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: durations.md, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: durations.md, ease: easeOut } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: durations.md, ease: easeOut } },
};

export const staggerParent = (stagger = 0.08, delay = 0.05): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const softSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 28,
  mass: 1,
};

export const hoverLift = {
  y: -6,
  transition: { duration: 0.5, ease: easeOut },
};

export const hoverLiftSm = {
  y: -4,
  transition: { duration: 0.5, ease: easeOut },
};
