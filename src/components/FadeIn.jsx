import React from "react";
import { useInView } from "../hooks/useInView";

export function FadeIn({ children, delay = 0, dir = "up" }) {
  const [ref, inView] = useInView();
  
  const tr = 
    dir === "up" 
      ? "translateY(36px)" 
      : dir === "left" 
      ? "translateX(-36px)" 
      : "translateX(36px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : tr,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
      }}
    >
      {children}
    </div>
  );
}
