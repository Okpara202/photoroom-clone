import type { ReactNode } from "react";

export function Award({
  icon,
  label,
  value,
  sub,
}: {
  icon?: ReactNode;
  label?: string;
  value?: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-neutral-900">
      <Laurel side="left" />
      <div className="flex flex-col items-center justify-center min-w-[100px]">
        {icon && <div className="mb-1">{icon}</div>}
        {value && (
          <div className="text-[15px] font-bold leading-none">{value}</div>
        )}
        {(label || sub) && (
          <div className="text-[12px] font-medium leading-tight mt-0.5">
            {label ?? sub}
          </div>
        )}
      </div>
      <Laurel side="right" />
    </div>
  );
}

function Laurel({ side }: { side: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="56"
      viewBox="0 0 20 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={side === "right" ? "scale-x-[-1]" : ""}
      aria-hidden
    >
      <path
        d="M17 2 C 9 6, 4 14, 4 28 C 4 42, 9 50, 17 54"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="10" cy="10" rx="4" ry="1.6" transform="rotate(-30 10 10)" fill="currentColor" opacity="0.95" />
      <ellipse cx="7" cy="18" rx="4.5" ry="1.8" transform="rotate(-15 7 18)" fill="currentColor" opacity="0.95" />
      <ellipse cx="5.5" cy="26" rx="5" ry="1.9" transform="rotate(0 5.5 26)" fill="currentColor" opacity="0.95" />
      <ellipse cx="5.5" cy="34" rx="5" ry="1.9" transform="rotate(12 5.5 34)" fill="currentColor" opacity="0.95" />
      <ellipse cx="7" cy="42" rx="4.5" ry="1.8" transform="rotate(25 7 42)" fill="currentColor" opacity="0.95" />
      <ellipse cx="10" cy="49" rx="4" ry="1.6" transform="rotate(38 10 49)" fill="currentColor" opacity="0.95" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 12.04c-.02-2.32 1.9-3.43 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.42-.14-2.78.84-3.5.84-.74 0-1.84-.82-3.04-.8-1.56.02-3 .91-3.81 2.3-1.63 2.81-.42 6.97 1.16 9.25.78 1.12 1.69 2.37 2.89 2.32 1.16-.05 1.6-.75 3.01-.75 1.4 0 1.8.75 3.04.72 1.26-.02 2.05-1.13 2.81-2.26.89-1.3 1.25-2.56 1.27-2.63-.03-.01-2.43-.93-2.45-3.68zM14.95 5.2c.63-.78 1.06-1.85.94-2.93-.91.04-2.02.62-2.67 1.39-.58.68-1.1 1.79-.96 2.84 1.02.08 2.06-.52 2.69-1.3z" />
    </svg>
  );
}

export function AndroidIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 9h14v9a2 2 0 0 1-2 2h-2v2h-2v-2h-2v2H9v-2H7a2 2 0 0 1-2-2V9zm6.6-6 .9 1.5a4.2 4.2 0 0 1 3 0L16.4 3l1 .5-1 1.6A4 4 0 0 1 19 8H5a4 4 0 0 1 2.6-2.9l-1-1.6 1-.5zM9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 10v6a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0zm16 0v6a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0z" />
    </svg>
  );
}
