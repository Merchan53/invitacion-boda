import Card from "../ui/Card";

export default function Details() {
  const CEREMONY_MAP = "https://www.google.com/maps/place/7%C2%B050'12.8%22N+72%C2%B016'45.5%22W/@7.836882,-72.2818869,17z/data=!3m1!4b1!4m4!3m3!8m2!3d7.836882!4d-72.279312?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D";
  const PARTY_MAP = "https://www.google.com/maps?q=7.831455,-72.281609"; // Reemplaza con la URL real
  return (
    <section className="py-24">
      <Card
        title="Ceremonia"
        button={
          <a
            href={CEREMONY_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wedding-rose text-white px-10 py-4 rounded-2xl text-xl transition hover:scale-105"
          >
            Ver mapa
          </a>
        }
      >
        <h3 className="font-serif text-4xl text-wedding-sage">
          IGLESIA CRISTIANA 
          <br />
          EL SHADDAI
        </h3>

        <p className="font-serif text-2xl text-wedding-text mt-6">
          Peribeca, Bella Vista,
          <br />
          Hacienda Diaz, lote E-11
        </p>

        <p className="font-serif text-4xl text-wedding-sage mt-10">2:00 p.m.</p>
      </Card>

      <Card
        title="Recepción"
        button={
          <a
            href={PARTY_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wedding-rose text-white px-10 py-4 rounded-2xl text-xl transition hover:scale-105"
          >
            Ver mapa
          </a>
        }
      >
        <h3 className="font-serif text-4xl text-wedding-sage">
          CLUB RECREACIONAL
          <br />
          BLAFUE
        </h3>

        <p className="font-serif text-2xl text-wedding-text mt-6">
          Av. Principal Bella Vista,
          <br />
           Peribeca, Táchira, Venezuela
        </p>

        <p className="font-serif text-4xl text-wedding-sage mt-10">4:00 p.m.</p>
      </Card>
    </section>
  );
}
