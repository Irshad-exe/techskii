"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground({
  image,
}: {
  image: string;
}) {
  const { scrollY } = useScroll();

  // Move background slower than scroll
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 -z-10"
    >
      <div
        className="w-full h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${image})` }}
      />
    </motion.div>
  );
}
