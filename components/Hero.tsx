export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[80vh] overflow-hidden bg-thermal">
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 700" fill="none"><path d="M0 580C250 480 420 660 700 540C980 420 1150 590 1440 500V700H0V580Z" fill="#50ACE4"/></svg>
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-brand-sky/50 bg-white/10 px-4 py-1 text-sm font-semibold text-brand-sky">Cadena de frío · Colombia</p>
          <h1 className="font-heading text-4xl font-extrabold text-white md:text-6xl">Protegemos la vida de tus productos</h1>
          <p className="mt-5 text-lg text-slate-100">Soluciones de cadena de frío diseñadas para conservar la integridad de productos sensibles a la temperatura.</p>
          <p className="mt-4 text-slate-200">En Biothermics de Colombia diseñamos, fabricamos y comercializamos soluciones térmicas confiables para sectores donde la temperatura no puede dejarse al azar.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#contacto" className="rounded-full bg-brand-red px-6 py-3 font-heading font-bold text-white">Solicitar asesoría</a><a href="#soluciones" className="rounded-full border border-white px-6 py-3 font-heading font-bold text-white">Conocer soluciones</a></div>
        </div>
        <div className="rounded-3xl border border-brand-sky/30 bg-white/10 p-8 text-white shadow-card backdrop-blur">
          <p className="font-heading text-2xl font-bold">Control térmico industrial</p>
          <ul className="mt-6 space-y-4 text-slate-100"><li>• Cadena de frío</li><li>• Control térmico</li><li>• Soluciones confiables</li></ul>
        </div>
      </div>
    </section>
  );
}
