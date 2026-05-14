import Image from "next/image";

type Testimonial = {
  tag: string;
  heroImage: string;
  brandLogo: string;
  brandLogoClass: string;
  quote: string;
  attribution: { name: string; role: string };
  bg: string;
};

const testimonials: Testimonial[] = [
  {
    tag: "Enterprise",
    heroImage: "/testimonials/valuence_large.webp",
    brandLogo: "/testimonials/valuence.webp",
    brandLogoClass: "h-8 w-auto",
    quote:
      "Photoroom has significantly reduced cost for us while improving quality. This is the kind of solution that's well-suited for companies selling through e-commerce platforms, handling a large volume of products, and aiming for high image quality.",
    attribution: {
      name: "Takanori Hirai",
      role: "Deputy General Manager, Product and Photography Section, Valuence Japan Inc.",
    },
    bg: "bg-gradient-to-b from-[#DDEBFA] to-[#F0F7FC]",
  },
  {
    tag: "SMB",
    heroImage: "/testimonials/alex_mahl_large.webp",
    brandLogo: "/testimonials/alex_mahl_small.webp",
    brandLogoClass: "h-12 w-12 rounded-full object-cover",
    quote:
      "My biggest win is that my listings show up on Google, and it's because I now have that white crisp background from Photoroom. Just adding white backgrounds has made my sales jump by 500%.",
    attribution: {
      name: "Alexandra Mahl",
      role: "Founder at APM FINDS, LLC",
    },
    bg: "bg-gradient-to-b from-[#F8DDD8] to-[#FCEDEA]",
  },
  {
    tag: "Enterprise",
    heroImage: "/testimonials/wolt_large.webp",
    brandLogo: "/testimonials/source_wolt.webp",
    brandLogoClass: "h-6 w-auto",
    quote:
      "Photoroom's API has been key in our journey towards operational excellence in image editing. It has not only enhanced our processes but has also improved the quality of our product visuals, adding to our growth and success.",
    attribution: {
      name: "Jeff Strauss",
      role: "Director of Imaging at Wolt",
    },
    bg: "bg-gradient-to-b from-[#DDF2F3] to-[#F0FAFA]",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-page mx-auto px-6 py-16 sm:py-24 lg:py-32">
        {/* Header — LEFT aligned */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <h2
            className="text-[28px] sm:text-[36px] lg:text-[44px] text-neutral-900"
            style={{
              fontWeight: 600,
              lineHeight: "110%",
              letterSpacing: "-0.015em",
            }}
          >
            Loved by companies of all sizes
          </h2>
          <p className="mt-5 text-[18px] sm:text-[20px] text-neutral-600 leading-[150%]">
            From small businesses to global brands, Photoroom powers the visuals
            that sell.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.attribution.name}
              className={`${t.bg} rounded-[20px] overflow-hidden flex flex-col`}
            >
              {/* Hero image — fades into the card bg at the bottom edge */}
              <div className="relative aspect-[5/4]">
                <Image
                  src={t.heroImage}
                  alt={`${t.attribution.name} — ${t.tag}`}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                  }}
                />
                <span className="absolute top-5 left-5 inline-block bg-white text-neutral-900 text-[13px] font-semibold px-3 py-1 rounded-[6px]">
                  {t.tag}
                </span>
              </div>

              {/* Content */}
              <div className="px-7 pb-7 -mt-4 flex flex-col flex-1">
                <div className="mb-5 h-10 flex items-center">
                  <Image
                    src={t.brandLogo}
                    alt={t.attribution.name}
                    width={240}
                    height={176}
                    className={t.brandLogoClass}
                  />
                </div>
                <p className="text-[15px] leading-[155%] text-neutral-800 mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mb-5">
                  <p className="text-[15px] font-semibold text-neutral-900">
                    {t.attribution.name}
                  </p>
                  <p className="text-[13px] text-neutral-600 leading-[145%] mt-0.5">
                    {t.attribution.role}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex w-fit items-center bg-neutral-900 hover:bg-neutral-800 text-white text-[14px] font-semibold px-4 py-2.5 rounded-[10px]"
                >
                  Read story
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
