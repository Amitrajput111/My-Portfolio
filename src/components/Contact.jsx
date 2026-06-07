import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeInput, setActiveInput] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out the required fields.');
      return;
    }

    setStatus('sending');

    fetch("https://formsubmit.co/ajax/9e60dfbc3c63aa15cf43066d30eaa47b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        _subject: formState.subject || `New message from ${formState.name}`,
        message: formState.message,
        _captcha: "false"
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Form submission failed");
      })
      .then(() => {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact">
      {/* Contact Section Grid */}
      <div className="grid-cols-2" style={{ gap: '48px', alignItems: 'stretch' }}>
        
        {/* Left Side: Text and Social details */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}>
          <div>
            {/* Pill Header Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: '4px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Let's Connect
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Open to Opportunities
            </h2>
            
            <p style={{ fontSize: '15px', marginBottom: '24px' }}>
              I am currently looking for new roles and exciting software engineering challenges. Whether you have a project idea, want to talk system architecture, or discuss potential employment, get in touch!
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Direct Mail Connector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--text-primary)', display: 'flex' }}><Mail size={18} /></div>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</div>
                  <a href="mailto:amitrajput98267313@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                    amitrajput98267313@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Network Links */}
          <div>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Connect on Networks
            </h3>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <SocialIconLink href="https://www.linkedin.com/in/amitrajput111" icon={<LinkedinIcon size={18} />} label="LinkedIn" />
              <SocialIconLink href="https://github.com/Amitrajput111" icon={<GithubIcon size={18} />} label="GitHub" />
              <SocialIconLink href="https://leetcode.com/u/amit_rajput111" icon={<LeetcodeIcon size={18} />} label="LeetCode" />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Input Row: Name */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                onFocus={() => setActiveInput('name')}
                onBlur={() => setActiveInput(null)}
                required
                style={getInputStyle(activeInput === 'name', !!formState.name)}
              />
              <label style={getLabelStyle(activeInput === 'name', !!formState.name)}>
                Full Name <span style={{ color: 'var(--text-primary)' }}>*</span>
              </label>
            </div>

            {/* Input Row: Email */}
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onFocus={() => setActiveInput('email')}
                onBlur={() => setActiveInput(null)}
                required
                style={getInputStyle(activeInput === 'email', !!formState.email)}
              />
              <label style={getLabelStyle(activeInput === 'email', !!formState.email)}>
                Email Address <span style={{ color: 'var(--text-primary)' }}>*</span>
              </label>
            </div>

            {/* Input Row: Subject */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={() => setActiveInput('subject')}
                onBlur={() => setActiveInput(null)}
                style={getInputStyle(activeInput === 'subject', !!formState.subject)}
              />
              <label style={getLabelStyle(activeInput === 'subject', !!formState.subject)}>
                Subject
              </label>
            </div>

            {/* Input Row: Message */}
            <div style={{ position: 'relative' }}>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setActiveInput('message')}
                onBlur={() => setActiveInput(null)}
                required
                rows={4}
                style={{
                  ...getInputStyle(activeInput === 'message', !!formState.message),
                  resize: 'vertical',
                  minHeight: '100px',
                }}
              />
              <label style={getLabelStyle(activeInput === 'message', !!formState.message)}>
                Your Message <span style={{ color: 'var(--text-primary)' }}>*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginTop: '8px',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'idle' && (
                <>
                  Send Message <Send size={14} />
                </>
              )}
              {status === 'sending' && 'Transmitting...'}
              {status === 'success' && 'Message Received! ✓'}
              {status === 'error' && 'Failed to send! ✗'}
            </button>

            {/* Success Banner */}
            {status === 'success' && (
              <div
                style={{
                  padding: '12px',
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '6px',
                  color: 'var(--accent-success)',
                  fontSize: '13px',
                  textAlign: 'center',
                }}
              >
                Thank you! Amit will get back to you shortly.
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div
                style={{
                  padding: '12px',
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '6px',
                  color: '#ef4444',
                  fontSize: '13px',
                  textAlign: 'center',
                }}
              >
                Failed to send message. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// Styling helper: Input Styles
function getInputStyle(isFocused, hasValue) {
  return {
    width: '100%',
    padding: '16px 14px',
    background: '#09090b',
    border: `1px solid ${isFocused ? 'var(--accent-primary)' : 'var(--border-color)'}`,
    borderRadius: '6px',
    color: 'var(--text-primary)',
    outline: 'none',
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    transition: 'all 0.15s ease',
  };
}

// Styling helper: Floating Label
function getLabelStyle(isFocused, hasValue) {
  const isActive = isFocused || hasValue;
  return {
    position: 'absolute',
    left: '14px',
    top: isActive ? '-8px' : '16px',
    background: isActive ? '#131b2e' : 'transparent',
    padding: isActive ? '0 6px' : '0',
    fontSize: isActive ? '11px' : '14px',
    fontWeight: isActive ? 600 : 400,
    color: isFocused ? '#ffffff' : 'var(--text-muted)',
    pointerEvents: 'none',
    transition: 'all 0.15s ease',
  };
}

// Sub-component: Social Connector Icon Link
function SocialIconLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '6px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-muted)',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {icon}
    </a>
  );
}
