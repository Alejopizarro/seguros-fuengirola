import type { Metadata } from "next";

export const hogarMetadata: Metadata = {
  title: "Seguro de Hogar | Protege tu Vivienda en Fuengirola y Málaga",
  description:
    "Seguro de hogar con cobertura completa, asistencia 24h, servicio manitas y reparación de electrodomésticos gratis. Desde 10,70€/mes. 10% descuento en segunda vivienda. Presupuesto sin compromiso.",
  keywords: [
    // Palabras clave principales
    "seguro de hogar",
    "seguro de hogar Fuengirola",
    "seguro hogar DKV",

    // Long-tail keywords
    "seguro hogar completo",
    "seguro vivienda segunda residencia",
    "seguro hogar con asistencia 24h",
    "seguro hogar barato",
    "seguro casa económico",
    "servicio manitas incluido",

    // Palabras clave locales
    "seguro de hogar Málaga",
    "seguro vivienda Costa del Sol",
    "seguros hogar Andalucía",

    // Palabras clave relacionadas
    "reparación electrodomésticos gratis",
    "asistencia hogar 24 horas",
    "seguro hogar robo",
    "seguro hogar incendio",
    "seguro hogar daños agua",
    "responsabilidad civil vivienda",
    "protección jurídica hogar",
    "seguro continente contenido",
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
    url: "https://www.segurosfuengirola.com/seguro-de-hogar",
    siteName: "Seguros Fuengirola",
    title: "Seguro de Hogar | Protección Completa para tu Vivienda",
    description:
      "Protege tu hogar con el mejor seguro. Cobertura completa, asistencia 24h, servicio manitas y reparación de electrodomésticos incluidos. Desde 10,70€/mes. 10% descuento en segunda vivienda.",
    images: [
      {
        url: "/vida.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de hogar - Protección completa para tu vivienda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de Hogar | Protección Completa desde 10,70€",
    description:
      "Cobertura completa, asistencia 24h, servicio manitas gratis. 10% descuento en segunda vivienda. Desde 10,70€/mes.",
    images: ["/vida.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.com/seguro-de-hogar",
    languages: {
      "es-ES": "https://www.segurosfuengirola.com/seguro-de-hogar",
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
