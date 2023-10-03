import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.;
import HomeParticles from '../config/HomeParticles';

const ProjectParticles = () => {
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
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
              zIndex: 1, // Set a lower z-index value
            }}
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
                            distance: 75,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                      value: ["#ff0000", "#ff007f", "#ff4d00"],
                    },
                    links: {
                        color:["#ff0000", "#ff007f", "#ff4d00"],
                        distance: 150,
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
                        value: 180,
                    },
                    opacity: {
                        value: 0.5,
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
 export default ProjectParticles;