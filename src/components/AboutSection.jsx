import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";

export function AboutSection() {
  const traits = [
    { icon: "💡", label: "Problem Solver", desc: "300+ DSA problems on LeetCode" },
    { icon: "🚀", label: "Full-Stack Dev", desc: "MERN stack end-to-end" },
    { icon: "☁️", label: "Cloud Certified", desc: "AWS Cloud Practitioner" },
    { icon: "🤝", label: "Team Player", desc: "Public speaking & leadership" }
  ];

  return (
    <section style={{ padding: "100px clamp(1rem, 5vw, 4rem)", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <SectionHead label="Who I Am" title="About Me" color="#22d3ee" />
      </FadeIn>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
          alignItems: "start"
        }}
      >
        {/* Bio */}
        <FadeIn dir="left">
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 24,
              padding: "36px 32px"
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#fff",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: "-0.02em"
              }}
            >
              Hey, I'm Abhishek 👋
            </h3>
            
            <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
              I'm a passionate Computer Science undergraduate at{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Parul University</span> (2023–2027), focused on building real-world web applications that create impact.
            </p>
            
            <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
              My expertise lies in the{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>MERN stack</span> — from designing RESTful APIs to crafting responsive UIs. I've built projects like{" "}
              <span style={{ color: "#22c55e", fontWeight: 600 }}>Krishi Setu</span> (a farmer marketplace) and{" "}
              <span style={{ color: "#6366f1", fontWeight: 600 }}>Smart CV</span> (an AI resume builder).
            </p>
            
            <p style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: 15, lineHeight: 1.9 }}>
              I'm <span style={{ color: "#FF9900", fontWeight: 600 }}>AWS Certified</span>, love competitive programming, and am actively seeking internship or full-time opportunities where I can grow and contribute.
            </p>
            
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              {["Open to Work", "React Dev", "Node.js", "DSA"].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(167, 139, 250, 0.12)",
                    border: "1px solid rgba(167, 139, 250, 0.2)",
                    color: "#c4b5fd",
                    borderRadius: 999,
                    padding: "4px 14px",
                    fontSize: 12,
                    fontWeight: 600
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Traits Grid */}
        <FadeIn dir="right" delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {traits.map((t) => (
              <div
                key={t.label}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 18,
                  padding: "24px 20px",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.3)";
                  e.currentTarget.style.boxShadow = "0 14px 40px rgba(124, 58, 237, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 30, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{t.label}</div>
                <div style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: 12, lineHeight: 1.4 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
