import React, { useState, useEffect } from "react";

export function Navbar({ active, setActive }) {
  const links = ["About", "Skills", "Projects", "Achievements", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5, 7, 20, 0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.07)" : "none",
        transition: "all 0.4s",
        padding: "0 clamp(1rem, 5vw, 4rem)"
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: "#a78bfa",
            letterSpacing: "-0.03em"
          }}
        >
          AY<span style={{ color: "#fff" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l)}
              style={{
                color: active === l ? "#a78bfa" : "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 999,
                background: active === l ? "rgba(167, 139, 250, 0.12)" : "transparent",
                transition: "all 0.2s"
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
