import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, LINKS, ASSETS, BUSINESS } from "@/lib/site";
import { CtaPrimary, CtaWhatsApp } from "@/components/Buttons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
          <span className="hidden md:inline-flex">
            <CtaWhatsApp size="sm" testId="nav-whatsapp-button">WhatsApp</CtaWhatsApp>
          </span>
          <CtaPrimary to="/contact" size="sm" testId="nav-get-a-quote-button">
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
                  <CtaPrimary to="/contact" testId="mobile-nav-quote-button">Get a Quote</CtaPrimary>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
