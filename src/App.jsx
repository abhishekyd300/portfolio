import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <div style={{ background: "#050714", minHeight: "100vh" }}>
      <Navbar active={activeSection} setActive={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      
      <footer
        style={{
          textAlign: "center",
          padding: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          color: "rgba(255, 255, 255, 0.22)",
          fontSize: 13
        }}
      >
        Built with React · Abhishek Yadav © 2025
      </footer>
    </div>
  );
}
