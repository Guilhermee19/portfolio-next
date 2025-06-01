"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Texto animado na entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(".step-1", { opacity: 0, y: 40, duration: 0.7 })
        .from(".step-2", { opacity: 0, y: 40, duration: 0.7 })
        .from(".step-3", { opacity: 0, y: 40, duration: 0.7 });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  // ScrollTrigger com pin + animações
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".step-4", {
        opacity: 0,
        y: -100,
        duration: 1.2,
        ease: "none",
      }).from(".step-5", {
        opacity: 1,
        x: "-100%",
        duration: 0.8,
      });

      // 🎯 Efeito parallax real do background
      gsap.to(bannerRef.current, {
        backgroundPosition: "50% 30%",
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative bg-room-tech bg-cover bg-center w-full min-h-dvh flex items-center justify-center"
      style={{
        backgroundAttachment: "scroll", // ← importante garantir que não esteja fixado
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="relative z-20 text-center">
        <h5 className="step-1 w-full text-left text-2xl text-white font-bold text-shadow-xl">
          Olá, eu sou
        </h5>
        <h1 className="step-2 text-7xl font-bold m-0 text-main text-shadow-xl">
          Guilherme <span className="text-label">Santana</span>
        </h1>
        <h5 className="step-3 w-full text-right text-2xl text-white font-bold text-shadow-md">
          sou <span className="text-main">Desenvolvedor Front-End</span>
        </h5>
      </div>

      <div className="step-4 absolute top-0 left-0 w-dvw h-dvh bg-secondary opacity-100"></div>

      <Image
        src={"/images/iamgui.png"}
        width={993}
        height={1095}
        alt="I am Gui"
        className="step-5 absolute bottom-0 left-0 z-10 w-[50vw] h-dvh object-right object-cover"
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
