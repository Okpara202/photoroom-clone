import Image from "next/image";

export function MultiDevice() {
  return (
    <section className="bg-white">
      <div className="max-w-page mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h3
              className="text-[24px] sm:text-[30px] lg:text-[36px] text-neutral-900"
              style={{
                fontWeight: 700,
                lineHeight: "115%",
                letterSpacing: "-0.012em",
              }}
            >
              Create visuals across all devices
            </h3>
            <p className="mt-5 text-[16px] leading-[155%] text-neutral-600">
              Whether you&apos;re at your desk or on the move, Photoroom&apos;s
              mobile and desktop apps let you create and edit visuals anywhere,
              anytime.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px]"
            >
              Start creating for free
            </a>
          </div>
          <div className="bg-[#F7E9DC] rounded-[24px] p-6 lg:p-8 overflow-hidden">
            <Image
              src="/images/multi-device.webp"
              alt="Photoroom on phone and tablet"
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
