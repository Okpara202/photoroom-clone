import Image from "next/image";

export function CutCosts() {
  return (
    <section>
      <div className="max-w-page mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl order-2 lg:order-1">
            <h3
              className="text-[24px] sm:text-[30px] lg:text-[36px] text-neutral-900"
              style={{
                fontWeight: 700,
                lineHeight: "115%",
                letterSpacing: "-0.012em",
              }}
            >
              Cut your photo costs by 90%, not your quality
            </h3>
            <p className="mt-5 text-[16px] leading-[155%] text-neutral-600">
              Save thousands of dollars and hundreds of hours with the photo
              editing solution of Photoroom. Our AI tools bring your vision to
              life with visuals that convert better{" "}
              <span className="font-semibold text-neutral-900">
                without looking like AI
              </span>
              . No design skills needed.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px]"
            >
              GenAI trends in marketplaces
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/pro-collage.webp"
              alt="Generated marketing visuals collage"
              width={1048}
              height={786}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
