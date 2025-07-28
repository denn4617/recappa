import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeMode/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recappa",
  description:
    "AI-powered SaaS tool that transcribes and summarizes recorded meetings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
    ${geistSans.variable} 
    ${geistMono.variable} 
    antialiased 
    min-h-screen 
    text-[var(--foreground)] 
    transition-colors duration-300 
  `}
      >
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  );
}
