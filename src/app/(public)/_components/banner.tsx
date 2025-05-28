"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative bg-room-tech bg-cover bg-center w-full min-h-dvh flex items-center justify-center">
      <div className="relative z-20 text-center">
        <h5 className="w-full text-left text-2xl text-white font-bold text-shadow-xl">
          Olá, eu sou
        </h5>
        <h1 className="text-7xl font-bold m-0 text-main text-shadow-xl">
          Guilherme <span className="text-label">Santana</span>
        </h1>
        <h5 className="w-full text-right text-2xl text-white font-bold text-shadow-md">
          sou <span className="text-main">Desenvolvedor Front-End</span>
        </h5>
      </div>

      <Image
        src={"/images/iamgui.png"}
        width={993}
        height={1095}
        alt="I am Gui"
        className="absolute bottom-0 left-0 z-10 w-[50vw] h-dvh object-right object-cover"
      />

      <div className="absolute bottom-0 w-full h-[50dvh] bg-transparent -mb-px mx-auto mt-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-secondary"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
