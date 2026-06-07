import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Dynamic Animated Canvas Mesh */}
      <CanvasBackground />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Landing */}
        <Hero />

        {/* Terminal Playground Section */}
        <section id="terminal-playground" style={{ paddingTop: '0', paddingBottom: '40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)', marginBottom: '8px', fontWeight: 600 }}>
              &lt;/&gt; Developer Shell
            </p>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
              Interact with my resume using commands
            </h3>
            <Terminal />
          </div>
        </section>

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Storytelling & Metrics */}
        <About />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Skill Interactive Cards */}
        <Skills />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Work Timeline */}
        <Experience />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Education & Certifications Timeline/Grid */}
        <EducationCertifications />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Project Case Studies */}
        <Projects />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Achievements Grid */}
        <Achievements />

        {/* Divider Glow */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent)' }} />

        {/* Contact form connection */}
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </>
  );
}
