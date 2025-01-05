import React from "react";
import localFont from "next/font/local";
import isMobileDevice from "@/src/common/libs/isMobileDevice";
import Meta from "@/src/common/meta/Meta";
import { ThemeProvider } from "next-themes";

import "@/src/common/assets/css/global.css";
import "@joo98e/common/src/css/reset.css";
import "@joo98e/common/src/css/theme.css";

import type { Metadata, Viewport } from "next";
import ClientProvider from "@/src/domain/global/providers/ClientProvider";

const recoSans = localFont({
  src: "../fonts/recipekorea.ttf",
  variable: "--font-reko-sans",
  weight: "100 900",
});

export function generateViewport(): Viewport {
  const isMobile = isMobileDevice();
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: isMobile ? 1 : undefined,
  };
}

export const metadata: Metadata = {
  title: {
    default: `${Meta.title} | Joo98e`,
    template: "%s | Joo98e",
  },
  description: Meta.opengraphDescription,
  keywords: [],
  icons: {
    shortcut: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.ico", type: "image/x-icon", sizes: "16x16" },
      { url: "/favicon-32x32.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/favicon-96x96.ico", type: "image/x-icon", sizes: "96x96" },
    ],
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.ico", type: "image/x-icon", sizes: "16x16" },
      { url: "/favicon-32x32.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/favicon-96x96.ico", type: "image/x-icon", sizes: "96x96" },
    ],
    apple: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/apple-icon-57x57.png", type: "image/x-icon" },
      { url: "/apple-icon-60x60.png", type: "image/x-icon" },
      { url: "/apple-icon-72x72.png", type: "image/x-icon" },
      { url: "/apple-icon-76x76.png", type: "image/x-icon" },
      { url: "/apple-icon-114x114.png", type: "image/x-icon" },
      { url: "/apple-icon-120x120.png", type: "image/x-icon" },
      { url: "/apple-icon-144x144.png", type: "image/x-icon" },
      { url: "/apple-icon-152x152.png", type: "image/x-icon" },
      { url: "/apple-icon-180x180.png", type: "image/x-icon" },
    ],
  },
  openGraph: {
    type: "website",
    title: {
      default: Meta.title,
      template: `%s | ${Meta.signature}`,
    },
    siteName: Meta.signature,
  },
  twitter: {
    title: {
      default: Meta.title,
      template: `%s | ${Meta.signature}`,
    },
    description: Meta.opengraphDescription,
    card: "summary",
    images: [],
  },
  other: {
    ["og:site_name"]: "Joo98e",
    ["format-detection"]: "telephone=no",
    ["HandheldFriendly"]: "true",
    ["httpEquiv"]: ["imagetoolbar", "X-UA-Compatible"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${recoSans.variable}`}>
        <ThemeProvider>
          <ClientProvider>{children}</ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
