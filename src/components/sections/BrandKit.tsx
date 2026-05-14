import Image from "next/image";

export function BrandKit() {
  return (
    <section className="bg-white">
      <div className="max-w-page mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bg-[#EEEAFE] rounded-[24px] p-8 lg:p-12 flex items-center justify-center">
            <Image
              src="/images/brandkit.webp"
              alt="Urban Roots brand kit example"
              width={1048}
              height={786}
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-xl">
            <h3
              className="text-[24px] sm:text-[30px] lg:text-[36px] text-neutral-900"
              style={{
                fontWeight: 700,
                lineHeight: "115%",
                letterSpacing: "-0.012em",
              }}
            >
              On-brand visuals at scale made simple
            </h3>
            <p className="mt-5 text-[16px] leading-[155%] text-neutral-600">
              Photoroom helps you create visuals that fit your brand, at scale
              thanks to our brand kit. Share designs, colors, logos, and
              templates with your team to create consistent, on-brand visuals
              every time.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px]"
            >
              Start creating for free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
