import { useState } from 'react';
import { motion } from 'motion/react';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen();
  };

  if (isDestroyed) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col pointer-events-none overflow-hidden">
      
      {/* TAPA SUPERIOR (Se desliza hacia arriba) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isOpen ? '-100%' : '0%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform' }}
        className="h-1/2 w-full  backdrop-blur-md border-b border-wedding-rose/30 flex items-end justify-center pb-6 pointer-events-auto"
      >
        <motion.h1 
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="font-serif text-5xl md:text-4xl text-wedding-text tracking-wider text-center"
        >
          Nuestra Boda
        </motion.h1>
      </motion.div>

      {/* BOTÓN CENTRAL (Sello) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.button
          animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.6 : 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="pointer-events-auto bg-wedding-gold text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs font-medium shadow-xl border border-white/20 cursor-pointer"
        >
          Abrir Invitación
        </motion.button>
      </div>

      {/* TAPA INFERIOR (Se desliza hacia abajo) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isOpen ? '100%' : '0%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform' }}
        onAnimationComplete={() => {
          if (isOpen) setIsDestroyed(true);
        }}
        className="h-1/2 w-full backdrop-blur-md border-t border-wedding-rose/30 flex items-start justify-center pt-6 pointer-events-auto"
      >
        <motion.p
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="font-sans text-xs uppercase tracking-widest text-wedding-text/60"
        >
          Haz clic para abrir
        </motion.p>
      </motion.div>

    </div>
  );
}