import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/site";

const SIZES = {
  sm: "h-10 px-5 text-[12px]",
  md: "h-12 px-7 text-[13px]",
  lg: "h-14 px-9 text-sm",
};

const BASE =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold uppercase tracking-[0.12em] select-none active:scale-[0.97] transition-[background-color,border-color,box-shadow,color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const Shine = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-[transform,opacity] duration-700"
  />
);

const Wrapper = ({ to, href, className, children, testId, onClick, ariaLabel }) => {
  if (to) {
    return (
      <Link to={to} data-testid={testId} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-testid={testId} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

// Red lacquer primary CTA with chrome edge + specular sweep
export const CtaPrimary = ({ to, href, children, testId, size = "md", onClick, ariaLabel }) => (
  <Wrapper
    to={to}
    href={href}
    testId={testId}
    onClick={onClick}
    ariaLabel={ariaLabel}
    className={`${BASE} ${SIZES[size]} bg-[var(--w-red-accent)] text-white shadow-[0_0_0_1px_rgba(225,6,0,0.45),inset_0_1px_0_rgba(255,255,255,0.28),0_12px_40px_rgba(225,6,0,0.22)] hover:bg-[#FF1A12] hover:shadow-[0_0_0_1px_rgba(255,42,26,0.6),inset_0_1px_0_rgba(255,255,255,0.32),0_16px_54px_rgba(225,6,0,0.36)]`}
  >
    <Shine />
    <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
  </Wrapper>
);

// Chrome glass secondary CTA
export const CtaChrome = ({ to, href, children, testId, size = "md", onClick, ariaLabel }) => (
  <Wrapper
    to={to}
    href={href}
    testId={testId}
    onClick={onClick}
    ariaLabel={ariaLabel}
    className={`${BASE} ${SIZES[size]} border border-[rgba(215,220,228,0.25)] bg-[rgba(14,15,18,0.55)] backdrop-blur-md text-[var(--w-chrome-300)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[rgba(215,220,228,0.5)] hover:bg-[rgba(20,22,27,0.8)] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_44px_rgba(0,0,0,0.5)]`}
  >
    <Shine />
    <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
  </Wrapper>
);

// WhatsApp CTA - chrome glass with green signal
export const CtaWhatsApp = ({ children = "WhatsApp Us", testId, size = "md", href = LINKS.whatsapp }) => (
  <Wrapper
    href={href}
    testId={testId}
    ariaLabel="Chat with Wraptastic on WhatsApp"
    className={`${BASE} ${SIZES[size]} border border-[#25D366]/30 bg-[rgba(14,15,18,0.55)] backdrop-blur-md text-[var(--w-chrome-300)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#25D366]/60 hover:bg-[rgba(20,27,22,0.8)] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_44px_rgba(37,211,102,0.18)]`}
  >
    <Shine />
    <span className="relative z-10 inline-flex items-center gap-2">
      <MessageCircle size={17} className="text-[#25D366]" />
      {children}
    </span>
  </Wrapper>
);
