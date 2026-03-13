import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Azezian | Programming Student",
  description: "Portfolio of Alan Azezian, a programming student at UTN General Pacheco passionate about building software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-[#0a0a0a] dark:text-[#ededed] min-h-screen font-sans`}
      >
        <BackgroundEffects />
        <div className="glow-overlay opacity-0 dark:opacity-100 transition-opacity duration-500" />
        <div className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
