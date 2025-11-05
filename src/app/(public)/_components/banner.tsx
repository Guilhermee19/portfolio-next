"use client";

import SplitText from "@/components/SplitText";
import Magnet from "@/components/Magnet";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Banner() {
  return (
    <div className="relative w-full min-h-dvh flex flex-col items-center justify-center">
      <Magnet padding={200} disabled={false} magnetStrength={20}>
        <SplitText
          text="Olá, eu sou"
          className="w-full text-2xl dark:text-white text-label-dark font-bold "
          delay={70}
          duration={2}
          ease="elastic.out(1,0.7)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="w-full justify-center flex items-center gap-2">
          <SplitText
            text="Guilherme"
            className="text-6xl font-bold m-0 text-main  animate"
            delay={100}
            duration={2}
            ease="elastic.out(1,0.7)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Santana"
            className="text-6xl font-bold m-0 dark:text-white text-label-dark "
            delay={100}
            duration={2}
            ease="elastic.out(1,0.7)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className="w-full justify-center flex items-center gap-2">
          <SplitText
            text="Desenvolvedor"
            className="text-2xl dark:text-white text-label-dark font-bold "
            delay={70}
            duration={2}
            ease="elastic.out(1,0.7)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Front-End"
            className="text-2xl text-main font-bold "
            delay={70}
            duration={2}
            ease="elastic.out(1,0.7)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </Magnet>

      <div></div>
    </div>
  );
}
