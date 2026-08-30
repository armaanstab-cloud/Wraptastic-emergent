import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Scroll-triggered reveal wrapper. Fades + lifts + subtle blur once in view.
//
// These elements start at opacity 0, so if the in-view check never fires the
// content is not just unanimated - it is invisible. That is a bad failure to
// ship to a phone, so there is a fail-safe below: shortly after mount, anything
// already inside the viewport is revealed whether or not the observer reported
// it.
export const Reveal = ({ children, delay = 0, y = 22, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (inView || forced) return;
    const t = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const onScreen = r.top < window.innerHeight && r.bottom > 0;
      if (onScreen) setForced(true);
    }, 800);
    return () => clearTimeout(t);
  }, [inView, forced]);

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] || motion.div;
  const shown = inView || forced;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={
        shown
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: "blur(6px)" }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

// Section title with optional chrome treatment + red eyebrow label.
export const SectionHeading = ({ eyebrow, title, chrome = true, align = "left", className = "" }) => {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
          <span className="h-px w-8 bg-[var(--w-red-accent)]" />
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl ${chrome ? "text-chrome" : "text-white"}`}>
        {title}
      </h2>
    </div>
  );
};
