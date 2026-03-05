import Script from "next/script";
import { faqs } from "./data";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.segurosfuengirola.es/#organization",

        // CRÍTICO: Nombre con DKV destacado
        name: "DKV Seguros Fuengirola - Agentes Oficiales",
        alternateName: "Agentes DKV Fuengirola",
        legalName: "Seguros Fuengirola - Distribuidor Autorizado DKV",

        url: "https://www.segurosfuengirola.es",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.es/logo-sf.webp",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.es/deceso.webp",

        // CRÍTICO: Description con "DKV Decesos"
        description:
          "Agentes oficiales de DKV Seguros especializados en DKV Decesos, servicios funerarios y repatriación en Fuengirola y Málaga. Más de 10 años asesorando en seguros DKV.",

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
        email: "info@segurosfuengirola.es",

        // NUEVO: Slogan con DKV
        slogan: "Tu agencia oficial DKV Decesos en Fuengirola",

        // NUEVO: Brands que representamos
        brand: {
          "@type": "Brand",
          name: "DKV Seguros",
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Seguros de Decesos DKV",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Seguro de Decesos DKV",
                description:
                  "Seguro de decesos DKV con repatriación incluida, servicio funerario completo y apoyo psicológico en Fuengirola y Málaga.",
              },
            },
          ],
        },
      },
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#product",

        // CRÍTICO: Nombre con "DKV Decesos"
        name: "DKV Decesos - Seguro de Decesos",
        alternateName: "Seguro de Decesos DKV",

        // CRÍTICO: Description con keywords
        description:
          "DKV Decesos es el seguro de decesos con servicio funerario completo, repatriación nacional e internacional incluida, apoyo psicológico, testamento online y asistencia médica mundial hasta 18.000€. Niños gratis hasta 6 años.",

        brand: {
          "@type": "Brand",
          name: "DKV Seguros",
          logo: "https://www.dkvseguros.com/logo-sf.webp",
        },

        manufacturer: {
          "@type": "Organization",
          name: "DKV Seguros",
        },

        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          lowPrice: "1.80",
          highPrice: "2.25",
          offerCount: "3",
          url: "https://www.segurosfuengirola.es/seguro-de-decesos",

          // NUEVO: Seller con DKV
          seller: {
            "@type": "Organization",
            name: "DKV Seguros Fuengirola",
          },
        },

        category: "Seguro de Decesos",

        // NUEVO: SKU y MPN para productos
        sku: "DKV-DECESOS-2024",
        mpn: "DKV-PROTECCION-FAMILIAR",

        audience: {
          "@type": "Audience",
          audienceType: "Familias y particulares",
        },

        // CRÍTICO: Keywords en additionalProperty
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Marca",
            value: "DKV Seguros",
          },
          {
            "@type": "PropertyValue",
            name: "Producto",
            value: "DKV Decesos",
          },
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
          {
            "@type": "PropertyValue",
            name: "Testamento online",
            value: "Incluido gratuito",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#webpage",
        url: "https://www.segurosfuengirola.es/seguro-de-decesos",

        // CRÍTICO: Name con DKV al principio
        name: "DKV Decesos | Seguro de Decesos con Repatriación en Fuengirola",

        // CRÍTICO: Description con keywords
        description:
          "Contrata DKV Decesos con repatriación incluida, servicio funerario completo y apoyo psicológico. Niños gratis hasta 6 años. Agentes oficiales DKV en Fuengirola.",

        inLanguage: "es-ES",

        // NUEVO: Keywords en la página
        keywords:
          "dkv decesos, seguros decesos dkv, dkv protección familiar, seguro decesos dkv fuengirola",

        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.segurosfuengirola.es/#website",
          url: "https://www.segurosfuengirola.es",
          name: "DKV Seguros Fuengirola",
        },

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://www.segurosfuengirola.es",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "DKV Decesos",
              item: "https://www.segurosfuengirola.es/seguro-de-decesos",
            },
          ],
        },

        // NUEVO: Mentions de DKV
        mentions: [
          {
            "@type": "Brand",
            name: "DKV Seguros",
          },
          {
            "@type": "Product",
            name: "DKV Protección Familiar",
          },
          {
            "@type": "Product",
            name: "DKV Buen Legado",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#service",

        // CRÍTICO: serviceType con DKV
        serviceType: "DKV Decesos - Seguro de Decesos",
        name: "DKV Decesos",

        provider: {
          "@id": "https://www.segurosfuengirola.es/#organization",
        },

        // NUEVO: Brand del servicio
        brand: {
          "@type": "Brand",
          name: "DKV Seguros",
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
          name: "Planes DKV Decesos",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DKV Protección Familiar",
                description:
                  "El seguro de decesos DKV que acompaña a tu familia en todo momento",
                brand: "DKV Seguros",
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
                  "Seguro de decesos DKV con despedida de bajo impacto medioambiental",
                brand: "DKV Seguros",
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
                  "DKV Decesos que incluye servicios de salud adicionales",
                brand: "DKV Seguros",
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
          name: "Servicios DKV Decesos incluidos",
          description:
            "DKV Decesos incluye: Servicio funerario completo, repatriación nacional e internacional, apoyo psicológico, testamento online, asistencia médica mundial hasta 18.000€, borrado de huella digital",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#pricing",
        name: "Precios DKV Decesos",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Protección Familiar",
            item: {
              "@type": "Offer",
              price: "1.80",
              priceCurrency: "EUR",
              description: "DKV Decesos básico",
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
              description: "DKV Decesos ecológico",
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
              description: "DKV Decesos premium",
            },
          },
        ],
      },

      // NUEVO: Organization Schema específico para DKV
      {
        "@type": "Organization",
        "@id": "https://www.segurosfuengirola.es/seguro-de-decesos#dkv-partner",
        name: "DKV Seguros Fuengirola",
        parentOrganization: {
          "@type": "Organization",
          name: "DKV Seguros",
        },
        memberOf: {
          "@type": "Organization",
          name: "DKV Seguros España",
        },
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
