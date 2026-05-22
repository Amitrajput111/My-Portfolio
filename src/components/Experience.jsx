import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'KodBud, Indore (Remote)',
    period: 'March 2026 – April 2026',
    description: 'Developed and optimized key modules for the Stayora booking platform using React.js, Tailwind CSS, and Node.js.',
    highlights: [
      'Integrated Map features, location search filters, and interactive booking flow dashboards, improving platform usability.',
      'Collaborated with backend engineers to optimize schema structures in MongoDB, reducing query load times.',
      'Refactored frontend pages for modular state handling and seamless transition animations.'
    ],
    skills: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs', 'UI Optimization'],
    color: '#ffffff',
    cardClass: 'exp-kodbud'
  },
  {
    role: 'Web Development Intern',
    company: 'CodSoft, Indore (Remote)',
    period: 'January 2026 – February 2026',
    description: 'Designed responsive front-end layouts and portfolio sections using React.js and CSS modules.',
    highlights: [
      'Created highly reusable React components and modular UI parts, resulting in cleaner code and faster development loops.',
      'Integrated API endpoints with local states, improving loading metrics and client-side rendering speeds.',
      'Engineered responsive web designs utilizing custom CSS media queries for high cross-browser compatibility.'
    ],
    skills: ['React.js', 'CSS Modules', 'API Integration', 'Responsive Design', 'Git'],
    color: '#ffffff',
    cardClass: 'exp-codsoft'
  }
];

export default function Experience() {
  return (
    <section id="experience">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#ffffff',
          }}
        >
          Professional Journey
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          My career roadmap showcasing internships where I built production applications, collaborated in agile sprints, and delivered features.
        </p>
      </div>

      {/* Timeline Layout */}
      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          paddingLeft: '32px',
        }}
      >
        {/* Central Vertical Track Line */}
        <div
          style={{
            position: 'absolute',
            left: '8px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experiences.map((exp, idx) => (
            <TimelineItem key={exp.company} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component: TimelineItem
function TimelineItem({ exp, idx }) {
  return (
    <div style={{ position: 'relative' }}>
      
      {/* Interactive Timeline Node (Dot) */}
      <div
        style={{
          position: 'absolute',
          left: '-32px',
          top: '20px',
          transform: 'translateX(-50%)',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#09090b',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          zIndex: 5,
        }}
      />

      {/* Main Experience Card */}
      <div
        className={`glass-card ${exp.cardClass || ''}`}
        style={{
          padding: '32px',
        }}
      >
        {/* Card Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                marginBottom: '6px',
              }}
            >
              {exp.role}
            </h3>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#ffffff',
              }}
            >
              <Briefcase size={14} />
              <span>{exp.company}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>• Internship</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '4px 10px',
              borderRadius: '4px',
            }}
          >
            <Calendar size={12} />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Short Summary Description */}
        <p style={{ marginBottom: '20px', fontSize: '14px' }}>
          {exp.description}
        </p>

        {/* Bullet Deliverables */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {exp.highlights.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'flex', marginTop: '3px' }}>
                <ChevronRight size={12} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {exp.skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
