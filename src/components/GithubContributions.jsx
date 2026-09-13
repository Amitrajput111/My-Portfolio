import React from "react";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { personalInfo } from "../data/portfolioData";

export default function GithubContributions() {
  return (
    <Section id="contributions" className="bg-surface/30">
      <SectionHeading
        label="Open Source"
        title="GitHub Contributions"
        subtitle="My daily coding activity and open-source contributions."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="card-premium p-6 md:p-10 flex flex-col items-center justify-center">
          <div className="w-full overflow-x-auto pb-4 flex justify-center">
            <img 
              src={`https://ghchart.rshah.org/10B981/Amitrajput111`} 
              alt="Amit's GitHub Contributions" 
              className="min-w-[700px] h-auto w-full object-contain filter hue-rotate-0 brightness-110 contrast-125 transition-all duration-300 hover:scale-[1.02]"
            />
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background border border-border text-foreground hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-4 h-4 bg-white rounded-full" alt="GitHub" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
