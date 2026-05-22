/**
 * Certifications data for the Achievements section.
 * Set `badge` to a URL string to display an image, or null for emoji fallback.
 */
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    tag: "AWS",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    fallback: "☁️",
    color: "#FF9900",
    glow: "rgba(255,153,0,0.25)",
  },
  {
    id: 2,
    name: "AWS Cloud Foundation",
    issuer: "Amazon Web Services",
    tag: "AWS",
    badge: "https://images.credly.com/size/340x340/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
    fallback: "🏗️",
    color: "#FF9900",
    glow: "rgba(255,153,0,0.25)",
  },
  {
    id: 3,
    name: "AI Intelligence Fundamentals",
    issuer: "AI Certification Body",
    tag: "AI",
    badge: null,
    fallback: "🧠",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.25)",
  },
  {
    id: 4,
    name: "Computer Networking",
    issuer: "NPTEL",
    tag: "NPTEL",
    badge: null,
    fallback: "🌐",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
  },
];
