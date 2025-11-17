import type { Metadata } from "next";

export const accidentesMetadata: Metadata = {
  title: "Seguro de Accidentes | Protección 24h en Fuengirola y Málaga",
  description:
    "Seguro de accidentes con indemnización por invalidez y fallecimiento. Cobertura 24h, asistencia médica telefónica y hospitalización. Presupuesto sin compromiso.",
  keywords: [
    "seguro de accidentes",
    "seguro accidentes personales",
    "seguro de accidentes Fuengirola",
    "seguro accidentes invalidez",
    "seguro accidentes fallecimiento",
    "indemnización por accidente",
    "seguro accidentes 24 horas",
    "seguro accidentes laborales",
    "seguro accidentes circulación",
    "seguro accidentes Málaga",
    "seguro accidentes Costa del Sol",
    "seguros Fuengirola",
    "cobertura hospitalización accidente",
    "asistencia médica accidentes",
    "invalidez permanente seguro",
    "indemnización accidente tráfico",
    "seguro accidentes familia",
    "protección accidentes domésticos",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Seguros Fuengirola" }],
  creator: "Seguros Fuengirola",
  publisher: "Seguros Fuengirola",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.segurosfuengirola.com/seguro-de-accidentes",
    siteName: "Seguros Fuengirola",
    title: "Seguro de Accidentes | Protección Total 24 Horas",
    description:
      "Protege a tu familia con nuestro seguro de accidentes. Indemnización por invalidez y fallecimiento, cobertura 24h, asistencia médica telefónica gratuita.",
    images: [
      {
        url: "/accidentes.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de accidentes - Protección familiar completa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de Accidentes | Protección 24h en Fuengirola",
    description:
      "Indemnización por invalidez y fallecimiento. Cobertura 24h con asistencia médica telefónica. Presupuesto gratuito.",
    images: ["/accidentes.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.com/seguro-de-accidentes",
    languages: {
      "es-ES": "https://www.segurosfuengirola.com/seguro-de-accidentes",
    },
  },
  category: "Seguros",
  verification: {
    google: "tu-codigo-de-verificacion-google",
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },
  other: {
    "og:phone_number": "+34633106025",
    "og:email": "info@segurosfuengirola.com",
    "og:locality": "Fuengirola",
    "og:region": "Málaga",
    "og:country-name": "España",
  },
};
