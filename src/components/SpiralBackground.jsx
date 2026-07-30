import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpiralBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 6, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Parameters (matching Three.js Galaxy parameters)
    const count = 35000;
    const radius = 9;
    const branches = 3;
    const spin = 1.2;
    const randomness = 0.6;
    const power = 3;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorInside = new THREE.Color("#fd6e0a");
    const colorOutside = new THREE.Color("#00d2ff");

    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 1.5) * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      const randomX = Math.pow(Math.random(), power) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomY = Math.pow(Math.random(), power) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomZ = Math.pow(Math.random(), power) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      const mixedColor = colorInside.clone().lerp(colorOutside, r / radius);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.025,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.45
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      points.rotation.y = elapsedTime * 0.04;
      points.rotation.x = Math.sin(elapsedTime * 0.1) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden"
      }}
    />
  );
}
