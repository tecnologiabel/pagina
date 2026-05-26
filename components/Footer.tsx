import { CONTACT, NAV } from "@/lib/constants";
import BrandLogo from "./BrandLogo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blue py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div><BrandLogo /><p className="mt-3 text-sm">Protegemos la vida de tus productos.</p></div>
        <div><h3 className="font-heading font-bold">Navegación</h3><ul className="mt-3 space-y-1 text-sm">{NAV.map((n)=><li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul></div>
        <div className="text-sm"><h3 className="font-heading font-bold">Contacto</h3><p className="mt-3">{CONTACT.email}</p><p>{CONTACT.phone} · {CONTACT.cell}</p><p>{CONTACT.address}</p></div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-300">© 2025 Biothermics de Colombia. Todos los derechos reservados.</p>
    </footer>
  );
}
