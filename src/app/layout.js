import { Inter } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./UI/ScrollToTop";

import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./UI/Header/Header";

// Using Next.js metadata API for app directory
export const metadata = {
  title:
    "Stoon Production | Best Videographer & Multimedia Production in Tunisia",
  description:
    "Looking for a videographer in Tunisia? Stoon Production offers professional videography, photography, and web development services for events and businesses. We specialize in creative content solutions and event coverage to bring your vision to life.",
  openGraph: {
    title:
      "Best Videographer & Multimedia Production in Tunisia | Stoon Production",
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
    title:
      "Best Videographer & Multimedia Production in Tunisia | Stoon Production",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Header />
          {children}
          <ScrollToTop />
          {/* Insert SpeedInsights component that belong to vercel */}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
