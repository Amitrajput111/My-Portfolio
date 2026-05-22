import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle, Trophy } from 'lucide-react';

export default function EducationCertifications() {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Shivajirao Kadam Institute of Technology & Management, Indore',
      period: 'August 2022 – June 2026',
      metricLabel: 'CGPA',
      metricValue: '7.0 / 10',
      description: 'Focused on core computer science subjects including Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering.',
      cardClass: 'edu-btech'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Vidhya Sagar Academy, Nasrullaganj',
      period: '2021 – 2022',
      metricLabel: 'Percentage',
      metricValue: '90%',
      description: 'Specialized in Science (Physics, Chemistry, Mathematics) with a strong analytical and problem-solving foundation.',
      cardClass: 'edu-xii'
    }
  ];

  const certificationsList = [
    {
      title: 'Full Stack Web Development',
      provider: 'Upgrad & IIIT Bangalore',
      id: 'FS-9826-7313',
      color: '#f59e0b', // Gold/Amber theme
      cardClass: 'cert-fs',
      skills: ['MERN Stack', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'MERN Stack Development',
      provider: 'GeeksforGeeks Academy',
      id: 'MERN-Gfg-4829',
      color: '#10b981', // Green theme
      cardClass: 'cert-mern',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'JavaScript Programming',
      provider: 'Infosys Springboard',
      id: 'JS-SPB-2026',
      color: '#06b6d4', // Cyan theme
      cardClass: 'cert-js',
      skills: ['ES6+', 'Asynchronous JS', 'DOM Manipulation']
    },
    {
      title: 'Data Structures & Algorithms',
      provider: 'Coding Ninjas',
      id: 'DSA-CN-8812',
      color: '#a855f7', // Purple theme
      cardClass: 'cert-dsa',
      skills: ['Arrays & Lists', 'Trees & Graphs', 'Complexity Analysis']
    }
  ];

  return (
    <section id="education-certifications" style={{ scrollMarginTop: '80px' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)', marginBottom: '8px', fontWeight: 600 }}>
          Credentials
        </p>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#ffffff',
          }}
        >
          Education & Certifications
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          My academic foundation and professional specializations validating my technical skill set.
        </p>
      </div>

      {/* Dual Column Layout */}
      <div className="grid-cols-2" style={{ alignItems: 'flex-start', gap: '32px' }}>
        
        {/* Left Column: Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <GraduationCap style={{ color: 'var(--accent-primary)' }} size={24} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>Education</h3>
          </div>

          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className={`glass-card ${edu.cardClass}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {edu.institution}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  <Calendar size={11} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--text-muted)' }}>
                {edu.description}
              </p>

              <div
                style={{
                  marginTop: '4px',
                  padding: '8px 12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '6px',
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Trophy size={13} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ color: 'var(--text-muted)' }}>{edu.metricLabel}:</span>
                <span style={{ color: '#ffffff' }}>{edu.metricValue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Award style={{ color: 'var(--accent-primary)' }} size={24} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>Professional Certifications</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            {certificationsList.map((cert) => (
              <div
                key={cert.title}
                className={`glass-card ${cert.cardClass}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px',
                }}
              >
                {/* Visual Icon Badge */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: `rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.06)`,
                    border: `1px solid rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.2)`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: cert.color,
                    flexShrink: 0,
                  }}
                >
                  <Award size={22} />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                      {cert.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: cert.color,
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.15)`,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}
                    >
                      <CheckCircle size={9} />
                      Verified
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {cert.provider} • ID: {cert.id}
                  </p>

                  {/* Skills Tagged */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '10px',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.02)',
                          padding: '1px 6px',
                          borderRadius: '3px',
                          border: '1px solid rgba(255,255,255,0.04)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
