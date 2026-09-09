import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiX, HiExternalLink } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="certifications">
      <SectionHeading
        label="Certifications"
        title="Credentials"
        subtitle="Industry-recognized certifications and specialized training"
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {certifications.map((cert, index) => (
          <motion.button
            key={cert.title}
            type="button"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelected(cert)}
            className="card-premium-hover p-8 text-left w-full group"
          >
            <div
              className={`h-36 rounded-xl bg-gradient-to-br ${cert.color} border border-white/[0.08] flex items-center justify-center mb-7 group-hover:scale-[1.02] transition-transform duration-500 shadow-card relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="relative text-4xl font-display font-black gradient-text">
                {cert.badge}
              </span>
            </div>
            <HiAcademicCap className="text-accent mb-3" size={24} />
            <h3 className="font-display text-foreground font-bold mb-2 leading-snug text-lg tracking-tight">
              {cert.title}
            </h3>
            <p className="text-accent text-sm font-bold mb-3">{cert.issuer}</p>
            <p className="text-muted text-sm line-clamp-2 font-medium leading-relaxed">
              {cert.description}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold text-accent uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Preview certificate <HiExternalLink size={12} />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-primary/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="card-premium max-w-lg w-full p-9 relative shadow-glow"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 p-2.5 rounded-xl glass text-muted hover:text-foreground hover:border-accent/30 transition-colors"
                aria-label="Close"
              >
                <HiX size={22} />
              </button>

              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${selected.color} border border-white/[0.08] flex flex-col items-center justify-center mb-8 shadow-card`}
              >
                <span className="text-7xl font-display font-black gradient-text mb-2">
                  {selected.badge}
                </span>
                <p className="text-muted text-sm font-semibold uppercase tracking-widest">
                  Certificate Preview
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 tracking-tight">
                {selected.title}
              </h3>
              <p className="text-accent font-bold mb-4">{selected.issuer}</p>
              <p className="text-muted leading-relaxed font-medium">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
