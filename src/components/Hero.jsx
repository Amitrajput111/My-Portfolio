import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaTerminal, FaUserCheck } from "react-icons/fa";
import { LeetCodeIcon } from "./ui/Icons";
import { HiLocationMarker, HiDownload, HiArrowRight, HiBadgeCheck } from "react-icons/hi";
import AnimatedBackground from "./ui/AnimatedBackground";
import CodeTerminal from "./ui/CodeTerminal";
import profileImg from "../assets/profile.jpg";
import { personalInfo, heroDescription, heroRoles } from "../data/portfolioData";

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: LeetCodeIcon, href: personalInfo.leetcode, label: "LeetCode" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("profile"); // "profile" or "terminal"

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary"
    >
      <AnimatedBackground variant="hero" />

      {/* Decorative Orbs */}
      <div className="absolute top-[18%] right-[10%] w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full glass border border-success/30 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="text-xs sm:text-sm text-foreground/90 font-semibold tracking-wide">
                Available for Software Engineering Roles
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="section-label mb-4"
            >
              Full Stack Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] mb-6"
            >
              <span className="block text-foreground glow-text">AMIT</span>
              <span className="block gradient-text-shine mt-1">RAJPUT</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-display font-semibold mb-5 h-9 flex items-center"
            >
              <ReactTyped
                strings={heroRoles}
                typeSpeed={40}
                backSpeed={25}
                backDelay={2000}
                loop
                className="text-accent drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-6 font-medium"
            >
              {heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 text-muted text-sm mb-8 font-medium"
            >
              <HiLocationMarker className="text-accent shrink-0" size={18} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3.5 mb-10"
            >
              <button type="button" onClick={() => scrollTo("projects")} className="btn-primary group">
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a href={personalInfo.resumePath} download className="btn-outline">
                <HiDownload size={17} />
                Resume PDF
              </a>
              <button type="button" onClick={() => scrollTo("contact")} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Social Profile Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-[11px] text-muted uppercase tracking-wider font-bold mr-1">
                Connect:
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 card-premium rounded-xl text-muted hover:text-accent hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Profile Card / Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between p-1.5 rounded-2xl bg-secondary/80 border border-white/[0.08] mb-4">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-1 justify-center ${
                  activeTab === "profile"
                    ? "bg-accent text-primary font-bold shadow-glow"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <FaUserCheck size={14} /> Developer Profile
              </button>
              <button
                onClick={() => setActiveTab("terminal")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-1 justify-center ${
                  activeTab === "terminal"
                    ? "bg-accent text-primary font-bold shadow-glow"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <FaTerminal size={13} /> Interactive Shell
              </button>
            </div>

            {/* Tab 1: Amit's Developer Photo & Verified Profile Card */}
            {activeTab === "profile" ? (
              <div className="card-premium border border-accent/25 p-6 sm:p-7 shadow-glow rounded-3xl relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Amit's Photo */}
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:sm:h-32 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-glow bg-secondary">
                      <img
                        src={profileImg}
                        alt="Amit Rajput"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-primary border border-success/40 text-success shadow-md" title="Verified Engineer">
                      <HiBadgeCheck size={20} />
                    </div>
                  </div>

                  {/* Profile Quick Summary */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground tracking-tight">
                      Amit Rajput
                    </h3>
                    <p className="text-accent text-xs font-semibold mt-0.5">
                      Full Stack Software Engineer
                    </p>
                    <p className="text-muted text-xs leading-relaxed mt-2.5 font-medium">
                      Passionate about production architecture, Next.js, MERN stack, and shipping robust systems.
                    </p>
                  </div>
                </div>

                {/* Core Metric Highlights */}
                <div className="grid grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-white/[0.08] text-center">
                  <div className="p-2.5 rounded-xl bg-secondary/80 border border-white/[0.06]">
                    <p className="text-lg font-display font-extrabold gradient-text">500+</p>
                    <p className="text-[10px] text-muted font-semibold uppercase tracking-wider">DSA Solved</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-secondary/80 border border-white/[0.06]">
                    <p className="text-lg font-display font-extrabold gradient-text">6+</p>
                    <p className="text-[10px] text-muted font-semibold uppercase tracking-wider">Live Apps</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-secondary/80 border border-white/[0.06]">
                    <p className="text-lg font-display font-extrabold gradient-text">AWS</p>
                    <p className="text-[10px] text-muted font-semibold uppercase tracking-wider">Associate</p>
                  </div>
                </div>

                {/* Quick Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind"].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold text-muted bg-secondary border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* Tab 2: Code Terminal Shell */
              <CodeTerminal />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
