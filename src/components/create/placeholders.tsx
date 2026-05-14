/** Generic centered product silhouette for template tiles. */
export function ProductPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center pointer-events-none">
      <svg
        width="55%"
        height="55%"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
        className="opacity-50"
      >
        <ellipse cx="50" cy="60" rx="32" ry="22" fill="currentColor" className="text-neutral-400" />
        <circle cx="50" cy="36" r="14" fill="currentColor" className="text-neutral-400" />
      </svg>
    </div>
  );
}

/** Apparel-shape placeholder for the Essentials row. */
export function ApparelPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center pointer-events-none">
      <svg
        width="55%"
        height="55%"
        viewBox="0 0 100 100"
        fill="currentColor"
        className="text-neutral-400 opacity-60"
        aria-hidden
      >
        <path d="M30 20 L42 12 L58 12 L70 20 L86 28 L78 42 L72 38 L72 86 L28 86 L28 38 L22 42 L14 28 Z" />
      </svg>
    </div>
  );
}
