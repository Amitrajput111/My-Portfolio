export const personalInfo = {
  name: "Amit Rajput",
  headline:
    "Software Engineer | Full Stack Developer | AI-Powered Application Developer",
  location: "Indore, Madhya Pradesh, India",
  email: "amitrajput98267313@gmail.com",
  linkedin: "https://www.linkedin.com/in/amitrajput111",
  github: "https://github.com/Amitrajput111",
  leetcode: "https://leetcode.com/u/amit_rajput111/",
  resumePath: "/resume.pdf",
};

export const heroRoles = [
  "Software Engineer",
  "Full Stack Developer (MERN & Next.js)",
  "AI-Powered Application Developer",
  "Cloud & System Architecture Enthusiast",
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
  "Experienced Full Stack Developer crafting production-grade web applications, intelligent automation engines, and high-performance digital platforms using Next.js, React, Node.js, and modern cloud architectures.";

export const aboutSummary = `I am a Full Stack Software Engineer passionate about building resilient, high-performance web applications and AI-augmented software solutions. With hands-on industry experience across production client systems, recruitment platforms, healthcare portals, and AI booking architectures, I specialize in delivering clean, scalable, and business-critical software from concept to cloud deployment.`;

export const aboutMetrics = [
  { value: 360, suffix: "+", label: "DSA Problems Solved", icon: "code" },
  { value: 6, suffix: "+", label: "Production & Client Apps", icon: "rocket" },
  { value: 2, suffix: "", label: "Internships Completed", icon: "briefcase" },
  { textValue: "AWS", label: "Certified Developer", icon: "cloud" },
];

export const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5/CSS3"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth & RBAC", "Middleware Design", "API Gateway"],
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "Mongoose", "PostgreSQL / SQL", "Database Optimization", "Data Modeling"],
  },
  {
    title: "AI & Automation",
    skills: ["WhatsApp Cloud API", "LLM Integration", "Workflow Automation", "AI Recommendations", "Python"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Associate)", "Vercel", "Git & GitHub", "CI/CD Workflows", "Environment Config"],
  },
  {
    title: "Engineering Tools",
    skills: ["Postman", "VS Code", "npm/yarn", "Chrome DevTools", "Agile / Scrum"],
  },
];

export const experiences = [
  {
    company: "CodSoft",
    role: "Full Stack Developer Intern",
    project: "HireFlow",
    period: "Internship",
    description:
      "Engineered a scalable MERN recruitment platform connecting recruiters and job candidates with secure JWT authentication, role-based dashboards, and resume pipeline management.",
    highlights: ["HireFlow", "MERN Stack", "REST APIs", "JWT Authentication", "MongoDB", "React.js"],
  },
  {
    company: "KodBud",
    role: "Full Stack Developer Intern",
    project: "Stayora",
    period: "AI & Full Stack",
    description:
      "Architected an intelligent accommodation booking platform featuring personalized stay recommendations, responsive UI layouts, and scalable REST API endpoints.",
    highlights: [
      "Stayora",
      "AI Recommendation Logic",
      "Backend APIs",
      "Responsive UX",
      "Database Schema Design",
    ],
  },
];

export const projectCategories = ["All", "Client & Production", "AI & Automation", "MERN & Full Stack"];

export const projects = [
  {
    id: "setu",
    name: "SETU",
    title: "SETU — Digital Growth & Intelligent Automation",
    subtitle: "Digital Growth & Automation Engine",
    tagline: "Turn Your Digital Presence Into a Customer Growth Engine",
    description:
      "High-performance digital growth and intelligent automation platform built with Next.js and Tailwind CSS. Features WhatsApp Cloud API integration, Google Maps Top-3 ranking engine, automated lead capture, instant syllabus & brochure PDF delivery, and AI calendar booking workflows.",
    live: "https://setu-platform-dkuh7c2q6-amitrajput111s-projects.vercel.app/",
    github: null,
    tech: ["Next.js", "React.js", "Tailwind CSS", "WhatsApp Cloud API", "Node.js", "Vercel"],
    category: "Client & Production",
    highlights: ["Sub-Second Next.js", "WhatsApp Cloud API", "Google Maps Top 3", "AI Calendar Booking"],
    gradient: "from-blue-600/40 via-cyan-500/20 to-slate-900",
    image: "/assets/projects/setu.png",
    featured: true,
    badge: "Flagship Production",
    metrics: "Sub-second Page Speeds · Lead Automation",
  },
  {
    id: "care-clinic",
    name: "CARE CLINIC",
    title: "CARE CLINIC — Trusted Care. Closer to You",
    subtitle: "NABH Multi-Specialty Healthcare & OPD Portal",
    tagline: "Trusted care. Closer to you.",
    description:
      "Production-ready healthcare platform for Bengaluru multi-specialty clinic. Delivers instant OPD appointment booking (< 10 min average wait), senior specialist doctor discovery, digital lab reports within 4–12 hours, transparent consult fees, and Cashless TPA insurance verification.",
    live: "https://client-wheat-seven-38.vercel.app/",
    github: null,
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Vercel"],
    category: "Client & Production",
    highlights: ["< 10 Min OPD Wait", "Doctor Discovery", "Digital Lab Reports", "Cashless TPA Support"],
    gradient: "from-emerald-600/40 via-teal-500/20 to-slate-900",
    image: "/assets/projects/careclinic.png",
    featured: true,
    badge: "Live Client Platform",
    metrics: "4.9/5.0 Satisfaction · 3.5k+ Patients",
  },
  {
    id: "aura-fitness",
    name: "AURA FITNESS",
    title: "AURA FITNESS | Premium Luxury Gym & Elite Health Club",
    subtitle: "Luxury Gym & Elite Health Club Platform",
    tagline: "Forge Your Ultimate Self",
    description:
      "Modern web application for an elite fitness sanctuary and gym club. Implements interactive membership tiers, 35+ elite coaches roster, interactive facility visualizer, free trial pass booking engine, and seamless WhatsApp enquiry integration.",
    live: "https://gym-web-demo-beta.vercel.app/",
    github: null,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX Architecture", "Vercel"],
    category: "Client & Production",
    highlights: ["10,000+ Active Members Tier", "35+ Elite Coaches", "Free Trial Pass Engine", "WhatsApp Integration"],
    gradient: "from-amber-600/40 via-yellow-500/20 to-slate-900",
    image: "/assets/projects/aurafitness.png",
    featured: true,
    badge: "Production Showcase",
    metrics: "10k+ Member Community · 12+ Yrs Excellence",
  },
  {
    id: "edurise",
    name: "EduRise Institute",
    title: "EduRise Institute — Admissions & Coaching Ecosystem",
    subtitle: "JEE / NEET Admissions & CBT Assessment Platform",
    tagline: "Build Your Future With the Right Preparation",
    description:
      "Comprehensive EdTech coaching platform for premier JEE/NEET prep. Features interactive course exploration, AIR 127 top ranker showcase, automated syllabus & fee PDF generator, bi-weekly CBT mock assessments, and 1-on-1 mentorship booking.",
    live: "https://edurise-admissions.vercel.app/",
    github: null,
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Vercel"],
    category: "Client & Production",
    highlights: ["AIR 127 Topper Showcase", "Automated Prospectus Delivery", "CBT Mock Assessments", "1:40 Batch Ratio"],
    gradient: "from-indigo-600/40 via-blue-500/20 to-slate-900",
    image: "/assets/projects/edurise.png",
    featured: true,
    badge: "EdTech Platform",
    metrics: "4.9/5.0 Rating · Master IITian Faculty",
  },
  {
    id: "career-pilot",
    name: "CareerPilot AI",
    title: "CareerPilot AI — Your Technical Career Operating System",
    subtitle: "AI Career Gap Analysis & Learning Roadmap",
    tagline: "Stop Guessing Your Career. Know Exactly What To Do Next.",
    description:
      "AI-driven career diagnostic engine that evaluates developer skill profiles, pinpoints technical competency gaps, generates tailored flight task roadmaps, and tracks telemetry progress towards target engineering roles.",
    live: null,
    github: null,
    tech: ["React.js", "AI / LLM Integration", "Tailwind CSS", "Node.js", "REST APIs"],
    category: "AI & Automation",
    highlights: ["Telemetry Terminal", "Career GPS Alignment", "Automated Task Tracker", "Readiness Analytics"],
    gradient: "from-purple-600/40 via-pink-500/20 to-slate-900",
    image: "/assets/projects/careerpilot.png",
    featured: false,
    badge: "AI Application",
    metrics: "Skill GPS · Diagnostic Telemetry",
  },
  {
    id: "hireflow",
    name: "HireFlow",
    title: "HireFlow — Recruitment & Job Management Platform",
    subtitle: "Recruitment & Candidate Workflow Platform",
    tagline: "Streamlined Job Posting & Candidate Tracking",
    description:
      "Production-ready MERN recruitment platform with JWT authentication, role-based authorization for recruiters and job seekers, job application pipelines, and resume tracking.",
    live: "https://hireflow-alpha.vercel.app/",
    github: "https://github.com/Amitrajput111/job_portal",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    category: "MERN & Full Stack",
    highlights: ["Role-Based Access", "Application Pipeline", "Secure JWT", "MongoDB Schemas"],
    gradient: "from-sky-600/40 via-blue-500/20 to-slate-900",
    image: null,
    featured: false,
    badge: "Full Stack MERN",
    metrics: "Role-Based Workflows · REST APIs",
  },
  {
    id: "stayora",
    name: "Stayora",
    title: "Stayora — AI-Powered Accommodation Booking",
    subtitle: "Intelligent Accommodation & Stay Discovery",
    tagline: "Personalized Stay Discovery with Intelligent Matching",
    description:
      "Full stack accommodation booking platform with personalized stay recommendation logic, user auth, responsive filter workflows, and scalable backend services.",
    live: "https://stayora-ochre.vercel.app/",
    github: "https://github.com/Amitrajput111/stayora",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
    category: "MERN & Full Stack",
    highlights: ["AI Recommendation Engine", "Booking Workflows", "Responsive UI", "REST APIs"],
    gradient: "from-violet-600/40 via-purple-500/20 to-slate-900",
    image: null,
    featured: false,
    badge: "Full Stack & AI",
    metrics: "AI Filtering · End-to-End Booking",
  },
];

export const marqueeItems = [
  { text: "SETU: Next.js + WhatsApp Cloud API", category: "Production Client" },
  { text: "CARE CLINIC: Multi-Specialty OPD Healthcare", category: "Healthcare Platform" },
  { text: "AURA FITNESS: Luxury Gym Portal", category: "High Performance Web" },
  { text: "EduRise Institute: JEE / NEET EdTech Ecosystem", category: "EdTech Platform" },
  { text: "CareerPilot AI: Career Telemetry Engine", category: "AI & ML" },
  { text: "HireFlow: MERN Recruitment Architecture", category: "Full Stack MERN" },
  { text: "AWS Certified Developer – Associate", category: "Cloud Credential" },
  { text: "360+ Data Structures & Algorithms Solved", category: "Problem Solving" },
];

export const achievements = [
  { value: 200, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 160, suffix: "+", label: "GeeksforGeeks Problems Solved" },
  { value: 6, suffix: "+", label: "Production & Live Deployments" },
  { textValue: "Team Lead", label: "Hackathon — SKITM Innothon" },
];

export const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    description:
      "Validates industry expertise in developing, deploying, debugging, and architecting cloud-based applications using AWS services.",
    badge: "AWS",
    color: "from-amber-500/20 to-orange-600/10",
  },
  {
    title: "Advanced MERN Stack Development",
    issuer: "Infosys Springboard",
    description:
      "Comprehensive mastery in MongoDB, Express.js, React.js, and Node.js for production-grade full stack web application engineering.",
    badge: "MERN",
    color: "from-accent/20 to-sky-600/10",
  },
  {
    title: "Premier AI & Machine Learning",
    issuer: "Infosys Springboard",
    description:
      "Advanced certification covering AI fundamentals, LLM integration, ML pipelines, and intelligent software engineering.",
    badge: "AI/ML",
    color: "from-accent-purple/20 to-violet-600/10",
  },
];

