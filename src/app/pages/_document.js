import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta description for search engines */}
        <meta
          name="description"
          content="Stoon Production offers top-notch videography, photography, and web development services. We specialize in creative content solutions and event coverage to bring your vision to life."
        />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Stoon Production - Videography, Photography, and Web Development" />
        <meta property="og:description" content="We provide professional event coverage and creative content solutions." />
        <meta property="og:image" content="https://stoonproduction.com/assets/images/logoStoonProduction.png" />
        <meta property="og:url" content="https://stoonproduction.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stoon Production | Videography, Photography, and Web Development" />
        <meta
          name="twitter:description"
          content="We offer videography, photography, and web development services to help you stand out."
        />
        <meta name="twitter:image" content="https://stoonproduction.com/assets/images/logoStoonProduction.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stoon Production",
              "url": "https://stoonproduction.com",
              "logo": "https://stoonproduction.com/assets/images/logoStoonProduction.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+216-23-039-320",
                "contactType": "Customer Service",
                "areaServed": "TN",
                "availableLanguage": "English",
              },
              "sameAs": [
                // "https://www.facebook.com/stoonproduction",
                "https://www.instagram.com/adem_ben_amor",
              ]
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
