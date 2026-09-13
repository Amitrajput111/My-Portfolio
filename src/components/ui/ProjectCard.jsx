import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectImages } from "../../assets/projects";

export default function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false);
  const img = !imgErr && ((project.id && projectImages[project.id]) || project.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-surface border border-border transition-all duration-300 hover:border-muted hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
    >
      {/* Screenshot Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background shrink-0 border-b border-border">
        {img ? (
          <img
            src={img}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top filter transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-background">
            <span className="text-xl font-display font-bold text-muted/30 select-none">
              {project.name}
            </span>
          </div>
        )}
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-surface">
        {/* Title */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-display font-semibold text-foreground tracking-tight">
              {project.name}
            </h3>
            {project.badge && (
              <span className="text-[10px] font-medium uppercase tracking-wider text-foreground bg-background px-2 py-0.5 rounded border border-border">
                {project.badge}
              </span>
            )}
          </div>
          <p className="text-muted text-xs font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description.length > 130
            ? project.description.slice(0, 127) + "..."
            : project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-1 rounded bg-background text-muted border border-border font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-1 rounded text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-border">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md bg-foreground text-background text-xs font-semibold transition-transform hover:scale-[0.98]"
            >
              <FaExternalLinkAlt size={10} />
              Visit Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-md bg-transparent border border-border text-foreground text-xs font-semibold transition-colors hover:bg-background"
            >
              <FaGithub size={12} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
