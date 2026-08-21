import { motion } from "framer-motion";

// --- Componentes de Iconos SVG Locales (para no depender de librerías externas) ---

const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const DressIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 4h-8a1 1 0 0 0-1 1v2h10V7a1 1 0 0 0-1-1zM5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10H5zm6.1 2.3l.9-.9.9.9.9-.9.9.9.9-.9.9.9.9-.9L18 12.3V20H6v-7.7l.9-.9.9.9.9-.9.9.9.9-.9.9.9.9-.9.9.9zm2.8 3.5l-.9-.9-.9.9-.9-.9-.9.9-.9-.9-.9.9-.9-.9-.9.9V18h12v-2.2l-.9-.9-.9.9-.9-.9-.9.9-.9-.9-.9.9-.9-.9-.9.9z" />
  </svg>
);

const TuxedoIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-8.2 2H10.2L9.1 11h5.8l-1.1-1zm-.7 2h-2.2L10.1 13h3.8l-.9-1zm-1.1 2h-1.2L11 15h2l-.9-1zM18 10h-2v12H8V10H6v12h12V10z" />
  </svg>
);

// --- Variantes de Animación Reutilizables ---

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// --- Componente Principal RSVP ---

export default function RSVP() {
  const WA_NOVIA = "https://wa.me/573219370678";
  const WA_NOVIO = "https://wa.me/573145572775";

  return (
    <section className="py-5 px-6 md:px-8 text-center">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl">
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-wedding-rose/10 text-wedding-rose">
            <WhatsAppIcon className="h-8 w-8" />
          </div>
        </div>

        <h2 className="font-script text-5xl text-wedding-rose drop-shadow-sm md:text-7xl tracking-wide">
          Confirmar Asistencia
        </h2>

        <div className="mx-auto mt-6 max-w-xl font-serif text-xl leading-relaxed text-wedding-text md:text-2xl">
          <p className="mb-2">¿Vienes a celebrar con nosotros?</p>
          <p>Confírmanos con un clic y te esperamos con amor.</p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <motion.a
            href={WA_NOVIA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-wedding-rose px-6 py-3 text-base font-medium text-white shadow-[0_12px_25px_rgba(195,165,155,0.2)] transition-shadow hover:shadow-[0_16px_30px_rgba(195,165,155,0.3)] md:px-8 md:text-lg"
          >
            <DressIcon className="h-6 w-6" />
            <span className="font-serif">Confirmar a la Novia</span>
          </motion.a>

          <motion.a
            href={WA_NOVIO}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-wedding-rose/30 bg-white px-6 py-3 text-base font-medium text-wedding-text shadow-[0_12px_25px_rgba(74,74,74,0.05)] transition-shadow hover:shadow-[0_16px_30px_rgba(74,74,74,0.1)] md:px-8 md:text-lg"
          >
            <TuxedoIcon className="h-6 w-6 text-wedding-rose" />
            <span className="font-serif">Confirmar al Novio</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}