import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { ASSETS } from "@/lib/site";
import { CtaPrimary, CtaWhatsApp } from "@/components/Buttons";

const STATS = [
  { value: "5.0", label: "Google Rating", star: true },
  { value: "10+", label: "Premium Services" },
  { value: "GTA", label: "Wide Coverage" },
];

export const CinematicHero = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 900], [1, 1.14]);
  const contentY = useTransform(scrollY, [0, 600], [0, 90]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  return (
    <section
      ref={ref}
      data-testid="cinematic-hero"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--w-black-950)]"
    >
      <motion.video
        className="absolute inset-0 h-full w-full object-cover cine-video will-change-transform"
        style={reduce ? {} : { scale: videoScale }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={ASSETS.viperPoster}
        data-testid="hero-video"
      >
        <source src={ASSETS.viperVideo} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
      <div className="noise-overlay" />

      <motion.div
        style={reduce ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 container-w flex min-h-screen flex-col justify-end pb-28 pt-32"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--w-red-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--w-chrome-300)]/80">
              Brampton &amp; the GTA · Premium Auto Studio
            </span>
          </div>

          <h1 className="font-display leading-[0.9]">
            <span className="text-chrome block text-7xl sm:text-8xl lg:text-[9.5rem]">WRAPTASTIC</span>
            <span className="text-chrome text-chrome-red block text-5xl sm:text-6xl lg:text-8xl mt-1">AUTO CUSTOMS</span>
          </h1>

          <p className="mt-7 text-sm sm:text-base font-semibold uppercase tracking-[0.32em] text-white/85">
            Wrap It <span className="text-[var(--w-red-glow)]">•</span> Protect It <span className="text-[var(--w-red-glow)]">•</span> Stand Out
          </p>
          <p className="mt-3 max-w-xl text-base sm:text-lg text-[var(--w-silver-500)]">
            Premium wraps, paint protection, ceramic coating, tint and performance, built to stand out.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <CtaPrimary quote size="lg" testId="hero-get-a-quote-button">
              Get a Quote <ArrowRight size={18} />
            </CtaPrimary>
            <CtaWhatsApp size="lg" testId="hero-whatsapp-button">WhatsApp Us</CtaWhatsApp>
          </div>

          <div data-testid="hero-stats" className="mt-12 flex flex-wrap items-center gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-black/40 backdrop-blur-md px-4.5 py-2.5 px-5"
              >
                <span className="font-display text-xl text-white inline-flex items-center gap-1.5">
                  {s.value}
                  {s.star && <Star size={13} className="fill-[var(--w-red-glow)] text-[var(--w-red-glow)]" />}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--w-silver-500)]">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div
        data-testid="hero-scroll-indicator"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <span className="relative h-10 w-px bg-white/15">
          <span className="scroll-dot absolute left-1/2 -translate-x-1/2 top-0 h-2 w-2 rounded-full bg-[var(--w-red-accent)]" />
        </span>
      </div>
    </section>
  );
};
