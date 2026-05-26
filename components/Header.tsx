"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/constants";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-brand-blue text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <BrandLogo />
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">☰</button>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => <Link key={item.href} href={item.href} className="font-heading text-sm font-semibold hover:text-brand-sky">{item.label}</Link>)}
          <Link href="/contacto" className="rounded-full bg-brand-red px-4 py-2 text-sm font-bold">Solicitar cotización</Link>
        </nav>
      </div>
      {open && <nav className="space-y-2 border-t border-white/20 px-4 py-3 md:hidden">{NAV.map((item)=><Link key={item.href} href={item.href} className="block" onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}
