import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
}
