import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Sits above FloatingWhatsApp (bottom-5, h-14) so the two never overlap.
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          data-testid="back-to-top-button"
          aria-label="Back to top"
          initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? {} : { opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-24 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[rgba(16,18,24,0.82)] backdrop-blur-xl text-[var(--w-chrome-300)] shadow-[0_16px_50px_rgba(0,0,0,0.6)] hover:border-[var(--w-red-accent)]/70 hover:text-white hover:shadow-[0_0_0_1px_rgba(225,6,0,0.3),0_16px_60px_rgba(225,6,0,0.22)] active:scale-95 transition-[border-color,color,box-shadow,transform] duration-200"
        >
          <ArrowUp size={20} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
