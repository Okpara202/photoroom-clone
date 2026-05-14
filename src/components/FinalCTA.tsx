export function FinalCTA() {
  return (
    <section className="final-cta-gradient text-white">
      <div className="max-w-page mx-auto px-6 py-24 sm:py-32 lg:py-40 text-center">
        <h2
          className="text-[28px] sm:text-[36px] lg:text-[44px] mx-auto max-w-[820px]"
          style={{
            fontWeight: 600,
            lineHeight: "110%",
            letterSpacing: "-0.015em",
          }}
        >
          Sell faster with studio-quality product visuals
        </h2>
        <p className="mt-6 text-[18px] sm:text-[20px] text-white/80 max-w-2xl mx-auto leading-[150%]">
          Drive sales with professional visuals you can create in minutes, with
          brand consistency and control.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold text-[15px] px-5 py-[13px] rounded-[10px] hover:bg-neutral-100 transition-colors"
          >
            Start free trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center bg-white/10 hover:bg-white/15 text-white font-semibold text-[15px] px-5 py-[13px] rounded-[10px] backdrop-blur transition-colors"
          >
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}
