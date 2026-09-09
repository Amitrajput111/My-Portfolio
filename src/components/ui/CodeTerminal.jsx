import React from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "const engineer = {", delay: 0 },
  { text: '  name: "Amit Rajput",', delay: 0.15 },
  { text: '  role: "Software Engineer",', delay: 0.3 },
  { text: '  stack: ["MERN", "AWS", "AI"],', delay: 0.45 },
  { text: "  building: scalableApps(),", delay: 0.6 },
  { text: "};", delay: 0.75 },
];

export default function CodeTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto animate-float"
    >
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-accent via-accent-purple to-accent opacity-70 blur-md" />
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-purple/30 blur-xl" />

      <div className="relative card-premium rounded-2xl overflow-hidden shadow-elevated glow-accent">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.08] bg-secondary/90">
          <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
          <span className="w-3 h-3 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="ml-3 text-xs text-muted font-mono font-medium tracking-wide">
            portfolio.tsx
          </span>
        </div>
        <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto bg-card/95">
          {lines.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + line.delay }}
            >
              <span
                className={
                  i === 0 || i === lines.length - 1
                    ? "text-accent-purple font-semibold"
                    : "text-muted"
                }
              >
                {line.text}
              </span>
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-accent ml-1 align-middle rounded-sm shadow-glow"
          />
        </pre>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-5 -right-3 px-4 py-2 rounded-xl glass text-xs font-mono font-semibold text-accent border border-accent/30 shadow-glow"
      >
        npm run deploy ✓
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-4 -left-3 px-4 py-2 rounded-xl glass text-xs font-mono font-semibold text-success border border-success/30"
      >
        3 apps live
      </motion.div>
    </motion.div>
  );
}
