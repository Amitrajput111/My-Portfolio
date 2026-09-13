import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

const stagger = (i) => ({ delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] });

export default function Hero() {
  const [activeTab, setActiveTab] = useState("profile");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-primary"
    >
      <AnimatedBackground variant="hero" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: text column ── */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(0)}
              className="inline-flex items-center gap-2.5 self-start mb-7 px-4 py-2 rounded-full border border-success/30 bg-success/[0.07]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-semibold text-success tracking-wide">
                Available for Software Engineering Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(1)}
              className="heading-display text-6xl sm:text-7xl lg:text-[80px] font-black leading-[0.92] mb-5 tracking-tighter"
            >
              <span className="block text-foreground">AMIT</span>
              <span className="block gradient-text-shine">RAJPUT</span>
            </motion.h1>

            {/* Typed roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={stagger(2)}
              className="text-lg sm:text-xl font-semibold mb-5 h-8 flex items-center"
            >
              <ReactTyped
                strings={heroRoles}
                typeSpeed={42}
                backSpeed={28}
                backDelay={2200}
                loop
                className="text-accent"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={stagger(3)}
              className="text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-5 font-normal"
            >
              {heroDescription}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={stagger(4)}
              className="flex items-center gap-1.5 text-muted/80 text-sm mb-8"
            >
              <HiLocationMarker className="text-accent shrink-0" size={16} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={stagger(5)}
              className="flex flex-wrap gap-3 mb-9"
            >
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="btn-primary group"
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
              <a href={personalInfo.resumePath} download className="btn-outline">
                <HiDownload size={16} />
                Download CV
              </a>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="btn-outline"
              >
                Hire Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={stagger(6)}
              className="flex items-center gap-2.5"
            >
              <span className="text-[10px] text-muted/60 uppercase tracking-[0.18em] font-bold mr-1">
                Connect
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 card-premium rounded-xl text-muted hover:text-accent hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: profile card / terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            {/* Tab switcher */}
            <div className="flex p-1 rounded-2xl bg-secondary border border-white/[0.07] mb-4 gap-1">
              {[
                { id: "profile", label: "Profile" },
                { id: "terminal", label: "Terminal" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-accent text-primary shadow-glow"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "profile" ? (
              /* ── Developer Profile Card ── */
              <div className="card-premium border border-accent/20 shadow-glow rounded-2xl overflow-hidden">
                {/* Header strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-sky-300 to-accent-purple" />

                <div className="p-6 sm:p-7">
                  {/* Photo + name row */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-accent/30 bg-secondary">
                        <img
                          src={profileImg}
                          alt="Amit Rajput"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div
                        className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-primary border border-success/50 text-success"
                        title="Available"
                      >
                        <HiBadgeCheck size={18} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground tracking-tight">
                        Amit Rajput
                      </h3>
                      <p className="text-accent text-xs font-semibold mt-0.5">
                        Full Stack Engineer
                      </p>
                      <p className="text-muted/70 text-xs mt-1.5 font-medium">
                        MERN · Next.js · AWS Certified
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { value: "500+", label: "DSA Solved" },
                      { value: "6+", label: "Live Apps" },
                      { value: "AWS", label: "Certified" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center py-3 rounded-xl bg-secondary/80 border border-white/[0.06]"
                      >
                        <p className="text-base font-display font-extrabold gradient-text">
                          {stat.value}
                        </p>
                        <p className="text-[9px] text-muted font-bold uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind"].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-1 rounded-md font-mono font-semibold text-muted/80 bg-secondary border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <CodeTerminal />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
