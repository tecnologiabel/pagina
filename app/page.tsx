import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-blue text-white">
        <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl font-extrabold md:text-6xl">Protegemos la vida de tus productos</h1>
            <p className="mt-4 text-lg">Soluciones térmicas para conservar productos sensibles a la temperatura durante transporte, almacenamiento y distribución.</p>
            <p className="mt-3 text-slate-200">En Biothermics desarrollamos soluciones para cadena de frío y productos termolábiles, integrando embalajes térmicos, refrigerantes, sistemas reutilizables, validación y trazabilidad.</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href="/contacto" className="rounded-full bg-brand-red px-6 py-3 font-bold">Solicitar cotización</Link><Link href="/catalogo" className="rounded-full border border-white px-6 py-3 font-bold">Ver catálogo</Link></div>
          </div>
          <img src="/images/hero-lab.jpg" alt="Laboratorio" className="rounded-3xl object-cover shadow-card" />
        </div>
      </section>
    </main>
  );
}
