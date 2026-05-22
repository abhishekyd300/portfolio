import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";

export function EducationSection() {
  const edu = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Parul University",
      period: "2023 – 2027",
      cgpa: "7.85",
      status: "Ongoing",
      color: "#a78bfa",
      glow: "rgba(167, 139, 250, 0.15)",
      logo: "🎓",
      highlights: ["MERN Stack Development", "Data Structures & Algorithms", "Cloud Computing", "Database Management"],
    },
  ];

  return (
    <section style={{ padding: "0 clamp(1rem, 5vw, 4rem) 100px", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <SectionHead label="Academic Journey" title="Education" color="#f59e0b" />
      </FadeIn>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {edu.map((e, i) => (
          <FadeIn key={e.institution} delay={i * 0.1}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 24,
                padding: "36px 36px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s"
              }}
              onMouseEnter={(el) => {
                el.currentTarget.style.borderColor = e.color + "50";
                el.currentTarget.style.boxShadow = `0 20px 60px ${e.glow}`;
              }}
              onMouseLeave={(el) => {
                el.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                el.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* bg glow */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${e.color}12 0%, transparent 70%)`,
                  pointerEvents: "none"
                }}
              />
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
                {/* Left Info Column */}
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: `${e.color}18`,
                        border: `1px solid ${e.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 26,
                        flexShrink: 0
                      }}
                    >
                      {e.logo}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "#fff",
                          fontSize: 19,
                          fontWeight: 700,
                          margin: 0,
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {e.degree}
                      </h3>
                      <p style={{ color: e.color, fontSize: 14, fontWeight: 600, margin: "3px 0 0" }}>{e.institution}</p>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "rgba(255, 255, 255, 0.6)",
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontSize: 12,
                        fontWeight: 500
                      }}
                    >
                      📅 {e.period}
                    </span>
                    <span
                      style={{
                        background: `${e.color}18`,
                        border: `1px solid ${e.color}30`,
                        color: e.color,
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontSize: 12,
                        fontWeight: 700
                      }}
                    >
                      CGPA: {e.cgpa}
                    </span>
                    <span
                      style={{
                        background: "rgba(34, 197, 94, 0.12)",
                        border: "1px solid rgba(34, 197, 94, 0.25)",
                        color: "#22c55e",
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontSize: 12,
                        fontWeight: 700
                      }}
                    >
                      ● {e.status}
                    </span>
                  </div>
                </div>

                {/* Highlights Column */}
                <div style={{ flex: 1, minWidth: 220 }}>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.4)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 12
                    }}
                  >
                    Key Subjects
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {e.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.09)",
                          color: "rgba(255, 255, 255, 0.65)",
                          borderRadius: 8,
                          padding: "5px 12px",
                          fontSize: 12,
                          fontWeight: 500
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
