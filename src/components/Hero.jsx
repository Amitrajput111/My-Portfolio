import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "#f8fafc",
      }}
    >
      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-3 fw-bold mb-3"
          style={{ textShadow: "2px 2px 10px #6366f1" }}
        >
          Hi, I'm Amit Rajput
        </motion.h1>
        <ReactTyped
          strings={[
            "Full-Stack Developer",
            "AI & Web Enthusiast",
            "Problem Solver",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="lead mb-4"
          style={{
            fontSize: "1.5rem",
            color: "#facc15",
            textShadow: "1px 1px 5px #a78bfa",
          }}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            href="#contact"
            size="lg"
            style={{
              background:
                "linear-gradient(90deg, #6366f1, #a78bfa)",
              border: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            Hire Me
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
