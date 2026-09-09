import React from "react";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import TechBadge from "./ui/TechBadge";
import { skillCategories } from "../data/portfolioData";

const categoryGlow = {
  Frontend: "from-accent/25",
  Backend: "from-accent-purple/25",
  Database: "from-emerald-500/20",
  Cloud: "from-amber-500/20",
  Programming: "from-rose-500/20",
  Tools: "from-cyan-500/25",
};

export default function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeading
        label="Skills"
        title="Technical Stack & Architecture"
        subtitle="Core competencies and frameworks I leverage to engineer high-throughput, production-grade applications"
      />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.08, duration: 0.55 }}
            whileHover={{ y: -8 }}
            className="card-premium-hover p-7 md:p-8 relative overflow-hidden group"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${
                categoryGlow[category.title] || "from-accent/20"
              } to-transparent`}
            />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/15 transition-colors" />

            <div className="relative">
              <div className="flex items-center justify-between mb-7 pb-5 border-b border-white/[0.06]">
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[10px] font-bold font-mono text-accent uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                  {category.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <TechBadge key={skill} name={skill} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
