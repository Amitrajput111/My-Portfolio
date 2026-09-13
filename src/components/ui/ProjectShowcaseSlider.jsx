import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectImages } from "../../assets/projects";

export default function ProjectShowcaseSlider({ projects = [] }) {
  const featured = projects.filter((p) => p.featured);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIdx((p) => (p + 1) % featured.length),
    [featured.length]
  );
  const prev = () => setIdx((p) => (p - 1 + featured.length) % featured.length);

  useEffect(() => {
    if (paused || featured.length === 0) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next, featured.length]);

  if (featured.length === 0) return null;

  const cur = featured[idx];
  const img = (cur.id && projectImages[cur.id]) || cur.image;

  return (
    <div
      className="relative mb-12 rounded-2xl overflow-hidden card-premium border border-white/[0.08]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-purple to-accent z-10" />

      {/* Header bar */}
      <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-secondary border-b border-white/[0.07]">
        <div className="flex items-center gap-3">
          {/* macOS dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/75" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/75" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/75" />
          </div>
          <span className="hidden sm:block text-[10px] text-muted font-mono truncate max-w-[240px]">
            {cur.live ? cur.live.replace("https://", "") : `${cur.name.toLowerCase()}.app`}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Dot indicators */}
          <div className="flex items-center gap-1">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-5 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="p-1.5 rounded-lg bg-card border border-white/[0.07] text-muted hover:text-accent transition-colors"
            aria-label="Previous"
          >
            <FaChevronLeft size={10} />
          </button>
          <button
            onClick={next}
            className="p-1.5 rounded-lg bg-card border border-white/[0.07] text-muted hover:text-accent transition-colors"
            aria-label="Next"
          >
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>

      {/* Slide body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-12 gap-0 items-stretch"
        >
          {/* Left: info panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 bg-card/50">
            <div>
              {/* Badge */}
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 mb-4">
                {cur.badge || "Live Project"}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight mb-1.5">
                {cur.name}
              </h3>
              <p className="text-accent/90 text-sm font-semibold mb-4">
                {cur.subtitle}
              </p>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {cur.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cur.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md font-semibold text-muted bg-secondary border border-white/[0.07]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.06]">
              {cur.live && (
                <a
                  href={cur.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-5"
                >
                  <FaExternalLinkAlt size={11} />
                  View Live
                </a>
              )}
              {cur.github && (
                <a
                  href={cur.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-2.5 px-5"
                >
                  <FaGithub size={13} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Right: screenshot */}
          <div className="lg:col-span-7 bg-secondary/50 flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
            <div className="w-full h-full relative overflow-hidden">
              {img ? (
                <img
                  src={img}
                  alt={`${cur.name} preview`}
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "260px" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent-purple/10">
                  <span className="text-5xl font-black text-white/8 select-none font-display">
                    {cur.name}
                  </span>
                </div>
              )}
              {/* Subtle overlay gradient on right edge for transition */}
              <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-card/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
