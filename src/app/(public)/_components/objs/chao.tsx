"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";
import { toMeters, Vec3 } from "@/utils/toMeters";

export default function Chao({
  measure,
  position,
}: {
  measure: { x: number; y: number };
  position: Vec3;
}) {
  const { x: width, y: depth } = toMeters(measure);
  const { x, y, z } = toMeters(position as Vec3) as Vec3;

  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const yOffset = Math.sin(state.clock.elapsedTime * 0.3) * 0.01;
    if (groupRef.current) {
      groupRef.current.position.y = y + yOffset;
    }
  });

  const thickness = 0.05;
  // Tamanho de cada peça de piso (ex: 59.7 cm convertidos para metros)
  const pisoSize = 5.97 / 100;

  // Carrega a textura
  const texture = useTexture("/textures/piso.jpg");

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(width / pisoSize, depth / pisoSize);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(width, depth);

  // ✅ Posição corrigida: alinha pela ponta superior
  const correctedX = x + width / 2;
  const correctedY = y - thickness / 2;
  const correctedZ = z - depth / 2;

  return (
    <group ref={groupRef}>
      <Box
        args={[width, thickness, depth]}
        position={[correctedX, correctedY, correctedZ]}
        receiveShadow
      >
        <meshStandardMaterial map={texture} />
      </Box>
    </group>
  );
}
