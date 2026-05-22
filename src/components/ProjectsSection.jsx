import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "0 clamp(1rem, 5vw, 4rem) 100px", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <SectionHead label="Portfolio" title="Featured Projects" color="#22d3ee" />
      </FadeIn>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.15}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: 24,
                padding: "36px 32px",
                height: "100%",
                boxSizing: "border-box",
                transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 30px 80px ${p.color}22`;
                e.currentTarget.style.borderColor = p.color + "55";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.09)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.color}15 0%, transparent 70%)`,
                  pointerEvents: "none"
                }}
              />
              
              <div style={{ fontSize: 44, marginBottom: 16 }}>{p.icon}</div>
              
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                  margin: "0 0 4px",
                  letterSpacing: "-0.02em"
                }}
              >
                {p.title}
              </h3>
              
              <p style={{ color: p.color, fontSize: 13, fontWeight: 600, margin: "0 0 20px" }}>{p.subtitle}</p>
              
              <ul style={{ padding: 0, margin: "0 0 24px", listStyle: "none" }}>
                {p.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      display: "flex",
                      gap: 10,
                      color: "rgba(255, 255, 255, 0.58)",
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      marginBottom: 8
                    }}
                  >
                    <span style={{ color: p.color, flexShrink: 0, marginTop: 3 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}35`,
                      color: p.color,
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: 12,
                      fontWeight: 600
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    minWidth: 110,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                    background: p.color,
                    color: "#000",
                    textDecoration: "none",
                    padding: "10px 16px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: `0 4px 20px ${p.color}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 28px ${p.color}65`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${p.color}40`;
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
                
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1,
                    minWidth: 110,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                    background: "rgba(255, 255, 255, 0.07)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "10px 16px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 700,
                    transition: "background 0.2s, border-color 0.2s, transform 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.13)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
