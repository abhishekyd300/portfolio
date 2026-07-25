import React, { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [typed, setTyped] = useState("");
  const roles = [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "AWS Cloud Practitioner",
    "Problem Solver"
  ];

  const ri = useRef(0);
  const ci = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    const tick = () => {
      const cur = roles[ri.current];
      if (!del.current) {
        ci.current++;
        setTyped(cur.slice(0, ci.current));
        if (ci.current === cur.length) {
          del.current = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        ci.current--;
        setTyped(cur.slice(0, ci.current));
        if (ci.current === 0) {
          del.current = false;
          ri.current = (ri.current + 1) % roles.length;
        }
      }
      setTimeout(tick, del.current ? 52 : 78);
    };

    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px clamp(1rem, 5vw, 4rem) 0"
      }}
    >
      {/* Background blobs & grids */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            top: "-15%",
            left: "-12%",
            animation: "blob1 12s ease-in-out infinite"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
            bottom: "-5%",
            right: "-8%",
            animation: "blob2 14s ease-in-out infinite"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34, 211, 153, 0.08) 0%, transparent 70%)",
            top: "40%",
            left: "55%",
            animation: "blob3 10s ease-in-out infinite"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.023) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.023) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <div className="hero-container">
        {/* Left Column (Information) */}
        <div className="hero-left">
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "8px",
              display: "block"
            }}
          >
            Hi I am
          </span>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
              color: "#fff"
            }}
          >
            Abhishek Yadav
          </h1>

          {/* Dynamic typing role animation styled as the primary highlighted title */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              color: "#fd6e0a",
              margin: "0 0 24px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              minHeight: "clamp(3rem, 6vw, 4.5rem)"
            }}
          >
            {typed}
            <span style={{ animation: "blink 1s step-end infinite", color: "#fd6e0a" }}>|</span>
          </h2>

          {/* Social media outline buttons */}
          <div className="hero-social-row">
            <a
              href="https://linkedin.com/in/abhishek-yadav-6207ab364/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/abhishekyd300"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:abhishekyd300@gmail.com" className="hero-social-link" title="Email">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Call to action buttons */}
          <div className="hero-btn-row">
            <a href="mailto:abhishekyd300@gmail.com" className="hero-btn-primary">
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-secondary"
            >
              Download CV
            </a>
          </div>


        </div>

        {/* Right Column (Circular Profile Portrait Frame) */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-circle-bg" />
            <div className="hero-img-box">
              <img
                src="/profile.png"
                alt="Abhishek Yadav Portrait"
                className="hero-portrait-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{
                  display: "none",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  zIndex: 3,
                  position: "relative"
                }}
              >
                <span style={{ fontSize: 64 }}>👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
