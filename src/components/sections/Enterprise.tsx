import Image from "next/image";

const bullets = [
  "Generate realistic, on-brand images at scale.",
  "Bulk-edit thousands of images with Batch mode.",
  "Use the API to automate your flow.",
  "Proven ROI: 72% CTR uplift (Smartly), 60% CPA drop (Wolt).",
];

export function Enterprise() {
  return (
    <section className="bg-[#F6F2EB]">
      <div className="w-full lg:w-[85%] max-w-[1280px] mx-auto px-6 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-xl">
            <p className="text-[14px] font-semibold text-neutral-900 mb-4">
              Enterprise
            </p>
            <h3
              className="text-[24px] sm:text-[30px] lg:text-[36px] text-neutral-900"
              style={{
                fontWeight: 700,
                lineHeight: "115%",
                letterSpacing: "-0.012em",
              }}
            >
              Turn product photos into profit
            </h3>
            <ul className="mt-7 space-y-3.5 text-[16px] text-neutral-600">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3 leading-[155%]">
                  <span className="mt-[10px] w-1 h-1 rounded-full bg-neutral-500 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex items-center bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px]"
            >
              Contact sales
            </a>
          </div>
          <div>
            <Image
              src="/images/furniture.webp"
              alt="Furniture enterprise images"
              width={1176}
              height={882}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
