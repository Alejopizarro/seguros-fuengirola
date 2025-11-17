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
        image: "https://www.segurosfuengirola.com/family.webp",
        description:
          "Agencia de seguros especializada en seguros de vida, protección familiar y seguridad económica en Fuengirola y Málaga",
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
        "@id": "https://www.segurosfuengirola.com/seguro-de-vida#product",
        name: "Seguro de Vida",
        description:
          "Seguro de vida con capital personalizado, indemnización por fallecimiento, anticipo del capital por enfermedad terminal, asistencia psicológica, testamento online y asesoría jurídica incluida.",
        brand: { "@type": "Organization", name: "DKV Seguros" },
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          url: "https://www.segurosfuengirola.com/seguro-de-vida",
        },
        category: "Seguro de Vida",
        audience: {
          "@type": "Audience",
          audienceType: "Familias y particulares hasta 65 años",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Capital personalizado",
            value: "El cliente decide el capital asegurado",
          },
          {
            "@type": "PropertyValue",
            name: "Anticipo por enfermedad terminal",
            value: "Hasta 50% del capital",
          },
          {
            "@type": "PropertyValue",
            name: "Edad de contratación",
            value: "Hasta 65 años",
          },
          {
            "@type": "PropertyValue",
            name: "Testamento online",
            value: "Incluido gratuitamente",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-vida#webpage",
        url: "https://www.segurosfuengirola.com/seguro-de-vida",
        name: "Seguro de Vida | Protección Económica Familiar en Fuengirola",
        description:
          "Seguro de vida con capital personalizado, asistencia psicológica, testamento online y asesoría jurídica. Anticipo del capital por enfermedad terminal.",
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
              name: "Seguro de Vida",
              item: "https://www.segurosfuengirola.com/seguro-de-vida",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.com/seguro-de-vida#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.com/seguro-de-vida#service",
        serviceType: "Seguro de Vida",
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
          name: "Coberturas de Seguro de Vida",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fallecimiento por cualquier causa",
                description:
                  "Tu familia recibirá el capital asegurado que hayas decidido contratar",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Anticipo por enfermedad terminal",
                description:
                  "Anticipo del 50% del capital si contraes una enfermedad terminal",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Anticipo para gastos de sepelio",
                description: "Hasta 4.000€ para gastos de sepelio",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Asistencia psicológica",
                description: "Atención al duelo presencial y telefónica 24h",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Testamento online",
                description:
                  "Redacta tu testamento en cualquier momento con modificación anual gratuita",
              },
            },
          ],
        },
        serviceOutput: {
          "@type": "Service",
          name: "Servicios incluidos",
          description:
            "Asistencia familiar, asistencia psicológica presencial y telefónica 24h, testamento online gratuito, asesoría legal telefónica, servicios de salud y bienestar DKV Club",
        },
      },
      {
        "@type": "FinancialProduct",
        "@id":
          "https://www.segurosfuengirola.com/seguro-de-vida#financial-product",
        name: "Seguro de Vida DKV",
        description:
          "Protección económica para tu familia con capital personalizado y servicios adicionales",
        provider: {
          "@id": "https://www.segurosfuengirola.com/#organization",
        },
        feesAndCommissionsSpecification:
          "Prima variable según edad y capital contratado. Descuentos por forma de pago: anual 5%, semestral 3%, trimestral 2%.",
        termsOfService:
          "Contratación hasta 65 años, renovación anual hasta los 70 años",
      },
    ],
  };

  return (
    <Script
      id="schema-vida"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
