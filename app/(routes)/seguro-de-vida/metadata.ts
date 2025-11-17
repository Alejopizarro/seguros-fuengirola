import type { Metadata } from "next";

export const vidaMetadata: Metadata = {
  title: "Seguro de Vida | Protección Económica Familiar en Fuengirola",
  description:
    "Seguro de vida con capital personalizado, asistencia psicológica, testamento online y asesoría jurídica. Anticipo del capital por enfermedad terminal. Protege el futuro de tu familia. Presupuesto sin compromiso.",
  keywords: [
    // Palabras clave principales
    "seguro de vida",
    "seguro de vida Fuengirola",
    "seguro vida familiar",

    // Long-tail keywords
    "seguro de vida con capital personalizado",
    "seguro vida enfermedad terminal",
    "seguro vida fallecimiento",
    "protección económica familiar",
    "seguro vida DKV",
    "testamento online gratis",

    // Palabras clave locales
    "seguro de vida Málaga",
    "seguro vida Costa del Sol",
    "seguros vida Andalucía",

    // Palabras clave relacionadas
    "asistencia psicológica duelo",
    "anticipo capital enfermedad",
    "asesoría jurídica testamento",
    "indemnización fallecimiento",
    "seguro vida invalidez permanente",
    "capital asegurado familia",
    "seguro vida accidente circulación",
    "prima seguro vida",
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
    url: "https://www.segurosfuengirola.com/seguro-de-vida",
    siteName: "Seguros Fuengirola",
    title: "Seguro de Vida | Tranquilidad y Seguridad para tu Familia",
    description:
      "Protege el futuro económico de tu familia con nuestro seguro de vida. Capital personalizado, anticipo por enfermedad terminal, asistencia psicológica y testamento online incluido.",
    images: [
      {
        url: "/family.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de vida - Protección familiar y tranquilidad económica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de Vida | Protección Económica Familiar",
    description:
      "Capital personalizado, anticipo por enfermedad terminal, asistencia psicológica y testamento online. Protege a tu familia.",
    images: ["/family.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.com/seguro-de-vida",
    languages: {
      "es-ES": "https://www.segurosfuengirola.com/seguro-de-vida",
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
