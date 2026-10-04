"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function InteractiveCore() {
  const meshRef = React.useRef<THREE.Mesh>(null!);
  const wireframeRef = React.useRef<THREE.Mesh>(null!);
  const ringRef = React.useRef<THREE.Mesh>(null!);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useFrame((state, delta) => {
    // Smooth mouse following lerp
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetY + state.clock.elapsedTime * 0.15,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetX + state.clock.elapsedTime * 0.2,
        0.05
      );
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -state.clock.elapsedTime * 0.1;
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.25;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
      <group position={[0, 0, 0]} scale={0.75}>
        {/* Core Solid Polyhedron */}
        <mesh ref={meshRef} scale={1.3}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color={isDark ? "#4f46e5" : "#6366f1"}
            emissive={isDark ? "#1e1b4b" : "#312e81"}
            roughness={0.2}
            metalness={0.8}
            distort={0.25}
            speed={2}
          />
        </mesh>

        {/* Outer Wireframe Lattice */}
        <mesh ref={wireframeRef} scale={1.7}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            wireframe
            color={isDark ? "#06b6d4" : "#0284c7"}
            transparent
            opacity={isDark ? 0.35 : 0.45}
          />
        </mesh>

        {/* Orbiting Tech Ring */}
        <mesh ref={ringRef} scale={2.1}>
          <torusGeometry args={[1, 0.025, 16, 64]} />
          <meshStandardMaterial
            color={isDark ? "#38bdf8" : "#0284c7"}
            emissive={isDark ? "#0ea5e9" : "#0284c7"}
            emissiveIntensity={0.6}
            roughness={0.1}
          />
        </mesh>

        {/* Small Orbiting Data Node 1 */}
        <mesh position={[1.9, 0.6, 0]} scale={0.14}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Small Orbiting Data Node 2 */}
        <mesh position={[-1.7, -0.8, 0.4]} scale={0.12}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingParticles() {
  const count = 35;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38bdf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Ambient background glow behind 3D canvas */}
      <div className="absolute inset-0 max-w-sm mx-auto rounded-full bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/20 blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={isDark ? 0.7 : 1.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={isDark ? 1.5 : 2}
          color="#ffffff"
        />
        <pointLight
          position={[-10, -5, -5]}
          intensity={isDark ? 2 : 1}
          color={isDark ? "#6366f1" : "#4f46e5"}
        />
        <pointLight
          position={[5, -5, 5]}
          intensity={1.2}
          color="#06b6d4"
        />

        <InteractiveCore />
        <FloatingParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
