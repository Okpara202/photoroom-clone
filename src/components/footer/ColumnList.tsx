import type { FooterLink } from "./footer-data";

type Props = { title: string; links: FooterLink[] };

export function ColumnList({ title, links }: Props) {
  return (
    <div>
      <h4 className="text-[14px] font-semibold text-neutral-900 mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href="#"
              className="text-[13px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1.5"
            >
              {l.label}
              {l.badge && (
                <span className="text-[9px] font-semibold text-[#410cd9] bg-[#EDE9FB] px-1 py-0.5 rounded leading-none">
                  {l.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
