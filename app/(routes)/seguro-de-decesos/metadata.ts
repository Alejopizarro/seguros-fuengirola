import type { Metadata } from "next";

export const decesosMetadata: Metadata = {
  title: "Seguro de Decesos | Protección Familiar en Fuengirola y Málaga",
  description:
    "Seguro de decesos con repatriación incluida, servicio funerario completo y apoyo psicológico. Niños gratis hasta 6 años. Asistencia médica mundial hasta 18.000€. Presupuesto sin compromiso.",
  keywords: [
    // Palabras clave principales
    "seguro de decesos",
    "seguro de decesos Fuengirola",
    "seguro funerario",

    // Long-tail keywords
    "seguro decesos con repatriación",
    "seguro funerario España",
    "seguro decesos DKV",
    "servicio funerario completo",
    "seguro decesos familia",
    "testamento online",

    // Palabras clave locales
    "seguro de decesos Málaga",
    "seguro funerario Costa del Sol",
    "seguros decesos Andalucía",

    // Palabras clave relacionadas
    "repatriación internacional",
    "apoyo psicológico duelo",
    "asistencia médica mundial",
    "planificación funeral",
    "seguro decesos económico",
    "cobertura funeraria completa",
    "traslado nacional internacional",
    "borrado huella digital",
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
    url: "https://www.segurosfuengirola.com/seguro-de-decesos",
    siteName: "Seguros Fuengirola",
    title: "Seguro de Decesos | Protección y Tranquilidad para tu Familia",
    description:
      "Seguro de decesos con el mejor servicio funerario, repatriación nacional e internacional incluida, apoyo psicológico y testamento online. Niños gratis hasta 6 años.",
    images: [
      {
        url: "/deceso.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de decesos - Protección familiar completa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de Decesos | Protección Familiar en Fuengirola",
    description:
      "Servicio funerario completo, repatriación incluida y apoyo psicológico. Niños gratis hasta 6 años. Asistencia médica mundial.",
    images: ["/deceso.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.com/seguro-de-decesos",
    languages: {
      "es-ES": "https://www.segurosfuengirola.com/seguro-de-decesos",
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
