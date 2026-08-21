import { motion } from "framer-motion";

import itinerary from "../../assets/images/itinerario.jpeg";

export default function Itinerary() {
  return (
    <section className="py-20 px-8 border-b border-wedding-rose/20">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="flex justify-center"
      >
        <img
          src={itinerary}
          alt="Itinerario de la boda"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}