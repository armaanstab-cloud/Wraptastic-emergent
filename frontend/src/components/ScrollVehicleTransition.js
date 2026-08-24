import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/lib/site";

// Scroll-driven 2.5D vehicle transition: the real Tesla appears to accelerate
// across the screen as the user scrolls, with parallax light streaks + motion blur.
export const ScrollVehicleTransition = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const scale = useTransform(p, [0.05, 0.45, 0.9], [0.72, 1.05, 1.3]);
  const x = useTransform(p, [0.05, 0.5, 0.9], ["-42%", "0%", "46%"]);
  const y = useTransform(p, [0.05, 0.9], [70, -60]);
  const blur = useTransform(p, [0.05, 0.28, 0.55, 0.85], ["blur(14px)", "blur(3px)", "blur(0px)", "blur(6px)"]);
  const opacity = useTransform(p, [0.0, 0.12, 0.85, 1.0], [0, 1, 1, 0]);
  const streakX = useTransform(p, [0, 1], ["-10%", "110%"]);
  const textOpacity = useTransform(p, [0.1, 0.35, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      data-testid="scroll-vehicle-transition"
      className="relative h-[220vh] bg-[var(--w-black-975)]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />

        {/* Light streaks */}
        {!reduce && (
          <>
            <motion.div style={{ x: streakX }} className="absolute top-[38%] left-0 h-[2px] w-[38%] bg-gradient-to-r from-transparent via-[var(--w-red-glow)]/70 to-transparent" />
            <motion.div style={{ x: streakX }} className="absolute top-[58%] left-0 h-px w-[52%] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <motion.div style={{ x: streakX }} className="absolute top-[70%] left-0 h-[2px] w-[30%] bg-gradient-to-r from-transparent via-[var(--w-red-glow)]/50 to-transparent" />
          </>
        )}

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.img
            src={ASSETS.teslaPurple}
            alt="Wraptastic wrapped Tesla Model Y in motion"
            className="w-[min(1100px,94vw)] will-change-transform select-none pointer-events-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
            style={reduce ? {} : { scale, x, y, filter: blur, opacity }}
            loading="lazy"
            data-testid="scroll-vehicle-image"
          />
        </div>

        <motion.div
          style={reduce ? {} : { opacity: textOpacity }}
          className="absolute inset-x-0 bottom-16 z-20 text-center px-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--w-red-glow)]">In Motion</p>
          <p className="mt-3 font-display text-3xl sm:text-5xl text-chrome tracking-[-0.02em]">
            Finished like a show car.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
