"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere } from "@react-three/drei";
import type { Group } from "three";

export default function Office3D() {
  const groupRef = useRef<Group>(null);

  // Pequena animação para dar vida ao escritório
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Piso */}
      <Box args={[10, 0.1, 10]} position={[0, -0.05, 0]} receiveShadow>
        <meshStandardMaterial color="#e0e0e0" />
      </Box>

      {/* Parede de fundo */}
      <Box args={[10, 5, 0.1]} position={[0, 2.5, -5]} receiveShadow>
        <meshStandardMaterial color="#f5f5f5" />
      </Box>

      {/* Parede lateral */}
      <Box args={[0.1, 5, 10]} position={[-5, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>

      {/* Mesa */}
      <Box
        args={[2.5, 0.1, 1.5]}
        position={[0, 0.75, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* Pernas da mesa */}
      <Box args={[0.1, 0.75, 0.1]} position={[-1.1, 0.375, -0.6]} castShadow>
        <meshStandardMaterial color="#5D4037" />
      </Box>
      <Box args={[0.1, 0.75, 0.1]} position={[1.1, 0.375, -0.6]} castShadow>
        <meshStandardMaterial color="#5D4037" />
      </Box>
      <Box args={[0.1, 0.75, 0.1]} position={[-1.1, 0.375, 0.6]} castShadow>
        <meshStandardMaterial color="#5D4037" />
      </Box>
      <Box args={[0.1, 0.75, 0.1]} position={[1.1, 0.375, 0.6]} castShadow>
        <meshStandardMaterial color="#5D4037" />
      </Box>

      {/* Monitor */}
      <group position={[0, 0.8, -0.2]}>
        <Box args={[1.2, 0.7, 0.05]} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[1.1, 0.6, 0.02]} position={[0, 0.5, 0.04]} castShadow>
          <meshStandardMaterial
            color="#3498db"
            metalness={0.5}
            roughness={0.2}
          />
        </Box>
        <Box args={[0.1, 0.3, 0.1]} position={[0, 0.05, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.3, 0.02, 0.2]} position={[0, -0.1, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      </group>

      {/* Teclado */}
      <Box args={[0.8, 0.05, 0.3]} position={[0, 0.8, 0.3]} castShadow>
        <meshStandardMaterial color="#2c3e50" />
      </Box>

      {/* Mouse */}
      <Box args={[0.1, 0.03, 0.2]} position={[0.6, 0.8, 0.3]} castShadow>
        <meshStandardMaterial color="#2c3e50" />
      </Box>

      {/* Cadeira */}
      <group position={[0, 0, 1.5]}>
        {/* Assento */}
        <Box args={[0.8, 0.1, 0.8]} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial color="#34495e" />
        </Box>

        {/* Encosto */}
        <Box args={[0.8, 0.8, 0.1]} position={[0, 1, -0.35]} castShadow>
          <meshStandardMaterial color="#34495e" />
        </Box>

        {/* Base da cadeira */}
        <Cylinder args={[0.4, 0.4, 0.05, 16]} position={[0, 0.2, 0]} castShadow>
          <meshStandardMaterial color="#7f8c8d" />
        </Cylinder>

        {/* Suporte central */}
        <Cylinder
          args={[0.05, 0.05, 0.3, 16]}
          position={[0, 0.35, 0]}
          castShadow
        >
          <meshStandardMaterial color="#7f8c8d" metalness={0.5} />
        </Cylinder>
      </group>

      {/* Luminária */}
      <group position={[-1, 0.8, -0.5]}>
        <Cylinder args={[0.1, 0.15, 0.05, 16]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#95a5a6" />
        </Cylinder>
        <Cylinder
          args={[0.02, 0.02, 0.5, 16]}
          position={[0, 0.25, 0]}
          castShadow
        >
          <meshStandardMaterial color="#95a5a6" />
        </Cylinder>
        <Sphere args={[0.15, 16, 16]} position={[0, 0.5, 0]} castShadow>
          <meshStandardMaterial
            color="#f1c40f"
            emissive="#f1c40f"
            emissiveIntensity={0.5}
          />
        </Sphere>
        <pointLight
          position={[0, 0.5, 0]}
          intensity={1}
          color="#f1c40f"
          distance={3}
        />
      </group>

      {/* Livros */}
      <group position={[1, 0.8, -0.5]}>
        <Box args={[0.2, 0.3, 0.15]} position={[0, 0.15, 0]} castShadow>
          <meshStandardMaterial color="#e74c3c" />
        </Box>
        <Box args={[0.2, 0.25, 0.15]} position={[0, 0.425, 0]} castShadow>
          <meshStandardMaterial color="#3498db" />
        </Box>
        <Box args={[0.2, 0.2, 0.15]} position={[0, 0.65, 0]} castShadow>
          <meshStandardMaterial color="#2ecc71" />
        </Box>
      </group>

      {/* Planta */}
      <group position={[-1.5, 0.8, 0.5]}>
        <Cylinder args={[0.15, 0.1, 0.2, 16]} position={[0, 0.1, 0]} castShadow>
          <meshStandardMaterial color="#e67e22" />
        </Cylinder>
        <group position={[0, 0.3, 0]}>
          <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]} castShadow>
            <meshStandardMaterial color="#27ae60" />
          </Sphere>
          <Sphere args={[0.15, 16, 16]} position={[0.1, 0.1, 0.1]} castShadow>
            <meshStandardMaterial color="#27ae60" />
          </Sphere>
          <Sphere args={[0.15, 16, 16]} position={[-0.1, 0.1, -0.1]} castShadow>
            <meshStandardMaterial color="#27ae60" />
          </Sphere>
        </group>
      </group>

      {/* Luzes */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 5, 5]} intensity={0.4} />
    </group>
  );
}
