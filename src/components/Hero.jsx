import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import profileImg from "../assets/profile.jpg";
import { personalInfo, heroDescription } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 bg-background">
      {/* Subtle grain/noise overlay for premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
      
      <div className="section-container relative z-10 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Profile Image - Clean, no glowing borders */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="shrink-0 order-1 md:order-2"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-border shadow-2xl bg-surface">
            <img
              src={profileImg}
              alt="Amit Rajput"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter text-foreground mb-4 leading-tight"
          >
            Amit Rajput.
            <span className="block text-muted">Full Stack Engineer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-custom max-w-lg mb-8"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary group">
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 text-muted hover:text-foreground transition-colors bg-surface border border-border rounded-lg">
                <FaGithub size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 text-muted hover:text-foreground transition-colors bg-surface border border-border rounded-lg">
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
