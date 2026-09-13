import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import ProjectCard from "./ui/ProjectCard";
import ProjectMarquee from "./ui/ProjectMarquee";
import ProjectShowcaseSlider from "./ui/ProjectShowcaseSlider";
import { projects, projectCategories, personalInfo } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects" className="relative">
      <SectionHeading
        label="Featured Work"
        title="Projects & Platforms"
        subtitle="Production web applications, client platforms, and full-stack systems built with the MERN stack and Next.js"
      />

      {/* Scrolling ticker */}
      <ProjectMarquee />

      {/* Featured auto-slider */}
      <ProjectShowcaseSlider projects={projects} />

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
              activeCategory === cat
                ? "bg-accent text-primary shadow-glow scale-105"
                : "bg-card/70 text-muted hover:text-foreground hover:bg-card border border-white/[0.07]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id || project.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-12"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline group gap-2"
        >
          View All Projects on GitHub
          <HiArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </a>
      </motion.div>
    </Section>
  );
}
