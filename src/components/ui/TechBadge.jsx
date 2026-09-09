import React from "react";
import { motion } from "framer-motion";

export default function TechBadge({ name, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.35 }}
      whileHover={{ y: -3, scale: 1.03 }}
      className="badge-tech cursor-default"
    >
      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-purple shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
      {name}
    </motion.span>
  );
}
