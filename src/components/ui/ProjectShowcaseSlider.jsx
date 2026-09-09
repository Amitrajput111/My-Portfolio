import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { projectImages } from "../../assets/projects";

export default function ProjectShowcaseSlider({ projects = [] }) {
  const featuredProjects = projects.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || featuredProjects.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
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
      className="relative mb-14 rounded-2xl overflow-hidden card-premium border border-accent/25 shadow-glow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 bg-secondary/95 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
            <HiSparkles /> Featured Production Showcase
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            {featuredProjects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg bg-card border border-white/[0.08] text-muted hover:text-accent transition-colors"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <FaPlay size={10} /> : <FaPause size={10} />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-lg bg-card border border-white/[0.08] text-muted hover:text-accent transition-colors"
            aria-label="Previous Project"
          >
            <FaChevronLeft size={11} />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-lg bg-card border border-white/[0.08] text-muted hover:text-accent transition-colors"
            aria-label="Next Project"
          >
            <FaChevronRight size={11} />
          </button>
        </div>
      </div>

      {/* Main Slide Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id || current.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center bg-card/60"
        >
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/25 mb-3">
                {current.badge || "Client Platform"}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1.5 tracking-tight">
                {current.name}
              </h3>
              <p className="text-accent text-sm font-semibold mb-3">
                {current.subtitle}
              </p>

              <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
                {current.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md font-semibold text-muted bg-secondary border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.06]">
              {current.live && (
                <a
                  href={current.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5"
                >
                  <FaExternalLinkAlt size={12} />
                  Visit Live Platform
                </a>
              )}
              {current.github && (
                <a
                  href={current.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs sm:text-sm py-2.5 px-5"
                >
                  <FaGithub size={14} />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Screenshot Window */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden bg-secondary border border-white/[0.12] shadow-elevated">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-secondary/95 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded bg-card text-[10px] text-muted font-mono max-w-[260px] truncate border border-white/[0.05]">
                  {current.live ? current.live.replace("https://", "").replace(/\/$/, "") : `${current.name.toLowerCase()}.app`}
                </div>
                <div className="w-6" />
              </div>

              {/* Screenshot View */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={`${current.name} showcase preview`}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
