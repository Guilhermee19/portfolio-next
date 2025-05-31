"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import Noclaf_511 from "./(public)/_components/noclaf-511";

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Canvas shadows camera={{ fov: 40, position: [0, 4, 0] }} dpr={1}>
        <Suspense fallback={null}>
          {/* Luzes */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Sala 511 */}
          <Noclaf_511 position={{ x: 0, y: -1, z: 0 }} />

          {/* Controles da câmera (sem movimentar abaixo do piso) */}
          <LimitCamera />
          <Stats className="absolute z-20 top-0 left-0" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Trava a câmera para não atravessar o chão
function LimitCamera() {
  // const { camera } = useThree();

  // useFrame(() => {
  //   // Impede que a câmera vá abaixo do chão
  //   if (camera.position.y < 1) {
  //     camera.position.y = 1;
  //   }
  // });

  return <OrbitControls minDistance={5} maxDistance={50} />;
}
