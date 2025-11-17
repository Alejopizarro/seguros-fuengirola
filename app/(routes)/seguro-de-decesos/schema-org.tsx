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
          url: "https://www.segurosfuengirola.com/logo.png",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.com/deceso.webp",
        description:
          "Agencia de seguros especializada en seguros de decesos, servicios funerarios, repatriación y protección familiar en Fuengirola y Málaga",
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
        "@id": "https://www.segurosfuengirola.com/seguro-de-decesos#product",
        name: "Seguro de Decesos",
        description:
          "Seguro de decesos con servicio funerario completo, repatriación nacional e internacional incluida, apoyo psicológico, testamento online y asistencia médica mundial hasta 18.000€.",
        brand: { "@type": "Organization", name: "DKV Seguros" },
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          lowPrice: "1.80",
          highPrice: "2.25",
          offerCount: "3",
          url: "https://www.segurosfuengirola.com/seguro-de-decesos",
        },
        category: "Seguro de Decesos",
        audience: {
          "@type": "Audience",
          audienceType: "Familias y particulares",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Repatriación",
            value: "Nacional e internacional incluida",
          },
          {
            "@type": "PropertyValue",
            name: "Niños",
            value: "Gratis hasta 6 años",
          },
          {
            "@type": "PropertyValue",
            name: "Asistencia médica mundial",
            value: "Hasta 18.000€",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-decesos#webpage",
        url: "https://www.segurosfuengirola.com/seguro-de-decesos",
        name: "Seguro de Decesos | Protección Familiar en Fuengirola y Málaga",
        description:
          "Seguro de decesos con repatriación incluida, servicio funerario completo y apoyo psicológico. Niños gratis hasta 6 años.",
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
              name: "Seguro de Decesos",
              item: "https://www.segurosfuengirola.com/seguro-de-decesos",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-decesos#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.com/seguro-de-decesos#service",
        serviceType: "Seguro de Decesos",
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
          name: "Planes de Seguro de Decesos",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Protección Familiar",
                description:
                  "El seguro de decesos que acompaña a tu familia en todo momento",
                offers: {
                  "@type": "Offer",
                  price: "1.80",
                  priceCurrency: "EUR",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Buen Legado",
                description:
                  "Seguro de decesos con despedida de bajo impacto medioambiental",
                offers: {
                  "@type": "Offer",
                  price: "2.00",
                  priceCurrency: "EUR",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Protección Familiar con Serviplus",
                description:
                  "Incluye servicios de salud adicionales como chat médico 24h y tratamientos dentales",
                offers: {
                  "@type": "Offer",
                  price: "2.25",
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
            "Servicio funerario completo, repatriación nacional e internacional, apoyo psicológico, testamento online, asistencia médica mundial hasta 18.000€, borrado de huella digital",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.segurosfuengirola.com/seguro-de-decesos#pricing",
        name: "Planes de Seguro de Decesos",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Protección Familiar",
            item: {
              "@type": "Offer",
              price: "1.80",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DKV Buen Legado",
            item: {
              "@type": "Offer",
              price: "2.00",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "DKV Protección Familiar con Serviplus",
            item: {
              "@type": "Offer",
              price: "2.25",
              priceCurrency: "EUR",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-decesos"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
