import Link from "next/link";
import {
  HomeIcon,
  SparkleIcon,
  StackIcon,
  BellIcon,
  ShopifyIcon,
  FolderIcon,
  BrandKitIcon,
  BoltIcon,
  UsageIcon,
  InviteIcon,
  PhoneIcon,
  GearIcon,
  ChevronDownIcon,
} from "./sidebar-icons";

type Item = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: string;
};

const main: Item[] = [
  { label: "Home", icon: <HomeIcon />, active: true },
  { label: "AI tools", icon: <SparkleIcon /> },
  { label: "Batch", icon: <StackIcon /> },
  { label: "Activity", icon: <BellIcon /> },
];

const content: Item[] = [
  { label: "Shopify products", icon: <ShopifyIcon />, badge: "New" },
  { label: "Designs", icon: <FolderIcon /> },
  { label: "Brand kit", icon: <BrandKitIcon /> },
  { label: "Templates", icon: <BoltIcon /> },
  { label: "Usage", icon: <UsageIcon /> },
  { label: "Invite people", icon: <InviteIcon /> },
  { label: "Log in to mobile app", icon: <PhoneIcon /> },
  { label: "Preferences", icon: <GearIcon /> },
];

function NavRow({ item }: { item: Item }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[13px] font-medium transition-colors ${
        item.active
          ? "bg-neutral-100 text-neutral-900"
          : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
      }`}
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

export function Sidebar() {
  return (
    <aside className="w-[240px] shrink-0 h-screen sticky top-0 border-r border-neutral-100 bg-white flex flex-col">
      <div className="px-3 pt-4 pb-3">
        <button className="w-full flex items-center justify-between gap-2 hover:bg-neutral-50 rounded-[10px] px-2 py-1.5 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-pink-400 grid place-items-center text-white font-bold text-[14px]">
              O
            </div>
            <span className="text-[14px] font-semibold text-neutral-900">
              Your Space
            </span>
          </div>
          <ChevronDownIcon />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4">
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
