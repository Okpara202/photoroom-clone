import { Sidebar } from "@/components/create/Sidebar";
import { ToolButton } from "@/components/create/ToolButton";
import { SearchBar } from "@/components/create/SearchBar";
import { GetStartedCard } from "@/components/create/GetStartedCard";
import {
  ClassicsRow,
  StudioRow,
  EssentialsRow,
  MarketplacesRow,
} from "@/components/create/TemplateTiles";
import { HelpIcon } from "@/components/create/icons";
import {
  topTools,
  bottomTools,
  getStartedCards,
} from "@/components/create/page-data";

export default function CreatePage() {
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />

      <main className="flex-1 min-w-0 relative">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-10 py-8">
          {/* Page header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <h1
              className="text-neutral-900"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "110%",
                letterSpacing: "-0.012em",
              }}
            >
              Home
            </h1>
            <SearchBar />
          </div>

          {/* Tool button rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-2.5">
            {topTools.map((t) => (
              <ToolButton key={t.label} {...t} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-12">
            {bottomTools.map((t) => (
              <ToolButton key={t.label} {...t} />
            ))}
          </div>

          {/* Get started */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-semibold text-neutral-900">Get started</h2>
              <button className="text-[13px] font-medium text-neutral-600 hover:text-neutral-900">
                Dismiss
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto snap-x scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {getStartedCards.map((c) => (
                <GetStartedCard key={c.title} title={c.title} img={c.img} />
              ))}
            </div>
          </section>

          {/* Template sections */}
          <ClassicsRow />
          <StudioRow />
          <EssentialsRow />
          <MarketplacesRow />
        </div>

        <button
          aria-label="Help"
          className="fixed bottom-5 right-5 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md grid place-items-center hover:bg-neutral-50"
        >
          <HelpIcon />
        </button>
      </main>
    </div>
  );
}
