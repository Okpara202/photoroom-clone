import Link from "next/link";
import { PhotoroomLogo } from "../Logo";

type Item = { label: string; icon: React.ReactNode; badge?: string };

const main: Item[] = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "AI tools", icon: <SparkleIcon /> },
  { label: "Batch", icon: <StackIcon /> },
];

const content: Item[] = [
  { label: "Shopify products", icon: <ShopifyIcon />, badge: "New" },
  { label: "Designs", icon: <FolderIcon /> },
  { label: "Brand kit", icon: <BrandKitIcon /> },
  { label: "Templates", icon: <BoltIcon /> },
];

export function LoginSidebar() {
  return (
    <aside className="w-[240px] shrink-0 h-screen sticky top-0 border-r border-neutral-100 bg-white flex flex-col">
      <div className="px-4 pt-5 pb-3">
        <Link href="/" aria-label="Photoroom home">
          <PhotoroomLogo />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pt-3 pb-4">
        <ul className="space-y-0.5">
          {main.map((item) => (
            <li key={item.label}>
              <NavRow item={item} />
            </li>
          ))}
        </ul>

        <p className="mt-6 mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
          Content
        </p>
        <ul className="space-y-0.5">
          {content.map((item) => (
            <li key={item.label}>
              <NavRow item={item} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-2 pb-2">
        <NavRow item={{ label: "Preferences", icon: <GearIcon /> }} />
      </div>

      <div className="p-3 border-t border-neutral-100">
        <Link
          href="#"
          className="block w-full text-center brand-gradient text-white font-semibold text-[14px] py-2.5 rounded-[10px] hover:opacity-90 transition-opacity"
        >
          Upgrade to Pro
        </Link>
      </div>
    </aside>
  );
}

function NavRow({ item }: { item: Item }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[13px] font-medium transition-colors text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
    >
      <span className="w-4 h-4 grid place-items-center text-neutral-600">
        {item.icon}
      </span>
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="text-[9px] font-semibold text-[#410cd9] bg-[#EDE9FB] px-1 py-0.5 rounded leading-none">
          {item.badge}
        </span>
      )}
    </a>
  );
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l9-8 9 8M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm7 11l.8 2.4L22 16l-2.2.6L19 19l-.8-2.4L16 16l2.2-.6L19 13zM5 14l.8 2.4L8 17l-2.2.6L5 20l-.8-2.4L2 17l2.2-.6L5 14z" />
    </svg>
  );
}
function StackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}
function ShopifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#95BF47" aria-hidden>
      <path d="M15.4 3.5c-.4-.1-.8 0-1 .2 0-.1-.2-.6-.5-1-.4-.5-1-.7-1.7-.6h-.1c-.1-.1-.2-.3-.4-.4-.7-.8-2-.5-2.8 1.3-.5 1.2-.7 2.2-.8 2.7L6 6.4c-.5.1-.5.2-.6.6L4 18.6 16.4 21l1.4-12.6c0-.4-.3-.6-.6-.7l-1.8-.2z" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}
function BrandKitIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <circle cx="17" cy="17" r="4" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2.1-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2.1 1.2l-2.3-.9-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2.1 1.2L10 21h4l.5-2.6a7 7 0 0 0 2.1-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" />
    </svg>
  );
}
