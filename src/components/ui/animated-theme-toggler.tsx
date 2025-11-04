"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(true); // Inicia como dark por padrão
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Inicializa o tema apenas uma vez
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark" || (!savedTheme && true); // Default para dark

    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    // Observer apenas para sincronizar com mudanças externas (sem modificar o DOM)
    const observer = new MutationObserver(() => {
      const currentIsDark = document.documentElement.classList.contains("dark");
      setIsDark(currentIsDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = !isDark;

    // Função para aplicar o tema
    const applyTheme = () => {
      flushSync(() => {
        setIsDark(newTheme);
        if (newTheme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      });
    };

    // Verifica se a API startViewTransition está disponível
    if (typeof document.startViewTransition === "function") {
      try {
        await document.startViewTransition(applyTheme).ready;

        const { top, left, width, height } =
          buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
          Math.max(left, window.innerWidth - left),
          Math.max(top, window.innerHeight - top)
        );

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      } catch (error) {
        console.warn("View Transition API error:", error);
        applyTheme();
      }
    } else {
      // Fallback para navegadores que não suportam a API
      applyTheme();
    }
  }, [isDark, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
