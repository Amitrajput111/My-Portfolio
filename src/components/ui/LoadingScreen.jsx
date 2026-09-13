import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0 = counting, 1 = done

  useEffect(() => {
    // Smoothly ramp progress from 0 → 100 over ~1.6s
    const steps = 60;
    const interval = 1600 / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      // Ease-out curve: moves fast at first, slows at end
      const eased = Math.round(Math.pow(current / steps, 0.6) * 100);
      setProgress(Math.min(eased, 100));
      if (current >= steps) {
        clearInterval(timer);
        setPhase(1);
        setTimeout(onComplete, 600);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-foreground/8 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 40, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-foreground-purple/10 blur-3xl pointer-events-none"
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Animated logo / name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 text-center"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-lg border-2 border-accent/60 border-t-accent flex items-center justify-center"
                  style={{ borderTopColor: "#38bdf8" }}
                />
                <span className="font-mono text-xs text-foreground/70 uppercase tracking-widest font-bold">
                  initializing
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-black tracking-tighter">
                <span className="text-foreground">Amit</span>{" "}
                <span
                  className="bg-gradient-to-r from-accent via-sky-300 to-accent-purple bg-clip-text text-transparent"
                >
                  Rajput
                </span>
              </h1>
              <p className="text-muted text-sm font-medium mt-3 tracking-wide">
                Full Stack Software Engineer
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-64 sm:w-80"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-muted/60 uppercase tracking-widest">
                  Loading portfolio
                </span>
                <span className="font-mono text-xs font-bold text-foreground tabular-nums">
                  {progress}%
                </span>
              </div>

              {/* Track */}
              <div className="h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #38bdf8, #8b5cf6)",
                    boxShadow: "0 0 12px rgba(56,189,248,0.6)",
                  }}
                  transition={{ duration: 0.08 }}
                />
              </div>

              {/* Status tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-1.5 mt-5 justify-center"
              >
                {[
                  { label: "React", show: progress >= 20 },
                  { label: "Next.js", show: progress >= 40 },
                  { label: "Node.js", show: progress >= 60 },
                  { label: "MongoDB", show: progress >= 80 },
                  { label: "AWS", show: progress >= 95 },
                ].map(({ label, show }) =>
                  show ? (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-foreground/10 text-foreground border border-accent/20"
                    >
                      {label}
                    </motion.span>
                  ) : null
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
