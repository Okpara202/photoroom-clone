import Image from "next/image";

const brands = [
  { src: "/brand-logos/depop.webp", alt: "Depop" },
  { src: "/brand-logos/mercari.webp", alt: "Mercari" },
  { src: "/brand-logos/naver.webp", alt: "Naver" },
  { src: "/brand-logos/amazon.webp", alt: "Amazon" },
  { src: "/brand-logos/decathlon.webp", alt: "Decathlon" },
  { src: "/brand-logos/doordash.webp", alt: "DoorDash" },
  { src: "/brand-logos/poshmark.webp", alt: "Poshmark" },
];

export function TrustedBy() {
  return (
    <section className="bg-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="max-w-page mx-auto px-6">
        <p className="text-center text-[17px] sm:text-[19px] font-medium text-neutral-600 mb-14">
          Trusted by leading brands worldwide
        </p>
        <div className="mx-auto w-full lg:w-[80%] max-w-[1200px] flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {brands.map((b) => (
            <Image
              key={b.alt}
              src={b.src}
              alt={b.alt}
              width={280}
              height={158}
              className="h-8 sm:h-12 lg:h-16 w-auto shrink-0 opacity-95"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
