import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  // 1. Configura aquí la fecha exacta de la boda (Año-Mes-DíaTHora:Minutos:Segundos)
  const targetDate = new Date('2026-10-10T15:00:00').getTime();

  // 2. Estado para guardar el tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => String(time).padStart(2, '0');

  // Variantes para la aparición escalonada de cada número
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // Contenedor principal relativo para poder posicionar las flores detrás
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      
      {/* 1. TÍTULO "FALTAN" ANIMADO DESDE ARRIBA */}
      <motion.h2 
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-serif text-5xl mb-8 wedding-sage absolute top-0"
      >
        Faltan
      </motion.h2>

      {/* 2. IMAGEN DE FLORES DE FONDO ANIMADA */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        src="/flores.png" 
        alt="Decoración floral" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] object-contain z-10 opacity-90"
      />

      {/* CONTENEDOR DEL CONTADOR ANIMADO */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white px-10 py-6 md:px-16 md:py-8 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10"
      >
        
        {/* CONTENEDOR CON ANIMACIÓN EN CASCADA PARA LOS NÚMEROS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-8 md:gap-12 justify-center items-center"
        >
          {/* DÍAS */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-serif text-[#d4a395]">
              {formatTime(timeLeft.days)}
            </span>
            <span className="text-sm md:text-base font-serif mt-1 text-[#c2968a]">
              Días
            </span>
          </motion.div>
          
          {/* HORAS */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-serif text-[#d4a395]">
              {formatTime(timeLeft.hours)}
            </span>
            <span className="text-sm md:text-base font-serif mt-1 text-[#c2968a]">
              Hrs
            </span>
          </motion.div>
          
          {/* MINUTOS */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-serif text-[#d4a395]">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="text-sm md:text-base font-serif mt-1 text-[#c2968a]">
              Mins
            </span>
          </motion.div>

          {/* SEGUNDOS */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-serif text-[#d4a395]">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="text-sm md:text-base font-serif mt-1 text-[#c2968a]">
              Segs
            </span>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}