"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Seguir o mouse
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    // Ampliar ao passar sobre elementos com cursor-pointer
    const handlePointerEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        borderColor: "white",
        duration: 0.3,
      });
    };

    const handlePointerLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        borderColor: "rgb(255 255 255 / 0.1)",
        duration: 0.3,
      });
    };

    // Monitorar todos os elementos com cursor-pointer
    const pointerTargets = document.querySelectorAll<HTMLElement>(
      ".cursor-pointer, [data-cursor='pointer']"
    );

    pointerTargets.forEach((el) => {
      el.addEventListener("mouseenter", handlePointerEnter);
      el.addEventListener("mouseleave", handlePointerLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      pointerTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handlePointerEnter);
        el.removeEventListener("mouseleave", handlePointerLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-5 h-5 dark:bg-white/10 bg-black/10 border dark:border-white/10 border-black/10 rounded-full backdrop-blur-md"
    />
  );
}
