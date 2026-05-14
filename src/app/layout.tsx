import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "AI-Powered Photo Editor and Listing Studio for Product Photography | Photoroom",
  description:
    "Photoroom is the leading AI visual solution for e-commerce. Speed up your workflow and generate listing-ready visuals that stay true to your product, at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
