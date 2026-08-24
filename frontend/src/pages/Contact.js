import React, { useEffect } from "react";
import { MessageCircle, Phone, Mail, MapPin, Instagram, CreditCard, Clock, ShieldAlert } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { BUSINESS, LINKS, POLICIES, ASSETS } from "@/lib/site";

export default function Contact() {
  useEffect(() => {
    document.title = "Get a Quote | Wraptastic Auto Customs";
  }, []);

  return (
    <div>
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-[var(--w-black-975)]">
        <div className="absolute inset-0 opacity-25">
          <video className="h-full w-full object-cover cine-video" autoPlay muted loop playsInline poster={ASSETS.viperPoster}>
            <source src={ASSETS.viperVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
        </div>
        <div className="container-w relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Fastest Reply On WhatsApp</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">Get a Quote</h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">Tell us about your vehicle and what you want done. We will get back to you with a quote.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
        <div className="container-w grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6">
              <h3 className="font-display text-xl text-white mb-4">Reach Us Directly</h3>
              <div className="space-y-3">
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 p-3.5 hover:bg-[#25D366]/15 transition-colors">
                  <MessageCircle className="text-[#25D366]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">WhatsApp (fastest)</p>
                    <p className="text-xs text-[var(--w-silver-500)]">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>
                <a href={LINKS.phone} data-testid="contact-phone" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors">
                  <Phone className="text-[var(--w-chrome-300)]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">Call Us</p>
                    <p className="text-xs text-[var(--w-silver-500)]">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>
                <a href={LINKS.email} data-testid="contact-email" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors">
                  <Mail className="text-[var(--w-chrome-300)]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">Email</p>
                    <p className="text-xs text-[var(--w-silver-500)] break-all">{BUSINESS.email}</p>
                  </div>
                </a>
                <a href={LINKS.google} target="_blank" rel="noopener noreferrer" data-testid="contact-google" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors">
                  <MapPin className="text-[var(--w-chrome-300)]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">Location & Directions</p>
                    <p className="text-xs text-[var(--w-silver-500)]">{BUSINESS.city} · View on Google</p>
                  </div>
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" data-testid="contact-instagram" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors">
                  <Instagram className="text-[var(--w-chrome-300)]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">Instagram</p>
                    <p className="text-xs text-[var(--w-silver-500)]">@the.wraptastic</p>
                  </div>
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--w-silver-500)]">
                <CreditCard size={14} /> We accept Cash and E-transfer.
              </div>
              <p className="mt-2 text-xs text-white/40">Mobile service may be available upon request for an additional fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="bg-[var(--w-black-975)] py-16 lg:py-20 border-t border-white/10">
        <div className="container-w">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--w-red-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Good To Know</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-8">Booking & Policies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {POLICIES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[var(--w-red-glow)]">
                    {i === 0 ? <ShieldAlert size={18} /> : i === 1 ? <Clock size={18} /> : i === 2 ? <Clock size={18} /> : <CreditCard size={18} />}
                  </span>
                  <h3 className="mt-4 font-display text-lg text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--w-silver-500)] leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
