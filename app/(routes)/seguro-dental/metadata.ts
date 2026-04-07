import type { Metadata } from "next";

export const dentalMetadata: Metadata = {
  title: "Seguro Dental DKV Málaga | Desde 7,90€ | DKV Dentisalud",
  description:
    "Seguro Dental DKV en Málaga desde 7,90€/mes. 59 tratamientos gratis, limpieza dental sin coste. DKV Dentisalud sin carencias.",
  keywords: [
    // TIER 1 - Keywords principales (Volumen 1000)
    "seguro dental dkv",
    "dkv dentisalud",
    "dkv seguro dental",
    "dkv seguros dentales",
    "dkv dentisalud",
    "seguros dkv dental",

    // TIER 2 - Keywords secundarias (Volumen 140-260)
    "dkv dental precios",
    "dkv dentisalud elite",
    "dkv dentisalud élite",
    "dkv dentisalud classic",
    "precios dkv dental",

    // TIER 3 - Keywords de cola larga + Local
    "dkv cobertura dental",
    "dkv limpieza dental gratis",
    "seguro dental dkv opiniones",
    "dkv dental coberturas",
    "tarifas dkv dental",
    "poliza dental dkv",
    "dentisalud dkv",

    // Keywords locales (PRIORIDAD SEO LOCAL)
    "dkv fuengirola",
    "dkv dental malaga",
    "seguro dental fuengirola",
    "seguro dental málaga",
    "dentista dkv fuengirola",
    "agentes dkv fuengirola",
    "dkv seguros fuengirola",
    "clínica dental dkv málaga",

    // Keywords de intención de compra
    "contratar seguro dental dkv",
    "precio seguro dental dkv",
    "seguro dental barato",
    "seguro dental económico",
    "seguro dental sin carencias",
    "seguro dental niños gratis",

    // Keywords de tratamientos
    "tratamientos dentales gratis",
    "limpieza dental gratuita dkv",
    "ortodoncia con descuento",
    "implantes dentales dkv",
    "cuadro médico dental dkv",
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
    url: "https://www.segurosfuengirola.es/seguro-dental",
    siteName: "Seguros Fuengirola - Agentes Exclusivos DKV",
    title:
      "Seguro Dental DKV Fuengirola | Desde 7,90€ | 59 Tratamientos Gratis + Niños GRATIS",
    description:
      "Seguro Dental DKV en Fuengirola desde 7,90€/mes. 59 tratamientos gratis, limpieza dental sin coste, niños menores de 14 años GRATIS. Sin carencias. Valoración 5 estrellas en Google. ¡Solicita presupuesto!",
    images: [
      {
        url: "https://www.segurosfuengirola.es/dental.webp",
        width: 1200,
        height: 630,
        alt: "Seguro dental DKV Dentisalud - Agentes exclusivos en Fuengirola y Málaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Seguro Dental DKV Fuengirola | Desde 7,90€ | 59 Tratamientos Gratis",
    description:
      "Seguro Dental DKV desde 7,90€/mes. 59 tratamientos gratis, limpieza dental gratis, niños menores de 14 años GRATIS. Sin carencias. 5 estrellas en Google.",
    images: ["https://www.segurosfuengirola.es/dental.webp"],
    creator: "@segurosfuengirola",
  },
  alternates: {
    canonical: "https://www.segurosfuengirola.es/seguro-dental",
    languages: {
      "es-ES": "https://www.segurosfuengirola.es/seguro-dental",
    },
  },
  category: "Seguros Dentales",
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  other: {
    "og:phone_number": "+34951681383",
    "og:email": "info@segurosfuengirola.es",
    "og:locality": "Fuengirola",
    "og:region": "Málaga",
    "og:postal-code": "29640",
    "og:country-name": "España",
    "og:street-address": "Av. Condes de San Isidro, Nº 80",
    "og:insurance_provider": "DKV Seguros",
    "og:agent_type": "Agente Exclusivo",
    // Datos estructurados adicionales para SEO local
    "business:contact_data:street_address": "Av. Condes de San Isidro, Nº 80",
    "business:contact_data:locality": "Fuengirola",
    "business:contact_data:region": "Málaga",
    "business:contact_data:postal_code": "29640",
    "business:contact_data:country_name": "España",
    "place:location:latitude": "36.5398",
    "place:location:longitude": "-4.6262",
  },
};
