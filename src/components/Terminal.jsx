import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Amit\'s Interactive CLI Terminal.' },
    { type: 'output', text: 'Type "help" to view a list of available commands.' },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: 'List of commands: about, skills, experience, projects, education, certifications, leetcode, contact, clear',
    about: 'AMIT RAJPUT - MERN Stack Developer | Full-Stack Developer | AI-Powered Application Developer. Results-driven developer with experience building scalable web applications, designing secure REST APIs, and implementing JWT/RBAC security protocols.',
    skills: 'TECHNICAL SKILLS:\n- Languages: C++, JavaScript (ES6+), Python, SQL\n- Frontend: React.js, Redux, HTML5, CSS3, Responsive Design\n- Backend: Node.js, Express.js, REST APIs, JWT, Role-Based Access Control\n- Database/Cloud: MongoDB, Mongoose, SQL, AWS Fundamentals\n- Tools: Git, GitHub, Postman, VS Code, Vercel\n- Concepts: DSA, OOPs, DBMS, OS, Computer Networks',
    experience: 'PROFESSIONAL EXPERIENCE:\n1. Software Development Intern @ KodBud (March 2026 – April 2026)\n   - Developed Stayora booking platform using MERN Stack with real-time property searching and maps functionality.\n   - Implemented Guest, Host, and Admin dashboards and optimized database schemas in MongoDB.\n2. Web Development Intern @ CodSoft (January 2026 – February 2026)\n   - Designed responsive front-end layouts and portfolio sections using React.js and CSS modules.\n   - Created reusable components, integrated API endpoints, and optimized loading metrics.',
    projects: 'PROJECTS:\n1. Stayora: hotel booking platform with interactive map search and Guests/Hosts/Admins control panels. (React, Node, Express, MongoDB) [Feb 2026 – Apr 2026] -> live: https://stayora-ochre.vercel.app/\n2. HireFlow: Candidate tracking job portal with Kanban applicants pipeline. (React, Node, Express, MongoDB, JWT, RBAC) [Jan 2026 – Feb 2026] -> live: https://hireflow-alpha.vercel.app/\n3. A1 Learner: Personalized learning dashboard with adaptive study paths and quiz engine. (React, Node, Express, MongoDB, Python) [Aug 2025 – Dec 2025]',
    education: 'EDUCATION:\n1. B.Tech in Computer Science & Engineering (August 2022 – June 2026)\n   Shivajirao Kadam Institute of Technology & Management, Indore | CGPA: 7.0/10\n2. Higher Secondary Education (Class XII) (2021 – 2022)\n   Vidhya Sagar Academy, Nasrullaganj | Percentage: 90%',
    certifications: 'VERIFIED CERTIFICATIONS:\n1. Full Stack Web Development (Upgrad & IIIT Bangalore) | ID: FS-9826-7313\n2. MERN Stack Development (GeeksforGeeks Academy) | ID: MERN-Gfg-4829\n3. JavaScript Programming (Infosys Springboard) | ID: JS-SPB-2026\n4. Data Structures & Algorithms (Coding Ninjas) | ID: DSA-CN-8812',
    leetcode: 'COMPETITIVE PROGRAMMING STATS:\n- Total Solved: 360+ coding questions\n- LeetCode: 200+ problems solved\n- GeeksforGeeks: 160+ problems solved\n- Core foundation in Data Structures and Algorithms.',
    contact: 'CONTACT INFORMATION:\n- Email: amitrajput98267313@gmail.com\n- Phone: +91-9109265673\n- Location: Indore, Madhya Pradesh, India\n- LinkedIn: linkedin.com/in/amitrajput111\n- GitHub: github.com/Amitrajput111\n- LeetCode: leetcode.com/u/amit_rajput111',
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmdText }];

    if (trimmedCmd === '') {
      setHistory(newHistory);
      return;
    }

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (commands[trimmedCmd]) {
      const response = commands[trimmedCmd];
      setHistory([...newHistory, { type: 'output', text: response }]);
    } else {
      setHistory([...newHistory, { type: 'output', text: `Command not found: "${cmdText}". Type "help" for a list of valid commands.` }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="terminal-container" 
      onClick={focusInput}
      style={{
        flex: 1,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        minHeight: '320px',
        maxHeight: '380px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace', marginLeft: '8px' }}>
          guest@amitrajput: ~
        </span>
      </div>

      {/* Output Console area */}
      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} style={{ marginBottom: '6px', whiteSpace: 'pre-wrap' }}>
            {line.type === 'input' ? (
              <div>
                <span className="terminal-prompt">guest@amitrajput:~$</span>{' '}
                <span style={{ color: '#ffffff' }}>{line.text}</span>
              </div>
            ) : (
              <div style={{ color: '#a6accd' }}>{line.text}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input bar */}
      <form onSubmit={handleSubmit} className="terminal-input-line" style={{ padding: '0 18px 18px 18px', background: 'transparent' }}>
        <span className="terminal-prompt">guest@amitrajput:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          placeholder="Type here..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
