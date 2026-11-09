import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Reemplaza esto con tu imagen real de los novios
const image = "/Imagenes/imagen miguel sosteniendo la mano de aquila.png";

export default function ParallaxWaveSeparator() {
  const ref = useRef(null);

  // Controlamos el progreso del scroll para el Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Efecto Parallax suave en el eje Y
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // 1. Definimos las variantes de animación para la entrada cinemática de la IMAGEN
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.15 // Ligeramente más grande para el efecto cinemático
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.8, 
        delay: 0.3, // Un pequeño retraso tras llegar a la vista
        ease: [0.22, 1, 0.36, 1], // Un easeOut suave (quint)
      }
    }
  };

  return (
    <section
      ref={ref}
      // Altura pronunciada para simular el aspecto vertical (portrait) de la captura
      className="relative w-full h-[550px] md:h-[750px] overflow-hidden bg-white"
    >
      {/* 
        CONTENEDOR DEL PARALLAX 
        Se hace más alto que el contenedor padre (130%) para que la imagen 
        tenga espacio para moverse de arriba a abajo sin cortarse.
      */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
        style={{ y }}
      >
        {/* FOTO CON EFECTO CINEMÁTICO DE ENTRADA */}
        <motion.img
          src={image}
          alt="Separador de los novios"
          className="w-full h-full object-cover"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Se ejecuta al ver el 20%
        />
      </motion.div>

      {/* Overlay oscuro opcional para dar contraste a las olas blancas si la imagen es muy clara */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

      {/* --- DIVISORES ONDULADOS SUPERPUESTOS --- */}
      
      {/* Ondas Superiores con capas de opacidad */}
      <svg
        className="absolute top-0 left-0 w-full h-24 md:h-32 pointer-events-none z-10"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {/* Capa trasera (más transparente) */}
        <path
          fill="white"
          fillOpacity="0.40"
          d="M0,60 C240,20 520,90 840,40 C1120,0 1320,30 1440,55 L1440,0 L0,0 Z"
        />
        {/* Capa media */}
        <path
          fill="white"
          fillOpacity="0.75"
          d="M0,35 C320,80 760,5 1100,45 C1280,70 1360,60 1440,30 L1440,0 L0,0 Z"
        />
        {/* Capa frontal (sólida) para unir perfecto con la sección de arriba */}
        <path
          fill="white"
          d="M0,15 C250,50 650,10 1050,40 C1250,55 1380,25 1440,15 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Ondas Inferiores con capas de opacidad */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 pointer-events-none z-10"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {/* Capa trasera */}
        <path
          fill="white"
          fillOpacity="0.40"
          d="M0,80 C320,30 720,110 1040,55 C1220,20 1340,60 1440,40 L1440,120 L0,120 Z"
        />
        {/* Capa media */}
        <path
          fill="white"
          fillOpacity="0.75"
          d="M0,95 C280,70 620,120 960,80 C1220,45 1340,90 1440,70 L1440,120 L0,120 Z"
        />
        {/* Capa frontal (sólida) para unir perfecto con la sección de abajo */}
        <path
          fill="white"
          d="M0,105 C300,85 700,115 1100,90 C1300,75 1400,100 1440,105 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}