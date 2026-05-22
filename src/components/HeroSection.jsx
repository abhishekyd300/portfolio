import React, { useState, useEffect, useRef } from "react";

export function HeroSection({ profileImg, onProfileChange }) {
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

  const fileRef = useRef();

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

      <div
        style={{
          maxWidth: 960,
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0
        }}
      >
        {/* Profile Photo */}
        <div style={{ position: "relative", marginBottom: 32 }}>
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5, #06b6d4)",
              padding: 3,
              cursor: "pointer"
            }}
            onClick={() => fileRef.current.click()}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#0d0f1e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 36 }}>👤</span>
                  <span
                    style={{
                      fontSize: 9,
                      color: "rgba(255, 255, 255, 0.4)",
                      letterSpacing: "0.05em",
                      textAlign: "center",
                      lineHeight: 1.3
                    }}
                  >
                    Click to<br />upload
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Online Dot */}
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#22c55e",
              border: "3px solid #050714",
              boxShadow: "0 0 10px #22c55e"
            }}
          />

          {/* Upload Hint Overlay on Hover */}
          {profileImg && (
            <div
              onClick={() => fileRef.current.click()}
              style={{
                position: "absolute",
                inset: 3,
                borderRadius: "50%",
                background: "rgba(0, 0, 0, 0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                opacity: 0,
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.55)";
                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0)";
                e.currentTarget.style.opacity = 0;
              }}
            >
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>Change</span>
            </div>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => onProfileChange(ev.target.result);
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>

        {/* Hero Text Content */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(167, 139, 250, 0.1)",
              border: "1px solid rgba(167, 139, 250, 0.28)",
              borderRadius: 999,
              padding: "6px 20px",
              fontSize: 13,
              color: "#a78bfa",
              marginBottom: 20,
              letterSpacing: "0.07em"
            }}
          >
            👋 CS Undergraduate · Parul University · CGPA 7.85
          </div>
          
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              margin: "0 0 14px",
              letterSpacing: "-0.04em",
              color: "#fff"
            }}
          >
            Abhishek{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Yadav
            </span>
          </h1>

          <div style={{ fontSize: "clamp(1rem, 2.4vw, 1.3rem)", color: "rgba(255, 255, 255, 0.5)", marginBottom: 10, minHeight: 36 }}>
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>{typed}</span>
            <span style={{ animation: "blink 1s step-end infinite", color: "#a78bfa" }}>|</span>
          </div>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.42)",
              fontSize: 15,
              maxWidth: 560,
              margin: "0 auto 32px",
              lineHeight: 1.9
            }}
          >
            Building scalable web apps with the MERN stack. AWS Certified. 300+ DSA problems. Passionate about shipping products that matter.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:abhishekyd300@gmail.com"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(124, 58, 237, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(124, 58, 237, 0.4)";
              }}
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/abhishekyd300"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.13)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.11)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
