"use client";

import { useRef } from "react";
import { Box, useTexture } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";
import { toMeters, Vec3 } from "@/utils/toMeters";

export default function Parede({
  measure,
  position,
}: {
  measure: { x: number; y: number };
  position: Vec3;
}) {
  // Converte as medidas de cm para metros
  const { x: width, y: rawHeight } = toMeters(measure);
  const height = rawHeight > 0 ? rawHeight : 3; // altura mínima 3m
  const { x, y, z } = toMeters(position as Vec3) as Vec3;

  const groupRef = useRef<Group>(null);

  const depth = 0.1; // espessura da parede
  const texture = useTexture("/textures/parece_cinza.jpg");

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(width, height);

  // ✅ Corrige a posição: base e lateral como referência
  const correctedX = x + width / 2;
  const correctedY = y + height / 2;
  const correctedZ = z;

  return (
    <group ref={groupRef}>
      <Box
        args={[width, height, depth]}
        position={[correctedX, correctedY, correctedZ]}
      >
        <meshStandardMaterial map={texture} />
      </Box>
    </group>
  );
}
