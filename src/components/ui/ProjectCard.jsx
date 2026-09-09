import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { projectImages } from "../../assets/projects";

export default function ProjectCard({ project, index, featured = false }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = (project.id && projectImages[project.id]) || project.image || project.screenshot;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
        featured
          ? "card-premium shadow-glow border border-accent/25 bg-card/90"
          : "card-premium-hover border border-white/[0.08] bg-card/70"
      }`}
    >
      {/* Top badges */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {project.badge && (
          <span className="px-3 py-1 rounded-full text-[11px] font-bold text-accent bg-primary/90 border border-accent/30 shadow-md backdrop-blur-md">
            {project.badge}
          </span>
        )}
      </div>

      {/* Browser Mockup Window */}
      <div className="relative overflow-hidden bg-secondary border-b border-white/[0.08]">
        {/* macOS Browser Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/95 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-primary/80 border border-white/[0.05] text-[10px] text-muted font-mono max-w-[180px] sm:max-w-[220px] truncate">
            {project.live ? project.live.replace("https://", "") : `${project.name.toLowerCase()}.demo`}
          </div>
          <div className="w-4" />
        </div>

        {/* Screenshot Viewport */}
        <div className={`relative overflow-hidden bg-card ${featured ? "h-64 sm:h-72" : "h-52 sm:h-60"}`}>
          {!imgError && imgSrc ? (
            <img
              src={imgSrc}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${
                project.gradient || "from-sky-600/40 to-slate-900"
              } flex items-center justify-center`}
            >
              <span className="text-5xl sm:text-6xl font-display font-black text-white/[0.08] select-none">
                {project.name}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1 tracking-tight">
              {project.name}
            </h3>
            <p className="text-accent text-xs sm:text-sm font-semibold tracking-wide">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 bg-card">
        {project.metrics && (
          <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 w-fit">
            <HiCheckCircle size={14} className="shrink-0" />
            <span className="truncate">{project.metrics}</span>
          </div>
        )}

        <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5 flex-1 font-medium">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.highlights.slice(0, 4).map((h) => (
              <span
                key={h}
                className="text-[11px] text-foreground/80 font-medium flex items-center gap-1.5 truncate"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {h}
              </span>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider text-muted bg-secondary border border-white/[0.08] hover:border-accent/30 hover:text-accent transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/[0.06]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-2 px-4 flex-1 justify-center"
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm py-2 px-4 flex-1 justify-center"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          )}
          {!project.live && !project.github && (
            <span className="tag-pill text-accent border-accent/25 text-xs py-2 px-4 w-full justify-center">
              Internal Architecture
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
