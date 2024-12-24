"use client";

import { motion } from "framer-motion";

export default function SoftMovingLights() {
  const colors = ["#ff0000", "#ff007f", "#ff4d00"]; // Color palette

  const lightVariants = {
    animate: () => ({
      x: [
        `${Math.random() * 100}vw`,
        `${Math.random() * 100}vw`,
        `${Math.random() * 100}vw`,
      ],
      y: [
        `${Math.random() * 100}vh`,
        `${Math.random() * 100}vh`,
        `${Math.random() * 100}vh`,
      ],
    }),
  };

  const lightTransition = {
    duration: 60, // Slow movement
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 -z-10 dark:bg-black">
      {Array.from({ length: 5 }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Assign random color
        return (
          <motion.div
            key={i}
            className="absolute w-80 h-80 rounded-full "
            style={{
              background: `radial-gradient(circle, ${randomColor} 30%, transparent)`,
              filter: "blur(150px)",
              opacity: 0.6, // Subtle effect
            }}
            custom={i}
            variants={lightVariants}
            initial={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
            animate="animate"
            transition={lightTransition}
          ></motion.div>
        );
      })}
    </div>
  );
}
