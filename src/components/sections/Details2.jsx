import Card from "../ui/Card";

export default function Details2() {
  const PARTY_MAP = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nuestra+Boda&dates=20271010T180000Z/20271011T030000Z&details=Acomp%C3%A1%C3%B1anos+a+celebrar+nuestra+boda.+Ceremonia%3A+Iglesia+Cristiana+El+Shaddai+%282%3A00+p.m.%29.+Recepci%C3%B3n%3A+Club+Recreacional+Blafue+%284%3A00+p.m.%29.&location=Peribeca%2C+T%C3%A1chira%2C+Venezuela"; // Reemplaza con la URL real
  return (
    <section className="py-10">
      <Card
        title="Regalos"
      >
        <h3 className="font-serif text-4xl text-wedding-sage">
          Lluvia de Sobres
        </h3>

        <p className="font-serif text-2xl text-wedding-text mt-6">
          Estamos muy emocionados de comenzar esta nueva etapa. 
          <br/>
          Si deseas hacernos un regalo, agradecemos tu contribución.
        </p>

        
      </Card>

      <Card
        title="Agendame"
        button={
          <a
            href={PARTY_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wedding-rose text-white px-10 py-4 rounded-2xl text-xl transition hover:scale-105"
          >
            Agendarme
          </a>
        }
      >
        <h3 className="font-serif text-4xl text-wedding-sage">
          Google Calendat
        </h3>

        <p className="font-serif text-2xl text-wedding-text mt-6 text-bold">
          Nuestra Boda 
          <br />
        Martes, 10 de Octubre 27.
        </p>
      </Card>
    </section>
  );
}
