import React from "react";
import { motion } from "framer-motion";
import { HiTrendingUp } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import useCountUp from "../hooks/useCountUp";
import { achievements } from "../data/portfolioData";

function StatCard({ item, index }) {
  const numeric = typeof item.value === "number";
  const { ref, value } = useCountUp(numeric ? item.value : 0);

  return (
    <motion.div
      ref={numeric ? ref : undefined}
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      whileHover={{ y: -10, transition: { duration: 0.25 } }}
      className="card-premium-hover p-9 md:p-10 text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="w-14 h-14 rounded-2xl bg-foreground/10 border border-accent/25 flex items-center justify-center mx-auto mb-5 group-hover:shadow-card-hover transition-shadow">
        <HiTrendingUp className="text-foreground relative" size={28} />
      </div>
      <p className="text-4xl md:text-5xl font-display font-extrabold gradient-text mb-3 relative glow-text">
        {item.textValue ?? (
          <>
            {value}
            {item.suffix}
          </>
        )}
      </p>
      <p className="text-muted text-sm md:text-base font-semibold relative leading-snug">
        {item.label}
      </p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" alt>
      <SectionHeading
        label="Achievements"
        title="Impact & Growth"
        subtitle="Consistent problem-solving practice and shipped products"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {achievements.map((item, index) => (
          <StatCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
