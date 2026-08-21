import { motion } from "framer-motion";

// He cambiado la URL por una imagen de Unsplash más confiable para asegurarme de que cargue.
// Una vez que verifiques que funciona, reemplázala por tu imagen real:
// import separadorImg from "../../assets/images/separador-2.jpg";

export default function ImageSeparator() {
  
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
    <section className="w-full bg-white pb-10 overflow-hidden">
      <div className="max-w-xl mx-auto px-4 relative">
        
        {/* --- DIVISORES ONDULADOS SUPERPUESTOS --- */}
        
        {/* Divisor Ondulado SUPERIOR: Color de fondo y curva hacia abajo */}
        <div className="absolute top-0 w-full left-0 z-10 -translate-y-[1px]">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto fill-white drop-shadow-sm"
          >
            <path d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L0,0Z"></path>
          </svg>
        </div>

        {/* CONTENEDOR DE LA IMAGEN CON EFECTO DE CORTES (Overflow Hidden) */}
        <div className="overflow-hidden shadow-2xl relative aspect-2/4 z-0 h-full w-full">
          
          {/* CONTENEDOR DE RESPIRACIÓN (Loop infinito suave) */}
          <motion.div
            className="w-full h-full"
            animate={{
              opacity: [1, 0.75, 1], // Keyframes de respiración
              transition: {
                duration: 5, // Muy lento y majestuoso
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: 2.1 // Empieza tras la animación de entrada de la imagen (1.8 + 0.3)
              }
            }}
          >
            {/* FOTO CON EFECTO CINEMÁTICO DE ENTRADA (Una sola vez) */}
            <motion.img
              src='../../../public/Imagenes/imagen miguel con aquila  iglesia.png'
              alt="Decoración boda"
              className="w-full h-full object-contain"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible" // Se activa al hacer scroll
              viewport={{ once: true, amount: 0.4 }} // Se ejecuta una vez cuando el 40% es visible
            />
          </motion.div>
        </div>

        {/* Divisor Ondulado INFERIOR: El mismo que el superior pero invertido en Y */}
        <div className="absolute bottom-0 w-full left-0 z-10 translate-y-[1px]">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto fill-white drop-shadow-sm scale-y-[-1]"
          >
            <path d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L0,0Z"></path>
          </svg>
        </div>

      </div>
    </section>
  );
}