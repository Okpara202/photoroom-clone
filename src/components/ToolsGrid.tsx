"use client";

import { useRef } from "react";
import { tools } from "./tools-grid/tools-data";
import { ToolCard } from "./tools-grid/ToolCard";

export function ToolsGrid() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      <div className="max-w-page mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <div className="flex items-start justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <h2
              className="text-[28px] sm:text-[36px] lg:text-[44px] text-neutral-900"
              style={{
                fontWeight: 600,
                lineHeight: "110%",
                letterSpacing: "-0.015em",
              }}
            >
              See what Photoroom can do
            </h2>
            <p className="mt-5 text-[18px] sm:text-[20px] text-neutral-600 leading-[150%] whitespace-nowrap">
              AI product image generator, background remover, and visual editor, built for the way e-commerce works.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex bg-neutral-900 hover:bg-neutral-800 text-white text-[14px] font-semibold px-4 py-[11px] rounded-[10px] transition-colors"
          >
            See all tools
          </a>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tools.map((t) => (
            <ToolCard key={t.title} tool={t} />
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <ScrollButton onClick={() => scrollBy("left")} direction="left" />
          <ScrollButton onClick={() => scrollBy("right")} direction="right" />
        </div>
      </div>
    </section>
  );
}

function ScrollButton({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: "left" | "right";
}) {
  return (
    <button
      type="button"
      aria-label={`Scroll ${direction}`}
      onClick={onClick}
      className="w-11 h-11 rounded-full border border-neutral-200 grid place-items-center text-neutral-700 hover:bg-neutral-50 transition-colors"
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
        className={direction === "left" ? "" : "rotate-180"}
      >
        <path d="M10 4L6 8l4 4" />
      </svg>
    </button>
  );
}
