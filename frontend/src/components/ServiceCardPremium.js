import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const ServiceCardPremium = ({ service }) => {
  return (
    <Link
      to="/services"
      data-testid={`service-card-${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl hairline bg-[var(--w-charcoal-900)] card-sheen transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--w-charcoal-900)] via-transparent to-transparent" />
        {service.highlight && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--w-chrome-300)] border border-white/15">
            <ShieldCheck size={13} className="text-[var(--w-red-glow)]" /> {service.highlight}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl text-white tracking-[-0.01em]">{service.name}</h3>
        <p className="mt-1.5 text-sm text-[var(--w-silver-500)] leading-relaxed">{service.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/60 border border-white/10">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          {service.price ? (
            <span className="font-mono text-sm text-[var(--w-chrome-300)]">{service.price}</span>
          ) : (
            <span className="font-mono text-sm text-[var(--w-silver-500)]">Get a Quote</span>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-white transition-colors">
            Details
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};
