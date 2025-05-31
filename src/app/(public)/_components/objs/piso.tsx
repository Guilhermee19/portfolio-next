"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import type { Group } from "three";

export default function Piso({
  measure,
  position,
}: {
  measure: { x: number; y: number };
  position: { x: number; y: number; z: number };
}) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    if (groupRef.current && groupRef.current.position.y !== y) {
      groupRef.current.position.y = y;
    }
  });

  const piso = 59.7; // tamanho do piso em cm
  const px_piso = piso / 100; // convertido para metros

  const qtd_x = measure.x / piso; // quantidade no eixo X
  const qtd_z = measure.y / piso; // quantidade no eixo Z

  // ✅ Carrega a imagem da textura
  const texture = useTexture("/textures/piso.jpg"); // coloque a imagem em `public/textures/piso.jpg`

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      {Array.from({ length: qtd_x }).map((_, i) =>
        Array.from({ length: qtd_z }).map((_, j) => {
          const posX = (i - qtd_x / 2) * px_piso + px_piso / 2;
          const posZ = (j - qtd_z / 2) * px_piso + px_piso / 2;

          return (
            <Box
              key={`piso-${i}-${j}`}
              args={[px_piso, 0.02, px_piso]}
              position={[posX, -0.05, posZ]}
            >
              {/* <meshStandardMaterial attach="material" color="#e0e0e0" /> */}
              <meshStandardMaterial map={texture} />
            </Box>
          );
        })
      )}
    </group>
  );
}
