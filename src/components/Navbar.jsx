import React, { useState, useEffect } from "react";

export function Navbar({ active, setActive }) {
  const links = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (linkName) => {
    setActive(linkName);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled || isOpen ? "rgba(5, 7, 20, 0.96)" : "transparent",
          backdropFilter: scrolled || isOpen ? "blur(18px)" : "none",
          borderBottom: scrolled || isOpen ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
          transition: "all 0.3s ease",
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
          {/* Brand Logo */}
          <a
            href="#about"
            onClick={() => handleLinkClick("About")}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#a78bfa",
              letterSpacing: "-0.03em",
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            AY<span style={{ color: "#fff" }}>.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="nav-hamburger-btn"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span className={`nav-bar-line ${isOpen ? "open" : ""}`} />
            <span className={`nav-bar-line ${isOpen ? "open" : ""}`} />
            <span className={`nav-bar-line ${isOpen ? "open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`nav-mobile-link ${active === l ? "active" : ""}`}
            onClick={() => handleLinkClick(l)}
          >
            <span>{l}</span>
            <span style={{ fontSize: 13, opacity: 0.4 }}>▸</span>
          </a>
        ))}

        <div className="nav-mobile-cta">
          <a
            href="mailto:abhishekyd300@gmail.com"
            className="nav-mobile-cta-btn nav-mobile-cta-primary"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-mobile-cta-btn nav-mobile-cta-secondary"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Backdrop for click-outside closing */}
      {isOpen && (
        <div
          className="nav-mobile-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
