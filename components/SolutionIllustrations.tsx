import { ReactNode } from "react";

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-brand-lightAlt bg-white p-5 shadow-sm">
      <div className="mb-4 h-32 w-full rounded-xl bg-brand-light p-3">{children}</div>
      <h3 className="font-heading text-xl font-bold text-brand-blue">{title}</h3>
    </article>
  );
}

export default function SolutionIllustrations() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card title="Cajas térmicas"><svg viewBox="0 0 220 110" className="h-full w-full"><rect x="25" y="38" width="110" height="55" rx="8" fill="#0D2B51"/><rect x="35" y="25" width="90" height="18" rx="5" fill="#50ACE4"/><rect x="145" y="48" width="50" height="38" rx="6" fill="#EF2E33"/></svg></Card>
      <Card title="Gel refrigerante"><svg viewBox="0 0 220 110" className="h-full w-full"><rect x="25" y="26" width="170" height="60" rx="14" fill="#50ACE4"/><circle cx="65" cy="56" r="10" fill="#fff"/><circle cx="95" cy="56" r="10" fill="#fff"/><circle cx="125" cy="56" r="10" fill="#fff"/></svg></Card>
      <Card title="Maletín CarryBio"><svg viewBox="0 0 220 110" className="h-full w-full"><rect x="45" y="32" width="130" height="58" rx="10" fill="#0D2B51"/><rect x="92" y="20" width="35" height="14" rx="4" fill="#EF2E33"/><path d="M45 60h130" stroke="#50ACE4" strokeWidth="4"/></svg></Card>
      <Card title="Laboratorio"><svg viewBox="0 0 220 110" className="h-full w-full"><rect x="20" y="75" width="180" height="8" fill="#0D2B51"/><path d="M70 30v26l-14 24h38l-14-24V30" fill="#50ACE4"/><circle cx="152" cy="52" r="22" fill="#EF2E33"/></svg></Card>
      <Card title="Trazabilidad"><svg viewBox="0 0 220 110" className="h-full w-full"><rect x="28" y="22" width="72" height="66" rx="8" fill="#0D2B51"/><rect x="38" y="34" width="52" height="8" fill="#50ACE4"/><rect x="38" y="50" width="52" height="8" fill="#50ACE4"/><rect x="120" y="30" width="72" height="48" rx="8" fill="#EF2E33"/></svg></Card>
      <Card title="Cadena de frío"><svg viewBox="0 0 220 110" className="h-full w-full"><path d="M30 58h160" stroke="#0D2B51" strokeWidth="8" strokeLinecap="round"/><circle cx="55" cy="58" r="12" fill="#50ACE4"/><circle cx="110" cy="58" r="12" fill="#50ACE4"/><circle cx="165" cy="58" r="12" fill="#50ACE4"/></svg></Card>
    </div>
  );
}
