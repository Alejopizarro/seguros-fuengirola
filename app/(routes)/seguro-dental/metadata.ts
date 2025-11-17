import type { Metadata } from "next";

export const dentalMetadata: Metadata = {
  title: "Seguro Dental DKV | Agentes Exclusivos en Fuengirola y Málaga",
  description:
    "Seguro dental DKV con hasta 59 tratamientos gratis, menores de 14 años GRATIS, sin carencias ni copagos. Desde 7,90€/mes. Agentes exclusivos DKV en Fuengirola. Más de 2.710 dentistas. Presupuesto sin compromiso.",
  keywords: [
    // Palabras clave principales con DKV
    "seguro dental DKV",
    "seguro dental DKV Fuengirola",
    "DKV Dentisalud",
    "agentes DKV Fuengirola",
    "agentes exclusivos DKV",

    // Palabras clave generales
    "seguro dental",
    "seguro dental Fuengirola",
    "seguro dental Málaga",

    // Long-tail keywords con DKV
    "DKV Dentisalud Classic",
    "DKV Dentisalud Élite",
    "seguro dental sin carencias",
    "seguro dental niños gratis",
    "tratamientos dentales gratis",
    "limpieza dental gratuita",

    // Palabras clave locales
    "dentista DKV Málaga",
    "seguro dental Costa del Sol",
    "clínica dental DKV Andalucía",

    // Palabras clave relacionadas
    "ortodoncia con descuento",
    "implantes dentales DKV",
    "seguro dental sin copago",
    "cuadro médico dental DKV",
    "seguro dental económico",
    "descuento tratamientos dentales",
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
  authors: [{ name: "Seguros Fuengirola - Agentes Exclusivos DKV" }],
  creator: "Seguros Fuengirola - Agentes Exclusivos DKV",
  publisher: "Seguros Fuengirola - Agentes Exclusivos DKV",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.segurosfuengirola.com/seguro-dental",
    siteName: "Seguros Fuengirola - Agentes Exclusivos DKV",
    title: "Seguro Dental DKV | 59 Tratamientos Gratis - Agentes Exclusivos",
    description:
      "Agentes exclusivos DKV en Fuengirola. Seguro dental con hasta 59 tratamientos gratis, menores de 14 años GRATIS, sin carencias. Desde 7,90€/mes. Más de 2.710 dentistas en toda España.",
    images: [
      {
        url: "/dental.webp",
        width: 1200,
        height: 630,
        alt: "Seguro dental DKV - Agentes exclusivos en Fuengirola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro Dental DKV | Agentes Exclusivos Fuengirola",
    description:
      "59 tratamientos gratis, niños menores de 14 años GRATIS. Sin carencias. Desde 7,90€/mes. Agentes exclusivos DKV.",
    images: ["/dental.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.com/seguro-dental",
    languages: {
      "es-ES": "https://www.segurosfuengirola.com/seguro-dental",
    },
  },
  category: "Seguros Dentales",
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
    "og:insurance_provider": "DKV Seguros",
    "og:agent_type": "Agente Exclusivo",
  },
};
