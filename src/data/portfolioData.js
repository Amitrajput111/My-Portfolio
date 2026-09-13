export const personalInfo = {
  name: "Amit Rajput",
  headline: "Full Stack Software Engineer | MERN & Next.js Specialist",
  location: "Indore, Madhya Pradesh, India",
  email: "amitrajput98267313@gmail.com",
  linkedin: "https://www.linkedin.com/in/amitrajput111",
  github: "https://github.com/Amitrajput111",
  leetcode: "https://leetcode.com/u/amit_rajput111/",
  resumePath: "/resume.pdf",
};

export const heroRoles = [
  "Full Stack Software Engineer",
  "React & Next.js Developer",
  "Backend & API Architect (Node / Express)",
  "AWS Cloud Certified Developer",
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const heroDescription =
  "I build high-performance web applications, scalable REST APIs, and automated customer growth platforms. Focused on clean architecture, modern UI engineering, and robust backend systems.";

export const aboutSummary = `I am a Full Stack Software Engineer specializing in the MERN stack and Next.js ecosystem. Having shipped production applications for client platforms, healthcare systems, and recruitment pipelines, I bridge the gap between clean UI design and reliable backend architecture. With 500+ algorithmic problems solved and an AWS Developer Associate accreditation, I write scalable, well-tested, and maintainable code.`;

export const aboutMetrics = [
  { value: 500, suffix: "+", label: "DSA Problems Solved", icon: "code" },
  { value: 6, suffix: "+", label: "Production & Client Apps", icon: "rocket" },
  { value: 2, suffix: "", label: "Engineering Internships", icon: "briefcase" },
  { textValue: "Infosys", label: "Advanced MERN Stack", icon: "cloud" },
];

export const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "REST APIs", logo: null },
      { name: "JWT Auth", logo: null },
      { name: "System Design", logo: null },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    ],
  },
  {
    title: "Integrations & Automation",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Webhooks", logo: null },
      { name: "Payment Gateways", logo: null },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    ],
  },
  {
    title: "Engineering Tools",
    skills: [
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
    ],
  },
];

export const experiences = [
  {
    company: "CodSoft",
    role: "Full Stack Developer Intern",
    project: "HireFlow Recruitment System",
    period: "Jan 2026 – Feb 2026",
    description:
      "Engineered an end-to-end recruitment platform featuring candidate Kanban workflows, JWT authentication, role-based dashboards for recruiters, and resume application pipelines.",
    highlights: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
  },
  {
    company: "KodBud",
    role: "Full Stack Developer Intern",
    project: "Stayora Booking Platform",
    period: "Mar 2026 – Apr 2026",
    description:
      "Developed a travel accommodation discovery and booking web application with personalized recommendation filters, responsive UI components, and optimized database queries.",
    highlights: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
];

export const projectCategories = ["All", "Client Platforms", "MERN Stack"];

export const projects = [
  {
    id: "setu",
    name: "SETU",
    title: "SETU — Digital Growth Platform",
    subtitle: "High-Performance Lead Automation",
    description: "Production agency platform. Features WhatsApp Cloud API for instant lead capture and automated PDF brochure delivery. Built for high conversion.",
    live: "https://setu-platform-dkuh7c2q6-amitrajput111s-projects.vercel.app/",
    github: null,
    tech: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    ],
    category: "Client Platforms",
    badge: "Production Client",
    featured: true,
  },
  {
    id: "care-clinic",
    name: "CARE CLINIC",
    title: "CARE CLINIC — Healthcare Portal",
    subtitle: "NABH Multi-Specialty OPD Booking",
    description: "Healthcare portal featuring instant OPD appointment booking, specialist doctor profiles, and digital lab report tracking.",
    live: "https://client-wheat-seven-38.vercel.app/",
    github: null,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    category: "Client Platforms",
    badge: "Live Healthcare App",
    featured: true,
  },
  {
    id: "aura-fitness",
    name: "AURA FITNESS",
    title: "AURA FITNESS | Luxury Gym",
    subtitle: "Luxury Gym & Membership Platform",
    description: "Modern web experience for an elite fitness sanctuary. Features interactive membership tiers, 35+ trainer roster, and WhatsApp enquiry booking.",
    live: "https://gym-web-demo-beta.vercel.app/",
    github: null,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    ],
    category: "Client Platforms",
    badge: "Client Web App",
    featured: true,
  },
  {
    id: "edurise",
    name: "EduRise Institute",
    title: "EduRise Institute Ecosystem",
    subtitle: "JEE & NEET Admissions Platform",
    description: "EdTech platform featuring interactive course exploration, automated PDF prospectus generation, and 1-on-1 mentorship scheduling.",
    live: "https://edurise-admissions.vercel.app/",
    github: null,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    ],
    category: "Client Platforms",
    badge: "EdTech Platform",
    featured: true,
  },
  {
    id: "hireflow",
    name: "HireFlow",
    title: "HireFlow — Recruitment Pipeline",
    subtitle: "MERN Candidate Management",
    description: "Recruitment platform with JWT authentication, role-based dashboards, interactive kanban status tracking, and candidate screening.",
    live: "https://hireflow-alpha.vercel.app/",
    github: "https://github.com/Amitrajput111/job_portal",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
    category: "MERN Stack",
    badge: "Full Stack MERN",
    featured: false,
  },
  {
    id: "stayora",
    name: "Stayora",
    title: "Stayora — Travel Booking",
    subtitle: "Accommodation Discovery Platform",
    description: "Booking web application with custom accommodation filters, search matching algorithms, and scalable MongoDB schemas.",
    live: "https://stayora-ochre.vercel.app/",
    github: "https://github.com/Amitrajput111/stayora",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
    category: "MERN Stack",
    badge: "Full Stack MERN",
    featured: false,
  },
];

export const marqueeItems = [
  { text: "SETU: Next.js + WhatsApp Cloud API", category: "Client Platform" },
  { text: "CARE CLINIC: Multi-Specialty Healthcare Portal", category: "Healthcare" },
  { text: "AURA FITNESS: Luxury Gym Platform", category: "Fitness Web App" },
  { text: "EduRise: JEE / NEET EdTech Ecosystem", category: "EdTech" },
  { text: "HireFlow: MERN Recruitment Pipeline", category: "Full Stack MERN" },
  { text: "Stayora: Accommodation Booking Platform", category: "Full Stack MERN" },
  { text: "AWS Certified Developer – Associate", category: "Cloud Credential" },
  { text: "500+ Data Structures & Algorithms Solved", category: "Problem Solving" },
];

export const achievements = [
  { value: 300, suffix: "+", label: "LeetCode Solved", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
  { value: 200, suffix: "+", label: "GeeksforGeeks Solved", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" },
  { value: 6, suffix: "+", label: "Live Apps Deployed", iconUrl: null },
  { value: 500, suffix: "+", label: "GitHub Contributions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
];

export const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    description:
      "Validates industry expertise in developing, deploying, debugging, and architecting cloud-based applications using core AWS services.",
    badge: "AWS",
    color: "from-amber-500/20 to-orange-600/10",
    pdf: "/infosys-aws-developer.pdf",
  },
  {
    title: "Advanced MERN Stack Development",
    issuer: "Infosys Springboard",
    description:
      "Mastery in MongoDB, Express.js, React.js, and Node.js for production-grade full stack web application engineering.",
    badge: "MERN",
    color: "from-accent/20 to-sky-600/10",
    pdf: "/infosys-advanced-mern.pdf",
  },
  {
    title: "Premier AI & Machine Learning",
    issuer: "Infosys Springboard",
    description:
      "Certification covering AI principles, ML algorithms, neural networks, and modern intelligent application design.",
    badge: "AI/ML",
    color: "from-accent-secondary/20 to-emerald-600/10",
    pdf: "/google-gen-ai-leader-1.pdf",
  },
];
