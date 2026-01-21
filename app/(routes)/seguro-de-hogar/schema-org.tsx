import Script from "next/script";
import { faqs } from "./data";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.segurosfuengirola.com/#organization",
        name: "Seguros Fuengirola",
        url: "https://www.segurosfuengirola.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.com/logo-sf.webp",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.com/vida.webp",
        description:
          "Agencia de seguros especializada en seguros de hogar, protección de viviendas y servicios de asistencia 24h en Fuengirola y Málaga",
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
          { "@type": "State", name: "Andalucía" },
        ],
        priceRange: "€€",
        telephone: "+34633106025",
        email: "info@segurosfuengirola.com",
      },
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.com/seguro-de-hogar#product",
        name: "Seguro de Hogar DKV",
        description:
          "Seguro de hogar completo con cobertura de incendio, robo, daños por agua, responsabilidad civil, asistencia 24h, servicio manitas y reparación de electrodomésticos incluidos.",
        brand: { "@type": "Organization", name: "DKV Seguros" },
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          lowPrice: "10.70",
          highPrice: "15.70",
          offerCount: "3",
          url: "https://www.segurosfuengirola.com/seguro-de-hogar",
        },
        category: "Seguro de Hogar",
        audience: {
          "@type": "Audience",
          audienceType: "Propietarios e inquilinos de viviendas",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Asistencia",
            value: "24 horas, 365 días",
          },
          {
            "@type": "PropertyValue",
            name: "Servicio manitas",
            value: "Incluido gratuito 1 vez al año",
          },
          {
            "@type": "PropertyValue",
            name: "Descuento segunda vivienda",
            value: "10% para siempre",
          },
          {
            "@type": "PropertyValue",
            name: "Reparación electrodomésticos",
            value: "Desplazamiento y mano de obra gratis",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-hogar#webpage",
        url: "https://www.segurosfuengirola.com/seguro-de-hogar",
        name: "Seguro de Hogar | Protege tu Vivienda en Fuengirola y Málaga",
        description:
          "Seguro de hogar con cobertura completa, asistencia 24h, servicio manitas y reparación de electrodomésticos gratis. Desde 10,70€/mes.",
        inLanguage: "es-ES",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.segurosfuengirola.com/#website",
          url: "https://www.segurosfuengirola.com",
          name: "Seguros Fuengirola",
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
              name: "Seguro de Hogar",
              item: "https://www.segurosfuengirola.com/seguro-de-hogar",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-hogar#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.com/seguro-de-hogar#service",
        serviceType: "Seguro de Hogar",
        provider: {
          "@id": "https://www.segurosfuengirola.com/#organization",
        },
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
          name: "Planes de Seguro de Hogar",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Hogar Basic",
                description:
                  "Aseguro solo los riesgos fundamentales de tu hogar al mejor precio",
                offers: {
                  "@type": "Offer",
                  price: "10.70",
                  priceCurrency: "EUR",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Hogar Complet",
                description:
                  "La mejor respuesta para los riesgos e imprevistos más comunes en tu hogar",
                offers: {
                  "@type": "Offer",
                  price: "13.50",
                  priceCurrency: "EUR",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Hogar Plus",
                description:
                  "Seguro de hogar de última generación con las más amplias garantías",
                offers: {
                  "@type": "Offer",
                  price: "15.70",
                  priceCurrency: "EUR",
                },
              },
            },
          ],
        },
        serviceOutput: {
          "@type": "Service",
          name: "Servicios incluidos",
          description:
            "Asistencia en el hogar 24 horas, servicio manitas gratuito, reparación de electrodomésticos (desplazamiento y mano de obra), asistencia informática, servicios de salud complementarios",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.segurosfuengirola.com/seguro-de-hogar#pricing",
        name: "Planes de Seguro de Hogar",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Hogar Basic",
            item: {
              "@type": "Offer",
              price: "10.70",
              priceCurrency: "EUR",
              description: "Riesgos fundamentales al mejor precio",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DKV Hogar Complet",
            item: {
              "@type": "Offer",
              price: "13.50",
              priceCurrency: "EUR",
              description: "Cobertura completa para imprevistos comunes",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "DKV Hogar Plus",
            item: {
              "@type": "Offer",
              price: "15.70",
              priceCurrency: "EUR",
              description: "Última generación con garantías amplias",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-hogar"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
