// office-noclaf.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import type { Group } from "three";

export default function OfficeNoclaf3D() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    if (groupRef.current && groupRef.current.position.y !== y) {
      groupRef.current.position.y = y;
    }
  });

  const piso = 59.7;
  const px_piso = piso / 100;

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Box args={[px_piso, 0.02, px_piso]} position={[0, -0.05, 0]}>
        <meshStandardMaterial attach="material" color="#e0e0e0" />
      </Box>
    </group>
  );
}
