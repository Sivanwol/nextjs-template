"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const options: ISourceOptions = {
  background: {
    color: {
      value: "#fff",
    },
    opacity: 0.2,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#d2d2d2",
    },
    links: {
      color: "#dfdfdf",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 70,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "triangles",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
export default function PageEffects({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <>
        <Particles id="tsparticles" options={options} />
      </>
    );
  }
  return <></>;
}
