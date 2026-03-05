import type { Metadata } from "next";

export const vidaMetadata: Metadata = {
  // CRÍTICO: Title optimizado para "DKV Vida" (keyword principal en posición 33)
  title: "DKV Vida | Seguro de Vida DKV en Fuengirola y Málaga",

  // CRÍTICO: Description optimizada con las keywords que rankean
  description:
    "Seguro de vida DKV Vida con capital personalizado, asistencia psicológica y testamento online gratis. DKV Vida desde 65 años. Anticipo del capital por enfermedad terminal. Agentes oficiales DKV en Fuengirola. Tel: 633 10 60 25",

  keywords: [
    // ⭐ CRÍTICO: Keywords que YA están rankeando (prioridad máxima)
    "dkv vida",
    "seguro vida dkv",
    "dkv seguro vida",
    "seguro de vida dkv",
    "dkv seguros de vida",
    "seguros de vida dkv",

    // Variaciones de DKV Vida
    "dkv vida fuengirola",
    "dkv vida málaga",
    "dkv vida precio",
    "contratar dkv vida",
    "dkv vida coberturas",
    "dkv vida opiniones",

    // Keywords locales con DKV
    "dkv seguros fuengirola",
    "dkv seguros málaga",
    "agentes dkv fuengirola",
    "agentes dkv vida",

    // Long-tail con DKV Vida
    "dkv vida capital personalizado",
    "dkv vida enfermedad terminal",
    "dkv vida testamento online",
    "dkv vida asistencia psicológica",
    "dkv vida invalidez permanente",

    // Keywords generales (menor prioridad)
    "seguro de vida",
    "seguro de vida Fuengirola",
    "protección familiar",
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

  // CRÍTICO: Author con DKV
  authors: [{ name: "DKV Seguros Fuengirola - Agentes Oficiales" }],
  creator: "DKV Seguros Fuengirola",
  publisher: "DKV Seguros Fuengirola",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.segurosfuengirola.es/seguro-de-vida",

    // CRÍTICO: siteName con DKV
    siteName: "DKV Seguros Fuengirola",

    // CRÍTICO: Title con "DKV Vida" al principio
    title: "DKV Vida | Seguro de Vida con Capital Personalizado",

    // CRÍTICO: Description con keywords que rankean
    description:
      "Seguro de vida DKV Vida con capital personalizado, anticipo por enfermedad terminal, asistencia psicológica y testamento online gratis. Contratación hasta 65 años. Agentes oficiales DKV. Tel: 633 10 60 25",

    images: [
      {
        url: "/family.webp",
        width: 1200,
        height: 630,
        alt: "DKV Vida - Seguro de vida con protección familiar completa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    // CRÍTICO: Title con DKV Vida al principio
    title: "DKV Vida | Seguro de Vida DKV en Fuengirola",

    description:
      "DKV Vida con capital personalizado, anticipo por enfermedad terminal y testamento online gratis. Agentes oficiales DKV. Tel: 633 10 60 25",

    images: ["/family.webp"],
    creator: "@segurosfuengirola",
  },

  alternates: {
    canonical: "https://www.segurosfuengirola.es/seguro-de-vida",
    languages: {
      "es-ES": "https://www.segurosfuengirola.es/seguro-de-vida",
    },
  },

  category: "Seguros de Vida",

  verification: {
    google: "tu-codigo-de-verificacion-google",
  },

  other: {
    "og:phone_number": "+34633106025",
    "og:email": "info@segurosfuengirola.es",
    "og:locality": "Fuengirola",
    "og:region": "Málaga",
    "og:country-name": "España",

    // NUEVO: Tags específicos para DKV Vida
    "og:brand": "DKV Seguros",
    "og:product": "DKV Vida",
    "product:brand": "DKV",
    "product:availability": "in stock",
    "product:condition": "new",
    "business:contact_data:phone_number": "+34633106025",
    "business:contact_data:locality": "Fuengirola",
  },
};
