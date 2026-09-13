import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground({ variant = "hero" }) {
  const isHero = variant === "hero";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      {isHero && <div className="absolute inset-0 bg-mesh-hero" />}

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: isHero ? "72px 72px" : "56px 56px",
          maskImage: isHero
            ? "radial-gradient(ellipse 90% 80% at 50% 30%, black 15%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 50% 50%, black 10%, transparent 75%)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.35, 0.65, 0.35], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`orb bg-foreground/25 ${
          isHero ? "top-[5%] -left-[15%] w-[600px] h-[600px]" : "top-0 left-0 w-[400px] h-[400px]"
        }`}
      />
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`orb bg-foreground-purple/20 ${
          isHero ? "bottom-[0%] -right-[10%] w-[650px] h-[650px]" : "bottom-0 right-0 w-[350px] h-[350px]"
        }`}
      />
      {isHero && (
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/10"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
    </div>
  );
}
