import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered reveal wrapper. Fades + lifts + subtle blur once in view.
export const Reveal = ({ children, delay = 0, y = 22, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
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
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-600 tracking-[-0.02em] ${chrome ? "text-chrome" : "text-white"}`}>
        {title}
      </h2>
    </div>
  );
};
