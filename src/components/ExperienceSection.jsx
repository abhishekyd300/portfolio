import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";

export function ExperienceSection() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const experiences = [
    {
      company: "Synent Technologies",
      role: "Web Development & Designing Intern",
      type: "Fellowship Program",
      date: "June 2026 - Present",
      location: "Remote / Hybrid",
      candidateId: "SYN/J2/IP1172",
      offerLetterDate: "05 June 2026",
      color: "#fd6e0a",
      icon: "🏢",
      pdfUrl: "/Abhishek Yadav_Offer_Letter.pdf",
      highlights: [
        "Selected for the Web Development and Designing fellowship program at Synent Technologies.",
        "Hands-on exposure to real-world software tasks, enhancing core engineering and UI/UX design concepts.",
        "Participating in end-to-end web application development and collaborating on production workflow tasks."
      ],
      certified: true
    }
  ];

  return (
    <section id="experience" style={{ padding: "80px clamp(1rem, 5vw, 4rem)", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <SectionHead label="Career Journey" title="Work Experience" color="#fd6e0a" />
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
        {experiences.map((exp, idx) => (
          <FadeIn key={idx} delay={idx * 0.15}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 20,
                padding: "32px clamp(20px, 4vw, 36px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: "100%",
                  background: exp.color
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 16
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                    <span style={{ fontSize: 28 }}>{exp.icon}</span>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Outfit', sans-serif",
                        margin: 0
                      }}
                    >
                      {exp.role}
                    </h3>
                  </div>
                  <h4 style={{ fontSize: 16, color: exp.color, fontWeight: 600, margin: "4px 0 0" }}>
                    {exp.company} <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>• {exp.type}</span>
                  </h4>
                </div>

                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      borderRadius: 20,
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}40`,
                      color: exp.color,
                      fontSize: 13,
                      fontWeight: 600
                    }}
                  >
                    {exp.date}
                  </span>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                    Candidate ID: {exp.candidateId}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul style={{ padding: 0, margin: "20px 0 24px", listStyle: "none" }}>
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      marginBottom: 10
                    }}
                  >
                    <span style={{ color: exp.color }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* PDF Document View Action */}
              {exp.certified && (
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    onClick={() => setSelectedPdf({ title: `${exp.company} Offer Letter`, url: exp.pdfUrl })}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(253, 110, 10, 0.15)",
                      border: "1px solid rgba(253, 110, 10, 0.4)",
                      color: "#fd6e0a",
                      padding: "10px 20px",
                      borderRadius: 10,
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(253, 110, 10, 0.28)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(253, 110, 10, 0.15)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    View Offer Letter PDF
                  </button>
                  <span style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.4)" }}>
                    Verified PDF Document • Issued June 05, 2026
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* PDF Dialog Modal */}
      {selectedPdf && (
        <div
          onClick={() => setSelectedPdf(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: 900,
              width: "100%",
              height: "88vh",
              background: "#0b0d1e",
              border: "1px solid rgba(253, 110, 10, 0.35)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 70px rgba(0,0,0,0.8)"
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "14px 20px",
                background: "rgba(255, 255, 255, 0.04)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <h4 style={{ margin: 0, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                📄 {selectedPdf.title}
              </h4>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button
                  onClick={() => setSelectedPdf(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: 22,
                    cursor: "pointer",
                    lineHeight: 1
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <iframe
              src={selectedPdf.url}
              title={selectedPdf.title}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "#ffffff"
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
