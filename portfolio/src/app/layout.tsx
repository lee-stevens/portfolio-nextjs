import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toolbar from "../components/Toolbar";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lee Stevens - Portfolio",
  description: "Welcome to my portfolio website showcasing my work and projects.",
};

const useDarkMode = () => {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
  return theme === 'dark';
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Initial theme script to avoid flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const theme = ${useDarkMode()};
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (e) { /* fail silently */ }
            })();`,
          }}
        />
        <Toolbar />
        <div className="flex-1 w-full">{children}</div>
      </body>
    </html>
  );
}
