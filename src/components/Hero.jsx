import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, MessageSquare, Mail, Phone, MapPin, ZoomIn, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '110px',
        paddingBottom: '50px',
      }}
    >
      {/* 2-Column Grid Layout */}
      <div className="grid-cols-2" style={{ width: '100%', alignItems: 'center', gap: '48px' }}>
        
        {/* Left Column: Developer Information */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Availability Pill & Slogan */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '5px 12px',
                borderRadius: '6px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--accent-success)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-success)', display: 'inline-block' }} />
                Available for Roles
              </span>
            </div>
            
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                letterSpacing: '0.15em'
              }}
            >
              CODE. LEARN. BUILD. INNOVATE.
            </span>
          </div>

          {/* Heading Name */}
          <h1
            style={{
              fontSize: 'clamp(44px, 5.5vw, 68px)',
              lineHeight: 1.1,
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            AMIT <span className="text-gradient-accent">RAJPUT</span>
          </h1>

          {/* Subtitle Roles */}
          <h2
            style={{
              fontSize: 'clamp(15px, 2.5vw, 19px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            MERN Stack Developer <span style={{ color: 'var(--accent-primary)' }}>|</span> Full-Stack Developer <span style={{ color: 'var(--accent-primary)' }}>|</span> AI Learner
          </h2>

          {/* Slogan */}
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '560px',
            }}
          >
            Building Scalable, Intelligent & Real-World Web Applications with Modern Tech & AI. Specialized in secure REST APIs, role-based controls, and optimized databases.
          </p>

          {/* Quick Contact & Social Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              padding: '14px 18px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              maxWidth: '560px',
              marginTop: '4px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <Mail size={13} style={{ color: 'var(--accent-primary)' }} />
              <a href="mailto:amitrajput98267313@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                amitrajput98267313@gmail.com
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <Phone size={13} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ color: 'var(--text-primary)' }}>+91-9109265673</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <MapPin size={13} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ color: 'var(--text-primary)' }}>Indore, India</span>
            </div>

            <div style={{ height: '14px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://linkedin.com/in/amitrajput111" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
                <LinkedinIcon size={14} />
              </a>
              <a href="https://github.com/Amitrajput111" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
                <GithubIcon size={14} />
              </a>
              <a href="https://leetcode.com/u/amit_rajput111" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
                <LeetcodeIcon size={14} />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              marginTop: '6px'
            }}
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="btn-primary"
              style={{ fontSize: '13px', padding: '9px 18px' }}
            >
              View Projects <ArrowRight size={14} />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-secondary"
              style={{ fontSize: '13px', padding: '9px 18px' }}
            >
              Contact Me <MessageSquare size={14} />
            </a>

            <a
              href="/resume.pdf"
              download="Amit_Rajput_Resume.pdf"
              className="btn-secondary"
              style={{ borderStyle: 'dashed', fontSize: '13px', padding: '9px 18px' }}
            >
              Resume <Download size={14} />
            </a>
          </div>

          {/* Key Metrics Checklist Card */}
          <div
            className="glass-card"
            style={{
              padding: '16px 20px',
              marginTop: '10px',
              maxWidth: '560px',
              background: 'rgba(15, 20, 32, 0.3)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}
          >
            {[
              '200+ Solved on LeetCode',
              '160+ Solved on GeeksforGeeks',
              'Innothon Hackathon Leader',
              'Strong DSA & OOPs Core'
            ].map((text, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    color: 'var(--accent-primary)',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.04)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Premium Glowing Photo Frame & Floating Badges */}
        <div className="flex-center" style={{ position: 'relative', height: '400px' }}>
          
          {/* Photo Wrapper */}
          <div className="dev-photo-wrapper">
            <div className="dev-photo-frame">
              <img
                src="/amit-photo.jpg"
                alt="Amit Rajput Portrait"
                className="dev-photo-img"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=320&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Tech Decoration Grid Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
                pointerEvents: 'none',
                opacity: 0.5,
                borderRadius: '16px'
              }}
            />

            {/* Corner Tech Brackets */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', width: '12px', height: '12px', borderLeft: '2px solid var(--accent-primary)', borderTop: '2px solid var(--accent-primary)' }} />
            <div style={{ position: 'absolute', top: '16px', right: '16px', width: '12px', height: '12px', borderRight: '2px solid var(--accent-primary)', borderTop: '2px solid var(--accent-primary)' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', width: '12px', height: '12px', borderLeft: '2px solid var(--accent-primary)', borderBottom: '2px solid var(--accent-primary)' }} />
            <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '12px', height: '12px', borderRight: '2px solid var(--accent-primary)', borderBottom: '2px solid var(--accent-primary)' }} />

            {/* Floating Badges */}
            <div className="floating-badge" style={{ top: '24px', left: '-30px' }}>
              <span style={{ color: 'var(--accent-primary)' }}>&lt;/&gt;</span>
              <span>React / Node.js</span>
            </div>

            <div className="floating-badge" style={{ bottom: '40px', right: '-35px' }}>
              <span>🧠 AI Enthusiast</span>
            </div>

            <div className="floating-badge" style={{ top: '55%', left: '-40px' }}>
              <span>🏆 Problem Solver</span>
            </div>
          </div>

        </div>

      </div>

      {/* Full-width Technical Blueprint Section */}
      <div style={{ marginTop: '64px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }} />
          <h3 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)' }}>
            System Architecture Blueprint
          </h3>
        </div>

        <div
          onClick={() => setIsLightboxOpen(true)}
          className="glass-card"
          style={{
            padding: 0,
            overflow: 'hidden',
            cursor: 'zoom-in',
            border: '1px solid var(--border-color)',
            background: 'rgba(10, 15, 30, 0.3)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
            borderRadius: '12px',
            position: 'relative'
          }}
        >
          {/* Mock Browser/OS Title Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ marginLeft: '8px', fontSize: '11px', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                amit-developer-blueprint.sys
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--accent-primary)', fontWeight: 500, fontFamily: 'monospace' }}>
              <ZoomIn size={12} />
              <span>Click to analyze blueprint</span>
            </div>
          </div>

          {/* Banner Graphic Frame */}
          <div style={{ width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/amit-banner.png"
              alt="Amit Rajput Tech Stack Banner"
              className="blueprint-hover-zoom"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            {/* Interactive Cover Overlay */}
            <div
              className="blueprint-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 9, 14, 0.85) 0%, rgba(7, 9, 14, 0.15) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px',
                pointerEvents: 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                    Full Stack & AI Developer Blueprint
                  </h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                    Overview of core technologies, project integrations, and community highlights.
                  </p>
                </div>
                
                <span
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '6px 14px',
                    fontSize: '11px',
                    color: '#ffffff',
                    fontWeight: 600,
                  }}
                >
                  Examine Blueprint
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Fidelity Lightbox Modal */}
      {isLightboxOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(5, 7, 12, 0.95)',
            backdropFilter: 'blur(16px)',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close trigger button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.04)'}
          >
            <X size={18} />
          </button>

          {/* Expanded Image */}
          <div
            style={{
              maxWidth: '1280px',
              width: '100%',
              maxHeight: '82vh',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/amit-banner.png"
              alt="Amit Rajput Complete System Blueprint"
              style={{
                maxWidth: '100%',
                maxHeight: '82vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(99, 102, 241, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            />
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '16px', fontFamily: 'monospace', opacity: 0.8 }}>
            Press ESC or click anywhere to exit view
          </p>
        </div>
      )}
    </section>
  );
}

