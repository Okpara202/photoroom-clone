import Image from "next/image";

type Tier = {
  badge?: string;
  icon: string;
  name: string;
  description: string;
  cta: string;
};

const tiers: Tier[] = [
  {
    badge: "Pro",
    icon: "/tier-icons/photoroom-icon-256x256.webp",
    name: "Pro",
    description:
      "Perfect for resellers and solopreneurs who need pro-quality visuals to create polished listings that stand out.",
    cta: "Start free Pro trial",
  },
  {
    badge: "Max",
    icon: "/tier-icons/photoroom-icon-256x256.webp",
    name: "Max",
    description:
      "Great for small brands ready to grow with consistent, studio-level imagery that converts browsers into buyers and boosts sales.",
    cta: "Start a free trial",
  },
  {
    badge: "Ultra",
    icon: "/tier-icons/photoroom-icon-256x256.webp",
    name: "Ultra",
    description:
      "Best for high-volume businesses who need to process hundreds or thousands of images efficiently while maintaining quality and consistency.",
    cta: "Learn more",
  },
  {
    icon: "/tier-icons/photoroom-icon-enterprise-256x256.webp",
    name: "Enterprise",
    description:
      "Built for established operations with complex needs, custom integrations, and teams that require enterprise-grade reliability and control.",
    cta: "Learn more",
  },
];

export function PricingTiers() {
  return (
    <section className="bg-white">
      <div className="max-w-page mx-auto px-6 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <article
              key={t.name}
              className="bg-neutral-100 rounded-[18px] px-6 pt-5 pb-6 flex flex-col"
            >
              <TierIcon icon={t.icon} badge={t.badge} />
              <h3
                className="text-[20px] text-neutral-900 mt-5 mb-3"
                style={{ fontWeight: 600, lineHeight: "130%" }}
              >
                {t.name}
              </h3>
              <p className="text-[14px] leading-[150%] text-neutral-700 mb-6 flex-1">
                {t.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-[#410cd9] hover:bg-[#280197] text-white font-semibold text-[14px] py-[11px] rounded-[10px] transition-colors"
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierIcon({ icon, badge }: { icon: string; badge?: string }) {
  return (
    <div className="relative w-[44px] h-[44px]">
      {badge && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#EDE9FB] text-[#410cd9] text-[10px] font-semibold px-1.5 py-0.5 rounded-[5px] z-10 leading-none">
          {badge}
        </span>
      )}
      <Image
        src={icon}
        alt={`${badge ?? "Photoroom"} icon`}
        width={44}
        height={44}
        className="w-[44px] h-[44px] rounded-[10px]"
      />
    </div>
  );
}
