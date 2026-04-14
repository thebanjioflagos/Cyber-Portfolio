import type { Metadata } from "next";
import "./globals.css";

// Switching to resilient system font stack to avoid build-time network failures
const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const metadata: Metadata = {
  metadataBase: new URL('https://thebanjioflagos.com'),
  title: "OKUNOLA OLABANJI | Cybersecurity Engineer (Detection, Threat Analysis & Offensive Security)",
  description: "I build systems that detect threats, and I break systems to find them first. Expert in Detection Engineering, SIEM Architecture, and Offensive Security Operations with a focus on resilient infrastructure.",
  keywords: ["Cybersecurity Engineer", "Detection Engineering", "SIEM Architecture", "Offensive Security", "SOC Analyst", "Penetration Testing", "Threat Analysis", "Resilient Engineering"],
  authors: [{ name: "OKUNOLA OLABANJI" }],
  openGraph: {
    title: "OKUNOLA OLABANJI | Cybersecurity Engineer",
    description: "I build systems that detect threats, and I break systems to find them first. Expert in Detection Engineering, SIEM Architecture, and Offensive Security Operations.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OKUNOLA OLABANJI - Cybersecurity Portfolio Preview',
      },
    ],
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
