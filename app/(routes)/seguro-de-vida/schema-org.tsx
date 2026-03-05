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
        image: "https://www.segurosfuengirola.es/family.webp",

        // CRÍTICO: Description con "DKV Vida"
        description:
          "Agentes oficiales de DKV Seguros especializados en DKV Vida, seguros de vida y protección familiar en Fuengirola y Málaga. Expertos en DKV Vida con capital personalizado.",

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

        // NUEVO: Slogan con DKV Vida
        slogan: "Tu agencia oficial DKV Vida en Fuengirola",

        // NUEVO: Brands que representamos
        brand: {
          "@type": "Brand",
          name: "DKV Seguros",
        },

        // NUEVO: Contacto adicional
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+34633106025",
          contactType: "customer service",
          areaServed: "ES",
          availableLanguage: ["Spanish"],
        },
      },
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.es/seguro-de-vida#product",

        // CRÍTICO: Nombre con "DKV Vida"
        name: "DKV Vida - Seguro de Vida",
        alternateName: "Seguro de Vida DKV",

        // CRÍTICO: Description con keywords
        description:
          "DKV Vida es el seguro de vida con capital personalizado, anticipo del 50% por enfermedad terminal, asistencia psicológica presencial y telefónica 24h, testamento online gratuito y asesoría legal. Contratación hasta 65 años.",

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
          url: "https://www.segurosfuengirola.es/seguro-de-vida",

          // NUEVO: Seller con DKV
          seller: {
            "@type": "Organization",
            name: "DKV Seguros Fuengirola",
            telephone: "+34633106025",
          },
        },

        category: "Seguro de Vida",

        // NUEVO: SKU y MPN para productos
        sku: "DKV-VIDA-2024",
        mpn: "DKV-VIDA-PROTECCION",

        audience: {
          "@type": "Audience",
          audienceType: "Familias, particulares hasta 65 años",
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
            value: "DKV Vida",
          },
          {
            "@type": "PropertyValue",
            name: "Capital personalizado",
            value: "El cliente decide el monto",
          },
          {
            "@type": "PropertyValue",
            name: "Anticipo enfermedad terminal",
            value: "50% del capital",
          },
          {
            "@type": "PropertyValue",
            name: "Edad de contratación",
            value: "Hasta 65 años",
          },
          {
            "@type": "PropertyValue",
            name: "Testamento online",
            value: "Incluido gratuito",
          },
          {
            "@type": "PropertyValue",
            name: "Asistencia psicológica",
            value: "24 horas telefónica",
          },
          {
            "@type": "PropertyValue",
            name: "Teléfono de contacto",
            value: "+34 633 10 60 25",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-vida#webpage",
        url: "https://www.segurosfuengirola.es/seguro-de-vida",

        // CRÍTICO: Name con DKV Vida al principio
        name: "DKV Vida | Seguro de Vida DKV en Fuengirola y Málaga",

        // CRÍTICO: Description con keywords
        description:
          "Contrata DKV Vida con capital personalizado, anticipo por enfermedad terminal y testamento online gratis. Agentes oficiales DKV en Fuengirola. Tel: 633 10 60 25",

        inLanguage: "es-ES",

        // NUEVO: Keywords en la página
        keywords:
          "dkv vida, seguro vida dkv, dkv seguro vida, seguro de vida dkv fuengirola",

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
              name: "DKV Vida",
              item: "https://www.segurosfuengirola.es/seguro-de-vida",
            },
          ],
        },

        // NUEVO: Mentions de DKV Vida
        mentions: [
          {
            "@type": "Brand",
            name: "DKV Seguros",
          },
          {
            "@type": "Product",
            name: "DKV Vida",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.es/seguro-de-vida#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.es/seguro-de-vida#service",

        // CRÍTICO: serviceType con DKV Vida
        serviceType: "DKV Vida - Seguro de Vida",
        name: "DKV Vida",

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
          name: "Coberturas DKV Vida",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fallecimiento por cualquier causa - DKV Vida",
                description:
                  "Tu familia recibirá el capital que decidas contratar con DKV Vida",
                brand: "DKV Seguros",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Anticipo por enfermedad terminal - DKV Vida",
                description:
                  "DKV Vida anticipa el 50% del capital si contraes una enfermedad terminal",
                brand: "DKV Seguros",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Testamento online gratis - DKV Vida",
                description:
                  "Con DKV Vida puedes redactar tu testamento online en cualquier momento",
                brand: "DKV Seguros",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Asistencia psicológica 24h - DKV Vida",
                description:
                  "DKV Vida incluye asistencia psicológica presencial y telefónica 24h",
                brand: "DKV Seguros",
              },
            },
          ],
        },

        serviceOutput: {
          "@type": "Service",
          name: "Servicios DKV Vida incluidos",
          description:
            "DKV Vida incluye: Asistencia familiar, asistencia psicológica presencial y telefónica 24h, testamento online gratuito, asesoría legal telefónica, servicios de salud y bienestar DKV Club",
        },
      },
      {
        "@type": "FinancialProduct",
        "@id":
          "https://www.segurosfuengirola.es/seguro-de-vida#financial-product",
        name: "DKV Vida - Seguro de Vida",
        description:
          "Protección económica familiar con DKV Vida, capital personalizado y servicios adicionales",
        provider: {
          "@id": "https://www.segurosfuengirola.es/#organization",
        },
        brand: {
          "@type": "Brand",
          name: "DKV Seguros",
        },
        feesAndCommissionsSpecification:
          "Prima de DKV Vida variable según edad y capital contratado. Descuentos por forma de pago: anual 5%, semestral 3%, trimestral 2%.",
        termsOfService:
          "DKV Vida: Contratación hasta 65 años, renovación anual hasta los 70 años",
      },

      // NUEVO: Organization Schema específico para DKV
      {
        "@type": "Organization",
        "@id": "https://www.segurosfuengirola.es/seguro-de-vida#dkv-partner",
        name: "DKV Seguros Fuengirola",
        telephone: "+34633106025",
        parentOrganization: {
          "@type": "Organization",
          name: "DKV Seguros",
        },
        memberOf: {
          "@type": "Organization",
          name: "DKV Seguros España",
        },
      },

      // NUEVO: LocalBusiness para SEO local
      {
        "@type": "LocalBusiness",
        "@id": "https://www.segurosfuengirola.es/#localbusiness",
        name: "DKV Seguros Fuengirola - Agente Oficial DKV Vida",
        image: "https://www.segurosfuengirola.es/family.webp",
        telephone: "+34633106025",
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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        priceRange: "€€",
        hasMap: "https://maps.google.com/?q=Fuengirola,Málaga",
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
