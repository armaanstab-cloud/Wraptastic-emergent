import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const ServiceCardPremium = ({ service }) => {
  return (
    <Link
      to={`/services#${service.slug}`}
      data-testid={`service-card-${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl hairline bg-[rgba(14,15,18,0.75)] backdrop-blur-sm card-sheen transition-[border-color,box-shadow,transform] duration-300 hover:border-[rgba(215,220,228,0.28)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-chrome)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          style={{ objectPosition: service.imagePos || "center" }}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,15,18,0.95)] via-transparent to-transparent" />
        {service.highlight && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--w-chrome-300)] border border-white/15">
            <ShieldCheck size={13} className="text-[var(--w-red-glow)]" /> {service.highlight}
          </span>
        )}
        <h3 className="absolute bottom-3 left-4 right-4 font-display text-2xl text-white leading-none drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]">
          {service.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-4">
        <p className="text-sm text-[var(--w-silver-500)] leading-relaxed">{service.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/60 border border-white/10">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          {service.price ? (
            <span className="inline-flex items-center rounded-full border border-[var(--w-red-accent)]/30 bg-[var(--w-red-accent)]/10 px-3 py-1 font-mono text-[12px] text-[var(--w-chrome-300)]">
              {service.price}
            </span>
          ) : (
            <span className="font-mono text-sm text-[var(--w-silver-500)]">Get a Quote</span>
          )}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 group-hover:text-white transition-colors duration-200">
            Details
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};
