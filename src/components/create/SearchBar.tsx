export function SearchBar() {
  return (
    <div className="relative w-full lg:w-[480px]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      <input
        type="search"
        placeholder="Search a template"
        className="w-full bg-neutral-100 border-0 focus:bg-white focus:ring-2 focus:ring-[#410cd9]/30 outline-none rounded-[12px] pl-10 pr-4 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-500"
      />
    </div>
  );
}
