import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import LayoutClient from "@/components/layout/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Social media by SergeyDev0",
  description: "Best social media web app for everyone!",
  icons: "/src/assets/linear-icon.svg",
  authors: {
    name: "SergeeyDev0",
    url: "https://github.com/SergeyDev0",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0b18",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
