import React from "react";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import TechBadge from "./ui/TechBadge";
import { skillCategories } from "../data/portfolioData";

// Map category to a subtle accent color
const catColor = {
  "Frontend Architecture": "from-accent/15",
  "Backend & Systems": "from-accent-purple/15",
  "Databases & Storage": "from-emerald-500/15",
  "Integrations & Automation": "from-rose-500/12",
  "Cloud & DevOps": "from-amber-500/15",
  "Engineering Tools": "from-cyan-500/15",
};

export default function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeading
        label="Skills"
        title="Tech Stack"
        subtitle="Core competencies I leverage to engineer scalable, production-grade applications"
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="card-premium-hover p-6 md:p-7 relative overflow-hidden"
          >
            {/* Subtle top gradient accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-20 bg-gradient-to-b ${
                catColor[category.title] || "from-accent/10"
              } to-transparent pointer-events-none`}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                <h3 className="font-display text-base font-bold text-foreground tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[9px] font-bold font-mono text-accent uppercase tracking-widest px-2 py-0.5 rounded bg-accent/10 border border-accent/15">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <TechBadge key={skill} name={skill} index={j} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
