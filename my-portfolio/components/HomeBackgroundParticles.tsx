"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect screens smaller than 768px
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const mobileConfig = isMobile
    ? {
        number: { value: 10 }, // Fewer particles
        move: { speed: 0.2 }, // Slower movement
        interactivity: { events: { onHover: { enable: false } } }, // Disable hover effects
      }
    : {};

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
        style={{ zIndex: 0 }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 30,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 40, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#fa0c0c" },
            links: {
              color: "#ff0f0f",
              distance: 10,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              outModes: { default: "bounce" },
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50,
            },
            opacity: { value: 0.3 },
            shadow: { blur: 10, color: "#ff0080", enable: true },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
            ...mobileConfig, // Merge mobile-specific configurations
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
