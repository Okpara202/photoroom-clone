import { PhotoroomLogo } from "../Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  XIcon,
  YoutubeIcon,
  GlobeIcon,
} from "./social-icons";
import { legal } from "./footer-data";

export function FooterBottom() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-4 text-neutral-800">
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="TikTok"><TiktokIcon /></a>
          <a href="#" aria-label="X"><XIcon /></a>
          <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
        </div>
        <button className="inline-flex items-center gap-1.5 border border-neutral-200 rounded-full px-3 py-1.5 text-[13px] font-medium hover:bg-neutral-50">
          <GlobeIcon />
          English
        </button>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <PhotoroomLogo />
          <p className="text-[12px] text-neutral-600">
            Copyright © 2026 Photoroom, Inc.
          </p>
        </div>
        <ul className="flex flex-wrap gap-5 text-[12px] text-neutral-700">
          {legal.map((label) => (
            <li key={label}>
              <a href="#" className="hover:text-neutral-900">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
