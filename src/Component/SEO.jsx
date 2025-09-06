import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, url, image }) {
  const logoImage = image || "https://bluestarsurgicalhouse.com.np/logo.png";

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={logoImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoImage} />

      {/* LocalBusiness JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bluestar Surgical House",
          image: logoImage,
          url: "https://bluestarsurgicalhouse.com.np",
          telephone: "+977-9851078417",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tripureshwor",
            addressLocality: "Kathmandu",
            addressRegion: "Bagmati",
            postalCode: "44600",
            addressCountry: "NP",
          },
          openingHours: "Su-Fr 09:00-18:00",
          sameAs: [
            "https://www.facebook.com/yourpage",
            "https://www.instagram.com/yourpage",
          ],
        })}
      </script>
    </Helmet>
  );
}
