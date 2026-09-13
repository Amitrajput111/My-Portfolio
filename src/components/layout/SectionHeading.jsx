import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, align = "center" }) {
  const isCenter = align !== "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-16 md:mb-20 ${isCenter ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`inline-block mb-4 text-xs font-mono font-bold tracking-widest text-muted uppercase`}
        >
          {label}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4`}
      >
        {title}
      </h2>

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
