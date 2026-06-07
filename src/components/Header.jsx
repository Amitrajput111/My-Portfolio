import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, LeetcodeIcon, GfgIcon } from './Icons';


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const ACCENT_PRESETS = [
  { name: 'Indigo', value: '#6366f1', secondary: '#a855f7' },
  { name: 'Emerald', value: '#10b981', secondary: '#3b82f6' },
  { name: 'Cyan', value: '#06b6d4', secondary: '#6366f1' },
  { name: 'Rose', value: '#f43f5e', secondary: '#fb7185' },
  { name: 'Amber', value: '#f59e0b', secondary: '#e11d48' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedAccent, setSelectedAccent] = useState('Indigo');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-accent') || 'Indigo';
    setSelectedAccent(saved);
    const preset = ACCENT_PRESETS.find((p) => p.name === saved) || ACCENT_PRESETS[0];
    document.documentElement.style.setProperty('--accent-primary', preset.value);
    document.documentElement.style.setProperty('--accent-secondary', preset.secondary);
  }, []);

  const changeAccent = (name) => {
    setSelectedAccent(name);
    localStorage.setItem('portfolio-accent', name);
    const preset = ACCENT_PRESETS.find((p) => p.name === name);
    if (preset) {
      document.documentElement.style.setProperty('--accent-primary', preset.value);
      document.documentElement.style.setProperty('--accent-secondary', preset.secondary);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.2s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: scrolled ? '14px 24px' : '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>amit</span>
            <span style={{ color: 'var(--text-muted)' }}>.dev</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', gap: '4px' }} className="desktop-nav">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    color: active ? '#ffffff' : 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '13px',
                    padding: '6px 12px',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    background: active ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    border: active ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Accent Switcher & CTA (Desktop) */}
          <div className="desktop-nav-cta" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
            
            {/* Direct Social Icon Links in Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderRight: '1px solid rgba(255, 255, 255, 0.08)', paddingRight: '16px' }}>
              <a 
                href="https://linkedin.com/in/amitrajput111" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-muted)', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
              </a>
              <a 
                href="https://leetcode.com/u/amit_rajput111" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-muted)', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFA116'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                title="LeetCode Profile"
              >
                <LeetcodeIcon size={15} />
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/amit_rajput111/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-muted)', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2F8D46'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                title="GeeksforGeeks Profile"
              >
                <GfgIcon size={15} />
              </a>
            </div>

            <div className="accent-switcher">
              {ACCENT_PRESETS.map((preset) => (
                <span
                  key={preset.name}
                  className={`accent-dot ${selectedAccent === preset.name ? 'active' : ''}`}
                  style={{ backgroundColor: preset.value }}
                  onClick={() => changeAccent(preset.name)}
                  title={`${preset.name} Accent`}
                />
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              Contact <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Slide-out Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mobileMenuOpen ? 0 : '-100%',
          width: '100%',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          transition: 'right 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {navItems.map((item) => {
          const active = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                color: active ? '#ffffff' : 'var(--text-muted)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '20px',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="btn-primary"
          style={{ marginTop: '20px' }}
        >
          Let's Talk
        </a>

        {/* Mobile Accent Switcher */}
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Choose Accent Theme
          </span>
          <div className="accent-switcher">
            {ACCENT_PRESETS.map((preset) => (
              <span
                key={preset.name}
                className={`accent-dot ${selectedAccent === preset.name ? 'active' : ''}`}
                style={{ backgroundColor: preset.value }}
                onClick={() => changeAccent(preset.name)}
                title={`${preset.name} Accent`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Direct Social Links */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', width: '60%', justifyContent: 'center' }}>
          <a href="https://linkedin.com/in/amitrajput111" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
            <LinkedinIcon size={18} />
          </a>
          <a href="https://leetcode.com/u/amit_rajput111" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
            <LeetcodeIcon size={18} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/amit_rajput111/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex' }}>
            <GfgIcon size={18} />
          </a>
        </div>
      </div>


      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-nav-cta {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
