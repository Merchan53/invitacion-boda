import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

import image from "../../../public/Imagenes/imagen miguel con aquila con fondo de cuadro.png";
console.log(image);

export default function HorizontalSeparator() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax
  const y = useTransform(scrollYProgress, [0, 1], [-35, 35]);

  return (
    <section
      ref={ref}
      className="relative h-[420px] overflow-hidden md:h-[420px] lg:h-[500px]"
    >
      {/* Imagen */}
      <motion.img
        src={image}
        alt="Nuestra historia"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y }}
        initial={{
          opacity: 0,
          scale: 1.12,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: [1, 1.04, 1],
              }
            : {}
        }
        transition={{
          opacity: {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Ondas superiores */}
      <svg
        className="absolute top-0 left-0 w-full h-24 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.65"
          d="M0,60 C240,20 520,90 840,40 C1120,0 1320,30 1440,55 L1440,0 L0,0 Z"
        />

        <path
          fill="white"
          fillOpacity="0.30"
          d="M0,35 C320,80 760,5 1100,45 C1280,70 1360,60 1440,30 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Ondas inferiores */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          fillOpacity="0.75"
          d="M0,80 C320,30 720,110 1040,55 C1220,20 1340,60 1440,40 L1440,120 L0,120 Z"
        />

        <path
          fill="white"
          fillOpacity="0.30"
          d="M0,95 C280,70 620,120 960,80 C1220,45 1340,90 1440,70 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}