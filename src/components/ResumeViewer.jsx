import React from "react";
import { motion } from "framer-motion";
import { HiDownload, HiEye } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { personalInfo } from "../data/portfolioData";

export default function ResumeViewer() {
  return (
    <Section id="resume" className="bg-surface/50 border-y border-border">
      <SectionHeading
        label="Professional Background"
        title="Resume & Credentials"
        subtitle="View my full professional history, skills, and qualifications."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="card-premium p-4 md:p-6 lg:p-8 flex flex-col items-center">
          <div className="w-full bg-background border border-border rounded-xl overflow-hidden shadow-inner h-[600px] mb-8 relative">
            {/* We use an iframe to display the PDF directly in the browser */}
            <iframe
              src={`${personalInfo.resumePath}#view=FitH`}
              title="Amit Rajput Resume"
              className="w-full h-full border-none"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border text-foreground font-bold text-sm hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
            >
              <HiEye size={18} />
              Open in New Tab
            </a>
            <a 
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-sm hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              <HiDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
