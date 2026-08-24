import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaPrimary, CtaWhatsApp, CtaChrome } from "@/components/Buttons";
import { SERVICES, VEHICLE_TYPES, BRANDS, ASSETS } from "@/lib/site";

const PageHeader = ({ eyebrow, title, sub, poster }) => (
  <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-[var(--w-black-975)]">
    <div className="absolute inset-0 opacity-30">
      <img src={poster} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
    </div>
    <div className="container-w relative z-10">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--w-red-accent)]" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">{eyebrow}</span>
        </div>
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-chrome">{title}</h1>
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
        <div className="container-w space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                id={s.slug}
                data-testid={`service-section-${s.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 items-stretch rounded-2xl hairline bg-[rgba(14,15,18,0.8)] overflow-hidden card-sheen transition-[border-color,box-shadow] duration-300 hover:border-[rgba(215,220,228,0.22)]"
              >
                {/* Image with the vehicle right next to the service name */}
                <div className={`relative lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-64 sm:h-80 lg:h-full min-h-[16rem] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.05]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-${i % 2 === 1 ? "l" : "r"} lg:from-transparent lg:via-transparent lg:to-[rgba(14,15,18,0.9)]`} />
                    <span className="absolute bottom-4 left-5 lg:hidden font-display text-3xl text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]">
                      {s.name}
                    </span>
                  </div>
                </div>

                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-display display-outline text-4xl sm:text-5xl leading-none select-none shrink-0" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="hidden lg:block font-display text-4xl xl:text-5xl text-chrome">{s.name}</h2>
                    <h2 className="lg:hidden font-display text-3xl text-chrome">{s.name}</h2>
                  </div>
                  <p className="mt-3 text-[var(--w-silver-500)] text-base">{s.tagline}</p>

                  {s.tiers && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {s.tiers.map((t) => (
                        <div key={t.label} className="rounded-xl bg-white/5 border border-white/10 p-3.5 transition-colors duration-200 hover:border-[var(--w-red-accent)]/40">
                          <p className="text-xs uppercase tracking-[0.1em] text-white/55">{t.label}</p>
                          <p className="font-mono text-sm text-white mt-1.5">{t.price}</p>
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

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div>
                      {s.price ? (
                        <span className="inline-flex items-center rounded-full border border-[var(--w-red-accent)]/35 bg-[var(--w-red-accent)]/10 px-4 py-1.5 font-mono text-sm text-white">
                          {s.price}
                        </span>
                      ) : (
                        <span className="font-mono text-base text-[var(--w-silver-500)]">Quote Based</span>
                      )}
                      <p className="text-xs text-white/40 mt-2">{s.priceNote}</p>
                    </div>
                    <span className="shrink-0">
                      <CtaPrimary to="/contact" size="sm" testId={`service-quote-${s.slug}`}>
                        Get a Quote <ArrowRight size={15} />
                      </CtaPrimary>
                    </span>
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
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-[var(--w-chrome-300)] transition-colors duration-200 hover:border-[var(--w-red-accent)]/40">{v}</span>
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
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {BRANDS.map((b) => (
              <span key={b} className="font-display text-2xl sm:text-3xl text-white/30 hover:text-white transition-colors duration-300">{b}</span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--w-silver-500)]">Special materials and brands are available upon request.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--w-black-975)] py-20 border-t border-white/10">
        <div className="container-w text-center max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl text-chrome">Not sure what your vehicle needs?</h2>
          <p className="mt-4 text-[var(--w-silver-500)]">Send us the details and we will recommend the right approach and give you a quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <CtaPrimary to="/contact" testId="services-cta-quote">Get a Quote <ArrowRight size={17} /></CtaPrimary>
            <CtaWhatsApp testId="services-cta-whatsapp">WhatsApp Us</CtaWhatsApp>
          </div>
        </div>
      </section>
    </div>
  );
}
