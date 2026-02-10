"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export default function MeteorShower() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const newMeteors = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${(i * 3.33)}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${Math.random() * 2 + 3}s`,
    }));
    setMeteors(newMeteors);
  }, []);

  return (
    <motion.div style={{ y }} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </motion.div>
  );
}
