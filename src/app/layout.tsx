import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

import GoogleAnalytics from "./components/GoogleAnalytics";
import type { Metadata } from "next";
import React from "react";
import ClientThemeProvider from "./components/ClientThemeProvider";
import Header from "./UI/Header/Header";
import ScrollToTop from "./UI/ScrollToTop";

export const metadata: Metadata = {
  title: "Stoon Production | Best Videographer & Multimedia Production in Tunisia",
  description:
    "Looking for a videographer in Tunisia? Stoon Production offers professional videography, photography, and web development services for events and businesses. We specialize in creative content solutions and event coverage to bring your vision to life.",
  openGraph: {
    title: "Best Videographer & Multimedia Production in Tunisia | Stoon Production",
    description:
      "Looking for a best studio production in Tunisia? We provide professional solutions.",
    url: "https://stoonproduction.com",
    type: "website",
    images: [
      {
        url: "https://stoonproduction.com/assets/images/SEOStoonProductionLogoMetaTag.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Videographer & Multimedia Production in Tunisia | Stoon Production",
    description:
      "Stoon Production is a creative studio offering freelance videography, photography, and multimedia production in Tunisia. Capture your moments with the best Tunisian video team.",
    images: [
      {
        url: "https://stoonproduction.com/assets/images/SEOStoonProductionLogoMetaTag.png",
      },
    ],
  },
  icons: {
    icon: "/icon.ico",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Stoon Production",
      url: "https://stoonproduction.com",
      logo: "https://stoonproduction.com/assets/images/logoStoonProduction.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+216-23-039-320",
        contactType: "Customer Service",
        areaServed: "TN",
        availableLanguage: "English",
      },
      sameAs: [
        // "https://www.facebook.com/stoonproduction",
        "https://www.instagram.com/adem_ben_amor",
      ],
    }),
    "geo.region": "TN",
  },
};

const inter = Inter({ subsets: ["latin"] });
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={font.className}>
        <ClientThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          <Header />
          {children}
          <ScrollToTop />
          <SpeedInsights />
          <GoogleAnalytics />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
