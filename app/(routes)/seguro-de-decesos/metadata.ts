import type { Metadata } from "next";

export const decesosMetadata: Metadata = {
  title: "DKV Decesos Precios y Coberturas | Seguro de Decesos DKV Málaga",

  description:
    "Contrata el seguro de decesos DKV Proteccion Familiar con cobertura completa Málaga. Conoce todos los beneficios de DKV Decesos precios y coberturas.",

  keywords: [
    // ⭐ CRÍTICO: Keywords que YA están rankeando (prioridad máxima)
    "dkv decesos",
    "seguros decesos dkv",
    "seguros de decesos dkv",
    "dkv seguro decesos",
    "dkv decesos coberturas",
    "decesos dkv",

    // Variaciones de DKV decesos
    "seguro decesos dkv fuengirola",
    "dkv decesos málaga",
    "dkv decesos precio",
    "contratar dkv decesos",
    "dkv protección familiar",
    "dkv buen legado",

    // Keywords locales con DKV
    "dkv seguros fuengirola",
    "dkv seguros málaga",
    "agentes dkv fuengirola",

    // Long-tail con DKV
    "dkv decesos repatriación",
    "dkv decesos testamento online",
    "dkv decesos niños gratis",
    "dkv decesos sin carencias",
    "dkv decesos asistencia médica",

    // Keywords generales (menor prioridad)
    "seguro de decesos",
    "seguro funerario",
    "seguro de decesos Fuengirola",
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
    url: "https://www.segurosfuengirola.es/seguro-de-decesos",

    // CRÍTICO: siteName con DKV
    siteName: "DKV Seguros Fuengirola",

    // CRÍTICO: Title con "DKV Decesos" al principio
    title: "DKV Decesos | Seguro Funerario con Repatriación desde 1,80€",

    // CRÍTICO: Description con keywords que rankean
    description:
      "Seguro de decesos DKV Protección Familiar. Repatriación nacional e internacional incluida, apoyo psicológico, testamento online. Niños gratis hasta 6 años. DKV Decesos desde 1,80€/mes. Agentes oficiales DKV.",

    images: [
      {
        url: "/deceso.webp",
        width: 1200,
        height: 630,
        alt: "DKV Decesos - Seguro de decesos con repatriación incluida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    // CRÍTICO: Title con DKV al principio
    title: "DKV Decesos | Seguro Funerario desde 1,80€",

    description:
      "DKV Decesos con repatriación, apoyo psicológico y testamento online. Niños gratis hasta 6 años. Desde 1,80€/mes.",

    images: ["/deceso.webp"],
    creator: "@segurosfuengirola",
  },

  alternates: {
    canonical: "https://www.segurosfuengirola.es/seguro-de-decesos",
    languages: {
      "es-ES": "https://www.segurosfuengirola.es/seguro-de-decesos",
    },
  },

  category: "Seguros de Decesos",

  verification: {
    google: "tu-codigo-de-verificacion-google",
  },

  other: {
    "og:phone_number": "+34633106025",
    "og:email": "info@segurosfuengirola.es",
    "og:locality": "Fuengirola",
    "og:region": "Málaga",
    "og:country-name": "España",

    // NUEVO: Tags específicos para DKV
    "og:brand": "DKV Seguros",
    "product:brand": "DKV",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:price:amount": "1.80",
    "product:price:currency": "EUR",
  },
};
