import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { NAV, LINKS, ASSETS, BUSINESS } from "@/lib/site";
import { CtaPrimary, CtaWhatsApp } from "@/components/Buttons";
import { useQuoteDialog } from "@/components/QuoteDialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.2v2.6c-1.3.1-2.5-.2-3.8-.9v5.9c0 3.4-2.6 5.7-5.8 5.7-3 0-5.2-2.2-5.2-5 0-2.9 2.3-5 5.2-5 .4 0 .8 0 1.2.1v2.8c-.4-.1-.8-.2-1.2-.2-1.4 0-2.4 1-2.4 2.4 0 1.4 1 2.3 2.3 2.3 1.4 0 2.5-1 2.5-2.8V3h3.4z" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openQuote } = useQuoteDialog();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="container-w flex items-center justify-between h-20 sm:h-24">
        <Link to="/" className="flex items-center shrink-0" data-testid="nav-logo-link">
          <img
            src={ASSETS.logo}
            alt={`${BUSINESS.name} logo`}
            className="logo-glow h-10 sm:h-12 lg:h-14 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[var(--w-silver-500)] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-[var(--w-red-accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wraptastic on Instagram"
            data-testid="nav-instagram-button"
            className="hidden xl:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--w-silver-500)] hover:text-white hover:border-white/35 transition-colors duration-200"
          >
            <Instagram size={16} />
          </a>
          <a
            href={LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wraptastic on TikTok"
            data-testid="nav-tiktok-button"
            className="hidden xl:inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--w-silver-500)] hover:text-white hover:border-white/35 transition-colors duration-200"
          >
            <TikTokIcon />
          </a>
          <span className="hidden md:inline-flex">
            <CtaWhatsApp size="sm" testId="nav-whatsapp-button">WhatsApp</CtaWhatsApp>
          </span>
          <CtaPrimary onClick={openQuote} size="sm" testId="nav-get-a-quote-button">
            Get a Quote
          </CtaPrimary>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="nav-mobile-menu-button"
                aria-label="Open menu"
                className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors duration-200"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--w-charcoal-900)] border-l border-white/10 w-[86%] max-w-sm p-0">
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <img src={ASSETS.logo} alt="logo" className="h-10 w-auto" />
                <SheetClose asChild>
                  <button aria-label="Close menu" className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 text-white">
                    <X size={18} />
                  </button>
                </SheetClose>
              </div>
              <div className="flex flex-col p-4">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `px-3 py-3.5 rounded-xl text-2xl font-display tracking-[0.02em] ${
                        isActive ? "text-white bg-white/5" : "text-[var(--w-silver-500)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-5 grid gap-3">
                  <CtaWhatsApp testId="mobile-nav-whatsapp-button">WhatsApp Us</CtaWhatsApp>
                  <CtaPrimary onClick={() => { setOpen(false); openQuote(); }} testId="mobile-nav-quote-button">Get a Quote</CtaPrimary>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="mobile-nav-instagram" className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" data-testid="mobile-nav-tiktok" className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors">
                    <TikTokIcon />
                  </a>
                  <a href={LINKS.phone} aria-label="Call us" data-testid="mobile-nav-phone" className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/5 transition-colors">
                    <Phone size={17} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Scroll progress line */}
      <motion.div
        data-testid="nav-scroll-progress"
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] origin-left bg-gradient-to-r from-[var(--w-red-deep)] via-[var(--w-red-accent)] to-[var(--w-red-glow)] shadow-[0_0_12px_rgba(225,6,0,0.5)]"
      />
    </header>
  );
};
