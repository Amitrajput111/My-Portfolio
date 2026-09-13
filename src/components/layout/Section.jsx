import React from "react";

export default function Section({ id, children, className = "", alt = false }) {
  return (
    <section
      id={id}
      className={`section-padding border-b border-border ${
        alt ? "bg-surface" : "bg-background"
      } ${className}`}
    >
      <div className="section-container relative">{children}</div>
    </section>
  );
}
