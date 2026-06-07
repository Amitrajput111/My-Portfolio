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
      title: 'AWS Certified Developer - Associate',
      provider: 'Infosys Springboard & AWS',
      id: 'verify.onwingspan.com',
      color: '#ff9900',
      cardClass: 'cert-aws-dev',
      skills: ['AWS Services', 'Serverless', 'Cloud Security'],
      pdfUrl: '/infosys-aws-developer.pdf'
    },
    {
      title: 'Advanced MERN Development',
      provider: 'Infosys Springboard',
      id: 'MERN-Infosys-2026',
      color: '#10b981',
      cardClass: 'cert-adv-mern',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      pdfUrl: '/infosys-advanced-mern.pdf'
    },
    {
      title: 'React JS Completion Certificate',
      provider: 'ExcelR EdTech',
      id: 'No. 36791',
      color: '#06b6d4',
      cardClass: 'cert-react',
      skills: ['React Hooks', 'State Management', 'Vite & ES6'],
      pdfUrl: '/excelr-reactjs.pdf'
    },
    {
      title: 'AWS Database Offerings',
      provider: 'AWS Training & Certification',
      id: 'Completed March 13, 2026',
      color: '#6366f1',
      cardClass: 'cert-aws-db',
      skills: ['RDS & DynamoDB', 'Database Management', 'AWS Cloud'],
      pdfUrl: '/aws-database-offerings.pdf'
    },
    {
      title: 'Web Development Internship',
      provider: 'CodSoft',
      id: 'ID: f670a61',
      color: '#ec4899',
      cardClass: 'cert-web-intern',
      skills: ['Web Apps', 'Responsive Design', 'HTML/CSS/JS'],
      pdfUrl: '/codsoft-web-development-internship.pdf'
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
            color: 'var(--text-primary)',
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
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>Education</h3>
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
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
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
                <span style={{ color: 'var(--text-primary)' }}>{edu.metricValue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Award style={{ color: 'var(--accent-primary)' }} size={24} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>Professional Certifications</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            {certificationsList.map((cert) => (
              <div
                key={cert.title}
                className={`glass-card cert-card-compact ${cert.cardClass}`}
              >
                <div className="cert-left-area">
                  {/* Visual Icon Badge */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.06)`,
                      border: `1px solid rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.25)`,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: cert.color,
                      flexShrink: 0,
                    }}
                  >
                    <Award size={18} />
                  </div>

                  {/* Details */}
                  <div className="cert-details-block">
                    <div className="cert-header-line">
                      <h4 className="cert-compact-title" title={cert.title}>
                        {cert.title}
                      </h4>
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: 600,
                          color: cert.color,
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid rgba(${parseInt(cert.color.slice(1,3), 16) || 255}, ${parseInt(cert.color.slice(3,5), 16) || 255}, ${parseInt(cert.color.slice(5,7), 16) || 255}, 0.15)`,
                          padding: '1px 5px',
                          borderRadius: '4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle size={8} />
                        Verified
                      </span>
                    </div>
                    
                    <p className="cert-meta-info">
                      {cert.provider} • ID: {cert.id}
                    </p>

                    {/* Skills Row */}
                    <div className="cert-skills-row">
                      {cert.skills.map((s) => (
                        <span key={s} className="cert-skill-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-action-btn-compact"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = cert.color;
                      e.currentTarget.style.color = cert.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    View PDF →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
