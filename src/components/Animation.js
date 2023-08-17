import React, { useEffect } from 'react';

import { tsParticles } from "tsparticles-engine";
import { loadFull } from 'tsparticles';

const ParticleContainer = () => {
  useEffect(() => {
        const configs = {
          particles: {
            number: {
              value: 0
            },
            stroke: {
              color: {
                value: "#ff00",
                animation: {
                  enable: true,
                  speed: 360,
                  sync: true
                }
              },
              width: 2
            },
            shape: {
              type: ["circle", "square", "triangle", "polygon"],
              options: {
                circle: {
                  fill: false
                },
                square: {
                  fill: false
                },
                triangle: {
                  fill: false
                },
                polygon: [
                  {
                    sides: 5,
                    fill: false
                  },
                  {
                    sides: 6,
                    fill: false
                  }
                ]
              }
            },
            opacity: {
              value: 1
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "random",
              animation: {
                enable: true,
                sync: true,
                speed: { min: 15, max: 30 }
              }
            },
            size: {
              value: { min: 1, max: 30 },
              animation: {
                enable: true,
                speed: { min: 40, max: 500 },
                sync: true,
                startValue: "max",
                destroy: "min"
              }
            },
            move: {
              enable: true,
              speed: { min: 5, max: 10 },
              outModes: "out"
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "trail"
              }
            },
            modes: {
              trail: {
                delay: 0,
                quantity: 9,
                pauseOnStop : true
              }
            }
          },
        
      }

    const loadParticles = async (options) => {
      await loadFull(tsParticles);
      await tsParticles.load(options);
    };

    loadParticles(configs);

    return () => {
      tsParticles.dom().destroy();
    };
  }, []);

  return <div id="tsparticles" style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ParticleContainer;
