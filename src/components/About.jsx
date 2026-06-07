import React from 'react';
import { Target, Code, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: <Target size={22} />,
    value: '500+',
    label: 'Problems Solved',
    description: 'Across LeetCode, GFG & other platforms',
    color: 'var(--text-primary)',
  },
  {
    icon: <Code size={22} />,
    value: '3+',
    label: 'Live Projects',
    description: 'Active production-ready web platforms',
    color: 'var(--text-primary)',
  },
  {
    icon: <Briefcase size={22} />,
    value: '2',
    label: 'Internships Completed',
    description: 'Hands-on Full Stack Developer roles',
    color: 'var(--text-primary)',
  },
  {
    icon: <Award size={22} />,
    value: '4',
    label: 'Certifications',
    description: 'Specializations in MERN, JS, DSA, & Full-Stack',
    color: 'var(--text-primary)',
  },
];

export default function About() {
  return (
    <section id="about">
      {/* Grid Layout: Text Content and Statistics */}
      <div className="grid-cols-2" style={{ alignItems: 'center', gap: '48px' }}>
        
        {/* Left Side: Storytelling Column */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              marginBottom: '24px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            Crafting scalable systems at the intersection of architecture and logic.
          </h2>
          
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            I am Amit Rajput, a Full Stack Developer located in Indore, Madhya Pradesh, India. I specialize in building end-to-end, high-performance web applications using the MERN Stack and integrating cloud infrastructure to ensure scalability and high availability.
          </p>
          
          <p style={{ marginBottom: '24px', fontSize: '15px' }}>
            My passion lies in automating workflows and integrating smart backend solutions. Whether designing secure REST APIs with Node.js and Express or provisioning cloud services on AWS, I focus on performance, accessibility, and clean architecture.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderLeft: '2px solid #ffffff',
              borderRadius: '0 4px 4px 0',
            }}
          >
            <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--text-primary)' }}>
              "I don't just write code. I build optimized platforms that solve real-world problems and scale gracefully under load."
            </p>
          </div>
        </div>

        {/* Right Side: Statistics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component: StatCard
function StatCard({ stat }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '6px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--text-primary)',
        }}
      >
        {stat.icon}
      </div>

      <div>
        <div
          style={{
            fontSize: 'clamp(26px, 4vw, 32px)',
            fontWeight: 800,
            fontFamily: 'var(--font-sans)',
            lineHeight: 1,
            marginBottom: '6px',
            color: 'var(--text-primary)',
          }}
        >
          {stat.value}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--text-primary)',
            marginBottom: '6px',
          }}
        >
          {stat.label}
        </div>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--text-muted)',
            lineHeight: 1.4,
          }}
        >
          {stat.description}
        </div>
      </div>
    </div>
  );
}
