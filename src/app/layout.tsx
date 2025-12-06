import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Archipelago Insights | Peta Budaya Interaktif",
  description: "Menjelajahi esensi jati diri bangsa Indonesia melalui perspektif historis, sosiologis, dan politis.",
};

import BackgroundMusic from "@/components/BackgroundMusic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
