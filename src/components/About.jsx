import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

<Image
  src={profileImg}
  roundedCircle
  fluid
  style={{
    border: "5px solid #6366f1",
    boxShadow: "0 0 30px #a78bfa",
    transition: "0.3s",
  }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 60px #facc15")}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 30px #a78bfa")}
/>

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src={profileImg} rounded fluid alt="Profile" />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="lead">
                I am Amit Rajput, a passionate Full-Stack Developer skilled in React.js, Node.js, 
                Java, and Python. I love building modern web apps with clean code, smooth performance, 
                and great user experience.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
