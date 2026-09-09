import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiCloud, HiBriefcase, HiLightningBolt, HiCheckCircle } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import MetricCard from "./ui/MetricCard";
import AnimatedBackground from "./ui/AnimatedBackground";
import profileImg from "../assets/profile.jpg";
import { aboutSummary, aboutMetrics } from "../data/portfolioData";

const iconMap = {
  code: HiCode,
  rocket: HiLightningBolt,
  briefcase: HiBriefcase,
  cloud: HiCloud,
};

export default function About() {
  return (
    <Section id="about" alt className="overflow-hidden">
      <AnimatedBackground variant="section" />
      <div className="relative z-10">
        <SectionHeading
          label="About Me"
          title="Engineering Philosophy & Background"
          subtitle="Full-stack software developer focused on building scalable, production-grade applications"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Amit's Photo & Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 card-premium p-7 sm:p-9 relative overflow-hidden"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-glow shrink-0 bg-secondary">
                <img
                  src={profileImg}
                  alt="Amit Rajput"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Amit Rajput
                </h3>
                <p className="text-accent text-xs sm:text-sm font-semibold mt-0.5">
                  Full Stack Engineer · Indore, India
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400 font-semibold">
                  <HiCheckCircle size={15} />
                  <span>AWS Certified Developer</span>
                </div>
              </div>
            </div>

            <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
              {aboutSummary}
            </p>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
              {["Next.js", "React.js", "Node.js", "REST APIs", "MongoDB", "AWS", "Tailwind CSS"].map((tag) => (
                <span key={tag} className="tag-pill text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 4 Core Metric Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {aboutMetrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                textValue={metric.textValue}
                label={metric.label}
                icon={iconMap[metric.icon]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
