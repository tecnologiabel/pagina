"use client";
import Link from "next/link";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-brand-sky/20 bg-brand-blue/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
        <Link href="#inicio"><BrandLogo /></Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => <a key={item.href} href={item.href} className="font-heading text-sm font-semibold text-white hover:text-brand-sky">{item.label}</a>)}
          <a href="#contacto" className="rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-white">Solicitar asesoría</a>
        </nav>
        <button aria-label="Abrir menú" className="md:hidden text-white" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <div className="border-t border-white/20 bg-brand-blue px-4 pb-5 md:hidden">{NAV_ITEMS.map((item)=><a key={item.href} href={item.href} className="block py-2 text-white" onClick={()=>setOpen(false)}>{item.label}</a>)}<a href="#contacto" className="mt-2 inline-block rounded-full bg-brand-red px-5 py-2 text-white">Solicitar asesoría</a></div>}
    </header>
  );
}
