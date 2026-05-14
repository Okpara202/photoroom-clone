export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="max-w-page mx-auto px-6 pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 text-center">
      <h2
        className="text-[28px] sm:text-[36px] lg:text-[44px] text-neutral-900"
        style={{
          fontWeight: 600,
          lineHeight: "110%",
          letterSpacing: "-0.015em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
