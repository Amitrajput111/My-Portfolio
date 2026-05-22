import React from 'react';
import { Award, Code2, Globe, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Code2 size={22} />,
    value: '200+',
    title: 'LeetCode Problems',
    description: 'Solved standard algorithms and data structure tasks. Specializing in optimized dynamic programming and search arrays.',
    color: '#FFA116' // LeetCode orange
  },
  {
    icon: <Award size={22} />,
    value: '160+',
    title: 'GeeksforGeeks Problems',
    description: 'Solved challenging questions focusing on recursive systems, binary trees, graph algorithms, and space optimizations.',
    color: '#2F8D46' // GFG green
  },
  {
    icon: <Globe size={22} />,
    value: '3+ Live',
    title: 'Production Projects',
    description: 'Successfully deployed responsive, fully functional applications that integrate client side layouts with AWS servers.',
    color: '#ffffff'
  },
  {
    icon: <Users size={22} />,
    value: 'Team Leader',
    title: 'Hackathon Leadership',
    description: 'Led development sprints during regional hackathons, orchestrating API development and coordinating frontend interfaces.',
    color: '#ffffff'
  }
];

export default function Achievements() {
  return (
    <section id="achievements">
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
          Key Milestones
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Quantifiable proofs of my problem-solving skills, competitive programming scores, and leadership experience in hackathons.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid-cols-2" style={{ gap: '24px' }}>
        {achievements.map((ach) => (
          <AchievementCard key={ach.title} ach={ach} />
        ))}
      </div>
    </section>
  );
}

// Sub-component: AchievementCard
function AchievementCard({ ach }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
        padding: '32px',
      }}
    >
      {/* Icon Circle wrapper */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: ach.color,
          flexShrink: 0,
        }}
      >
        {ach.icon}
      </div>

      {/* Contents */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div
          style={{
            fontSize: 'clamp(26px, 4.5vw, 32px)',
            fontWeight: 800,
            fontFamily: 'var(--font-sans)',
            lineHeight: 1,
            color: '#fff',
          }}
        >
          {ach.value}
        </div>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'var(--font-sans)',
            color: 'var(--text-primary)',
          }}
        >
          {ach.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
          }}
        >
          {ach.description}
        </p>
      </div>
    </div>
  );
}
