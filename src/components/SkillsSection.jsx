import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";
import { ICONS } from "./Icons";
import { skillCategories } from "../data/skills";

function SkillChip({ item, color, bg, border }) {
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[item];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        background: hovered ? bg : "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${hovered ? border : "rgba(255, 255, 255, 0.07)"}`,
        borderRadius: 16,
        padding: "20px 16px",
        transition: "all 0.28s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 16px 40px ${color}22` : "none",
        cursor: "default",
        minWidth: 90
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: hovered ? "none" : "grayscale(20%) brightness(0.8)",
          transition: "filter 0.3s"
        }}
      >
        {Icon ? <Icon /> : <span style={{ fontSize: 26 }}>💻</span>}
      </div>
      <span
        style={{
          color: hovered ? "#fff" : "rgba(255, 255, 255, 0.5)",
          fontSize: 11,
          fontWeight: 600,
          textAlign: "center",
          letterSpacing: "0.02em",
          transition: "color 0.25s",
          whiteSpace: "nowrap"
        }}
      >
        {item}
      </span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px clamp(1rem, 5vw, 4rem)", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <SectionHead label="Expertise" title="Technical Skills" />
      </FadeIn>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {skillCategories.map((cat, ci) => (
          <FadeIn key={cat.cat} delay={ci * 0.08}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 3, height: 22, borderRadius: 4, background: cat.color, flexShrink: 0 }} />
              <span
                style={{
                  color: cat.color,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}
              >
                {cat.cat}
              </span>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {cat.items.map((item, ii) => (
                <FadeIn key={item} delay={ci * 0.07 + ii * 0.06}>
                  <SkillChip item={item} color={cat.color} bg={cat.bg} border={cat.border} />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
