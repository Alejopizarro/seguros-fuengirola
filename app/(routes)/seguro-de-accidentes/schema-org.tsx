import Script from "next/script";
import { faqs } from "./data";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.segurosfuengirola.es/#organization",
        name: "Seguros Fuengirola",
        url: "https://www.segurosfuengirola.es",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.es/logo-sf.webp",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.es/accidentes.webp",
        description:
          "Agencia de seguros especializada en seguros de accidentes, hogar, salud y más en Fuengirola y Málaga",
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
        email: "info@segurosfuengirola.es",
      },
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.es/seguro-de-accidentes#product",
        name: "Seguro de Accidentes",
        description:
          "Seguro de accidentes con cobertura 24 horas. Indemnización por invalidez permanente, fallecimiento, hospitalización y asistencia médica telefónica gratuita.",
        brand: { "@type": "Organization", name: "Seguros Fuengirola" },
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          url: "https://www.segurosfuengirola.es/seguro-de-accidentes",
        },
        category: "Seguro de Accidentes",
        audience: {
          "@type": "Audience",
          audienceType: "Particulares y empresas",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-accidentes#webpage",
        url: "https://www.segurosfuengirola.es/seguro-de-accidentes",
        name: "Seguro de Accidentes | Protección 24h en Fuengirola y Málaga",
        description:
          "Seguro de accidentes con indemnización por invalidez y fallecimiento. Cobertura 24h, asistencia médica telefónica y hospitalización.",
        inLanguage: "es-ES",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.segurosfuengirola.es/#website",
          url: "https://www.segurosfuengirola.es",
          name: "Seguros Fuengirola",
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
              name: "Seguro de Accidentes",
              item: "https://www.segurosfuengirola.es/seguro-de-accidentes",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-accidentes#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.es/seguro-de-accidentes#service",
        serviceType: "Seguro de Accidentes",
        provider: {
          "@id": "https://www.segurosfuengirola.es/#organization",
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
          name: "Modalidades de Seguro de Accidentes",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cobertura 24 horas",
                description:
                  "Cubre todos los accidentes ocurridos en tu vida personal y profesional",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cobertura profesional",
                description: "Cubre exclusivamente los accidentes laborales",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cobertura extraprofesional",
                description:
                  "Cubre exclusivamente los accidentes en tu vida privada",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cobertura por accidente de circulación",
                description: "Cubre todos los accidentes en circulación",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <Script
      id="schema-accidentes"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
