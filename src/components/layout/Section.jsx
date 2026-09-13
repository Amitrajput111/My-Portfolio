import React from "react";

export default function Section({ id, children, className = "", alt = false }) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${
        alt ? "section-surface-alt" : "section-surface"
      } ${className}`}
    >
      <div className="section-divider" aria-hidden="true" />
      <div className="section-container relative z-10">{children}</div>
    </section>
  );
}
