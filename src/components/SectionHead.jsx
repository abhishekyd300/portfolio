import React from "react";

export function SectionHead({ label, title, color = "#a78bfa" }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <span
        style={{
          color,
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 700
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
          fontWeight: 800,
          color: "#fff",
          margin: "8px 0 0",
          letterSpacing: "-0.03em"
        }}
      >
        {title}
      </h2>
    </div>
  );
}
