import Script from "next/script";
import { faqs } from "./data";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.segurosfuengirola.com/#organization",
        name: "Seguros Fuengirola - Agentes Exclusivos DKV",
        alternateName: "Agentes DKV Fuengirola",
        url: "https://www.segurosfuengirola.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.com/logo.png",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.com/dental.webp",
        description:
          "Agencia exclusiva de seguros DKV especializada en seguros dentales, salud y protección familiar en Fuengirola y Málaga. Más de 2.710 dentistas y 1.460 clínicas dentales.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fuengirola",
          addressRegion: "Málaga",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "36.5398",
          longitude: "-4.6262",
        },
        areaServed: [
          { "@type": "City", name: "Fuengirola" },
          { "@type": "City", name: "Málaga" },
          { "@type": "City", name: "Marbella" },
          { "@type": "City", name: "Torremolinos" },
          { "@type": "State", name: "Andalucía" },
        ],
        priceRange: "€€",
        telephone: "+34633106025",
        email: "info@segurosfuengirola.com",
        slogan:
          "Agentes Exclusivos DKV - Tu salud bucodental en las mejores manos",
      },
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#product",
        name: "Seguro Dental DKV Dentisalud",
        brand: { "@type": "Organization", name: "DKV Seguros" },
        description:
          "Seguro dental DKV con hasta 59 tratamientos incluidos sin coste adicional, sin carencias, sin autorizaciones. Menores de 14 años gratis. Acceso a más de 2.710 dentistas en toda España.",
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          lowPrice: "7.90",
          highPrice: "10.90",
          offerCount: "2",
          url: "https://www.segurosfuengirola.com/seguro-dental",
        },
        category: "Seguro Dental",
        audience: {
          "@type": "Audience",
          audienceType: "Familias, particulares y niños",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Tratamientos incluidos",
            value: "Hasta 59 sin coste adicional",
          },
          {
            "@type": "PropertyValue",
            name: "Menores de 14 años",
            value: "GRATIS con adulto asegurado",
          },
          {
            "@type": "PropertyValue",
            name: "Carencias",
            value: "Sin carencias - Desde el primer día",
          },
          {
            "@type": "PropertyValue",
            name: "Cuadro médico",
            value: "Más de 2.710 dentistas y 1.460 clínicas",
          },
          {
            "@type": "PropertyValue",
            name: "Descuentos",
            value: "Hasta 40% en otros tratamientos",
          },
          {
            "@type": "PropertyValue",
            name: "Agencia",
            value: "Agentes Exclusivos DKV",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#webpage",
        url: "https://www.segurosfuengirola.com/seguro-dental",
        name: "Seguro Dental DKV | Agentes Exclusivos en Fuengirola y Málaga",
        description:
          "Agentes exclusivos DKV. Seguro dental con hasta 59 tratamientos gratis, menores de 14 años GRATIS, sin carencias.",
        inLanguage: "es-ES",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.segurosfuengirola.com/#website",
          url: "https://www.segurosfuengirola.com",
          name: "Seguros Fuengirola - Agentes Exclusivos DKV",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://www.segurosfuengirola.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Seguro Dental DKV",
              item: "https://www.segurosfuengirola.com/seguro-dental",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#service",
        serviceType: "Seguro Dental",
        provider: {
          "@id": "https://www.segurosfuengirola.com/#organization",
        },
        brand: { "@type": "Organization", name: "DKV Seguros" },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "36.5398",
            longitude: "-4.6262",
          },
          geoRadius: "50000",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planes de Seguro Dental DKV",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Dentisalud Classic",
                description:
                  "57 tratamientos incluidos sin coste adicional y otros con 30% de descuento",
                offers: {
                  "@type": "Offer",
                  price: "7.90",
                  priceCurrency: "EUR",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Dentisalud Élite",
                description:
                  "59 tratamientos incluidos sin coste adicional y otros con 40% de descuento",
                offers: {
                  "@type": "Offer",
                  price: "10.90",
                  priceCurrency: "EUR",
                },
              },
            },
          ],
        },
        serviceOutput: {
          "@type": "Service",
          name: "Servicios y tratamientos incluidos",
          description:
            "Revisión anual gratuita, limpieza bucal gratuita, radiografías sin coste, extracciones simples gratis, empastes, ortodoncia con descuento, implantes con descuento, acceso a todas las especialidades odontológicas",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#pricing",
        name: "Planes de Seguro Dental DKV",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Dentisalud Classic",
            item: {
              "@type": "Offer",
              price: "7.90",
              priceCurrency: "EUR",
              description: "57 tratamientos incluidos + 30% descuento",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DKV Dentisalud Élite",
            item: {
              "@type": "Offer",
              price: "10.90",
              priceCurrency: "EUR",
              description: "59 tratamientos incluidos + 40% descuento",
            },
          },
        ],
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.segurosfuengirola.com/seguro-dental#medical",
        name: "Red de Clínicas Dentales DKV",
        description:
          "Más de 2.710 dentistas profesionales y 1.460 clínicas dentales concertadas en toda España",
        medicalSpecialty: [
          "Odontología General",
          "Odontología Preventiva",
          "Odontopediatría",
          "Odontología Quirúrgica",
          "Odontología Estética",
          "Implantología",
          "Ortodoncia",
          "Endodoncia",
          "Periodoncia",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Limpieza dental",
            procedureType: "Preventiva",
          },
          {
            "@type": "MedicalProcedure",
            name: "Empastes",
            procedureType: "Restaurativa",
          },
          {
            "@type": "MedicalProcedure",
            name: "Ortodoncia",
            procedureType: "Correctiva",
          },
          {
            "@type": "MedicalProcedure",
            name: "Implantes dentales",
            procedureType: "Quirúrgica",
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-dental"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
