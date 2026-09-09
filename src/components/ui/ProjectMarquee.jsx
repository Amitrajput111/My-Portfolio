import React from "react";
import { motion } from "framer-motion";
import { marqueeItems } from "../../data/portfolioData";
import { HiLightningBolt } from "react-icons/hi";

export default function ProjectMarquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden py-4 my-8 rounded-2xl bg-secondary/70 border border-white/[0.08] backdrop-blur-md shadow-card">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-secondary via-secondary/90 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 items-center whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        whileHover={{ transition: { duration: 60 } }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-card/80 border border-white/[0.08] hover:border-accent/40 text-xs sm:text-sm font-semibold text-foreground/90 transition-all shadow-sm"
          >
            <span className="p-1 rounded-md bg-accent/15 text-accent">
              <HiLightningBolt size={14} />
            </span>
            <span>{item.text}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent font-bold border border-accent/20">
              {item.category}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
