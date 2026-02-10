"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ScrollGlow() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const opacity = shouldReduceMotion
    ? 0.2
    : useTransform(scrollY, [0, 800], [0.6, 0.15]);

  const scale = shouldReduceMotion
    ? 1
    : useTransform(scrollY, [0, 800], [1, 1.25]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw]
      rounded-full bg-accent blur-[140px] -z-20 pointer-events-none"
    />
  );
}
