import Link from "next/link";
import { PhotoroomLogo } from "./Logo";

const navItems = ["Product", "Solutions", "Resources", "Enterprise", "Pricing"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Photoroom home">
            <PhotoroomLogo />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-[14px] font-medium text-neutral-900 hover:bg-neutral-50 rounded-[8px] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden md:inline-flex text-[14px] font-medium text-neutral-900 hover:bg-neutral-50 px-3 py-2 rounded-[8px]"
          >
            Contact sales
          </a>
          <Link
            href="/login"
            className="text-[14px] font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-4 py-[10px] rounded-[10px] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="text-[14px] font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-[10px] rounded-[10px] transition-colors"
          >
            Start creating
          </Link>
        </div>
      </div>
    </header>
  );
}
