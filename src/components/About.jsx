import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiCloud, HiBriefcase, HiLightningBolt, HiCheckCircle, HiEye } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import MetricCard from "./ui/MetricCard";
import profileImg from "../assets/profile.jpg";
import { aboutSummary, aboutMetrics, personalInfo } from "../data/portfolioData";

const iconMap = {
  code: HiCode,
  rocket: HiLightningBolt,
  briefcase: HiBriefcase,
  cloud: HiCloud,
};

export default function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Colorful Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <SectionHeading
          label="About Me"
          title="Building With Purpose"
          subtitle="Full-stack software engineer passionate about clean architecture and production-grade applications"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Photo + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 bg-background border border-border p-8 rounded-xl"
          >
            {/* Profile row */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-border bg-surface">
                  <img
                    src={profileImg}
                    alt="Amit Rajput"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Amit Rajput
                </h3>
                <p className="text-muted text-sm font-medium mt-0.5">
                  Full Stack Engineer · Indore, India
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-foreground font-semibold">
                  <HiCheckCircle size={14} className="text-emerald-500" />
                  <span>Advanced MERN Stack Certified</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted text-sm leading-relaxed mb-6">
              {aboutSummary}
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-5 border-t border-border">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-foreground text-xs font-semibold hover:bg-background transition-colors"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 bg-white rounded-full" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-foreground text-xs font-semibold hover:bg-background transition-colors"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-4 h-4 rounded" /> LinkedIn
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-colors border border-emerald-500/20"
              >
                <HiEye size={16} /> View Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Metric cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {aboutMetrics.map((metric, i) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                textValue={metric.textValue}
                label={metric.label}
                icon={iconMap[metric.icon]}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
