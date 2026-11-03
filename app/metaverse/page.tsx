"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { 
  Boxes, 
  Layers, 
  Cpu, 
  Share2 
} from "lucide-react";
import AllServicesSidebar from "@/components/AllServicesSidebar";

export default function MetaversePage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a252f, 0.02);

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 14, 28);

    // Renderer (Zero shadow maps)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    currentMount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 7.5, 0);
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.minDistance = 12;
    controls.maxDistance = 50;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // Architectural Tower Group
    const towerGroup = new THREE.Group();
    towerGroup.position.y = -3.5;
    scene.add(towerGroup);

    const tiersData = [
      { rBot: 2.6, rTop: 2.1, h: 3.5, y: 1.75, sides: 6 },
      { rBot: 2.1, rTop: 1.6, h: 3.5, y: 5.25, sides: 6 },
      { rBot: 1.6, rTop: 1.2, h: 3.5, y: 8.75, sides: 6 },
      { rBot: 1.2, rTop: 0.8, h: 3.0, y: 12.0, sides: 6 },
      { rBot: 0.8, rTop: 0.4, h: 2.5, y: 14.75, sides: 6 },
      { rBot: 0.4, rTop: 0.15, h: 2.0, y: 17.0, sides: 6 },
      { rBot: 0.08, rTop: 0.01, h: 3.5, y: 19.75, sides: 4 },
    ];

    const towerMeshes: THREE.Mesh[] = [];

    tiersData.forEach((t) => {
      const geom = new THREE.CylinderGeometry(t.rTop, t.rBot, t.h, t.sides, 6);
      const faceMat = new THREE.MeshBasicMaterial({
        color: 0x2c3e50,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });

      const wireframeMat = new THREE.LineBasicMaterial({
        color: 0x7f8c8d,
        transparent: true,
        opacity: 0.85,
      });

      const mesh = new THREE.Mesh(geom, faceMat);
      const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geom), wireframeMat);
      mesh.add(wireframe);
      mesh.position.y = t.y;
      mesh.userData = { targetY: t.y, height: t.h };

      towerGroup.add(mesh);
      towerMeshes.push(mesh);
    });

    // Precision Grid Helper
    const gridHelper = new THREE.GridHelper(26, 26, 0x2c3e50, 0x34495e);
    gridHelper.position.y = -3.5;
    scene.add(gridHelper);

    // Laser Ring
    const laserGroup = new THREE.Group();
    laserGroup.position.y = -3.5;
    const ringGeom = new THREE.RingGeometry(0.1, 4.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x5dade2,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const laserRing = new THREE.Mesh(ringGeom, ringMat);
    laserRing.rotation.x = Math.PI / 2;
    laserGroup.add(laserRing);
    scene.add(laserGroup);

    // Architectural Particle Cloud
    const particleCount = 160;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 24;
      particlePositions[i + 1] = Math.random() * 24 - 3.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 24;
    }
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xbdc3c7,
      size: 0.1,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    let progress = 0;
    const loopDuration = 7.0;
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      progress = (progress + delta / loopDuration) % 1;

      controls.update();

      // Particle vertical flow
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += delta * 0.35;
        if (positions[i] > 22) positions[i] = -3.5;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Laser scanner position
      const maxTowerHeight = 22.5;
      const currentLaserY = progress * maxTowerHeight;
      laserGroup.position.y = -3.5 + currentLaserY;

      // Tower procedural reveal
      towerMeshes.forEach((mesh) => {
        const meshBottom = mesh.userData.targetY - mesh.userData.height / 2;
        if (currentLaserY >= meshBottom) {
          mesh.visible = true;
          const growth = Math.min(1, Math.max(0, (currentLaserY - meshBottom) / mesh.userData.height));
          mesh.scale.set(growth, growth, growth);
        } else {
          mesh.visible = false;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#e0e4e8] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#e0e4e8] text-[11px] font-mono uppercase tracking-widest text-[#2c3e50]">
            <span>Spatial Computing &bull; WebGL / Three.js Virtual Environment</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            Archiverse 3D
          </h1>
          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-3xl">
            The fundamental digital stage upholding the creation and inhabitation of virtual architectural environments.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main 3D Canvas & Content */}
          <div className="flex-1 space-y-10 w-full">
            {/* Interactive 3D WebGL Canvas */}
            <div className="bg-white border border-[#e0e4e8] p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e0e4e8] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2c3e50] animate-ping"></span>
                  <span className="text-[#1a1a1a] font-semibold uppercase tracking-wider">
                    Virtual World Stage &bull; Procedural Tectonic Scanner
                  </span>
                </div>
                <div className="text-[#7f8c8d]">
                  WebGL 2.0 &bull; Interactive Orbit Controls
                </div>
              </div>

              {/* 3D Canvas Target */}
              <div
                ref={mountRef}
                className="w-full h-[520px] bg-[#1a252f] border border-[#e0e4e8] cursor-grab active:cursor-grabbing relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 p-3 bg-[#1a252f]/90 border border-slate-700 text-[11px] font-mono text-slate-300 space-y-1 pointer-events-none">
                  <div>Geometry: <span className="text-white">Hexagonal Procedural Spires</span></div>
                  <div>Laser Scan: <span className="text-[#5dade2]">Z-Axis Volumetric Growth</span></div>
                  <div>Navigation: <span className="text-white">Drag to Rotate &bull; Scroll to Zoom</span></div>
                </div>
              </div>

              {/* Controls bar */}
              <div className="p-3 bg-[#f8f9fa] border border-[#e0e4e8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-4">
                  <span className="text-[#7f8c8d]">Coordinate System: World Space</span>
                  <span className="text-[#e0e4e8]">|</span>
                  <span className="text-[#2c3e50] font-semibold">GPU Hardware Accelerated</span>
                </div>
                <div className="text-[#7f8c8d] text-[11px]">
                  Powered by Three.js &bull; Zero external plugin requirement
                </div>
              </div>
            </div>

            {/* Three Technological Pillars */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-[#e0e4e8]">
                <h2 className="text-xl font-semibold text-[#1a1a1a]">
                  Technological Pillars of Archiverse
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-[#e0e4e8] p-6 space-y-3 hover:border-[#2c3e50] transition-colors">
                  <div className="w-9 h-9 border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center text-[#2c3e50]">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    1. Virtual Stages
                  </h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">
                    Browser-native WebGL rendering pipelines enabling high-fidelity spatial representation without requiring external client software installations.
                  </p>
                </div>

                <div className="bg-white border border-[#e0e4e8] p-6 space-y-3 hover:border-[#2c3e50] transition-colors">
                  <div className="w-9 h-9 border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center text-[#2c3e50]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    2. AI Spatial Cognition
                  </h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">
                    Integration of computational logic for procedural generation of architectural envelopes, daylight shadow simulations, and structural stress dissipation.
                  </p>
                </div>

                <div className="bg-white border border-[#e0e4e8] p-6 space-y-3 hover:border-[#2c3e50] transition-colors">
                  <div className="w-9 h-9 border border-[#e0e4e8] bg-[#f8f9fa] flex items-center justify-center text-[#2c3e50]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    3. Interoperability
                  </h3>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">
                    Standardized 3D asset ingestion across glTF, GLB, USDZ, and OBJ formats, ensuring student designs can be seamlessly ported to virtual environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Services Sidebar */}
          <AllServicesSidebar />
        </div>
      </section>
    </div>
  );
}
