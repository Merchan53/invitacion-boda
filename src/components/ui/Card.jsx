import { motion } from "framer-motion";
import pinkFlowers from "../../assets/images/Pink_Flowers.png";

export default function Card({ title, children, button }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        mx-6
        my-20
        flex justify-center   ← centra la tarjeta (opcional)
      "
    >
      {/* Flores decorativas (igual que antes) */}
      <img
        src={pinkFlowers}
        alt=""
        className="
          absolute
          -left-8
          -top-8
          w-28
          pointer-events-none
          z-20
        "
      />
      <img
        src={pinkFlowers}
        alt=""
        className="
          absolute
          -right-8
          -bottom-8
          w-28
          pointer-events-none
          z-20
        "
      />

      {/* 🎯 Tarjeta con forma de píldora y sombra mejorada */}
      <div
        className="
          relative
          w-full max-w-md   ← ancho controlado para que no se estire
          bg-white
          rounded-3xl       ← ¡forma de píldora!
          px-10 py-16
          text-center
          shadow-[0_20px_50px_rgba(0,0,0,0.12)]   ← sombra más pronunciada
          hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]   ← elevación al pasar el mouse
          transition-shadow duration-300
        "
      >
        <h2 className="font-script text-6xl text-wedding-rose mb-10">
          {title}
        </h2>

        {children}

        {button && (
          <div className="mt-12">
            {button}
          </div>
        )}
      </div>
    </motion.section>
  );
}