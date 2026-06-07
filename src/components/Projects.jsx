import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    title: 'Stayora',
    tagline: 'Premium Travel Accommodation & Booking Platform',
    period: 'February 2026 – April 2026',
    description: 'A lodging booking platform featuring real-time property searching, advanced filters, and booking status controls.',
    features: [
      'Built Stayora booking platform using MERN Stack with real-time property searching and advanced filters.',
      'Integrated maps functionality to allow users to search properties interactively on visual interfaces.',
      'Implemented separate control dashboards for Guests, Hosts, and Platform Admins.',
      'Optimized database schemas in MongoDB, improving performance metrics.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Search', 'CSS Modules'],
    github: 'https://github.com/Amitrajput111/stayora',
    live: 'https://stayora-olhwqqsp8-amitrajput111s-projects.vercel.app/',
    color: 'var(--text-primary)',
    featured: true,
    mockType: 'stayora',
    cardClass: 'stayora-card'
  },
  {
    title: 'HireFlow',
    tagline: 'Candidate & Recruitment Tracking Portal',
    period: 'January 2026 – February 2026',
    description: 'A full stack recruiting portal mapping job vacancies and applicant statuses with drag-and-drop pipeline controls.',
    features: [
      'Design and developed HireFlow job portal mapping job vacancies and applicant statuses.',
      'Implemented drag-and-drop Kanban Board to transition applicants through recruitment cycles (Applied, Screen, Offer).',
      'Secured all API endpoints with custom middleware gates using JWT authentication and Role-Based Access Control (RBAC).'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    github: 'https://github.com/Amitrajput111/job_portal',
    live: 'https://hireflow-alpha.vercel.app/',
    color: 'var(--text-primary)',
    featured: false,
    mockType: 'hireflow',
    cardClass: 'hireflow-card'
  },
  {
    title: 'A1 Learner',
    tagline: 'Adaptive AI-Driven Personalized Learning Platform',
    period: 'August 2025 – December 2025',
    description: 'An adaptive learning dashboard that provides personalized curricula, self-paced timelines, and dynamic assessments.',
    features: [
      'Developed an adaptive learning dashboard that provides personalized curricula and self-paced timelines.',
      'Integrated quiz generation engine scoring user knowledge retention dynamically.',
      'Analytics dashboard tracking daily metrics and topic milestones.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'AI Core'],
    github: 'https://github.com/Amitrajput111/A1Engineers',
    live: 'https://frontend-livid-six-59.vercel.app/',
    color: 'var(--text-primary)',
    featured: false,
    mockType: 'learner',
    cardClass: 'learner-card'
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique tech tags
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || project.tech.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)', marginBottom: '8px', fontWeight: 600 }}>
          Case Studies
        </p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            marginBottom: '16px',
            color: 'var(--text-primary)',
          }}
        >
          Featured Work
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore key full stack applications, database systems, and secure API networks that showcase my architectural decisions.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '48px',
          maxWidth: '800px',
          margin: '0 auto 48px auto',
        }}
      >
        {/* Search Input */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search projects (e.g. Stayora, recruiter, pipeline)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
          />
        </div>

        {/* Filter Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
          }}
        >
          {allTags.map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: active ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.02)',
                  color: active ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: `1px solid ${active ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.08)'}`,
                  transition: 'all 0.15s ease',
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255, 255, 255, 0.01)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
            <p style={{ color: 'var(--text-muted)' }}>No projects found matching the filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Sub-component: ProjectCard
function ProjectCard({ project, idx }) {
  const isEven = idx % 2 === 0;

  return (
    <div
      className={`glass-card ${project.cardClass || ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        padding: '40px',
        alignItems: 'center',
      }}
    >
      {/* Wrapper Layout for Side-by-Side on Desktop */}
      <div
        style={{
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          gap: '40px',
          width: '100%',
        }}
        className="project-row"
      >
        {/* Left Column: Project Metadata */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Badge Indicators */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            {project.featured && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Sparkles size={12} />
                Featured
              </span>
            )}
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              Case Study
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {project.period}
            </span>
          </div>

          {/* Heading Titles */}
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                marginBottom: '8px',
              }}
            >
              {project.title}
            </h3>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.4,
              }}
            >
              {project.tagline}
            </h4>
          </div>

          <p style={{ fontSize: '14px', lineHeight: 1.6 }}>{project.description}</p>

          {/* Key Deliverable Features */}
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {project.features.map((feat, i) => (
              <li
                key={i}
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--text-primary)' }}>✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
            {project.tech.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Code <GithubIcon size={14} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Dashboard Mockup */}
        <div
          style={{
            flex: '1.2',
            minWidth: '320px',
            background: '#090e1a',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            height: '280px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
          className="project-visual"
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '10px 16px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Browser Dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
            
            {/* Fake URL Bar */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                padding: '3px 32px',
                borderRadius: '4px',
                fontSize: '10px',
                color: 'var(--text-muted)',
                width: '60%',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.03)',
              }}
            >
              {project.title.toLowerCase()}.vercel.app
            </div>

            <div style={{ width: '32px' }} />
          </div>

          {/* Visual Screen Dashboard Rendering */}
          <div style={{ padding: (project.mockType === 'hireflow' || project.mockType === 'stayora' || project.mockType === 'learner') ? '0' : '16px', height: 'calc(100% - 37px)', overflow: 'hidden' }}>
            {project.mockType === 'stayora' && (
              <img
                src="/stayora-screenshot.png"
                alt="Stayora Platform Screenshot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            )}
            {project.mockType === 'hireflow' && (
              <img
                src="/hireflow-screenshot.png"
                alt="HireFlow Platform Screenshot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            )}
            {project.mockType === 'learner' && (
              <img
                src="/a1-learner-screenshot.png"
                alt="A1 Learner Platform Screenshot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .project-row {
            flex-direction: column !important;
          }
          .project-visual {
            height: 220px !important;
          }
        }
      `}</style>
    </div>
  );
}

// Custom UI Mockup components inside browser window

function StayoraMock({ color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
      {/* Search Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '60px', height: '8px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '3px' }} />
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '30px', height: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '3px' }} />
          <div style={{ width: '30px', height: '14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '3px' }} />
        </div>
      </div>
      
      {/* Search Bar */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          padding: '6px 12px',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '100px', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }} />
        <div style={{ width: '12px', height: '6px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '3px' }} />
      </div>

      {/* Hotel Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '6px' }}>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.03)',
              borderRadius: '4px',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {/* Card Graphic */}
            <div
              style={{
                height: '50px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '4px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  width: '18px',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '2px',
                  fontSize: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                }}
              >
                ★ 4.9
              </div>
            </div>
            {/* Card Content */}
            <div style={{ width: '80%', height: '5px', background: 'rgba(255, 255, 255, 0.12)', borderRadius: '2px' }} />
            <div style={{ width: '40%', height: '4px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '2px' }} />
            <div style={{ width: '60%', height: '5px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '2px', marginTop: '2px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function HireFlowMock({ color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
      {/* Dashboard Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '40px', height: '14px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '3px' }} />
          <div style={{ width: '40px', height: '14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '3px' }} />
        </div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.06)' }} />
      </div>

      {/* Kanban Board Columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', flex: 1 }}>
        {['Applied (4)', 'Screen (2)', 'Offers (1)'].map((colName, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.02)',
              borderRadius: '4px',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {/* Column Title */}
            <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--text-muted)' }}>{colName}</span>
            
            {/* Draggable Candidate cards */}
            {[1, 2].slice(0, 3 - index).map((j) => (
              <div
                key={j}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '2px',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <div style={{ width: '60%', height: '5px', background: '#fff', borderRadius: '1.5px' }} />
                <div style={{ width: '40%', height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1.5px' }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function LearnerMock({ color }) {
  return (
    <div style={{ display: 'flex', gap: '14px', height: '100%' }}>
      {/* Sidebar navigation */}
      <div
        style={{
          width: '45px',
          background: 'rgba(255, 255, 255, 0.01)',
          borderRight: '1px solid rgba(255, 255, 255, 0.03)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px 0',
          gap: '12px',
        }}
      >
        <div style={{ width: '16px', height: '16px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.15)' }} />
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.02)' }} />
        ))}
      </div>

      {/* Main Panel Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Welcome message */}
        <div style={{ width: '120px', height: '8px', background: '#fff', borderRadius: '3px' }} />
        <div style={{ width: '80px', height: '5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px' }} />

        {/* Analytics Graph mockup */}
        <div
          style={{
            height: '60px',
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.02)',
            borderRadius: '4px',
            padding: '10px',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {/* Graph bars */}
          {[30, 45, 60, 40, 75, 90, 85].map((h, i) => (
            <div
              key={i}
              style={{
                width: '12px',
                height: `${h}%`,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px 2px 0 0',
              }}
            />
          ))}
        </div>

        {/* Info panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                borderRadius: '4px',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.04)' }} />
              <div style={{ flex: 1 }}>
                <div style={{ width: '80%', height: '4px', background: '#fff', borderRadius: '1.5px' }} />
                <div style={{ width: '40%', height: '3px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1px', marginTop: '3px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
