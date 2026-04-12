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
  title: "OKUNOLA OLABANJI | Cybersecurity Engineer & Security-Focused Fullstack Developer",
  description: "High-performance portfolio of a certified Cybersecurity Analyst & Ethical Hacker with 5+ years of experience in system hardening, penetration testing, and secure fullstack development.",
  keywords: ["Cybersecurity Engineer", "Ethical Hacker", "Fullstack Developer", "Security Audit", "Penetration Testing", "Lagos", "Nigeria", "Secure Software Development"],
  authors: [{ name: "OKUNOLA OLABANJI" }],
  openGraph: {
    title: "OKUNOLA OLABANJI | Cybersecurity Engineer",
    description: "Expert level security engineering and fullstack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKUNOLA OLABANJI | Cybersecurity Engineer",
    description: "Expert level security engineering and fullstack development.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
