import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SERVICES, VEHICLE_TYPES, BRANDS, LINKS, ASSETS } from "@/lib/site";

const PageHeader = ({ eyebrow, title, sub, poster }) => (
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[var(--w-black-975)]">
    <div className="absolute inset-0 opacity-30">
      <img src={poster} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
    </div>
    <div className="container-w relative z-10">
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--w-red-accent)]" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">{eyebrow}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">{sub}</p>}
      </Reveal>
    </div>
  </section>
);

export default function Services() {
  useEffect(() => {
    document.title = "Services | Wraptastic Auto Customs";
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Customization & Protection"
        title="Services"
        sub="Premium wraps, protection, styling and performance. Most work is quote based because pricing depends on your vehicle, its size, condition, materials and the scope of work."
        poster={ASSETS.corvetteGreen}
      />

      <section className="bg-[var(--w-black-950)] py-16 lg:py-24">
        <div className="container-w space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                id={s.slug}
                data-testid={`service-section-${s.slug}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-2xl hairline bg-[var(--w-charcoal-900)] overflow-hidden"
              >
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/11] overflow-hidden group">
                    <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--w-charcoal-900)]/70 to-transparent" />
                  </div>
                </div>
                <div className="lg:col-span-6 p-6 sm:p-10">
                  <h2 className="font-display text-2xl sm:text-3xl text-white tracking-[-0.01em]">{s.name}</h2>
                  <p className="mt-2 text-[var(--w-silver-500)]">{s.tagline}</p>

                  {s.tiers && (
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {s.tiers.map((t) => (
                        <div key={t.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                          <p className="text-xs text-white/60">{t.label}</p>
                          <p className="font-mono text-sm text-white mt-1">{t.price}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/60 border border-white/10">
                        <Check size={12} className="text-[var(--w-red-glow)]" /> {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <div>
                      {s.price ? (
                        <p className="font-mono text-lg text-white">{s.price}</p>
                      ) : (
                        <p className="font-mono text-base text-[var(--w-silver-500)]">Get a Quote</p>
                      )}
                      <p className="text-xs text-white/40 mt-1">{s.priceNote}</p>
                    </div>
                    <Link to="/contact" data-testid={`service-quote-${s.slug}`} className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[var(--w-red-accent)] text-white text-sm font-500 hover:bg-[var(--w-red-deep)] transition-colors shrink-0">
                      Get a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vehicle types */}
      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/10">
        <div className="container-w">
          <SectionHeading eyebrow="Every Kind Of Build" title="Vehicles We Work With" className="mb-10" />
          <div className="flex flex-wrap gap-3">
            {VEHICLE_TYPES.map((v, i) => (
              <Reveal key={v} delay={i * 0.03}>
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--w-chrome-300)]">{v}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--w-silver-500)]">Other vehicle types welcome upon request. Pricing varies by vehicle type and scope of work.</p>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-[var(--w-black-950)] py-16 lg:py-20">
        <div className="container-w text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)] mb-8">Materials & Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {BRANDS.map((b) => (
              <span key={b} className="font-display text-xl sm:text-2xl text-white/40 hover:text-white transition-colors">{b}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--w-silver-500)]">Special materials and brands are available upon request.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--w-black-975)] py-20 border-t border-white/10">
        <div className="container-w text-center max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white">Not sure what your vehicle needs?</h2>
          <p className="mt-3 text-[var(--w-silver-500)]">Send us the details and we will recommend the right approach and give you a quote.</p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors">Get a Quote <ArrowRight size={18} /></Link>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"><MessageCircle size={18} className="text-[#25D366]" /> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
