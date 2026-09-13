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
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next, featured.length]);

  if (featured.length === 0) return null;

  const cur = featured[idx];
  const img = (cur.id && projectImages[cur.id]) || cur.image;

  return (
    <div
      className="relative mb-16 rounded-2xl overflow-hidden bg-surface border border-border"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-muted font-mono tracking-widest uppercase">
            Featured Highlight
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-6 bg-foreground" : "w-1.5 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-border pl-4">
            <button
              onClick={prev}
              className="p-1.5 rounded text-muted hover:text-foreground transition-colors"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={next}
              className="p-1.5 rounded text-muted hover:text-foreground transition-colors"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-12 gap-0"
        >
          {/* Left: info panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-surface">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-2">
                {cur.name}
              </h3>
              <p className="text-muted text-sm font-medium mb-6">
                {cur.subtitle}
              </p>

              <p className="text-muted text-sm leading-relaxed mb-8">
                {cur.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {cur.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded bg-background text-muted border border-border font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {cur.live && (
                <a
                  href={cur.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold transition-transform hover:scale-[0.98]"
                >
                  <FaExternalLinkAlt size={12} />
                  Live Preview
                </a>
              )}
              {cur.github && (
                <a
                  href={cur.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-transparent border border-border text-foreground text-sm font-semibold transition-colors hover:bg-background"
                >
                  <FaGithub size={14} />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Right: screenshot */}
          <div className="lg:col-span-7 bg-background border-l border-border relative overflow-hidden flex items-center justify-center min-h-[300px]">
            {img ? (
              <img
                src={img}
                alt={`${cur.name} preview`}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "300px" }}
              />
            ) : (
              <span className="text-xl font-display font-bold text-muted/30 select-none">
                {cur.name} Image Needed
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
