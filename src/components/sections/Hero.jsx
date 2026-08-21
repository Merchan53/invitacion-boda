import { useLottie } from "lottie-react";
import { motion } from "framer-motion";

import heartlottie from "../../assets/lottie/Hearth.json";
// Asegúrate de tener la imagen correcta en esta ruta
import heroImage from "../../../public/Imagenes/Imagen miguel con aquila compromiso.png"; 

// Subcomponente para renderizar el Lottie sin repetir código
const Heartlo = ({ className }) => {
  const { View } = useLottie({
    animationData: heartlottie,
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" }
  });
  return <div className={className}>{View}</div>;
};

// 1. Definimos las variantes de animación para la entrada cinemática de la IMAGEN
// (Estas son tus variantes exactas, ¡quedan genial!)
// Variantes con entrada cinemática + parpadeo/respiración continuo en la IMAGEN
const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.15 
  },
  visible: { 
    // Secuencia de opacidad (parpadeo) y escala (pulso cinemático)
    opacity: [1, 0.75, 1],
    scale: [1, 1.04, 1],
    transition: { 
      duration: 5,            // Duración de cada ciclo de parpadeo
      ease: "easeInOut",        // Transición suave
      repeat: Infinity,         // Repetición continua
      repeatType: "reverse",    // Flujo continuo sin cortes
      delay: 0.6               // Retraso inicial de entrada
    }
  }
};

export default function Hero({ isOpen }) {
  return (
    <section className="min-h-screen relative flex flex-col bg-white overflow-hidden">
      
      {/* 1. SECCIÓN SUPERIOR: Foto y Ola */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        
        {/* FOTO CON EFECTO CINEMÁTICO APLICADO */}
        <motion.img
          // Usamos las nuevas variantes que definiste
          variants={imageVariants}
          // Controlamos la animación con la prop isOpen
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          src={heroImage}
          alt="Miguel & Tamara"
          className="w-full h-full object-cover object-center"
        />

        {/* DIVIDER ONDULADO - Mantenemos tu diseño original */}
        <div className="absolute bottom-0 w-full left-0 z-10 translate-y-[1px]">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto fill-white drop-shadow-sm"
          >
            <path d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* CORAZÓN ANIMADO - Mantenemos tu animación original */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, scaleX: -1 }}
          animate={isOpen ? { opacity: 0.9, scale: 1, scaleX: -1 } : { opacity: 0, scale: 0.5, scaleX: -1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="absolute -bottom-6 -right-6 w-40 h-40 md:w-48 md:h-48 pointer-events-none z-20"
        >
          <Heartlo className="w-full h-full" />
        </motion.div>
      </div>

      {/* 2. SECCIÓN INFERIOR: Texto - Mantenemos tus estilos y animaciones */}
      <div className="relative pt-8 pb-5 px-6 flex-grow flex flex-col items-center justify-center z-20">
        
        {/* NOMBRES */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          // Ajustado el nombre a Tamara, según la imagen
          className="font-script text-wedding-gold text-6xl md:text-7xl mb-6 tracking-wide drop-shadow-sm text-center mt-4"
        >
          Miguel Angel <br/> & <br/> Tamara Aquila 
        </motion.h1>

        {/* FECHA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex items-baseline justify-center w-full max-w-md mx-auto text-wedding-sage font-serif translate-x-2 mb-2"
        >
          <div className="w-36 text-center">
            <span className="text-xl md:text-2xl uppercase tracking-widest">
              Octubre
            </span>
          </div>

          <span className="text-3xl font-light text-wedding-rose/50 mx-2">|</span>

          <span className="text-6xl md:text-7xl font-semibold mx-3">
            10
          </span>

          <span className="text-3xl font-light text-wedding-rose/50 mx-2">|</span>

          <div className="w-36 text-center">
            <span className="text-xl md:text-2xl tracking-widest">
              2026
            </span>
          </div>
        </motion.div>

        {/* TEXTO INFERIOR Y VERSÍCULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-serif text-wedding-gold text-4xl md:text-5xl mb-4 tracking-wide drop-shadow-sm text-center mt-5">
            ¡Nos casamos!
          </h1>
          
          <p className="text-base md:text-lg opacity-80 max-w-[80%] md:max-w-lg mx-auto text-center mb-3">
            “El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor.”
          </p>
          
          <p className="text-base md:text-lg opacity-80 mx-auto text-center">
            <strong>Corintios 13:4-5</strong>
          </p>
        </motion.div>
      
      </div>
    </section>
  );
}