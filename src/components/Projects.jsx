import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import ProjectCard from "./ui/ProjectCard";
import ProjectMarquee from "./ui/ProjectMarquee";
import ProjectShowcaseSlider from "./ui/ProjectShowcaseSlider";
import { projects, projectCategories } from "../data/portfolioData";

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
        title="Production Systems & Client Platforms"
        subtitle="High-impact web applications, automated workflows, and full-stack solutions built for performance and real-world scale"
      />

      {/* Auto-scrolling continuous Marquee ticker ribbon */}
      <ProjectMarquee />

      {/* Flagship Auto-Scrolling Project Showcase Slider */}
      <ProjectShowcaseSlider projects={projects} />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-accent text-primary shadow-glow font-bold scale-105"
                : "bg-card/70 text-muted hover:text-foreground hover:bg-card border border-white/[0.08]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id || project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
