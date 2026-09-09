import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LeetCodeIcon } from "./ui/Icons";
import { HiLocationMarker, HiDownload, HiArrowRight } from "react-icons/hi";
import AnimatedBackground from "./ui/AnimatedBackground";
import CodeTerminal from "./ui/CodeTerminal";
import { personalInfo, heroDescription, heroRoles } from "../data/portfolioData";

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: LeetCodeIcon, href: personalInfo.leetcode, label: "LeetCode" },
];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-primary"
    >
      <AnimatedBackground variant="hero" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[8%] hidden lg:block w-20 h-20 rounded-2xl glass border border-accent/20 shadow-glow opacity-60"
      />
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[6%] hidden lg:block w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent-purple/20 border border-accent-purple/25 blur-[1px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[40%] left-[15%] w-2 h-2 rounded-full bg-accent shadow-[0_0_20px_#38bdf8]"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full glass border border-success/25 shadow-[0_0_24px_-6px_rgba(16,185,129,0.4)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success shadow-[0_0_10px_#10b981]" />
              </span>
              <span className="text-sm text-foreground/90 font-semibold tracking-wide">
                Available for software engineering opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="section-label mb-6"
            >
              Software Engineer Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.92] mb-8"
            >
              <span className="block text-foreground glow-text">AMIT</span>
              <span className="block gradient-text-shine mt-1">RAJPUT</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-xl sm:text-2xl font-display font-semibold mb-6 h-11 flex items-center"
            >
              <ReactTyped
                strings={heroRoles}
                typeSpeed={45}
                backSpeed={28}
                backDelay={1800}
                loop
                className="text-accent drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-7 font-medium"
            >
              {heroDescription}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2.5 text-muted text-sm mb-10 font-medium"
            >
              <span className="p-2 rounded-lg bg-card border border-white/[0.08]">
                <HiLocationMarker className="text-accent shrink-0" size={16} />
              </span>
              {personalInfo.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button type="button" onClick={() => scrollTo("projects")} className="btn-primary group">
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a href={personalInfo.resumePath} download className="btn-outline">
                <HiDownload size={18} />
                Download Resume
              </a>
              <button type="button" onClick={() => scrollTo("contact")} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-bold mr-2">
                Connect
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3.5 card-premium rounded-xl text-muted hover:text-accent hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block"
          >
            <CodeTerminal />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
