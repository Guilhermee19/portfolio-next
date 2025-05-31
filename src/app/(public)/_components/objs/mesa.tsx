"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { toMeters, Vec3 } from "@/utils/toMeters";

type MesaProps = {
  position: Vec3;
  largura: number;
  altura: number;
  profundidade?: number;
};

export default function Mesa({
  position,
  largura,
  altura,
  profundidade = 60,
}: MesaProps) {
  const { x, y, z } = toMeters(position as Vec3) as Vec3;
  const width = toMeters(largura);
  const height = toMeters(altura);
  const depth = toMeters(profundidade);

  const groupRef = useRef<Group>(null);

  const espessuraTampo = 0.02;
  const raioPe = 0.03;

  useFrame((state) => {
    const offset = Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
    if (groupRef.current) {
      groupRef.current.position.y = y + offset;
    }
  });

  const correctedX = x + width / 2;
  const correctedY = y;
  const correctedZ = z - depth / 2;

  return (
    <group ref={groupRef} position={[correctedX, correctedY, correctedZ]}>
      {/* Tampo */}
      <mesh
        position={[0, height - espessuraTampo / 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, espessuraTampo, depth]} />
        <meshStandardMaterial color="#ffee00" />
      </mesh>

      {/* Pés */}
      {/* {[
        [-width / 2 + raioPe, height / 2, -depth / 2 + raioPe],
        [width / 2 - raioPe, height / 2, -depth / 2 + raioPe],
        [-width / 2 + raioPe, height / 2, depth / 2 - raioPe],
        [width / 2 - raioPe, height / 2, depth / 2 - raioPe],
      ].map(([px, py, pz], i) => (
        <mesh key={i} position={[px, py, pz]} castShadow receiveShadow>
          <cylinderGeometry args={[raioPe, raioPe, height - 0.01, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))} */}

      {/* Travessas laterais (duas tábuas verticais nas laterais) */}
      {[
        [-width / 2 + raioPe, height / 2, 0], // lado esquerdo
        [width / 2 - raioPe, height / 2, 0], // lado direito
      ].map(([px, py, pz], i) => (
        <mesh
          key={`travessa-${i}`}
          position={[px, py - espessuraTampo, pz]}
          castShadow
          receiveShadow
        >
          <boxGeometry
            args={[0.04, height - espessuraTampo, depth - 2 * raioPe]}
          />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}
