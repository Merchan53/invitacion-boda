import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import flowers from "../../assets/images/Pink_Flowers.png";
import loveHeart from "../../assets/lottie/love_hearts.json";

// Subcomponente para renderizar el Lottie
const LoveHeart = ({ className }) => {
  const { View } = useLottie({
    animationData: loveHeart,
    loop: true,
    autoplay: true,
    style: { width: "100%", height: "100%" },
  });

  return <div className={className}>{View}</div>;
};

export default function Blessing() {
  return (
    <section className="py-8 text-center relative overflow-hidden">
      {/* CONTENEDOR DE TEXTO CON ANIMACIÓN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-8 relative z-10"
      >
        <h2 className="font-serif text-wedding-gold text-3xl mb-6 tracking-wide drop-shadow-sm">
          Con la bendición de Dios <br /> Y de nuestros padres:
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-col"
        >
          <h2 className="font-sans text-xl">
            Jose Luis Sequera y Liseth de Sequera
          </h2>
          <h1 className="font-script text-3xl my-2">
            <strong>&</strong>
          </h1>
          <h2 className="font-sans text-xl">
            Luis Jesús Alvarado y Cecilia de Alvarado
          </h2>
        </motion.div>
      </motion.div>

      {/* CONTENEDOR DE DECORACIONES ANIMADO */}
      <div className="relative w-full h-40 mt-6">
        {/* Flor Izquierda: Desliza desde la izquierda */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          src={flowers}
          alt="Decoración de flores izquierda"
          className="absolute top-1/2 -translate-y-1/2 -left-20 w-52 h-52 md:w-48 md:h-48 object-contain"
        />

        {/* Corazón en el Centro: Crece sutilmente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 pointer-events-none z-0"
        >
          <LoveHeart className="w-full h-full" />
        </motion.div>

        {/* Flor Derecha: Desliza desde la derecha y mantiene el espejo (scaleX: -1) */}
        <motion.img
          initial={{ opacity: 0, x: 40, scaleX: -1 }}
          whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          src={flowers}
          alt="Decoración de flores derecha"
          className="absolute top-1/2 -translate-y-1/2 -right-20 w-52 h-52 md:w-48 md:h-48 object-contain"
        />
      </div>
      {/**Invitacion : cuando el amor viene de Dios nada ni nadie  lo puede apagar por eso , hemos decidido dar el próximo paso y te invitamos a que nos acompañes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-8 py-4"
      >
        <p className="font-serif text-2xl text-wedding-rose text-center">
          cuando el amor viene de <strong>Dios</strong> nada ni nadie lo puede
          apagar por eso , hemos decidido dar el próximo paso y te invitamos a
          que nos acompañes
        </p>
      </motion.div>
    </section>
  );
}
