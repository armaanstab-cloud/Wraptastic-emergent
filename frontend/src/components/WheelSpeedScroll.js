import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/lib/site";

// Signature scroll set-piece: the shop's real Corvette wheel spins and blasts
// across the screen with speed streaks while a giant message parallaxes behind.
export const WheelSpeedScroll = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.25 });

  const x = useTransform(p, [0, 1], ["-36vw", "116vw"]);
  const rotate = useTransform(p, [0, 1], [0, 1440]);
  const streakOpacity = useTransform(p, [0, 0.18, 0.82, 1], [0, 1, 1, 0]);
  const msgX = useTransform(p, [0, 1], ["6%", "-6%"]);
  const msgOpacity = useTransform(p, [0, 0.12, 0.9, 1], [0, 1, 1, 0.4]);
  const glowOpacity = useTransform(p, [0.15, 0.5, 0.85], [0.15, 0.5, 0.15]);

  if (reduce) {
    return (
      <section data-testid="wheel-speed-section" className="relative bg-[var(--w-black-975)] py-24 overflow-hidden">
        <div className="container-w text-center">
          <p className="font-display text-5xl sm:text-7xl display-outline">WRAP IT. PROTECT IT.</p>
          <p className="font-display text-6xl sm:text-8xl text-chrome text-chrome-red mt-2">DOMINATE.</p>
          <img src={ASSETS.wheelSpin} alt="Corvette wheel detail" className="mx-auto mt-10 h-56 w-56 object-contain" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      data-testid="wheel-speed-section"
      className="relative h-[240vh] bg-[var(--w-black-975)]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ambient red glow */}
        <motion.div
          aria-hidden
          style={{ opacity: glowOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[90vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(225,6,0,0.16),transparent_70%)]" />
        </motion.div>
        <div className="noise-overlay" />

        {/* Giant parallax message */}
        <motion.div
          style={{ x: msgX, opacity: msgOpacity }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-16"
          data-testid="wheel-speed-message"
        >
          <p className="font-display display-outline leading-[0.9] text-[13vw] sm:text-[9vw]">
            WRAP IT. PROTECT IT.
          </p>
          <p className="font-display text-chrome text-chrome-red leading-[0.9] text-[16vw] sm:text-[11vw]">
            DOMINATE.
          </p>
          <p className="mt-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.32em] text-[var(--w-silver-500)]/80">
            Brampton • GTA • Premium Finishes Only
          </p>
        </motion.div>

        {/* Road line */}
        <div aria-hidden className="absolute inset-x-0 bottom-[21%]">
          <div className="h-px w-full bg-white/12" />
          <div className="h-8 w-full bg-gradient-to-b from-white/[0.03] to-transparent" />
        </div>

        {/* Traveling wheel + streaks */}
        <motion.div
          style={{ x }}
          className="absolute bottom-[21%] left-0 will-change-transform"
          data-testid="wheel-speed-wheel"
        >
          <div className="relative translate-y-[6px]">
            {/* speed streaks trailing the wheel */}
            <motion.div aria-hidden style={{ opacity: streakOpacity }}>
              <span className="absolute right-[92%] top-[22%] h-[3px] w-[38vw] rounded-full bg-gradient-to-l from-[var(--w-red-glow)]/80 via-[var(--w-red-glow)]/25 to-transparent blur-[1px]" />
              <span className="absolute right-[95%] top-[46%] h-[2px] w-[52vw] rounded-full bg-gradient-to-l from-white/60 via-white/15 to-transparent blur-[1px]" />
              <span className="absolute right-[90%] top-[68%] h-[3px] w-[30vw] rounded-full bg-gradient-to-l from-[var(--w-red-glow)]/60 via-[var(--w-red-glow)]/18 to-transparent blur-[2px]" />
              <span className="absolute right-[97%] top-[84%] h-[2px] w-[44vw] rounded-full bg-gradient-to-l from-white/40 via-white/10 to-transparent blur-[1px]" />
            </motion.div>

            {/* ground shadow */}
            <span aria-hidden className="absolute -bottom-3 left-1/2 h-6 w-[115%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-lg" />

            <motion.img
              src={ASSETS.wheelSpin}
              alt="Wraptastic Corvette wheel spinning"
              style={{ rotate }}
              className="relative h-[190px] w-[190px] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px] -translate-y-1/2 select-none pointer-events-none drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] will-change-transform"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-10 text-center px-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/35">
            Performance in every detail
          </p>
        </div>
      </div>
    </section>
  );
};
