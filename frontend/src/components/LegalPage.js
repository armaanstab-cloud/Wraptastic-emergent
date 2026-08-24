import React from "react";
import { Reveal } from "@/components/Reveal";

// Shared shell for the legal pages so Terms and Privacy stay visually identical.
export const LegalPage = ({ eyebrow, title, intro, updated, children }) => (
  <div>
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[var(--w-black-975)]">
      <div className="container-w relative z-10">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--w-red-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">{eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">{intro}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">Last updated: {updated}</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
      <div className="container-w max-w-4xl space-y-6">{children}</div>
    </section>
  </div>
);

export const LegalSection = ({ id, icon: Icon, title, children }) => (
  <Reveal>
    <div id={id} className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 sm:p-9 scroll-mt-32">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--w-red-accent)]/10 border border-[var(--w-red-accent)]/25 text-[var(--w-red-glow)]">
          <Icon size={20} />
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-chrome">{title}</h2>
      </div>
      <div className="space-y-4 text-[var(--w-silver-500)] leading-relaxed">{children}</div>
    </div>
  </Reveal>
);

export const Clause = ({ heading, children }) => (
  <div>
    <h3 className="text-white font-bold mb-1.5">{heading}</h3>
    <p>{children}</p>
  </div>
);
