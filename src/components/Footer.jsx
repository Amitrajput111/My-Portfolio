import React from "react";
import { personalInfo, navLinks } from "../data/portfolioData";

const socialLinks = [
  { 
    href: personalInfo.github, 
    label: "GitHub",
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  },
  { 
    href: personalInfo.linkedin, 
    label: "LinkedIn",
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
  },
  { 
    href: personalInfo.leetcode, 
    label: "LeetCode",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-24 bg-foreground/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-14 mb-16">
          <div>
            <p className="font-display text-2xl font-bold text-foreground mb-3 tracking-tight">
              Amit <span className="text-foreground">Rajput</span>
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-xs font-medium">
              {personalInfo.headline}
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 text-xs uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-muted text-sm font-semibold hover:text-foreground transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 text-xs uppercase tracking-[0.2em]">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, imgUrl }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3.5 bg-background border border-border rounded-xl hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={imgUrl} alt={label} className="w-6 h-6 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted text-sm font-medium">
            &copy; 2025 Amit Rajput. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
