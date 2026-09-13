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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="p-8 md:p-10 text-center bg-surface border border-border rounded-xl transition-colors hover:border-muted"
    >
      <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mx-auto mb-5 text-foreground">
        {item.iconUrl ? (
          <img src={item.iconUrl} alt={item.label} className="w-6 h-6 object-contain" />
        ) : (
          <HiTrendingUp size={24} />
        )}
      </div>
      <p className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
        {item.textValue ?? (
          <>
            {value}
            {item.suffix}
          </>
        )}
      </p>
      <p className="text-muted text-sm font-medium">
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
