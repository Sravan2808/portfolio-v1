import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { GlobalSounds } from "@/components/GlobalSounds";
import AlternatingPet from "@/components/AlternatingPet";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Instagram Sans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Instagram Sans Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Instagram Sans Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sravan Surya",
  description:
    "Design. Develop. Deploy. A showcase of my work, skills, and passion for technology.",

  metadataBase: new URL("https://portfolio-v1-7mdi.vercel.app"),

  openGraph: {
    title: "Sravan Surya",
    description:
      "Design. Develop. Deploy. A showcase of my work, skills, and passion for technology.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} bg-foreground selection:bg-[#D4D4C8] selection:text-black text-[#EBEBEB] max-w-3xl min-h-dvh mx-auto overflow-x-hidden`}
      >
        <GlobalSounds />
        <TooltipProvider>
          {children}
          <AlternatingPet />
        </TooltipProvider>
      </body>
    </html>
  );
}
