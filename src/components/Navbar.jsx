import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-elevated"
          : "py-6 bg-transparent"
      }`}
    >
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      )}

      <nav className="section-container flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
          className="font-display text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="text-foreground">Amit</span>{" "}
          <span className="gradient-text">Rajput</span>
        </a>

        <ul className="hidden xl:flex items-center gap-1 p-1.5 rounded-2xl bg-surface border border-border border border-white/[0.06] shadow-card">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeSection === link.id
                    ? "nav-pill-active"
                    : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-6"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="xl:hidden p-3 rounded-xl bg-surface border border-border border border-white/[0.08] text-foreground hover:border-accent/30 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-2xl overflow-hidden shadow-elevated"
          >
            <ul className="section-container py-6 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeSection === link.id
                        ? "nav-pill-active"
                        : "text-muted hover:text-foreground hover:bg-surface/80"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <button type="button" onClick={() => handleNavClick("contact")} className="btn-primary w-full">
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
