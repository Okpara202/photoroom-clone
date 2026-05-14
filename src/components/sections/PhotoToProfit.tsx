import Image from "next/image";

export function PhotoToProfit() {
  return (
    <section>
      <div className="max-w-page mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-[24px] overflow-hidden">
            <Image
              src="/images/sneakers.webp"
              alt="Sneaker product visuals collage"
              width={1176}
              height={882}
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
              From photo to profit — visuals that actually convert
            </h3>
            <p className="mt-5 text-[16px] leading-[155%] text-neutral-600">
              Photoroom is built for sellers: our AI removes backgrounds with
              best-in-class precision (even on transparent products!) and
              generates the visuals you need to boost trust and drive sales.
              From product listings to social content, ads, logos, CRM images,
              and print, we help you create it all.
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
