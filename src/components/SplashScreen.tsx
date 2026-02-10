"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await new Promise(resolve => setTimeout(resolve, 1500));
      await controls.start("exit");
      setShow(false);
    };
    sequence();
  }, [controls]);

  if (!show) return null;

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
    exit: {
      opacity: 0,
      scale: 2,
      filter: "blur(20px)",
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const letters = "TechSkii".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      animate={controls}
    >
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full"
          initial={{
            x: "50vw",
            y: "50vh",
            scale: 0,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Glowing rings */}
      <motion.div
        className="absolute w-96 h-96 border-2 border-accent/30 rounded-full"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 border-2 border-purple-500/30 rounded-full"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Text animation */}
      <div className="relative flex items-center justify-center perspective-1000">
        <motion.div className="flex text-6xl md:text-8xl font-bold">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate={controls}
              className="inline-block gradient-text"
              style={{
                textShadow: "0 0 40px rgba(99, 102, 241, 0.5)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Glow effect behind text */}
        <motion.div
          className="absolute w-full h-full bg-accent/20 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
