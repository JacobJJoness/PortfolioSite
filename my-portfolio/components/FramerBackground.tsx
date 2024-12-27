"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SoftMovingLights() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect screens smaller than 768px
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colors = ["#ff0000", "#ff007f", "#ff4d00"];
  const lightCount = isMobile ? 2 : 5; // Fewer lights on mobile

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
    duration: isMobile ? 30 : 60, // Faster animation on mobile
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 -z-10 dark:bg-black">
      {Array.from({ length: lightCount }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: `radial-gradient(circle, ${randomColor} 30%, transparent)`,
              filter: "blur(150px)",
              opacity: 0.6,
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
