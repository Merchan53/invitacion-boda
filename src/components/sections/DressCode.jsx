import { motion } from "framer-motion";

import flowers from "../../assets/images/Pink_Flowers.png";
import woman from "../../assets/images/mujer.png";
import man from "../../assets/images/hombre.png";
import ReservedColors from "../ui/ReservedColors";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

const flowerAnimation = (side = "left") => ({
  initial: {
    opacity: 0,
    x: side === "left" ? -40 : 40,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut",
  },
});

function DressCard({
  title,
  adjective,
  description,
  image,
  flowerSide = "left",
}) {
  const isLeft = flowerSide === "left";

  return (
    <div className="mt-20">
      {/* Imagen */}
      <div className="relative flex justify-center h-56">
        <motion.img
          {...fadeUp}
          src={image}
          alt={title}
          className="w-32 h-60 md:w-40 md:h-64 object-contain pointer-events-none"
        />
      </div>

      {/* Título */}
      <div className="relative flex justify-center items-center mt-6">
        <motion.img
          {...flowerAnimation(flowerSide)}
          src={flowers}
          alt=""
          className={`
            absolute
            top-1/2
            -translate-y-1/2
            w-52
            h-52
            md:w-48
            md:h-48
            object-contain
            pointer-events-none
            ${
              isLeft
                ? "-left-24"
                : "-right-24 scale-x-[-1]"
            }
          `}
        />

        <h2 className="font-script text-wedding-gold text-5xl tracking-wide drop-shadow-sm text-center">
          {title}
        </h2>
      </div>

      {/* Texto */}
      <motion.div
        {...fadeUp}
        className="flex flex-col items-center mt-6"
      >
        <h3 className="font-serif text-3xl text-wedding-sage font-semibold">
          {adjective}
        </h3>

        <p className="mt-3 font-serif text-xl text-wedding-text text-center leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default function DressCode() {
  return (
    <section className="py-20 px-8 border-b border-wedding-rose/20 bg-wedding-rose/5">
      {/* Header */}
      <motion.div
        {...fadeUp}
        className="flex flex-col items-center text-center"
      >
        <h2 className="font-script text-wedding-gold text-5xl md:text-6xl tracking-wide drop-shadow-sm">
          Código de Vestuario
        </h2>

        <p className="mt-3 font-serif text-3xl text-wedding-text">
          Formal
        </p>
      </motion.div>

      {/* Damas */}
      <DressCard
        title="Damas"
        adjective="Hermosas"
        description={
          <>
            Diseños discretos evitando escotes,
            <br />
            prendas cortas o ajustadas.
          </>
        }
        image={woman}
        flowerSide="left"
      />

      {/* Hombres */}
      <DressCard
        title="Hombres"
        adjective="Elegantes"
        description={
          <>
            Traje formal
            <br />
            con o sin corbata.
          </>
        }
        image={man}
        flowerSide="right"
      />
      <ReservedColors/>
    </section>
  );
}