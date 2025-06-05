import { IconCloud } from "@/components/magicui/icon-cloud";

export default function AboutMe() {
  const skiils = [
    "/skills/Angular.png",
    "/skills/CSS.png",
    "/skills/Django.png",
    "/skills/Figma.png",
    "/skills/GSAP.png",
    "/skills/HTML.png",
    "/skills/Next Js.png",
    "/skills/Photoshop.png",
    "/skills/Python.png",
    "/skills/React.png",
    "/skills/Tailwind.png",
    "/skills/ThreeJs.png",
  ];

  return (
    <div className="bg-secondary w-full min-h-dvh flex items-center justify-center">
      <div className="container relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background">
        <IconCloud images={skiils} />
      </div>
    </div>
  );
}
