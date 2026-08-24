import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, LINKS, ASSETS, BUSINESS } from "@/lib/site";
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container-w flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="nav-logo-link">
          <img src={ASSETS.logo} alt={`${BUSINESS.name} logo`} className="h-9 sm:h-11 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative font-body text-sm tracking-[0.02em] transition-colors duration-200 ${
                  isActive ? "text-white" : "text-[var(--w-silver-500)] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-[var(--w-red-accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-button"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-white/15 text-sm text-[var(--w-chrome-300)] hover:border-white/30 hover:bg-white/5 transition-colors duration-200"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            data-testid="nav-get-a-quote-button"
            className="inline-flex items-center h-10 px-4 sm:px-5 rounded-xl bg-[var(--w-red-accent)] text-white text-sm font-500 hover:bg-[var(--w-red-deep)] transition-colors duration-200"
          >
            Get a Quote
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="nav-mobile-menu-button"
                aria-label="Open menu"
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 text-white"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--w-charcoal-900)] border-l border-white/10 w-[86%] max-w-sm p-0">
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <img src={ASSETS.logo} alt="logo" className="h-9 w-auto" />
                <SheetClose asChild>
                  <button aria-label="Close menu" className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/15 text-white">
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
                      `px-3 py-3.5 rounded-xl text-lg font-display tracking-[-0.01em] ${
                        isActive ? "text-white bg-white/5" : "text-[var(--w-silver-500)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-4 grid gap-3">
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-nav-whatsapp-button"
                    className="inline-flex items-center justify-center gap-2 h-12 rounded-xl border border-white/15 text-white"
                  >
                    <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp Us
                  </a>
                  <Link
                    to="/contact"
                    data-testid="mobile-nav-quote-button"
                    className="inline-flex items-center justify-center h-12 rounded-xl bg-[var(--w-red-accent)] text-white font-500"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
