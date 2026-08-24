import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Layers, SprayCan, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ASSETS, LINKS, BRANDS } from "@/lib/site";

const VALUES = [
  { icon: Layers, title: "Attention To Detail", text: "Clean edges, wrapped corners and tight panel gaps on every single build." },
  { icon: ShieldCheck, title: "Real Protection", text: "PPF, ceramic coating and quality films that protect your investment." },
  { icon: SprayCan, title: "Quality Materials", text: "We work with trusted, premium films and coatings matched to your vehicle." },
  { icon: Star, title: "Customer Experience", text: "Clear communication, honest recommendations and a finish you will love." },
];

export default function About() {
  useEffect(() => {
    document.title = "About | Wraptastic Auto Customs";
  }, []);

  return (
    <div>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[var(--w-black-975)]">
        <div className="absolute inset-0 opacity-25">
          <video className="h-full w-full object-cover cine-video" autoPlay muted loop playsInline poster={ASSETS.corvettePoster}>
            <source src={ASSETS.corvetteVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
        </div>
        <div className="container-w relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Brampton & the GTA</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">About Wraptastic</h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">
              Wraptastic Auto Customs is an automotive customization and protection shop focused on one thing: making your vehicle look its best and stay that way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-16 lg:py-24">
        <div className="container-w grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl hairline">
              <img src={ASSETS.teslaPurple} alt="Wraptastic wrapped Tesla" className="w-full aspect-[4/3] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl text-chrome tracking-[-0.01em]">Built for the streets. Finished like a show car.</h2>
            <p className="mt-4 text-[var(--w-silver-500)] leading-relaxed">
              From full color-change wraps to paint protection film, ceramic coating, tint, paint correction and performance work, we handle it with care. We work with a wide range of vehicles, from daily drivers to exotics, and treat every build like it is our own.
            </p>
            <p className="mt-4 text-[var(--w-silver-500)] leading-relaxed">
              Protection that changes how your car looks and how it stays looking. That is the standard on every project.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors">Get a Quote <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/10">
        <div className="container-w">
          <SectionHeading eyebrow="How We Work" title="Our Standard" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--w-red-accent)]/10 border border-[var(--w-red-accent)]/25 text-[var(--w-red-glow)]"><v.icon size={20} /></span>
                  <h3 className="mt-4 text-lg text-white font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--w-silver-500)] leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[var(--w-silver-500)]">Mobile service may be available upon request for an additional fee.</p>
        </div>
      </section>
    </div>
  );
}
