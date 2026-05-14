import Image from "next/image";
import type { Tool } from "./tools-data";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="snap-start shrink-0 w-[280px] sm:w-[320px] border border-neutral-200 rounded-[18px] overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col">
      <div className="relative aspect-[16/10]">
        <Image
          src={tool.thumb}
          alt={tool.title}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="p-4 pt-3">
        <h3 className="text-[15px] font-bold text-neutral-900 mb-1">
          {tool.title}
        </h3>
        <p className="text-[13px] leading-[145%] text-neutral-600">
          {tool.description}
        </p>
      </div>
    </article>
  );
}
