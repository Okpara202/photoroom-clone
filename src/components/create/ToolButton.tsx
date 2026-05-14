export type ToolButtonProps = {
  label: string;
  icon: React.ReactNode;
  badge?: string;
  active?: boolean;
};

export function ToolButton({ label, icon, badge, active }: ToolButtonProps) {
  return (
    <button
      className={`relative flex items-center gap-2.5 px-3 py-3 rounded-[14px] border transition-colors text-left min-h-[56px] ${
        active
          ? "bg-[#EDE9FB] border-[#410cd9]/40 ring-2 ring-[#410cd9]/30"
          : "bg-neutral-100 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-200"
      }`}
    >
      <span
        className={`w-8 h-8 rounded-[8px] grid place-items-center shrink-0 ${
          active ? "bg-white text-[#410cd9]" : "bg-white text-neutral-800"
        }`}
      >
        {icon}
      </span>
      <span className="text-[13px] font-semibold text-neutral-900 leading-tight">
        {label}
      </span>
      {badge && (
        <span className="absolute -top-2 right-3 text-[9px] font-semibold text-[#410cd9] bg-[#EDE9FB] px-1.5 py-0.5 rounded-[5px] leading-none">
          {badge}
        </span>
      )}
    </button>
  );
}
