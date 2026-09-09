import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectImages } from "../../assets/projects";

export default function ProjectCard({ project, index, featured = false }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = (project.id && projectImages[project.id]) || project.image || project.screenshot;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
        featured
          ? "card-premium border border-accent/25 bg-card/95 shadow-glow"
          : "card-premium-hover border border-white/[0.08] bg-card/85"
      }`}
    >
      {/* Top Browser Header Frame */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/95 border-b border-white/[0.08]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-3 py-0.5 rounded bg-primary/80 border border-white/[0.06] text-[10px] text-muted font-mono max-w-[200px] truncate">
          {project.live ? project.live.replace("https://", "").replace(/\/$/, "") : `${project.name.toLowerCase()}.app`}
        </div>
        {project.badge && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
            {project.badge}
          </span>
        )}
      </div>

      {/* Unobstructed Screenshot Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        {!imgError && imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.name} UI preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${
              project.gradient || "from-sky-600/40 to-slate-900"
            } flex items-center justify-center`}
          >
            <span className="text-4xl font-display font-black text-white/10 select-none">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-card border-t border-white/[0.06]">
        <div className="mb-3">
          <h3 className="text-xl font-display font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-accent text-xs font-semibold tracking-wide mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 flex-1 font-medium">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-md font-semibold text-muted bg-secondary border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2.5 mt-auto pt-3 border-t border-white/[0.06]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4 flex-1 justify-center"
            >
              <FaGithub size={13} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
