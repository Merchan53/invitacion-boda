import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

function ColorCard({ color, label }) {
  return (
    <motion.div
      {...fadeUp}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex flex-col items-center"
    >
      <div
        className="w-24 h-24 md:w-28 md:h-28 rounded-md shadow-xl border border-gray-200"
        style={{ backgroundColor: color }}
      />

      <span className="mt-3 font-serif text-lg text-wedding-text">
        {label}
      </span>
    </motion.div>
  );
}

export default function ReservedColors() {
  return (
    <section className="py-20 px-8 border-b border-wedding-rose/20 bg-white">
      {/* Título */}
      <motion.div
        {...fadeUp}
        className="flex flex-col items-center text-center rounded-4xl mt-4"
      >
        <h2 className="font-script text-5xl md:text-6xl text-wedding-rose tracking-wide drop-shadow-sm">
          Colores Reservados
        </h2>

        <p className="mt-8 max-w-lg font-serif text-2xl leading-relaxed text-wedding-sage">
          Los colores <strong>Blanco</strong> y{" "}
          <strong>Verde Salvia</strong> han sido reservados
          exclusivamente para los novios.
        </p>
      </motion.div>

      {/* Colores */}
      <motion.div
        {...fadeUp}
        className="flex justify-center items-center gap-8 mt-14"
      >
        <ColorCard
          color="#FFFFFF"
          label="Blanco"
        />

        <ColorCard
          color="#B2AC88"
          label="Verde Salvia"
        />
      </motion.div>
      {/* Colores */}
      <motion.div
        {...fadeUp}
        className="flex justify-center items-center gap-8 mt-14"
      >
        <ColorCard
          color="#C89A9B"
          label="Rosa viejo"
        />

        <ColorCard
          color="#F7E6CA"
          label="Color champan"
        />
      </motion.div>


      {/* Nota */}
      <motion.p
        {...fadeUp}
        className="mt-12 max-w-md mx-auto text-center font-serif text-lg italic text-wedding-text/80 leading-relaxed"
      >
        Gracias por acompañarnos y por respetar esta pequeña petición.
        <br />
        <span className="text-wedding-gold">
          ¡Su presencia es el mejor regalo!
        </span>
      </motion.p>
    </section>
  );
}