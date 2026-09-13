import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiExternalLink } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <Section id="certifications" alt>
      <SectionHeading
        label="Credentials"
        title="Professional Certifications"
        subtitle="Industry-recognized qualifications validating technical expertise"
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="card-premium-hover p-1 group text-left w-full focus:outline-none block"
          >
            <div className="bg-surface rounded-xl p-6 h-full flex flex-col relative overflow-hidden z-10">
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${cert.color} blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
              
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 shadow-card relative z-10 text-foreground group-hover:text-accent-secondary transition-colors">
                <HiAcademicCap size={24} />
              </div>
              
              <h3 className="font-display font-bold text-foreground text-lg tracking-tight mb-2 relative z-10">
                {cert.title}
              </h3>
              <p className="text-accent-secondary text-sm font-semibold mb-4 relative z-10">{cert.issuer}</p>
              
              <p className="text-muted text-sm font-medium leading-relaxed line-clamp-3 mb-6 relative z-10">
                {cert.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between relative z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted">
                  {cert.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View PDF <HiExternalLink />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
