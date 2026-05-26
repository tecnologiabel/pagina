import { BRAND } from "@/lib/constants";

type Props = { dark?: boolean };

export default function BrandLogo({ dark }: Props) {
  const text = dark ? "text-brand-blue" : "text-white";
  return (
    <div className="flex min-w-[150px] items-center gap-3" aria-label={BRAND.name}>
      <div className="relative h-10 w-10 rounded-full bg-brand-blue">
        <div className="absolute inset-2 rounded-full border border-white/80" />
        <div className="absolute left-1 right-1 top-1/2 h-[2px] -translate-y-1/2 rounded bg-white/90" />
      </div>
      <div>
        <p className={`font-heading text-lg font-extrabold tracking-wide ${text}`}>BIOTHERMICS</p>
        <p className={`-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-brand-sky" : "text-brand-sky"}`}>DE COLOMBIA</p>
      </div>
    </div>
  );
}
