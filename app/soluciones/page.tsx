import SolutionIllustrations from "@/components/SolutionIllustrations";

const solutions = [
  "Cadena de frío entre +2 °C y +8 °C",
  "Termolábiles entre +15 °C y +25 °C",
  "Sistema CarryBio",
  "Laboratorio BioEvidence",
  "Trazabilidad y equipos de medición",
];

export default function Soluciones() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-extrabold text-brand-blue">Soluciones</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700">
        Durante más de 22 años hemos dedicado nuestro trabajo a la investigación y desarrollo de soluciones térmicas que agregan valor a la cadena logística de nuestros clientes.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <article key={s} className="rounded-2xl border border-brand-lightAlt p-6">
            <h2 className="font-heading text-3xl font-bold text-brand-blue">{s}</h2>
            <p className="mt-2 text-slate-600">Soluciones confiables, socialmente responsables y alineadas a operaciones de alta exigencia.</p>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-3xl font-bold text-brand-blue">Visuales técnicos del portafolio</h2>
        <p className="mt-2 text-slate-600">Ilustraciones SVG nativas (reutilizables) para reforzar identidad visual de frío, logística y control térmico.</p>
        <div className="mt-6">
          <SolutionIllustrations />
        </div>
      </section>
    </main>
  );
}
