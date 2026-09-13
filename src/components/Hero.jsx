import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiDownload, HiCode } from "react-icons/hi";
import { personalInfo, heroDescription } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Building digital <br className="hidden sm:block" />
            <span className="gradient-text">experiences</span> that scale.
          </h1>

          <p className="text-muted-custom text-lg sm:text-xl mb-8 max-w-xl">
            {heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group">
              View Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={personalInfo.resumePath} download className="btn-outline group">
              Resume
              <HiDownload className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Mini Tech Stack */}
          <div className="mt-12 flex items-center gap-5 text-muted border-t border-border pt-6 w-full max-w-md">
            <span className="text-sm font-semibold uppercase tracking-widest">Tech Stack</span>
            <div className="flex items-center gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" title="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" title="Node.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full p-0.5" title="Next.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer bg-white rounded p-0.5" title="AWS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" title="MongoDB" />
            </div>
          </div>
        </motion.div>

        {/* Right Content - Profile Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Glowing backplate */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-accent-secondary blur-3xl opacity-20 rounded-[3rem]" />
          
          <div className="relative card-premium p-6 rounded-[2.5rem] bg-surface/40 backdrop-blur-2xl">
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/50">
              <img 
                src={profileImg} 
                alt="Amit Rajput" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-display font-bold text-foreground">Amit Rajput</h3>
                  <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center border border-border text-accent">
                    <HiCode size={20} />
                  </div>
                </div>
                <p className="text-accent font-mono text-sm">Full Stack Engineer</p>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-12 card-premium px-4 py-3 rounded-2xl flex items-center gap-3 bg-surface/90"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">
                <HiCode size={16} />
              </div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                MERN Stack<br/><span className="text-muted text-xs">Developer</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-32 card-premium px-4 py-3 rounded-2xl flex items-center gap-3 bg-surface/90"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                💼
              </div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                2 Months<br/><span className="text-muted text-xs">Internship</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-4 -bottom-6 card-premium px-4 py-3 rounded-2xl flex items-center gap-3 bg-surface/90 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-xs">
                LC
              </div>
              <div className="text-sm font-semibold text-foreground leading-tight">
                500+<br/><span className="text-muted text-xs">LeetCode</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
