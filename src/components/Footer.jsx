import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      style={{
        background: '#09090b',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '56px 24px 32px 24px',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Top Grid Area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {/* Column 1: Brand details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '300px' }}>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '18px',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              amit<span style={{ color: 'var(--text-muted)' }}>.dev</span>
            </a>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Full Stack Developer crafting premium web experiences and scalable systems.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#fff', letterSpacing: '0.05em' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Skills</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Experience</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</a>
            </div>
          </div>

          {/* Column 3: Utilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#fff', letterSpacing: '0.05em' }}>
              Utilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="/resume.pdf" download="Amit_Rajput_Resume.pdf" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Download Resume</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Get in touch</a>
              <a href="mailto:amitrajput98267313@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Email Direct</a>
            </div>
          </div>

          {/* Column 4: Back to Top Trigger */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}
        >
          <span>© {new Date().getFullYear()} Amit Rajput. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            Designed & Engineered by <span style={{ color: '#ffffff', fontWeight: 600 }}>Amit Rajput</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
