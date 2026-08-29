import React from "react";
import { MessageCircle, Phone, Mail, MapPin, Instagram, CreditCard, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useQuoteDialog } from "@/components/QuoteDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS, LINKS, FAQS, ASSETS } from "@/lib/site";
import { useSeo } from "@/lib/seo";

export default function Contact() {
  const { openQuote } = useQuoteDialog();

  useSeo("contact");

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
            <button
              type="button"
              onClick={openQuote}
              data-testid="contact-open-quote"
              className="mt-7 group inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-[13px] font-semibold uppercase tracking-[0.12em] bg-[var(--w-red-accent)] text-white shadow-[0_0_0_1px_rgba(225,6,0,0.45),inset_0_1px_0_rgba(255,255,255,0.28),0_12px_40px_rgba(225,6,0,0.22)] hover:bg-[#FF1A12] active:scale-[0.97] transition-[background-color,box-shadow,transform] duration-200"
            >
              Request My Quote <ArrowUpRight size={17} />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
        <div className="container-w grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex">
            <div className="w-full flex flex-col rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6">
              <h3 className="font-display text-2xl text-chrome mb-4">Reach Us Directly</h3>
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
                <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" data-testid="contact-maps" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors">
                  <MapPin className="text-[var(--w-chrome-300)]" size={20} />
                  <div>
                    <p className="text-sm text-white font-500">Location & Directions</p>
                    <p className="text-xs text-[var(--w-silver-500)]">{BUSINESS.addressPublic} &middot; Open in Google Maps</p>
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
              <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-[var(--w-silver-500)]">
                <CreditCard size={14} /> We accept Cash and E-transfer.
              </div>
              <p className="mt-2 text-xs text-white/40">Mobile service may be available upon request for an additional fee.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Good To Know</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-chrome mb-6">Frequently Asked</h2>
            <Accordion type="single" collapsible className="w-full" data-testid="contact-faq">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} data-testid={`contact-faq-item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-sm text-[var(--w-silver-500)]">
              Still not sure?{" "}
              <button
                type="button"
                onClick={openQuote}
                className="text-white underline underline-offset-4 hover:text-[var(--w-red-glow)] transition-colors"
              >
                Request a quote
              </button>{" "}
              or message us on WhatsApp and we will answer straight away.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
