import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import { NAV, LINKS, ASSETS, BUSINESS, SERVICES } from "@/lib/site";
import { useQuoteDialog } from "@/components/QuoteDialog";
import { useLegalDialog } from "@/components/LegalDialog";

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.2v2.6c-1.3.1-2.5-.2-3.8-.9v5.9c0 3.4-2.6 5.7-5.8 5.7-3 0-5.2-2.2-5.2-5 0-2.9 2.3-5 5.2-5 .4 0 .8 0 1.2.1v2.8c-.4-.1-.8-.2-1.2-.2-1.4 0-2.4 1-2.4 2.4 0 1.4 1 2.3 2.3 2.3 1.4 0 2.5-1 2.5-2.8V3h3.4z" />
  </svg>
);

export const Footer = () => {
  const { openQuote } = useQuoteDialog();
  const { openLegal } = useLegalDialog();

  return (
    <footer data-testid="site-footer" className="relative bg-[var(--w-black-975)] border-t border-white/10">
      <div className="container-w py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={ASSETS.logo} alt={`${BUSINESS.name} logo`} className="h-12 w-auto" />
            <p className="mt-4 text-sm text-[var(--w-silver-500)] max-w-xs leading-relaxed">
              Premium automotive customization, protection, styling and performance in {BUSINESS.region}.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              Built to stand out.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-white/50 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-[var(--w-silver-500)] hover:text-white transition-colors" data-testid={`footer-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-white/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-sm text-[var(--w-silver-500)] hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-white/50 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button type="button" onClick={() => openLegal("privacy")} data-testid="footer-privacy" className="text-sm text-[var(--w-silver-500)] hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openLegal("terms")} data-testid="footer-terms" className="text-sm text-[var(--w-silver-500)] hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-white/50 mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" className="inline-flex items-center gap-2.5 text-sm text-[var(--w-chrome-300)] hover:text-white transition-colors">
                  <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={LINKS.phone} data-testid="footer-phone" className="inline-flex items-center gap-2.5 text-sm text-[var(--w-chrome-300)] hover:text-white transition-colors">
                  <Phone size={16} /> {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={LINKS.email} data-testid="footer-email" className="inline-flex items-center gap-2.5 text-sm text-[var(--w-chrome-300)] hover:text-white transition-colors">
                  <Mail size={16} /> {BUSINESS.email}
                </a>
              </li>
              <li>
                <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" data-testid="footer-maps" className="inline-flex items-center gap-2.5 text-sm text-[var(--w-chrome-300)] hover:text-white transition-colors">
                  <MapPin size={16} /> Directions on Google
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram" className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-colors">
                <Instagram size={18} />
              </a>
              <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" data-testid="footer-tiktok" className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-display text-xl sm:text-2xl text-white">Ready to build something that stands out?</p>
            <p className="text-sm text-[var(--w-silver-500)] mt-1">Mobile service may be available upon request for an additional fee.</p>
          </div>
          <button
            type="button"
            onClick={openQuote}
            data-testid="footer-get-a-quote"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-7 text-[13px] font-semibold uppercase tracking-[0.12em] bg-[var(--w-red-accent)] text-white shadow-[0_0_0_1px_rgba(225,6,0,0.45),inset_0_1px_0_rgba(255,255,255,0.28),0_12px_40px_rgba(225,6,0,0.22)] hover:bg-[#FF1A12] active:scale-[0.97] transition-[background-color,box-shadow,transform] duration-200 shrink-0"
          >
            Get a Quote <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <button type="button" onClick={() => openLegal("privacy")} className="hover:text-white/70 transition-colors" data-testid="footer-privacy-mini">Privacy</button>
            <button type="button" onClick={() => openLegal("terms")} className="hover:text-white/70 transition-colors" data-testid="footer-terms-mini">Terms</button>
            <span>Cash & E-transfer accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
