/* Wordmark-style brand logos. Single-color SVG text using currentColor. */

type Props = { className?: string };
const baseSvg = "fill-current";

export function AmazonLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 248 100" className={`${baseSvg} ${className ?? ""}`} aria-label="Amazon">
      <text x="0" y="60" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="60" letterSpacing="-2">
        amazon
      </text>
      <path d="M30 80 Q124 110 218 80" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M210 78 L222 80 L214 88" fill="currentColor" />
    </svg>
  );
}

export function DepopLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 220 80" className={`${baseSvg} ${className ?? ""}`} aria-label="Depop">
      <text x="0" y="58" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="900" fontSize="64" letterSpacing="-3">
        depop
      </text>
    </svg>
  );
}

export function MercariLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 240 80" className={`${baseSvg} ${className ?? ""}`} aria-label="Mercari">
      <text x="0" y="58" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="58" letterSpacing="-1">
        mercari
      </text>
    </svg>
  );
}

export function NaverLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 220 80" className={`${baseSvg} ${className ?? ""}`} aria-label="Naver">
      <g transform="translate(0,12)">
        <rect x="0" y="0" width="50" height="50" fill="currentColor" />
        <path d="M9 5 L9 45 L20 45 L20 22 L41 45 L41 5 L30 5 L30 28 L9 5 Z" fill="white" />
      </g>
      <text x="60" y="58" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="48" letterSpacing="-1">
        NAVER
      </text>
    </svg>
  );
}

export function DecathlonLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 260 60" className={`${baseSvg} ${className ?? ""}`} aria-label="Decathlon">
      <text x="0" y="44" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="40" letterSpacing="-0.5">
        DECATHLON
      </text>
    </svg>
  );
}

export function DoordashLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 240 60" className={`${baseSvg} ${className ?? ""}`} aria-label="DoorDash">
      <g transform="translate(0,15)" fill="currentColor">
        <path d="M28.071 8.409a6.09 6.09 0 00-5.396-3.228H5.584A.589.589 0 005.17 6.184L8.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H13.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
      </g>
      <text x="55" y="42" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="32" letterSpacing="-1">
        DOORDASH
      </text>
    </svg>
  );
}

export function PoshmarkLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 240 60" className={`${baseSvg} ${className ?? ""}`} aria-label="Poshmark">
      <g transform="translate(0,8)">
        <path d="M14 6h10c5 0 8 4 8 8s-3 8-8 8h-4v6h-6v-6l-4-4 4 4V6z" fill="currentColor" />
      </g>
      <text x="40" y="42" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="36" letterSpacing="-0.5">
        POSHMARK
      </text>
    </svg>
  );
}
