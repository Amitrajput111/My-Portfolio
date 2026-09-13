import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, align = "center" }) {
  const isCenter = align !== "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-20 ${isCenter ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`section-label mb-5 inline-flex ${isCenter ? "mx-auto" : ""}`}
        >
          {label}
        </span>
      )}

      <h2
        className={`heading-display text-3xl sm:text-4xl md:text-5xl mb-4 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      <div className={`divider-glow mb-5 ${isCenter ? "mx-auto" : ""}`} />

      {subtitle && (
        <p
          className={`text-muted text-base md:text-lg max-w-2xl leading-relaxed font-normal ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
