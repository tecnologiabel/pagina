import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-brand-blue">¿Necesitas una cotización?</h1>
      <p className="mt-2">Estamos para ayudarte.</p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-brand-light p-6 text-sm">
          <p><b>Correo:</b> {CONTACT.email}</p>
          <p><b>Teléfono:</b> {CONTACT.phone}</p>
          <p><b>Celular:</b> {CONTACT.cell}</p>
          <p><b>Sitio web:</b> {CONTACT.website}</p>
          <p><b>Dirección:</b> {CONTACT.address}</p>

          <div className="mt-5 overflow-hidden rounded-xl border border-brand-lightAlt">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4595166251056!2d-74.15048252418671!3d4.6899272417491105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ace5dea95db%3A0x6da8c00284da6c39!2sBiothermics!5e0!3m2!1ses!2sco!4v1779833218227!5m2!1ses!2sco"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Biothermics"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
