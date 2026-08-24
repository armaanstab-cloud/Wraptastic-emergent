import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ASSETS, LINKS } from "@/lib/site";

export const CinematicHero = () => {
  const reduce = useReducedMotion();
  return (
    <section
      data-testid="cinematic-hero"
      className="relative min-h-[92vh] w-full overflow-hidden bg-[var(--w-black-950)]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover cine-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={ASSETS.viperPoster}
        data-testid="hero-video"
      >
        <source src={ASSETS.viperVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
      <div className="noise-overlay" />

      <div className="relative z-10 container-w flex min-h-[92vh] flex-col justify-end pb-24 pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--w-red-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--w-chrome-300)]/80">
              Brampton & the GTA
            </span>
          </div>

          <h1 className="font-display font-700 leading-[0.92] tracking-[-0.03em] text-5xl sm:text-7xl lg:text-8xl">
            <span className="text-chrome block">WRAPTASTIC</span>
            <span className="text-chrome text-chrome-red block">AUTO CUSTOMS</span>
          </h1>

          <p className="mt-6 font-display text-2xl sm:text-3xl text-white/90 tracking-[-0.01em]">
            Built to stand out.
          </p>
          <p className="mt-3 max-w-xl text-base sm:text-lg text-[var(--w-silver-500)]">
            Premium automotive customization, protection, styling and performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/contact"
              data-testid="hero-get-a-quote-button"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors duration-200"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-button"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-xl border border-white/20 text-[var(--w-chrome-300)] hover:border-white/40 hover:bg-white/5 transition-colors duration-200"
            >
              <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      <div
        data-testid="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <span className="relative h-10 w-px bg-white/15">
          <span className="scroll-dot absolute left-1/2 -translate-x-1/2 top-0 h-2 w-2 rounded-full bg-[var(--w-red-accent)]" />
        </span>
      </div>
    </section>
  );
};
