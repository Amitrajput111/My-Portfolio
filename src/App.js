import React, { Suspense, lazy, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackToTop from "./components/ui/BackToTop";
import LoadingScreen from "./components/ui/LoadingScreen";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Achievements = lazy(() => import("./components/Achievements"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionLoader() {
  return (
    <div className="section-padding flex justify-center bg-primary" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className="min-h-screen bg-primary text-foreground antialiased overflow-x-hidden"
        style={{ visibility: loaded ? "visible" : "hidden" }}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] btn-primary"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionLoader />}>
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
    </>
  );
}
