import React, { useState, useRef } from "react";

export function CertCard({ cert }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const fileRef = useRef();

  const displayImg = uploadedImg || (cert.badge && !imgErr ? cert.badge : null);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255, 255, 255, 0.055)" : "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${hovered ? cert.color + "50" : "rgba(255, 255, 255, 0.08)"}`,
        borderRadius: 20,
        padding: "0",
        overflow: "hidden",
        transition: "all 0.32s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 56px ${cert.glow}` : "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Image Area - click to upload */}
      <div
        onClick={() => fileRef.current.click()}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "65%",
          background: displayImg ? "rgba(0, 0, 0, 0.3)" : `linear-gradient(135deg, ${cert.color}12, rgba(255, 255, 255, 0.03))`,
          cursor: "pointer",
          overflow: "hidden",
          flexShrink: 0
        }}
      >
        {displayImg ? (
          <img
            src={displayImg}
            alt={cert.name}
            onError={() => setImgErr(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "16px"
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}
          >
            <span style={{ fontSize: 42 }}>{cert.fallback}</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <span style={{ color: cert.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>
                📎 ADD IMAGE
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: 10 }}>Click to upload</span>
            </div>
          </div>
        )}

        {/* Upload Overlay on Hover if image already exists */}
        {displayImg && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0)";
              e.currentTarget.style.opacity = "0";
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                background: "rgba(0, 0, 0, 0.5)",
                padding: "6px 12px",
                borderRadius: 8
              }}
            >
              🔄 Replace image
            </span>
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
              reader.onload = (ev) => setUploadedImg(ev.target.result);
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>

      {/* Card Info */}
      <div style={{ padding: "18px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span
            style={{
              background: `${cert.color}20`,
              color: cert.color,
              fontSize: 10,
              fontWeight: 800,
              padding: "2px 10px",
              borderRadius: 5,
              letterSpacing: "0.07em"
            }}
          >
            {cert.tag}
          </span>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: cert.color,
              boxShadow: hovered ? `0 0 10px ${cert.color}` : "none",
              transition: "box-shadow 0.3s"
            }}
          />
        </div>
        <p
          style={{
            color: hovered ? "#fff" : "rgba(255, 255, 255, 0.82)",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.35,
            margin: "0 0 4px",
            transition: "color 0.25s",
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          {cert.name}
        </p>
        <p style={{ color: "rgba(255, 255, 255, 0.32)", fontSize: 12, margin: 0 }}>{cert.issuer}</p>
      </div>
    </div>
  );
}
