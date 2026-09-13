import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackToTop from "./components/ui/BackToTop";
import GlobalBackground from "./components/ui/GlobalBackground";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Achievements = lazy(() => import("./components/Achievements"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-muted text-sm font-medium">Loading...</div>}>
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Certifications />
          <About />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <BackToTop />
    </div>
  );
}
