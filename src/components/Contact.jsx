import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LeetCodeIcon } from "./ui/Icons";
import { HiPaperAirplane } from "react-icons/hi";
import Section from "./layout/Section";
import SectionHeading from "./layout/SectionHeading";
import { personalInfo } from "../data/portfolioData";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const emailJsConfigured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

const contactLinks = [
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: personalInfo.email, sub: "Email me directly" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn", sub: "Professional network" },
  { icon: FaGithub, href: personalInfo.github, label: "GitHub", sub: "Code & projects" },
  { icon: LeetCodeIcon, href: personalInfo.leetcode, label: "LeetCode", sub: "DSA profile" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!emailJsConfigured) {
      const form = formRef.current;
      const { from_name, from_email, subject, message } = form;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        subject.value
      )}&body=${encodeURIComponent(
        `From: ${from_name.value} (${from_email.value})\n\n${message.value}`
      )}`;
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({
        type: "success",
        message: "Message sent! I'll respond within 24–48 hours.",
      });
      formRef.current.reset();
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please email me directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="overflow-hidden">
      <div className="relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's Build Something"
          subtitle="Open to full-time roles, internships, and freelance collaborations"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="card-premium p-7 border border-success/20 shadow-[0_0_40px_-10px_rgba(16,185,129,0.35)]">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <span className="text-success text-sm font-bold tracking-wide">
                  Open to opportunities
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed font-medium">
                Software Engineer · Full Stack · AI-powered applications. Based in Indore, open to
                remote and hybrid roles across India.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, href, label, sub }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 card-premium-hover rounded-2xl group"
                >
                  <span className="p-3.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent-purple/10 text-accent border border-accent/20 group-hover:shadow-glow transition-shadow duration-300">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{label}</p>
                    <p className="text-muted text-xs font-medium mt-0.5">{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-premium p-8 md:p-10 space-y-6 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-purple to-transparent rounded-t-2xl" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="from_name" className="block text-sm font-bold text-foreground mb-2.5 tracking-wide">
                  Name
                </label>
                <input id="from_name" name="from_name" type="text" required className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-bold text-foreground mb-2.5 tracking-wide">
                  Email
                </label>
                <input id="from_email" name="from_email" type="email" required className="input-field" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2.5 tracking-wide">
                Subject
              </label>
              <input id="subject" name="subject" type="text" required className="input-field" placeholder="Job opportunity / Collaboration" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2.5 tracking-wide">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className="input-field resize-none" placeholder="Tell me about the role or project..." />
            </div>

            {status.message && (
              <p
                className={`text-sm font-bold px-4 py-3 rounded-xl ${
                  status.type === "success"
                    ? "text-success bg-success/10 border border-success/25"
                    : "text-red-400 bg-red-400/10 border border-red-400/25"
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
              <HiPaperAirplane size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
