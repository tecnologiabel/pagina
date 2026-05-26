import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  children?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description, center, children }: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p> : null}
      <h2 className="font-heading text-3xl font-extrabold text-brand-blue md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-700 md:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
