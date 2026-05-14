import Image from "next/image";

type Props = { title: string; img: string };

export function GetStartedCard({ title, img }: Props) {
  return (
    <a
      href="#"
      className="snap-start shrink-0 w-[320px] sm:w-[360px] group relative aspect-[5/4] rounded-[16px] overflow-hidden flex flex-col justify-end p-6"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="360px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <h3 className="relative z-10 text-[22px] leading-[1.15] font-bold max-w-[80%] text-white">
        {title}
      </h3>
      <span className="absolute bottom-5 right-5 z-10 w-9 h-9 rounded-full grid place-items-center bg-white text-neutral-900 transition-transform group-hover:translate-x-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
