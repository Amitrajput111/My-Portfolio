import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiCloud, HiBriefcase, HiLightningBolt, HiCheckCircle, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <Section id="about" alt className="overflow-hidden">
      <div className="relative z-10">
        <SectionHeading
          label="About Me"
          title="Building With Purpose"
          subtitle="Full-stack software engineer passionate about clean architecture and production-grade applications"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Photo + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 card-premium p-7 sm:p-8 relative overflow-hidden"
          >
            {/* Accent top strip */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-purple to-transparent" />

            {/* Profile row */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-accent/30 bg-secondary">
                  <img
                    src={profileImg}
                    alt="Amit Rajput"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                  Amit Rajput
                </h3>
                <p className="text-accent text-xs font-semibold mt-0.5">
                  Full Stack Engineer · Indore, India
                </p>
                <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-400 font-semibold">
                  <HiCheckCircle size={14} />
                  <span>AWS Certified Developer</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              {aboutSummary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Next.js", "React.js", "Node.js", "REST APIs", "MongoDB", "AWS", "Tailwind CSS"].map(
                (tag) => (
                  <span key={tag} className="tag-pill text-xs">
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2.5 pt-5 border-t border-white/[0.07]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4 gap-2"
              >
                <FaGithub size={13} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4 gap-2"
              >
                <FaLinkedin size={13} /> LinkedIn
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className="btn-primary text-xs py-2 px-4 gap-2"
              >
                <HiExternalLink size={13} /> Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Metric cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {aboutMetrics.map((metric, i) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                textValue={metric.textValue}
                label={metric.label}
                icon={iconMap[metric.icon]}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
