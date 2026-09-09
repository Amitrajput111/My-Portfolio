import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const centerClass = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 md:mb-24 ${alignClass}`}
    >
      {label && (
        <span className={`section-label mb-5 inline-flex ${centerClass}`}>{label}</span>
      )}
      <h2
        className={`heading-display text-4xl sm:text-5xl md:text-6xl mb-5 glow-text ${centerClass}`}
      >
        {title}
      </h2>
      <div className={`divider-glow mb-6 ${centerClass}`} />
      {subtitle && (
        <p
          className={`text-muted text-base md:text-lg max-w-2xl leading-relaxed font-medium ${centerClass}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
