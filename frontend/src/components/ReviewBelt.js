import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";
import { Star, Quote, ArrowUpRight, MoveHorizontal } from "lucide-react";
import { REVIEWS, LINKS } from "@/lib/site";

const GAP = 20; // px, matches gap-5
const SPEED = 46; // px per second

const ReviewCard = ({ review, idx }) => (
  <div
    data-testid={`review-card-${idx}`}
    className="relative w-[320px] sm:w-[400px] shrink-0 rounded-2xl hairline bg-[rgba(14,15,18,0.75)] backdrop-blur-md p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
  >
    <Quote className="absolute top-5 right-5 text-white/[0.06]" size={56} />
    <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < review.rating
              ? "fill-[var(--w-red-accent)] text-[var(--w-red-accent)]"
              : "text-white/20"
          }
        />
      ))}
    </div>
    <p className="text-[15px] leading-relaxed text-[var(--w-chrome-300)]/90 line-clamp-5">
      “{review.text}”
    </p>
    <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--w-silver-500)]">
      {review.name}
    </p>
  </div>
);

// Infinite auto-scrolling belt. Pauses on hover, fully draggable by the user.
export const ReviewBelt = () => {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const setRef = useRef(null);
  const periodRef = useRef(0);
  const pausedRef = useRef(false);
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    if (setRef.current) {
      periodRef.current = setRef.current.offsetWidth + GAP;
      x.set(-periodRef.current);
      setReady(true);
    }
  }, [x]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useAnimationFrame((_, delta) => {
    const period = periodRef.current;
    if (!period || pausedRef.current || reduce) return;
    let v = x.get() - (SPEED * delta) / 1000;
    while (v <= -2 * period) v += period;
    while (v > -period) v -= period;
    x.set(v);
  });

  const normalize = () => {
    const period = periodRef.current;
    if (!period) return;
    let v = x.get();
    while (v <= -2 * period) v += period;
    while (v > -period) v -= period;
    x.set(v);
  };

  if (reduce) {
    return (
      <div data-testid="reviews-belt" className="overflow-x-auto">
        <div className="flex gap-5 pb-3">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} idx={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div data-testid="reviews-belt" className="relative">
      <div
        className="marquee-mask overflow-hidden py-2 -my-2"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <motion.div
          className="flex w-max gap-5 cursor-grab active:cursor-grabbing"
          style={{ x, opacity: ready ? 1 : 0 }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragTransition={{ power: 0.18, timeConstant: 180 }}
          onDragStart={() => (pausedRef.current = true)}
          onDragEnd={() => {
            setTimeout(() => {
              normalize();
              pausedRef.current = false;
            }, 260);
          }}
          data-testid="reviews-belt-track"
        >
          <div ref={setRef} className="flex gap-5">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`a-${r.name}`} review={r} idx={i} />
            ))}
          </div>
          <div className="flex gap-5" aria-hidden>
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`b-${r.name}`} review={r} idx={`b-${i}`} />
            ))}
          </div>
          <div className="flex gap-5" aria-hidden>
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`c-${r.name}`} review={r} idx={`c-${i}`} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white/35">
          <MoveHorizontal size={14} /> Drag to explore
        </span>
        <a
          href={LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="reviews-google-cta"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-[rgba(215,220,228,0.22)] bg-[rgba(14,15,18,0.55)] text-sm font-semibold uppercase tracking-[0.1em] text-[var(--w-chrome-300)] hover:border-[rgba(215,220,228,0.45)] hover:text-white transition-[border-color,color,background-color] duration-200"
        >
          See all reviews on Google <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
};
