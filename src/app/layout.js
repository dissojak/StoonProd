import { Inter } from "next/font/google";
import "./globals.css";

// Using Next.js metadata API for app directory
export const metadata = {
  title: "Stoon Production - Videography, Photography, and Web Development",
  description:
    "Stoon Production offers top-notch videography, photography, and web development services. We specialize in creative content solutions and event coverage to bring your vision to life.",
  openGraph: {
    title: "Stoon Production - Videography, Photography, and Web Development",
    description:
      "We provide professional event coverage and creative content solutions.",
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
    title: "Stoon Production | Videography, Photography, and Web Development",
    description:
      "We offer videography, photography, and web development services to help you stand out.",
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
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
