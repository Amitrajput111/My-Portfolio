import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp";

export default function MetricCard({ value, suffix = "", textValue, label, icon: Icon, delay }) {
  const numeric = typeof value === "number";
  const { ref, value: countValue } = useCountUp(numeric ? value : 0);

  return (
    <motion.div
      ref={numeric ? ref : undefined}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="p-6 rounded-xl bg-background border border-border flex items-center gap-4 hover:border-muted transition-colors"
    >
      <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0 text-foreground border border-border">
        {Icon && <Icon size={20} />}
      </div>
      <div>
        <h4 className="text-2xl font-display font-bold text-foreground mb-0.5">
          {textValue || (
            <>
              {countValue}
              {suffix}
            </>
          )}
        </h4>
        <p className="text-xs text-muted font-medium uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}
