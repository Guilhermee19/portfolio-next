"use client";

import { useRef } from "react";
import type { Group } from "three";
// import Parede from "./objs/parede";
import Chao from "./objs/chao";
import Parede from "./objs/parede";
import Mesa from "./objs/mesa";

export default function Noclaf_511({
  position,
}: {
  position: { x: number; y: number; z: number };
}) {
  const groupRef = useRef<Group>(null);

  const mesas = [
    // Lado Esq

    {
      x: 10,
      y: 0,
      z: -204,
    },
    {
      x: 140,
      y: 0,
      z: -204,
    },
    {
      x: 270,
      y: 0,
      z: -204,
    },
    {
      x: 400,
      y: 0,
      z: -204,
    },
    {
      x: 530,
      y: 0,
      z: -204,
    },
    // Lado Dir
    {
      x: 10,
      y: 0,
      z: -5,
    },
    {
      x: 140,
      y: 0,
      z: -5,
    },
    {
      x: 270,
      y: 0,
      z: -5,
    },
    {
      x: 400,
      y: 0,
      z: -5,
    },
    {
      x: 530,
      y: 0,
      z: -5,
    },
    {
      x: 660,
      y: 0,
      z: -5,
    },
  ];

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <Parede
        measure={{ x: 775, y: 250 }}
        position={{ x: 0, y: -7, z: -279 }}
      />

      <Parede measure={{ x: 775, y: 250 }} position={{ x: 0, y: -7, z: 4 }} />

      {/* Sala */}
      <Chao measure={{ x: 775, y: 274 }} position={{ x: 0, y: -1, z: 0 }} />

      {/* Porta */}
      <Chao measure={{ x: 99, y: 185 }} position={{ x: 871, y: -1, z: -273 }} />

      {/* Coxinha */}
      <Chao
        measure={{ x: 188, y: 170 }}
        position={{ x: 782, y: -1, z: -103 }}
      />

      {/* Banheiro */}
      <Chao measure={{ x: 188, y: 97 }} position={{ x: 782, y: -1, z: 0 }} />

      {mesas.map((el, idx) => (
        <Mesa
          key={idx}
          position={{ x: el.x, y: el.y, z: el.z }}
          largura={110}
          altura={74.5}
          profundidade={60}
        />
      ))}

      <Parede measure={{ x: 775, y: 250 }} position={{ x: 0, y: -7, z: 4 }} />
    </group>
  );
}
