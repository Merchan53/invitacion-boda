import { motion } from "framer-motion";
const finalImage = "/Imagenes/imagen manos unidas anillos.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

export default function FinalPhoto() {
  return (
    <section className="bg-white px-6 py-16 md:px-8">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-xl uppercase tracking-[0.28em] text-wedding-rose/80">
          Gracias por compartir
        </p>

        <h2 className="mt-4 font-script text-5xl text-wedding-rose md:text-6xl tracking-wide drop-shadow-sm">
          Te esperamos
        </h2>

        <p className="mx-auto mt-4 max-w-lg font-serif text-xl leading-relaxed text-wedding-text md:text-2xl">
          Su presencia hará de este día algo aún más especial.
        </p>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
        className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-4xl border border-wedding-rose/20 bg-white p-3 shadow-[0_20px_50px_rgba(74,74,74,0.08)]"
      >
        <img
          src={finalImage}
          alt="Fotografía final de la boda"
          className="h-105 w-full rounded-3xl object-cover md:h-140"
        />
      </motion.div>

      <motion.div {...fadeUp} className="mt-8 text-center">
        <p className="font-script text-4xl text-wedding-gold md:text-5xl">Con amor</p>
        <p className="mt-2 font-serif text-xl text-wedding-text md:text-2xl mb-30 ">
          Miguel & Aquila
        </p>
        <p className="font-script text-sm text-wedding-gold">Hecho con amor por <br />Johann Merchan</p>
        
      </motion.div>
      
    </section>
  );
}
