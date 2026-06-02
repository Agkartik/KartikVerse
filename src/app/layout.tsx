import type { Metadata } from "next";
import { Space_Grotesk, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MissionControl } from "@/components/navigation/MissionControl";
import { MissionDossier } from "@/components/navigation/MissionDossier";
import { UniverseProgressTracker } from "@/components/navigation/UniverseProgressTracker";
import { Orion } from "@/components/universe/Orion";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartik-verse.vercel.app"),
  title: "KartikVerse | Full Stack Explorer",
  description: "The interactive portfolio of Kartik Agrawal. Discover healthcare, agriculture, and publishing civilizations built with code.",
  openGraph: {
    title: "KartikVerse | Full Stack Explorer",
    description: "The interactive portfolio of Kartik Agrawal. Discover healthcare, agriculture, and publishing civilizations built with code.",
    url: "https://kartik-verse.vercel.app",
    siteName: "KartikVerse",
    images: [
      {
        url: "/assets/explorer/explorer_horizon.png",
        width: 1200,
        height: 630,
        alt: "KartikVerse - The Portfolio of Kartik Agrawal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KartikVerse | Full Stack Explorer",
    description: "The interactive portfolio of Kartik Agrawal. Discover healthcare, agriculture, and publishing civilizations built with code.",
    images: ["/assets/explorer/explorer_horizon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${orbitron.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Global Navigation and AI Guide */}
        <MissionControl />
        <UniverseProgressTracker />
        <MissionDossier />
        <Orion />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
