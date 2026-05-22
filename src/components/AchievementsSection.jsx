import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";
import { CertCard } from "./CertCard";
import { achievements } from "../data/achievements";
import { certifications } from "../data/certifications";

export function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "0 clamp(1rem, 5vw, 4rem) 100px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionHead label="Track Record" title="Achievements" color="#f59e0b" />
        </FadeIn>
        
        {/* Achievements Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, marginBottom: 80 }}>
          {achievements.map((a, i) => (
            <FadeIn key={a.label} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(245, 158, 11, 0.06)",
                  border: "1px solid rgba(245, 158, 11, 0.18)",
                  borderRadius: 20,
                  padding: "30px 16px",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(245, 158, 11, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{a.icon}</div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: "#fbbf24",
                    letterSpacing: "-0.04em"
                  }}
                >
                  {a.value}
                </div>
                <div style={{ color: "rgba(255, 255, 255, 0.42)", fontSize: 12, marginTop: 5, lineHeight: 1.4 }}>
                  {a.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ color: "#a78bfa", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
              Credentials
            </span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#fff",
                fontSize: 28,
                fontWeight: 800,
                margin: "8px 0 4px",
                letterSpacing: "-0.02em"
              }}
            >
              Certifications
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.35)", fontSize: 13 }}>
              Click any card's image area to upload your certificate image
            </p>
          </div>
        </FadeIn>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {certifications.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.09}>
              <CertCard cert={cert} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
