import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";

export function ContactSection() {
  const handles = [
    { label: "abhishekyd300@gmail.com", href: "mailto:abhishekyd300@gmail.com", icon: "📧" },
    { label: "linkedin.com/in/abhishek-yadav-6207ab364", href: "https://linkedin.com/in/abhishek-yadav-6207ab364/", icon: "💼" },
    { label: "github.com/abhishekyd300", href: "https://github.com/abhishekyd300", icon: "🐙" }
  ];

  return (
    <section id="contact" style={{ padding: "0 clamp(1rem, 5vw, 4rem) 120px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
      <FadeIn>
        <SectionHead label="Let's Connect" title="Get In Touch" />
        
        <p
          style={{
            color: "rgba(255, 255, 255, 0.42)",
            fontSize: 15,
            lineHeight: 1.9,
            marginBottom: 44,
            marginTop: -28
          }}
        >
          Actively looking for internship and full-time opportunities. Whether you have a role, a project, or just want to say hi — my inbox is always open.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          {handles.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: 14,
                padding: "13px 22px",
                color: "rgba(255, 255, 255, 0.62)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                width: "100%",
                maxWidth: 440,
                transition: "all 0.25s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167, 139, 250, 0.09)";
                e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.3)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.62)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <span style={{ fontSize: 20 }}>{l.icon}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {l.label}
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
