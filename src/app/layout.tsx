import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { HoverProvider } from "@/context/HoverContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "HackElite 2.0 | Premier Innovation Hackathon 2025",
  description:
    "Join HackElite 2.0, the most innovative hackathon of 2025. Transform your ideas into reality with cutting-edge technology, expert mentorship, and exciting challenges. Register now for an unforgettable coding experience.",
  keywords: [
    "hackathon",
    "coding competition",
    "innovation",
    "technology",
    "HackElite",
    "programming",
    "developers",
    "2025 hackathon",
  ],
  openGraph: {
    title: "HackElite 2.0 | Premier Innovation Hackathon 2025",
    description:
      "Transform your ideas into reality at the most innovative hackathon of 2025. Join us for an unforgettable coding experience.",
    type: "website",
    url: "https://hackelite.com",
    images: [
      {
        url: "/hackelite_logo.png",
        width: 1200,
        height: 630,
        alt: "HackElite 2.0 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackElite 2.0 | Premier Innovation Hackathon 2025",
    description:
      "Transform your ideas into reality at the most innovative hackathon of 2025",
    images: ["/hackelite_logo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen`}
      >
        <HoverProvider>
          <div className="relative min-h-screen w-full overflow-hidden">
            <AuroraBackground />
            <Navbar />
            <main className="relative z-10 pt-20">{children}</main>
          </div>
        </HoverProvider>
      </body>
    </html>
  );
}
