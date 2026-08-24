import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from "lucide-react";
import { REVIEWS, LINKS } from "@/lib/site";

export const ReviewBelt = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = REVIEWS.length;

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [paused, count]);

  const review = REVIEWS[index];

  return (
    <div
      data-testid="reviews-carousel"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl hairline bg-[var(--w-charcoal-900)] p-8 sm:p-12 min-h-[320px] flex">
        <Quote className="absolute top-6 right-6 text-white/5" size={90} />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col justify-center max-w-3xl"
          >
            <div className="flex items-center gap-1 mb-5" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-[var(--w-red-accent)] text-[var(--w-red-accent)]" />
              ))}
            </div>
            <p className="font-display text-xl sm:text-2xl leading-snug text-white/90 tracking-[-0.01em]">
              “{review.text}”
            </p>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-[var(--w-silver-500)]">
              {review.name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              data-testid={`reviews-dot-${i}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[var(--w-red-accent)]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Previous review" data-testid="reviews-prev" onClick={() => go(-1)} className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button aria-label="Next review" data-testid="reviews-next" onClick={() => go(1)} className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href={LINKS.google}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="reviews-google-cta"
          className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-white/15 text-[var(--w-chrome-300)] hover:border-white/30 hover:bg-white/5 transition-colors"
        >
          See more reviews on Google <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};
