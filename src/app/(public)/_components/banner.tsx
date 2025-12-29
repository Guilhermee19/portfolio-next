"use client";

export default function Banner() {
  return (
    <div className="relative w-full min-h-dvh flex flex-col items-center justify-center">
      <p className="w-max text-2xl lg:text-3xl dark:text-white text-label-dark font-bold">
        Olá, eu sou
      </p>

      <p className="text-6xl lg:text-8xl font-bold m-0 text-main animate">
        Guilherme{" "}
        <span className="dark:text-white text-label-dark">Santana</span>
      </p>

      <p className="text-2xl lg:text-3xl dark:text-white text-label-dark font-bold">
        Desenvolvedor <span className="text-main font-bold"> Front-End </span>
      </p>
    </div>
  );
}
