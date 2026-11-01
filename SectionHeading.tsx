import type { ReactNode } from 'react';

type SectionHeadingProps = {
  id: string;
  number: string;
  title: string;
  children?: ReactNode;
};

export default function SectionHeading({ id, number, title, children }: SectionHeadingProps) {
  return (
    <header id={id} className="scroll-mt-28 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Section {number}</p>
      <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {children && <p className="max-w-3xl text-lg leading-[1.5] text-slate-600">{children}</p>}
    </header>
  );
}
