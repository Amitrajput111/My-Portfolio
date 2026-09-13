import React from "react";
import { marqueeItems } from "../../data/portfolioData";

export default function ProjectMarquee() {
  // Duplicate the items for seamless loop
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="relative overflow-hidden mb-12 py-1"
      aria-hidden="true"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-3 px-4 py-2 rounded-full border border-border bg-surface shrink-0 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/70 shrink-0" />
            <span className="text-xs font-semibold text-muted whitespace-nowrap">
              {item.text}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/60 px-2 py-0.5 rounded bg-foreground/8 border border-accent/15 whitespace-nowrap">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
