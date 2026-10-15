import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DumeArmWidget({ isOpen, onToggle, position = 'bottom-right' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const stage = containerRef.current;
    if (!stage) return;

    // Attach global click hook if requested
    window.DUME_ON_CLICK = () => {
      onToggle?.();
    };

    const T = THREE;
    const PI = Math.PI;

    // Helper for color space compatibility across Three.js versions
    const applyColorSpace = (target, isOutput = false) => {
      if (isOutput) {
        if ('outputColorSpace' in target) {
          target.outputColorSpace = T.SRGBColorSpace;
        } else if ('outputEncoding' in target) {
          target.outputEncoding = T.sRGBEncoding;
        }
      } else {
        if ('colorSpace' in target) {
          target.colorSpace = T.SRGBColorSpace;
        } else if ('encoding' in target) {
          target.encoding = T.sRGBEncoding;
        }
      }
    };

    function mkR(w, h) {
      const r = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      applyColorSpace(r, true);
      r.toneMapping = T.ACESFilmicToneMapping;
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      if (w && h) r.setSize(w, h);
      return r;
    }

    const R = mkR();
    stage.appendChild(R.domElement);

    function mkEnv(r) {
      const c = document.createElement('canvas');
      c.width = 1024;
      c.height = 512;
      const g = c.getContext('2d');
      if (!g) return null;
      const gr = g.createLinearGradient(0, 0, 0, 512);
      gr.addColorStop(0, '#b9bec6');
      gr.addColorStop(0.5, '#8a9099');
      gr.addColorStop(0.56, '#555a62');
      gr.addColorStop(1, '#22262b');
      g.fillStyle = gr;
      g.fillRect(0, 0, 1024, 512);
      g.fillStyle = '#e6eaef';
      [
        [100, 80, 160, 60],
        [420, 60, 200, 50],
        [760, 90, 180, 70],
        [250, 200, 90, 40],
        [620, 190, 120, 30],
      ].forEach((a) => g.fillRect(...a));

      const tx = new T.CanvasTexture(c);
      tx.mapping = T.EquirectangularReflectionMapping;
      applyColorSpace(tx, false);

      const p = new T.PMREMGenerator(r);
      const e = p.fromEquirectangular(tx).texture;
      p.dispose();
      return e;
    }

    const env1 = mkEnv(R);

    const scene = new T.Scene();
    if (env1) scene.environment = env1;
    scene.add(new T.HemisphereLight(0xffffff, 0x555a62, 0.35));

    const key = new T.DirectionalLight(0xffffff, 1.3);
    key.position.set(3, 6, 5);
    scene.add(key);

    const rim = new T.DirectionalLight(0xaac4ff, 1);
    rim.position.set(-4, 3, -4);
    scene.add(rim);

    const M = (c, m = 0.55, r = 0.42) => new T.MeshStandardMaterial({ color: c, metalness: m, roughness: r });
    const steel = M(0x6b6d71);
    const steel2 = M(0x8a8c90, 0.5, 0.35);
    const dark = M(0x26282c, 0.4, 0.5);
    const black = M(0x17181a, 0.3, 0.6);
    const glass = M(0x05070a, 0.2, 0.08);

    function rr(w, h, r, d, bev, mat) {
      const s = new T.Shape();
      const x = -w / 2;
      const y = -h / 2;
      s.moveTo(x + r, y);
      s.lineTo(x + w - r, y);
      s.absarc(x + w - r, y + r, r, -PI / 2, 0);
      s.lineTo(x + w, y + h - r);
      s.absarc(x + w - r, y + h - r, r, 0, PI / 2);
      s.lineTo(x + r, y + h);
      s.absarc(x + r, y + h - r, r, PI / 2, PI);
      s.lineTo(x, y + r);
      s.absarc(x + r, y + r, r, PI, 1.5 * PI);
      const g = new T.ExtrudeGeometry(s, {
        depth: d,
        bevelEnabled: true,
        bevelSize: bev,
        bevelThickness: bev,
        bevelSegments: 3,
        curveSegments: 16,
      });
      g.translate(0, 0, -d / 2);
      return new T.Mesh(g, mat);
    }

    function cyl(r, h, mat, x, y, z) {
      const m = new T.Mesh(new T.CylinderGeometry(r, r, h, 40), mat);
      m.rotation.x = PI / 2;
      m.position.set(x, y, z);
      return m;
    }

    function link(a, b, w, d) {
      const L = Math.hypot(b[0] - a[0], b[1] - a[1]) + w;
      const g = new T.Group();
      g.add(rr(L, w, w * 0.42, d, 0.04, steel));
      g.position.set((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
      g.rotation.z = Math.atan2(b[1] - a[1], b[0] - a[0]);
      g.userData.L = L;
      return g;
    }

    function joint(x, y, r, d) {
      const g = new T.Group();
      g.position.set(x, y, 0);
      g.add(cyl(r, d + 0.06, steel, 0, 0, 0));
      [1, -1].forEach((s) => {
        g.add(cyl(r * 0.8, 0.05, steel2, 0, 0, s * (d / 2 + 0.04)));
        g.add(cyl(r * 0.5, 0.06, dark, 0, 0, s * (d / 2 + 0.05)));
      });
      return g;
    }

    const root = new T.Group();
    scene.add(root);
    const model = new T.Group();
    root.add(model);

    // base
    function disk(r1, r2, h, mat, y) {
      const m = new T.Mesh(new T.CylinderGeometry(r1, r2, h, 64), mat);
      m.position.set(0, y, 0);
      model.add(m);
    }
    disk(1.33, 1.4, 0.38, black, -0.09);
    disk(0.86, 0.95, 0.26, steel, 0.23);
    disk(0.5, 0.6, 0.2, steel2, 0.46);

    // turret + shoulder
    const tur = rr(0.9, 1.5, 0.34, 0.8, 0.04, steel);
    tur.position.set(-0.12, 0.95, 0);
    tur.rotation.z = 0.32;
    model.add(tur);

    const A = [-0.34, 1.1];
    const B = [-1.34, 2.34];
    const C = [-0.1, 3.79];
    const H = [0.6, 3.83];

    model.add(cyl(0.34, 0.9, steel, A[0], A[1], 0));
    model.add(joint(A[0], A[1], 0.22, 0.95));

    // lower link + big joint B
    model.add(link(A, B, 0.45, 0.42));
    model.add(joint(B[0], B[1], 0.34, 0.62));
    for (let i = 0; i < 4; i++) {
      const t = new T.Mesh(new T.TorusGeometry(0.2, 0.04, 12, 24, PI), black);
      t.position.set(-0.86, 2.28, -0.14 + i * 0.09);
      t.rotation.set(0, 0, -0.5);
      model.add(t);
    }

    // upper assembly (pivots at B)
    const upper = new T.Group();
    model.add(upper);
    const ul = link(B, C, 0.4, 0.4);
    upper.add(ul);

    {
      const c = document.createElement('canvas');
      c.width = 2048;
      c.height = 600;
      const g = c.getContext('2d');
      if (g) {
        g.fillStyle = '#ffffff';
        g.font = '900 470px Impact,"Arial Black",sans-serif';
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.fillText('DUM-E', 1024, 330);
      }
      const tx = new T.CanvasTexture(c);
      applyColorSpace(tx, false);
      if (R.capabilities?.getMaxAnisotropy) {
        tx.anisotropy = R.capabilities.getMaxAnisotropy();
      }
      [1, -1].forEach((sd) => {
        const pl = new T.Mesh(
          new T.PlaneGeometry(1.2, 0.351),
          new T.MeshBasicMaterial({ map: tx, transparent: true, depthWrite: false, toneMapped: false })
        );
        pl.position.set(ul.userData.L * 0.12, 0, sd * 0.262);
        if (sd < 0) pl.rotation.y = PI;
        ul.add(pl);
      });
    }

    upper.add(joint(C[0], C[1], 0.18, 0.62));
    const neck = rr(0.5, 0.26, 0.1, 0.34, 0.03, steel2);
    neck.position.set(0.15, 3.82, 0);
    upper.add(neck);

    // head
    const head = new T.Group();
    head.position.set(H[0], H[1], 0);
    head.rotation.order = 'YXZ';
    upper.add(head);
    head.add(rr(1.05, 0.8, 0.34, 0.8, 0.05, steel));
    const zf = 0.46;
    const vis = rr(0.7, 0.34, 0.14, 0.1, 0.01, dark);
    vis.position.set(-0.08, 0.11, zf);
    head.add(vis);
    const gb = rr(0.5, 0.11, 0.05, 0.06, 0.01, dark);
    gb.position.set(-0.08, -0.14, zf);
    head.add(gb);

    for (let i = 0; i < 13; i++) {
      const s = new T.Mesh(new T.BoxGeometry(0.012, 0.07, 0.02), steel2);
      s.position.set(-0.08 - 0.2 + i * 0.033, -0.14, zf + 0.05);
      head.add(s);
    }

    const pod = new T.Mesh(new T.SphereGeometry(1, 24, 16), dark);
    pod.scale.set(0.22, 0.13, 0.22);
    pod.position.set(0.24, -0.4, -0.05);
    head.add(pod);

    const lids = [];
    [-0.25, 0.09].forEach((x) => {
      const e = new T.Group();
      e.position.set(x, 0.11, zf + 0.05);
      head.add(e);
      e.add(new T.Mesh(new T.TorusGeometry(0.16, 0.028, 12, 32), steel2));
      const ln = new T.Mesh(new T.SphereGeometry(0.14, 24, 16), glass);
      ln.scale.z = 0.6;
      e.add(ln);
      const gl = new T.Mesh(new T.SphereGeometry(0.03, 10, 8), new T.MeshBasicMaterial({ color: 0x6fe0ff }));
      gl.position.set(0.04, 0.04, 0.075);
      e.add(gl);
      const lg = new T.Group();
      lg.position.set(0, 0.175, 0.07);
      const ls = new T.Mesh(new T.SphereGeometry(0.18, 24, 16), steel);
      ls.scale.z = 0.55;
      ls.position.y = -0.175;
      lg.add(ls);
      e.add(lg);
      lids.push(lg);
    });

    // dunce cap (plain, nothing on it except the word)
    const hat = new T.Group();
    hat.position.set(-0.3, 0.36, 0);
    hat.rotation.z = 0.34;
    head.add(hat);
    {
      const c = document.createElement('canvas');
      c.width = 2048;
      c.height = 2048;
      const g = c.getContext('2d');
      if (g) {
        g.fillStyle = '#f3f1ea';
        g.fillRect(0, 0, 2048, 2048);
        g.save();
        g.translate(1024, 1300);
        g.rotate(PI / 2);
        g.fillStyle = '#0b0b0c';
        g.font = '900 280px Impact,"Arial Black",sans-serif';
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.fillText('DUNCE', 0, 0);
        g.restore();
      }
      const tx = new T.CanvasTexture(c);
      applyColorSpace(tx, false);
      if (R.capabilities?.getMaxAnisotropy) {
        tx.anisotropy = R.capabilities.getMaxAnisotropy();
      }
      const cone = new T.Mesh(
        new T.ConeGeometry(0.4, 1.2, 64, 1, true),
        new T.MeshStandardMaterial({ map: tx, roughness: 0.9, metalness: 0, side: T.DoubleSide })
      );
      cone.position.y = 0.6;
      cone.rotation.y = PI;
      hat.add(cone);
      const cap = new T.Mesh(new T.CircleGeometry(0.4, 48), new T.MeshStandardMaterial({ color: 0xe9e6dd, roughness: 0.9 }));
      cap.rotation.x = PI / 2;
      hat.add(cap);
    }

    const cf = [];
    const conf = new T.Group();
    root.add(conf);

    upper.children.forEach((c) => {
      c.position.x -= B[0];
      c.position.y -= B[1];
    });
    upper.position.set(B[0], B[1], 0);

    // contact shadow
    {
      const c = document.createElement('canvas');
      c.width = 128;
      c.height = 128;
      const g = c.getContext('2d');
      if (g) {
        const rg = g.createRadialGradient(64, 64, 4, 64, 64, 64);
        rg.addColorStop(0, 'rgba(0,0,0,.55)');
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = rg;
        g.fillRect(0, 0, 128, 128);
      }
      const sh = new T.Mesh(
        new T.PlaneGeometry(4.2, 4.2),
        new T.MeshBasicMaterial({ map: new T.CanvasTexture(c), transparent: true, depthWrite: false })
      );
      sh.rotation.x = -PI / 2;
      sh.position.y = -2.58;
      root.add(sh);
    }

    model.position.y = -2.3;

    const cam = new T.PerspectiveCamera(30, 1, 0.1, 60);
    cam.position.set(0, 0.6, 13.2);
    cam.lookAt(0, 0, 0);

    function fit() {
      if (!stage) return;
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      if (!w || !h) return;
      R.setSize(w, h, false);
      cam.aspect = w / h;
      cam.position.z = Math.max(13.2, 4.6 / (cam.aspect * 0.536));
      cam.lookAt(0, 0, 0);
      cam.updateProjectionMatrix();
    }

    window.addEventListener('resize', fit);
    let resizeObserver = null;
    if (typeof window !== 'undefined' && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        fit();
      });
      resizeObserver.observe(stage);
    }
    fit();

    // interaction
    let hYaw = 0;
    let hPitch = 0;
    let hVel = 0;
    let headDrag = false;
    let ry = 0.35;
    let rx = 0;
    let vy = 0;
    let vx = 0;
    let drag = false;
    let lx = 0;
    let ly = 0;
    let px = 0;
    let py = 0;
    let idle = 0;
    let sx0 = 0;
    let sy0 = 0;

    const ray = new T.Raycaster();
    const nd = new T.Vector2();

    function hitHead(e) {
      if (!stage) return false;
      const r = stage.getBoundingClientRect();
      nd.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(nd, cam);
      return ray.intersectObject(head, true).length > 0;
    }

    const onPointerDown = (e) => {
      drag = true;
      headDrag = hitHead(e);
      sx0 = e.clientX;
      sy0 = e.clientY;
      lx = e.clientX;
      ly = e.clientY;
      try {
        stage.setPointerCapture(e.pointerId);
      } catch (_) { }
    };

    const onPointerUp = (e) => {
      drag = false;
      if (Math.hypot(e.clientX - sx0, e.clientY - sy0) < 6) {
        onToggle?.();
      }
    };

    const onPointerCancel = () => {
      drag = false;
    };

    const onPointerMove = (e) => {
      px = (e.clientX / window.innerWidth - 0.5) * 2;
      py = (e.clientY / window.innerHeight - 0.5) * 2;
      if (drag) {
        if (headDrag) {
          hVel = (e.clientX - lx) * 0.014;
          hYaw += hVel;
          hPitch = Math.max(-0.6, Math.min(0.6, hPitch + (e.clientY - ly) * 0.006));
        } else {
          vy = (e.clientX - lx) * 0.009;
          vx = (e.clientY - ly) * 0.004;
          ry += vy;
          rx = Math.max(-0.5, Math.min(0.5, rx + vx));
        }
        lx = e.clientX;
        ly = e.clientY;
        idle = 0;
      }
    };

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointerup', onPointerUp);
    stage.addEventListener('pointercancel', onPointerCancel);
    window.addEventListener('pointermove', onPointerMove);

    const calm = window.matchMedia?.('(prefers-reduced-motion:reduce)').matches ? 0 : 1;

    let hy = 0;
    let hx = 0;
    let nextBlink = 2;
    let blinkT = -1;
    let last = 0;
    let animId = null;

    function frame(ms) {
      const t = ms / 1000;
      const dt = Math.min(0.05, t - last);
      last = t;

      if (!drag) {
        headDrag = false;
        ry += vy;
        vy *= 0.94;
        rx *= 0.96;
        hYaw += hVel;
        hVel *= 0.93;
        idle += dt;
      }

      hy += ((px * 0.7 + Math.sin(t * 0.9) * 0.18 * calm) - hy) * 0.08;
      hx += ((py * 0.35 + Math.cos(t * 0.6) * 0.07 * calm) - hx) * 0.08;
      const hf = Math.max(0, Math.cos(hYaw));
      head.rotation.set(hPitch + hx * hf, hYaw + hy * hf, Math.sin(t * 1.2) * 0.03 * calm);
      upper.rotation.z = Math.sin(t * 0.8) * 0.025 * calm;

      // blink
      if (blinkT < 0 && t > nextBlink) {
        blinkT = 0;
      }
      let s = 0;
      if (blinkT >= 0) {
        blinkT += dt;
        const p = blinkT / 0.22;
        if (p >= 1) {
          blinkT = -1;
          nextBlink = t + (Math.random() < 0.25 ? 0.25 : 2.5 + Math.random() * 3);
        } else {
          s = Math.sin(p * PI);
        }
      }
      lids.forEach((l) => (l.scale.y = Math.max(0.001, s)));
      cf.forEach((m) => {
        const u = m.userData;
        m.position.y -= u.v * dt * calm;
        if (m.position.y < -0.3) m.position.y = 5;
        m.rotation.x += u.s.x * dt;
        m.rotation.y += u.s.y * dt;
        m.rotation.z += u.s.z * dt;
      });

      // main view
      root.rotation.set(rx, ry + Math.sin(t * 0.4) * 0.06 * calm, 0);
      R.render(scene, cam);
      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);

    // Cleanup on unmount
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', fit);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointerup', onPointerUp);
      stage.removeEventListener('pointercancel', onPointerCancel);
      if (R.domElement && stage.contains(R.domElement)) {
        stage.removeChild(R.domElement);
      }
      R.dispose();
      delete window.DUME_ON_CLICK;
    };
  }, [onToggle]);

  return (
    <div
      className={`dume-arm-wrapper ${isOpen ? 'dume-chat-open' : ''} ${position === 'bottom-left' ? 'dume-pos-left' : 'dume-pos-right'
        }`}
    >
      {/* Speech bubble / Tooltip prompt */}
      {!isOpen && (
        <div
          className="dume-bubble"
          onClick={onToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle?.();
            }
          }}
          aria-label="Ask DUM-E AI Assistant"
        >
          <span className="dume-bubble-dot">
            <span className="dume-bubble-ping" />
          </span>
          <span className="dume-bubble-text">Ask DUM-E</span>
        </div>
      )}

      {/* 3D Canvas Stage */}
      <div
        id="dume-arm"
        ref={containerRef}
        role="button"
        aria-label={isOpen ? 'Close chat' : 'Open chat with DUM-E'}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle?.();
          }
        }}
        title="DUM-E Interactive 3D Robot Assistant — Click to chat!"
      />
    </div>
  );
}

export default DumeArmWidget;
