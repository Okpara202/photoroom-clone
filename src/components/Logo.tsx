export function PhotoroomLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid place-items-center w-7 h-7 rounded-[8px] bg-neutral-900 text-white text-[14px] font-bold">
        <span>P</span>
      </div>
      <span className="text-[18px] font-semibold tracking-[-0.01em] text-neutral-900">
        Photoroom
      </span>
    </div>
  );
}
