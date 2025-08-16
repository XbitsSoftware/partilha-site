"use client";

export default function GoogleMap() {
  return (
    <section className="h-96 w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.9772170739124!2d-49.25455750881869!3d-25.407860922421904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce427d255029d%3A0xf1eaa133c8dc30a1!2sR.%20Dr.%20Manoel%20Pedro%2C%20365%20-%204%20-%20Cabral%2C%20Curitiba%20-%20PR%2C%2080035-030!5e0!3m2!1spt-BR!2sbr!4v1754669292643!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
