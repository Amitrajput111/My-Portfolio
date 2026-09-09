import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiCloud, HiBriefcase, HiLightningBolt } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import MetricCard from "./ui/MetricCard";
import AnimatedBackground from "./ui/AnimatedBackground";
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
          label="About"
          title="Engineering Profile"
          subtitle="Full-stack builder focused on scalable systems, AI features, and shipping production software"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 card-premium p-9 md:p-11 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-purple to-transparent rounded-t-2xl" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-5 tracking-tight">
              Who I am
            </h3>
            <p className="text-muted text-base md:text-lg leading-relaxed font-medium">
              {aboutSummary}
            </p>
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap gap-2.5">
              {["MERN Stack", "REST APIs", "JWT Auth", "AI Apps", "AWS"].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 md:gap-6">
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
