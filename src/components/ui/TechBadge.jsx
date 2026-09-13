import React from "react";
import { motion } from "framer-motion";

export default function TechBadge({ skill, index = 0 }) {
  const { name, logo } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ y: -2, scale: 1.02 }}
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-background border border-border cursor-default hover:border-muted transition-colors"
    >
      {logo ? (
        <img src={logo} alt={name} className="w-4 h-4 object-contain" loading="lazy" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
      )}
      <span className="text-xs font-medium text-muted hover:text-foreground transition-colors">{name}</span>
    </motion.div>
  );
}
