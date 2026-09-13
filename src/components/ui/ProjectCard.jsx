import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectImages } from "../../assets/projects";

export default function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false);
  const img = !imgErr && ((project.id && projectImages[project.id]) || project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl card-premium-hover border border-white/[0.07] bg-card/90"
    >
      {/* Browser header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary border-b border-white/[0.07] shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500/75" />
          <div className="w-2 h-2 rounded-full bg-amber-500/75" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/75" />
        </div>
        <div className="px-2.5 py-0.5 rounded bg-primary/70 border border-white/[0.05] text-[9px] text-muted font-mono truncate max-w-[180px]">
          {project.live
            ? project.live.replace("https://", "").replace(/\/$/, "")
            : `${project.name.toLowerCase()}.app`}
        </div>
        {project.badge && (
          <span className="text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/15 whitespace-nowrap">
            {project.badge}
          </span>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary shrink-0">
        {img ? (
          <img
            src={img}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
            loading="lazy"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent-purple/10">
            <span className="text-3xl font-display font-black text-white/10 select-none">
              {project.name}
            </span>
          </div>
        )}
      </div>

      {/* Content body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
            {project.name}
          </h3>
          <p className="text-accent/80 text-[11px] font-semibold mt-0.5 tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Description — concise */}
        <p className="text-muted text-xs leading-relaxed mb-4 flex-1">
          {project.description.length > 140
            ? project.description.slice(0, 137) + "…"
            : project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold text-muted/80 bg-secondary border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold text-muted/50">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-3.5 border-t border-white/[0.06]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-2 px-4 flex-1 justify-center"
            >
              <FaExternalLinkAlt size={10} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[11px] py-2 px-4 flex-1 justify-center"
            >
              <FaGithub size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
