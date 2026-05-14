"use client";

import { useRef, ReactNode } from "react";

type TemplateRowProps = {
  title: string;
  children: ReactNode;
  cardWidth?: number;
  showSeeMore?: boolean;
};

export function TemplateRow({
  title,
  children,
  cardWidth = 160,
  showSeeMore = true,
}: TemplateRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: cardWidth * 3 + 24, behavior: "smooth" });
  };

  return (
    <section className="mb-12">
      <h2 className="text-[18px] font-semibold text-neutral-900 mb-4">
        {title}
      </h2>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto snap-x scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>

        {showSeeMore && (
          <button
            type="button"
            aria-label="See more"
            onClick={scrollRight}
            className="hidden lg:grid absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] place-items-center hover:bg-neutral-50 z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
