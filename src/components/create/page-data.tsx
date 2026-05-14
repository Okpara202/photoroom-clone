/* Data definitions for the /create Home page. */
import type { ReactNode } from "react";
import {
  CloudUpIcon,
  BgRemoverIcon,
  ModelIcon,
  LampIcon,
  MannequinIcon,
  SparkleSquareIcon,
  ShortsIcon,
  VideoIcon,
  StackIcon,
  GridIcon,
} from "./icons";
import {
  FacebookLogo,
  EbayLogo,
  PoshmarkLogo,
  DepopLogo,
  MercariLogo,
  MercadoLibreLogo,
  ShopeeLogo,
} from "../BrandLogos";

export type ToolItem = {
  label: string;
  icon: ReactNode;
  badge?: string;
  active?: boolean;
};

export const topTools: ToolItem[] = [
  { label: "Start from a photo", icon: <CloudUpIcon />, active: true },
  { label: "Background Remover", icon: <BgRemoverIcon /> },
  { label: "Virtual Model", icon: <ModelIcon /> },
  { label: "Product Staging", icon: <LampIcon /> },
  { label: "Ghost Mannequin", icon: <MannequinIcon /> },
];

export const bottomTools: ToolItem[] = [
  { label: "Product Beautifier", icon: <SparkleSquareIcon /> },
  { label: "Flat lay", icon: <ShortsIcon /> },
  { label: "Video Generator", icon: <VideoIcon />, badge: "Max" },
  { label: "Batch", icon: <StackIcon /> },
  { label: "See all tools…", icon: <GridIcon /> },
];

export const getStartedCards = [
  { title: "Remove a background", img: "/tool-cards/remove_background_card.webp" },
  { title: "Generate AI backgrounds", img: "/tool-cards/ai_backgrounds_card.webp" },
  { title: "Edit hundreds of images at once", img: "/tool-cards/product_beautifier_card.webp" },
  { title: "Animate your product photos", img: "/tool-cards/video-generator-card.webp" },
  { title: "Stage your product with AI", img: "/tool-cards/product_staging_card.webp" },
];

export const classics = [
  { label: "White", style: "bg-white border border-neutral-200" },
  { label: "Black", style: "bg-black" },
  {
    label: "Transparent",
    style:
      "bg-[linear-gradient(45deg,#e5e5e5_25%,transparent_25%),linear-gradient(-45deg,#e5e5e5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e5e5_75%),linear-gradient(-45deg,transparent_75%,#e5e5e5_75%)] bg-[length:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0px]",
  },
  { label: "Original Image", style: "bg-gradient-to-br from-[#dfd4c5] to-[#e8dccb]" },
];

export const studioBgs = [
  "bg-[#F4F4F2]",
  "bg-[#EBE9E2]",
  "bg-[#EDEAE0]",
  "bg-[#F5F1E3]",
  "bg-[#F3D9C3]",
  "bg-[#CFE0CB]",
  "bg-[#CFE1F4]",
  "bg-[#F4D6D0]",
  "bg-[#E0D5F4]",
  "bg-[#F4E3CF]",
];

export const essentialBgs = [
  "bg-[linear-gradient(45deg,#e5e5e5_25%,transparent_25%),linear-gradient(-45deg,#e5e5e5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e5e5_75%),linear-gradient(-45deg,transparent_75%,#e5e5e5_75%)] bg-[length:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0px]",
  "bg-neutral-50",
  "bg-neutral-100",
  "bg-[#EDEAE0]",
  "bg-[#F4F1EA]",
  "bg-[#EFEDE5]",
  "bg-[#F2EFE5]",
  "bg-[#EBE8E0]",
  "bg-[#E8DFD0]",
];

export const marketplaces = [
  { name: "Facebook Marketplace", Logo: FacebookLogo, color: "text-[#1877F2]", size: "h-10" },
  { name: "eBay", Logo: EbayLogo, color: "text-[#E53238]", size: "h-6" },
  { name: "Poshmark", Logo: PoshmarkLogo, color: "text-[#7B1845]", size: "h-6" },
  { name: "Depop", Logo: DepopLogo, color: "text-[#FF2300]", size: "h-8" },
  { name: "Mercari", Logo: MercariLogo, color: "text-neutral-900", size: "h-6" },
  { name: "Mercado Libre", Logo: MercadoLibreLogo, color: "text-[#FFE600]", size: "h-10" },
  { name: "Shopee", Logo: ShopeeLogo, color: "text-[#EE4D2D]", size: "h-10" },
];
