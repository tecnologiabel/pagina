import Link from "next/link";

export default function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Biothermics">
      <img src={dark ? "/brand/logo-biothermics-principal.png" : "/brand/logo-biothermics-secundario.png"} alt="Biothermics" className="h-12 w-auto min-w-[150px] object-contain" />
      <span className={`hidden font-heading text-xs ${dark ? "text-brand-blue" : "text-white"} sm:block`}>Protegemos la vida</span>
    </Link>
  );
}
