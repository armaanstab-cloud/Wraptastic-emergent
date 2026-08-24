import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Wrench, Gauge } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { ScrollVehicleTransition } from "@/components/ScrollVehicleTransition";
import { ServiceCardPremium } from "@/components/ServiceCardPremium";
import { ReviewBelt } from "@/components/ReviewBelt";
import { WorkGalleryMasonry } from "@/components/WorkGalleryMasonry";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SERVICES, FEATURED, BRANDS, ASSETS, LINKS } from "@/lib/site";

const WHY = [
  { icon: ShieldCheck, title: "Protection First", text: "Wraps, PPF and ceramic coating that keep your finish looking new for longer." },
  { icon: Sparkles, title: "Show Car Finish", text: "Clean edges, tight panel gaps and flawless application on every build." },
  { icon: Wrench, title: "Quality Materials", text: "Premium films and coatings from trusted brands, matched to your vehicle." },
  { icon: Gauge, title: "Style & Performance", text: "From color changes to tuning, we build cars that stand out and perform." },
];

export default function Home() {
  useEffect(() => {
    document.title = "Wraptastic Auto Customs | Built To Stand Out";
  }, []);

  return (
    <div>
      <CinematicHero />

      {/* Brand intro */}
      <section className="relative bg-[var(--w-black-950)] py-20 lg:py-28">
        <div className="container-w grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Wraptastic Auto Customs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-white leading-[1.05]">
              Your vehicle deserves <span className="text-chrome">more than factory.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[var(--w-silver-500)] leading-relaxed">
              Based in Brampton and serving the GTA, we specialize in premium customization and protection. Wraps, paint protection film, ceramic coating, tint and more. Real work, real results.
            </p>
            <p className="mt-4 font-display text-xl text-white">Protection. Style. Performance.</p>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="relative bg-[var(--w-black-975)] py-20 lg:py-28">
        <div className="container-w">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="What We Do" title="Services" />
            <Link to="/services" data-testid="home-view-all-services" className="inline-flex items-center gap-2 text-sm text-[var(--w-chrome-300)] hover:text-white transition-colors">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCardPremium service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic scroll transition */}
      <ScrollVehicleTransition />

      {/* Featured work */}
      <section className="relative bg-[var(--w-black-950)] py-20 lg:py-28">
        <div className="container-w">
          <SectionHeading eyebrow="Featured Builds" title="Recent Work" className="mb-12" />
          <div className="space-y-8 lg:space-y-12">
            {FEATURED.map((f, i) => (
              <Reveal key={f.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  <div className="lg:col-span-7 [direction:ltr]">
                    <div className="relative overflow-hidden rounded-2xl hairline group">
                      <img src={f.image} alt={f.title} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                  <div className="lg:col-span-5 [direction:ltr]">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--w-red-glow)]">{f.subtitle}</p>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl text-white tracking-[-0.01em]">{f.title}</h3>
                    <p className="mt-3 text-[var(--w-silver-500)] leading-relaxed">{f.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-mono text-white/60 border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/work" data-testid="home-view-gallery" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors">
              View the full gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Wraptastic */}
      <section className="relative bg-[var(--w-black-975)] py-20 lg:py-28">
        <div className="container-w">
          <SectionHeading eyebrow="Why Wraptastic" title="Details That Last" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 hover:border-white/25 transition-colors">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--w-red-accent)]/10 border border-[var(--w-red-accent)]/25 text-[var(--w-red-glow)]">
                    <w.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-[var(--w-silver-500)] leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & materials */}
      <section className="relative bg-[var(--w-black-950)] py-16 lg:py-20 border-y border-white/10">
        <div className="container-w">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)] mb-8">
              Materials & Brands We Work With
            </p>
          </Reveal>
          <div data-testid="brands-strip" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {BRANDS.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <span className="font-display text-xl sm:text-2xl text-white/40 hover:text-white transition-colors tracking-[0.02em]">{b}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[var(--w-silver-500)]">Special materials and brands available upon request.</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative bg-[var(--w-black-975)] py-20 lg:py-28">
        <div className="container-w max-w-5xl">
          <SectionHeading eyebrow="Reviews" title="What Customers Say" align="center" className="mb-12" />
          <ReviewBelt />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[var(--w-black-950)] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: LINKS ? "var(--w-hero-vignette)" : "" }} />
        <div className="container-w relative z-10 text-center max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-chrome">
              Ready to stand out?
            </h2>
            <p className="mt-4 text-lg text-[var(--w-silver-500)]">
              Tell us about your vehicle and what you want done. We will get you a quote fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" data-testid="home-final-quote-button" className="inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="home-final-whatsapp-button" className="inline-flex items-center justify-center h-13 px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors">
                Get a Quote on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
