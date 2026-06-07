import React from 'react';

const skillGroups = [
  {
    title: 'Languages',
    description: 'Core programming languages for application logic, algorithms, and querying.',
    skills: [
      { name: 'JavaScript (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Frameworks and design tools used to engineer fast, responsive user interfaces.',
    skills: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Responsive UI', isConcept: true, label: 'RESPONSIVE' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Server architectures, endpoints integration, and authorization gates.',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
      { name: 'RESTful APIs', isConcept: true, label: 'REST API' },
      { name: 'JWT Auth', isConcept: true, label: 'JWT SECURE' },
      { name: 'RBAC Access', isConcept: true, label: 'RBAC GATE' }
    ]
  },
  {
    title: 'Databases & Cloud',
    description: 'Data management solutions, cloud infrastructure, and configuration tools.',
    skills: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
    ]
  },
  {
    title: 'AI/ML & Data Science',
    description: 'Intelligent systems, data analytics libraries, and prediction algorithms.',
    skills: [
      { name: 'AIML', isConcept: true, label: 'AI/ML' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Scikit-Learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'ML Algorithms', isConcept: true, label: 'ML ALGO' },
      { name: 'DSA / OOPs', isConcept: true, label: 'DSA/OOPS' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)', marginBottom: '8px', fontWeight: 600 }}>
          Technology Matrix
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
          Technical Capabilities
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          An organized overview of my development stack, database services, and software engineering methodologies.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="skills-grid-container">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="glass-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {group.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {group.description}
              </p>
            </div>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.05)' }} />

            {/* Inner Skills Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '12px',
              }}
            >
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                  }}
                >
                  {/* Skill Visual */}
                  {skill.isConcept ? (
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '9px',
                        fontWeight: 700,
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--accent-primary)',
                        padding: '2px 4px',
                        borderRadius: '3px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      CODE
                    </span>
                  ) : (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      style={{
                        width: '22px',
                        height: '22px',
                        objectFit: 'contain',
                        flexShrink: 0,
                        filter: skill.invert ? 'brightness(0) invert(1)' : 'none'
                      }}
                    />
                  )}

                  {/* Skill Label */}
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
