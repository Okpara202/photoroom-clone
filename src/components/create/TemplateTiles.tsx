import { TemplateRow } from "./TemplateRow";
import { ProductPlaceholder, ApparelPlaceholder } from "./placeholders";
import { classics, studioBgs, essentialBgs, marketplaces } from "./page-data";

export function ClassicsRow() {
  return (
    <TemplateRow title="Classics">
      {classics.map((c) => (
        <div key={c.label} className="snap-start shrink-0 w-[160px]">
          <div
            className={`aspect-square rounded-[12px] ${c.style} relative overflow-hidden`}
          >
            <ProductPlaceholder />
          </div>
          <p className="mt-2 text-[13px] font-medium text-neutral-900">
            {c.label}
          </p>
        </div>
      ))}
    </TemplateRow>
  );
}

export function StudioRow() {
  return (
    <TemplateRow title="Studio">
      {studioBgs.map((bg, i) => (
        <div
          key={i}
          className={`snap-start shrink-0 w-[140px] aspect-square rounded-[12px] ${bg} relative overflow-hidden`}
        >
          <ProductPlaceholder />
          <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-[6px] bg-white grid place-items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-900" aria-hidden>
              <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
            </svg>
          </span>
        </div>
      ))}
    </TemplateRow>
  );
}

export function EssentialsRow() {
  return (
    <TemplateRow title="Essentials">
      {essentialBgs.map((bg, i) => (
        <div
          key={i}
          className={`snap-start shrink-0 w-[140px] aspect-square rounded-[12px] border border-neutral-100 ${bg} relative overflow-hidden`}
        >
          <ApparelPlaceholder />
        </div>
      ))}
    </TemplateRow>
  );
}

export function MarketplacesRow() {
  return (
    <TemplateRow title="Marketplaces">
      {marketplaces.map((m) => (
        <div key={m.name} className="snap-start shrink-0 w-[160px]">
          <div className="aspect-square w-full rounded-[12px] bg-white border border-neutral-200 grid place-items-center p-5">
            <m.Logo className={`${m.size} w-auto ${m.color}`} />
          </div>
          <p className="mt-2 text-[13px] font-medium text-neutral-900">
            {m.name}
          </p>
        </div>
      ))}
    </TemplateRow>
  );
}
