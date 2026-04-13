import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OKUNOLA OLABANJI | Cybersecurity Engineer (Detection, Threat Analysis & Offensive Security)",
  description: "I build systems that detect threats, and I break systems to find them first. Expert in Detection Engineering, SIEM Architecture, and Offensive Security Operations.",
  keywords: ["Cybersecurity Engineer", "Detection Engineering", "SIEM Architecture", "Offensive Security", "SOC Analyst", "Penetration Testing", "Threat Analysis", "Resilient Engineering"],
  authors: [{ name: "OKUNOLA OLABANJI" }],
  openGraph: {
    title: "OKUNOLA OLABANJI | Cybersecurity Engineer",
    description: "I build systems that detect threats, and I break systems to find them first.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKUNOLA OLABANJI | Cybersecurity Engineer",
    description: "I build systems that detect threats, and I break systems to find them first.",
  },
};

import { SentinelTerminal } from "@/components/ai/SentinelTerminal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SentinelTerminal />
      </body>
    </html>
  );
}
