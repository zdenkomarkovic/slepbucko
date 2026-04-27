import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  PHONE_INTERNATIONAL,
  GEO_LAT,
  GEO_LNG,
} from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "šlep služba Beograd",
    "šlep Beograd",
    "šlep vozila Beograd",
    "šlep 24h Beograd",
    "šlep 24/7 Beograd",
    "prevoz vozila Beograd",
    "hitna šlep pomoć Beograd",
    "hitna vučna služba Beograd",
    "vučna služba Beograd",
    "auto šlep Beograd",
    "prevoz radnih mašina Beograd",
    "šlep Novi Beograd",
    "šlep Zemun",
    "šlep Voždovac",
    "šlep Zvezdara",
    "šlep Palilula",
    "šlep Čukarica",
    "šlep Rakovica",
    "šlep Stari Grad",
    "šlep motocikala Beograd",
    "izvlačenje vozila iz rova",
    "prevoz na duge relacije",
    "asistencija na putu Beograd",
    "šlep Bucko",
    "slepsluzbabucko",
    "tow truck Belgrade",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EmergencyService"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: "Šlep Bucko",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: PHONE_INTERNATIONAL,
      image: `${SITE_URL}/logo.png`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 200,
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beograd",
        addressRegion: "Beograd",
        postalCode: "11000",
        addressCountry: "RS",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO_LAT,
        longitude: GEO_LNG,
      },
      hasMap: "https://maps.google.com/?q=Beograd,Srbija",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        { "@type": "City", name: "Beograd", "@id": "https://www.wikidata.org/wiki/Q3711" },
        { "@type": "AdministrativeArea", name: "Novi Beograd" },
        { "@type": "AdministrativeArea", name: "Zemun" },
        { "@type": "AdministrativeArea", name: "Voždovac" },
        { "@type": "AdministrativeArea", name: "Zvezdara" },
        { "@type": "AdministrativeArea", name: "Palilula" },
        { "@type": "AdministrativeArea", name: "Čukarica" },
        { "@type": "AdministrativeArea", name: "Rakovica" },
        { "@type": "AdministrativeArea", name: "Stari Grad" },
        { "@type": "AdministrativeArea", name: "Savski Venac" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Šlep usluge Beograd",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Šlep putničkih vozila",
              description:
                "Bezbedan transport automobila u slučaju kvara, nezgode ili potrebe za prevozom do servisa ili kućne adrese.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prevoz radnih mašina",
              description:
                "Prevoz građevinskih i radnih mašina, mini bagera, viljuškara i ostale opreme.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hitne intervencije 24/7",
              description:
                "Brz dolazak na vašu lokaciju i momentalna reakcija u svim situacijama, 24 časa dnevno.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Šlep motocikala",
              description: "Bezbedan prevoz motocikala i skutera sa specijalizovanom opremom.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Izvlačenje iz rova i blata",
              description:
                "Profesionalno izvlačenje vozila iz rova, blata ili nepristupačnog terena.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prevoz na duge relacije",
              description: "Prevozimo vozila i mašine na duže relacije unutar Srbije.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Asistencija na licu mesta",
              description:
                "Startovanje vozila, zamena gume i manje popravke na licu mesta.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "sr-RS",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Šlep služba Bucko Beograd – Profesionalna pomoć na putu 24/7",
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "sr-RS",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
