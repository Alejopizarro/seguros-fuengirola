import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import BannerContact from "@/components/banner-contact";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { CookieConsentProvider } from "@/contexts/cookie-consent-contexts";
import CookieConsentModal from "@/components/cookie-consent-modal";
import CookieBanner from "@/components/cookie-banner";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oficina DKV Seguros Fuengirola | Contratar Seguro en Fuengirola",
  description:
    "Contrata tu seguro en Fuengirola con DKV. Seguro medico en Málaga, dentales, decesos y más. Agentes exclusivos en Fuengirola.",
  keywords: [
    "Seguros Fuengirola",
    "dkv fuengirola",
    "dkv seguros",
    "dkv agentes fuengirola",
    "oficina dkv fuengirola",
    "contratar seguro fuengirola",
    "dkv seguro medico",
    "seguro medico en malaga",
  ],
  robots: "INDEX",
  authors: { name: "Supernova Digital" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "InsuranceAgency", "LocalBusiness"],
  "@id": "https://www.segurosfuengirola.es/#organization",
  name: "Seguros Fuengirola",
  legalName: "Seguros Fuengirola — Agencia exclusiva DKV",
  url: "https://www.segurosfuengirola.es",
  logo: {
    "@type": "ImageObject",
    url: "https://www.segurosfuengirola.es/images/logo.png",
    width: 200,
    height: 60,
  },
  image: "https://www.segurosfuengirola.es/images/logo.png",
  description:
    "Agencia exclusiva DKV en Fuengirola. Seguros de salud, dental, decesos, vida, hogar y autónomos para particulares y empresas en la Costa del Sol.",
  telephone: ["+34951681383", "+34633106025"],
  email: "info@segurosfuengirola.es",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Condes de San Isidro, Nº 80",
    addressLocality: "Fuengirola",
    addressRegion: "Málaga",
    postalCode: "29640",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.5397,
    longitude: -4.6246,
  },
  areaServed: [
    { "@type": "City", name: "Fuengirola" },
    { "@type": "City", name: "Marbella" },
    { "@type": "City", name: "Torremolinos" },
    { "@type": "City", name: "Benalmádena" },
    { "@type": "City", name: "Mijas" },
    { "@type": "AdministrativeArea", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Costa del Sol" },
  ],
  sameAs: ["https://www.dkv.es"],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.segurosfuengirola.es/#website",
  name: "Seguros Fuengirola",
  url: "https://www.segurosfuengirola.es",
  publisher: {
    "@id": "https://www.segurosfuengirola.es/#organization",
  },
  inLanguage: "es-ES",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.segurosfuengirola.es/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <CookieConsentProvider>
          <NextTopLoader />
          <BannerContact />
          <Navbar />
          {children}
          <Footer />
          <CookieConsentModal />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
