import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import Image from "next/image";

export function ChipSkill({ text, logo }: { text: string; logo: string }) {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#fff]/50 via-[#0270ff]/50 to-[#fff]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <Image src={logo} width={20} height={20} alt="text" />
      <AnimatedGradientText
        className="text-sm font-medium ml-2"
        colorFrom="#fff"
        colorTo="#fff"
      >
        {text}
      </AnimatedGradientText>
    </div>
  );
}
