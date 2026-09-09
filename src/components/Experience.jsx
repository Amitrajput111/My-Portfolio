import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import AnimatedBackground from "./ui/AnimatedBackground";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" className="overflow-hidden">
      <AnimatedBackground variant="section" />
      <div className="relative z-10">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Internships delivering real MERN and AI-powered products"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
              className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 mb-14 last:mb-0"
            >
              <div className="hidden md:flex flex-col items-center pt-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-cyan-400 ring-4 ring-accent/20 shadow-glow shrink-0" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-accent/60 via-accent-purple/30 to-transparent min-h-[80px]" />
                )}
              </div>

              <div className="card-premium-hover p-8 md:p-10 md:col-start-2">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent-purple/10 border border-accent/25 shadow-glow">
                      <HiBriefcase className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-accent font-semibold mt-1">{exp.role}</p>
                    </div>
                  </div>
                  <span className="tag-pill text-accent border-accent/30 bg-accent/5 font-bold">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted leading-relaxed mb-6 font-medium text-base">
                  <span className="text-foreground font-bold">{exp.project}</span> — {exp.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-2 rounded-lg text-xs font-bold text-accent bg-accent/10 border border-accent/25 hover:bg-accent/20 hover:shadow-glow transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
