import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiX, HiExternalLink } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="certifications" alt>
      <SectionHeading
        label="Credentials"
        title="Professional Certifications"
        subtitle="Industry-recognized qualifications validating technical expertise"
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.button
            key={cert.title}
            type="button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => setSelected(cert)}
            className="card-premium-hover p-1 group text-left w-full focus:outline-none"
          >
            <div className="bg-surface rounded-xl p-6 h-full flex flex-col relative overflow-hidden z-10">
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${cert.color} blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
              
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 shadow-card relative z-10 text-foreground group-hover:text-accent transition-colors">
                <HiAcademicCap size={24} />
              </div>
              
              <h3 className="font-display font-bold text-foreground text-lg tracking-tight mb-2 relative z-10">
                {cert.title}
              </h3>
              <p className="text-accent text-sm font-semibold mb-4 relative z-10">{cert.issuer}</p>
              
              <p className="text-muted text-sm font-medium leading-relaxed line-clamp-3 mb-6 relative z-10">
                {cert.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between relative z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted">
                  {cert.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View Detail <HiExternalLink />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="card-premium max-w-lg w-full p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-surface rounded-xl p-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selected.color} opacity-10 pointer-events-none`} />
                
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-background border border-border text-muted hover:text-foreground transition-colors z-20"
                >
                  <HiX size={20} />
                </button>

                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-card text-accent">
                  <HiAcademicCap size={32} />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground tracking-tight mb-2">
                  {selected.title}
                </h3>
                <p className="text-accent font-semibold mb-6">{selected.issuer}</p>
                <p className="text-muted leading-relaxed font-medium mb-8">
                  {selected.description}
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-background border border-border text-sm font-bold text-foreground tracking-widest uppercase">
                  {selected.badge} Validated
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
