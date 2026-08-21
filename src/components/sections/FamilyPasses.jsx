import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GUESTS_DATA, DEFAULT_GUEST } from '../../data/guests';

export default function FamilyPasses() {
  // Extraemos la información de la URL de forma limpia
  const guest = useMemo(() => {
    if (typeof window === 'undefined') return DEFAULT_GUEST;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('f') || params.get('familia');

    if (!slug) return DEFAULT_GUEST;

    // Normalizamos a minúsculas por tolerancia a errores tipográficos
    const key = slug.toLowerCase();
    return GUESTS_DATA[key] || DEFAULT_GUEST;
  }, []);

  return (
    <section className="py-10 px-6 text-center bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md mx-auto border border-wedding-gold/30 rounded-2xl p-6 bg-wedding-bg/20 shadow-sm relative z-10"
      >
        {/* Etiqueta superior */}
        <span className="text-xs uppercase tracking-widest text-wedding-sage font-semibold">
          Invitación Especial
        </span>

        {/* Nombre de la familia / invitado */}
        <h3 className="font-serif text-wedding-gold text-2xl md:text-3xl mt-2 mb-4 font-medium">
          {guest.name}
        </h3>

        {/* Badge de cupos */}
        <div className="inline-flex items-center justify-center bg-white px-5 py-2 rounded-full shadow-md border border-wedding-gold/20 my-2">
          <span className="text-sm font-sans text-wedding-text">
            Pases reservados:{' '}
            <strong className="text-wedding-gold text-lg font-bold ml-1">
              {guest.passes} {guest.passes === 1 ? 'Lugar' : 'Lugares'}
            </strong>
          </span>
        </div>

        {/* Mensaje opcional */}
        {guest.note && (
          <p className="text-xs md:text-sm text-wedding-text/70 italic mt-3">
            "{guest.note}"
          </p>
        )}
      </motion.div>
    </section>
  );
}