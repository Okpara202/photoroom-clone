import Image from "next/image";
import { Award, AppleIcon, AndroidIcon } from "./hero/award";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient-bg">
      {/* Phone — clipped at LEFT edge of viewport */}
      <div className="absolute left-0 top-16 lg:top-20 w-[260px] sm:w-[320px] lg:w-[420px] pointer-events-none select-none z-0">
        <Image
          src="/images/hero-phone.webp"
          alt="Photoroom app showing product photos"
          width={480}
          height={900}
          priority
          className="w-full h-auto -translate-x-[30%] sm:-translate-x-[20%] lg:-translate-x-[12%]"
        />
      </div>

      {/* Earrings + selection box — clipped at RIGHT edge */}
      <div className="absolute right-0 top-12 lg:top-16 w-[240px] sm:w-[280px] lg:w-[360px] pointer-events-none select-none z-0 hidden md:block">
        <Image
          src="/images/object-box.webp"
          alt="Selected product with editing handles"
          width={480}
          height={480}
          priority
          className="w-full h-auto translate-x-[20%] lg:translate-x-[8%]"
        />
      </div>

      {/* Laptop — bottom-right */}
      <div className="absolute right-0 bottom-0 w-[260px] lg:w-[380px] pointer-events-none select-none z-0 hidden lg:block">
        <Image
          src="/images/laptop.webp"
          alt="Photoroom on laptop"
          width={520}
          height={340}
          className="w-full h-auto translate-x-[20%] translate-y-[15%]"
        />
      </div>

      <div className="relative max-w-page mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="relative z-10 text-center max-w-[680px] mx-auto pt-32 lg:pt-44 pb-20">
          <h1
            className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-neutral-900"
            style={{ lineHeight: "104%", letterSpacing: "-0.025em" }}
          >
            Product visuals that sell at first sight
          </h1>
          <p className="mt-6 text-[17px] leading-[1.5] text-neutral-700 max-w-[520px] mx-auto">
            Photoroom is the leading AI visual solution for e-commerce. Speed up
            your workflow and generate listing-ready visuals that stay true to
            your product, at scale.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#410cd9] hover:bg-[#280197] text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px] shadow-sm transition-colors"
            >
              Start creating for free
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-4 lg:mt-8 flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-14 gap-y-6">
          <Award icon={<AppleIcon />} label="Editors' Choice" />
          <Award value="300+ million" sub="downloads" />
          <Award icon={<AndroidIcon />} label="Editors' Choice" />
        </div>
      </div>
    </section>
  );
}
