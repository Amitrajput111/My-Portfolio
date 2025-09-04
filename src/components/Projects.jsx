import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    name: "Myntra Clone",
    desc: "E-commerce web app using React.js, Node.js, MongoDB.",
    img: project1,
    github: "#",
    live: "#"
  },
  {
    name: "Apni Krishi",
    desc: "Agri-tech platform helping farmers.",
    img: project2,
    github: "#",
    live: "#"
  },
  {
    name: "Instagram Clone",
    desc: "Social media app with login, comment, and image upload features.",
    img: project3,
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((p, i) => (
            <Col md={4} key={i} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-100 shadow-lg border-0"
                  style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                  }}
                >
                  <Card.Img variant="top" src={p.img} />
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.desc}</Card.Text>
                    <Button href={p.github} variant="dark" className="me-2">
                      <FaGithub /> GitHub
                    </Button>
                    <Button href={p.live} variant="primary">
                      <FaExternalLinkAlt /> Live
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
