import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

export default function MetricCard({ value, suffix = "", label, icon: Icon, delay = 0, textValue }) {
  const numericTarget = typeof value === "number" ? value : null;
  const { ref, value: count } = useCountUp(numericTarget ?? 0);

  return (
    <motion.div
      ref={numericTarget !== null ? ref : undefined}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group card-premium-hover p-7 md:p-9 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />

      <div className="relative z-10">
        {Icon && (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-accent/20 to-accent-purple/10 border border-accent/25 shadow-glow">
            <Icon className="text-accent" size={24} />
          </div>
        )}
        <p className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-2">
          <span className="gradient-text glow-text">
            {textValue ?? (
              <>
                {count}
                {suffix}
              </>
            )}
          </span>
        </p>
        <p className="text-muted text-sm md:text-base font-semibold leading-snug">{label}</p>
      </div>
    </motion.div>
  );
}
