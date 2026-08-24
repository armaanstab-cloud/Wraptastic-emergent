import React, { useEffect } from "react";
import { ArrowRight, ShieldCheck, Layers, Sparkles, Timer, Star } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { WheelSpeedScroll } from "@/components/WheelSpeedScroll";
import { ServiceCardPremium } from "@/components/ServiceCardPremium";
import { ReviewBelt } from "@/components/ReviewBelt";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaPrimary, CtaChrome, CtaWhatsApp } from "@/components/Buttons";
import { SERVICES, FEATURED, BRANDS, ASSETS } from "@/lib/site";

const WHY = [
  { icon: Layers, title: "Precision Installs", text: "Wrapped edges, clean corners and tight panel gaps. Every build is finished like a show car." },
  { icon: ShieldCheck, title: "Real Protection", text: "PPF, ceramic coating and nano ceramic tint that protect your investment for years." },
  { icon: Sparkles, title: "Premium Materials", text: "Avery Dennison, 3M, XPEL and more. Special materials available on request." },
  { icon: Timer, title: "Fast Communication", text: "Message us on WhatsApp and get answers fast. Clear quotes, honest recommendations." },
];

export default function Home() {
  useEffect(() => {
    document.title = "Wraptastic Auto Customs | Vinyl Wraps, PPF, Ceramic & Tint in Brampton";
  }, []);

  return (
    <div>
      <CinematicHero />

      {/* Intro statement */}
      <section className="relative bg-[var(--w-black-950)] py-20 lg:py-28 overflow-hidden">
        <div className="container-w">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--w-red-glow)] mb-5">The Wraptastic Standard</p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
              <span className="text-white">Your car, </span>
              <span className="text-chrome">but the way you always pictured it.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[var(--w-silver-500)] leading-relaxed">
              Color-change wraps, paint protection film, ceramic coating, tint, paint correction and performance work,
              handled with obsessive attention to detail in Brampton, serving the entire GTA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature wheel-spin scroll set-piece (above services) */}
      <WheelSpeedScroll />

      {/* Services preview */}
      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/5">
        <div className="container-w">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="What We Do" title="Premium Services" />
            <span className="shrink-0">
              <CtaChrome to="/services" testId="home-all-services-button">
                All Services <ArrowRight size={16} />
              </CtaChrome>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <ServiceCardPremium service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured builds */}
      <section className="bg-[var(--w-black-950)] py-16 lg:py-24 border-t border-white/5">
        <div className="container-w">
          <SectionHeading eyebrow="Real Vehicles, Real Results" title="Featured Builds" className="mb-14" />
          <div className="space-y-16 lg:space-y-24">
            {FEATURED.map((f, i) => (
              <Reveal key={f.id}>
                <div
                  data-testid={`featured-build-${f.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className={`relative lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <span
                      aria-hidden
                      className={`hidden lg:block absolute -top-14 z-20 pointer-events-none ${i % 2 === 1 ? "-right-4" : "-left-4"} font-display display-outline text-[9rem] leading-none select-none`}
                    >
                      0{i + 1}
                    </span>
                    <div className="group relative overflow-hidden rounded-2xl hairline card-sheen shadow-[var(--shadow-elev-2)]">
                      <img
                        src={f.image}
                        alt={f.title}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--w-red-glow)]">{f.subtitle}</p>
                    <h3 className="mt-3 font-display text-4xl sm:text-5xl text-chrome">{f.title}</h3>
                    <p className="mt-4 text-[var(--w-silver-500)] leading-relaxed">{f.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-mono text-[var(--w-chrome-300)]/80">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7">
                      <CtaChrome to="/work" testId={`featured-see-work-${f.id}`}>
                        See More Work <ArrowRight size={16} />
                      </CtaChrome>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/5">
        <div className="container-w">
          <SectionHeading eyebrow="Why Wraptastic" title="Built Different" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl hairline bg-[rgba(14,15,18,0.75)] p-6 transition-[border-color,transform] duration-300 hover:border-[rgba(215,220,228,0.25)] hover:-translate-y-1">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--w-red-accent)]/10 border border-[var(--w-red-accent)]/25 text-[var(--w-red-glow)]">
                    <v.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg text-white font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--w-silver-500)] leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="bg-[var(--w-black-950)] py-14 border-t border-white/5 overflow-hidden">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-[var(--w-silver-500)] mb-8">Materials & Brands We Trust</p>
        <div className="marquee-mask">
          <div className="brand-marquee gap-16 pr-16" data-testid="brands-marquee">
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
              <span key={`${b}-${i}`} className="font-display text-3xl sm:text-4xl text-white/25 hover:text-white/70 transition-colors duration-300 whitespace-nowrap">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews belt */}
      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/5 overflow-hidden">
        <div className="container-w mb-12 flex items-end justify-between gap-6">
          <SectionHeading eyebrow="5.0 On Google" title="What Drivers Say" />
          <span className="hidden sm:inline-flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-[var(--w-red-accent)] text-[var(--w-red-accent)]" />
            ))}
          </span>
        </div>
        <ReviewBelt />
      </section>

      {/* Final CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <img src={ASSETS.viperStill} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
        <div className="relative z-10 container-w text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--w-red-glow)]">Your Build Starts Here</p>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl text-chrome">READY TO STAND OUT?</h2>
            <p className="mt-5 max-w-xl mx-auto text-lg text-[var(--w-silver-500)]">
              Send us your vehicle details and get a quote. Fastest reply on WhatsApp.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaPrimary quote size="lg" testId="home-final-quote-button">
                Get a Quote <ArrowRight size={18} />
              </CtaPrimary>
              <CtaWhatsApp size="lg" testId="home-final-whatsapp-button">WhatsApp Us</CtaWhatsApp>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
