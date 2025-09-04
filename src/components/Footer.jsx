import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Amit Rajput. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
