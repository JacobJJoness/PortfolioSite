'use client'

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.;


const ParticleBackground = () => {
  const particlesInit = useCallback(async(engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  },[]);


const particlesLoaded =useCallback(async(container: Container | undefined) => {
  await console.log(container)
  },[]);

  return (
      <div id='particle-background'>
        <Particles
            id="tsparticles"
            style={{
                zIndex: 0, // Set a lower z-index value
              }}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 40,
                            duration: 0.4,
                        },
                        trails: {
                            delay: 3,
                            pauseOnStop: false,
                            quantity: 2
                        }
                    },
                },
                particles: {
                    color: {
                        value: "#fa0c0c",
                    },
                    links: {
                        color: "#ff0f0f",
                        distance: 10,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.4,
                        anim:{
                            enable:true,
                            speed:.2,
                            opacity_min:0.0,
                            sync:false
                        }
                    },
                    shadow: {
                        blur: 10,
                        color: "#ff0080",
                        enable: true
                      },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    
                        
                },
                detectRetina: true,
            }}
        />
      </div>
      
      
    
      );
    };     
 export default ParticleBackground;