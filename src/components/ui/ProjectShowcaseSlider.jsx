import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import { HiSparkles, HiCheckCircle } from "react-icons/hi";
import { projectImages } from "../../assets/projects";

export default function ProjectShowcaseSlider({ projects = [] }) {
  const featuredProjects = projects.filter((p) => p.featured || p.image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || featuredProjects.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, featuredProjects.length]);

  if (featuredProjects.length === 0) return null;

  const current = featuredProjects[currentIndex];
  const imgSrc = (current.id && projectImages[current.id]) || current.image;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  return (
    <div
      className="relative mb-14 rounded-3xl overflow-hidden card-premium border border-accent/25 shadow-glow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Banner & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-secondary/90 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
            <HiSparkles /> Flagship Production Showcase
          </span>
        </div>

        {/* Carousel indicators & buttons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2">
            {featuredProjects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-7 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-lg bg-card/80 border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 transition-colors"
            title={isPaused ? "Play auto-scroll" : "Pause auto-scroll"}
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <FaPlay size={11} /> : <FaPause size={11} />}
          </button>
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-card/80 border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 transition-colors"
            aria-label="Previous Project"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-card/80 border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 transition-colors"
            aria-label="Next Project"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id || current.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="grid lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center bg-card/40"
        >
          {/* Left Info Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent border border-accent/30">
                  {current.badge || "Featured Project"}
                </span>
                {current.metrics && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {current.metrics}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2 tracking-tight">
                {current.name}
              </h3>
              <p className="text-accent text-sm sm:text-base font-semibold mb-4">
                {current.subtitle}
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {current.description}
              </p>

              {/* Highlights */}
              {current.highlights && (
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {current.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                      <HiCheckCircle className="text-accent shrink-0" size={16} />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider text-muted bg-secondary/80 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.08]">
              {current.live && (
                <a
                  href={current.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-3 px-6"
                >
                  <FaExternalLinkAlt size={13} />
                  Launch Live App
                </a>
              )}
              {current.github && (
                <a
                  href={current.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-3 px-6"
                >
                  <FaGithub size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-secondary border border-white/[0.12] shadow-elevated group">
              {/* macOS Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/95 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-4 py-1 rounded-md bg-card/80 border border-white/[0.06] text-[11px] text-muted font-mono max-w-[220px] sm:max-w-[280px] truncate">
                  {current.live ? current.live.replace("https://", "") : `${current.name.toLowerCase()}.app`}
                </div>
                <div className="w-8" />
              </div>

              {/* Screenshot container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-card flex items-center justify-center">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={`${current.name} live view`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${current.gradient} flex items-center justify-center`}>
                    <span className="text-6xl font-display font-black text-white/10">{current.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
