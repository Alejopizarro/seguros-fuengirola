import Script from "next/script";
import { faqs, testimonials } from "./data";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. ORGANIZACIÓN / AGENCIA DE SEGUROS
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.segurosfuengirola.es/#organization",
        name: "Seguros Fuengirola - Agentes Exclusivos DKV",
        alternateName: [
          "Agentes DKV Fuengirola",
          "DKV Fuengirola",
          "Seguros DKV Fuengirola",
        ],
        url: "https://www.segurosfuengirola.es",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.es/logo-sf.webp",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.es/dental.webp",
        description:
          "Agentes exclusivos DKV en Fuengirola especializados en seguro dental DKV, seguros de salud y protección familiar. Más de 2.710 dentistas y 1.460 clínicas dentales en el cuadro médico DKV.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Condes de San Isidro, Nº 80",
          addressLocality: "Fuengirola",
          addressRegion: "Málaga",
          postalCode: "29640",
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
          { "@type": "City", name: "Benalmádena" },
          { "@type": "City", name: "Mijas" },
          { "@type": "State", name: "Andalucía" },
          { "@type": "Place", name: "Costa del Sol" },
        ],
        priceRange: "€€",
        telephone: "+34951681383",
        email: "info@segurosfuengirola.es",
        slogan:
          "Agentes Exclusivos DKV - Tu seguro dental en las mejores manos",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "17:00",
            closes: "20:00",
          },
        ],
        sameAs: ["https://www.instagram.com/segurosfuengirola"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Seguros DKV en Fuengirola",
          itemListElement: [
            { "@type": "Service", name: "Seguro Dental DKV" },
            { "@type": "Service", name: "Seguro de Salud DKV" },
            { "@type": "Service", name: "Seguro de Vida DKV" },
            { "@type": "Service", name: "Seguro de Hogar DKV" },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: testimonials.length.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating.toString(),
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: t.author,
          },
          reviewBody: t.text,
        })),
      },

      // 2. PRODUCTO PRINCIPAL - SEGURO DENTAL DKV
      {
        "@type": "Product",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#product",
        name: "Seguro Dental DKV Dentisalud",
        alternateName: [
          "DKV Dentisalud",
          "Seguro Dental DKV",
          "DKV Seguro Dental",
        ],
        brand: {
          "@type": "Organization",
          name: "DKV Seguros",
          url: "https://www.dkvseguros.com",
        },
        description:
          "Seguro dental DKV Dentisalud con hasta 59 tratamientos dentales gratuitos incluyendo limpieza dental gratis. Sin carencias, sin autorizaciones. Niños menores de 14 años gratis. Precios desde 7,90€/mes. Acceso a más de 2.710 dentistas en toda España.",
        image: "https://www.segurosfuengirola.es/dental.webp",
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          lowPrice: "7.90",
          highPrice: "10.90",
          offerCount: "2",
          url: "https://www.segurosfuengirola.es/seguro-dental",
          priceValidUntil: "2026-12-31",
          seller: {
            "@id": "https://www.segurosfuengirola.es/#organization",
          },
        },
        category: "Seguro Dental",
        audience: {
          "@type": "Audience",
          audienceType: "Familias, particulares, niños y adultos",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Tratamientos gratuitos",
            value: "Hasta 59 tratamientos dentales sin coste adicional",
          },
          {
            "@type": "PropertyValue",
            name: "Limpieza dental",
            value: "GRATIS - Incluida sin coste",
          },
          {
            "@type": "PropertyValue",
            name: "Menores de 14 años",
            value: "GRATIS con adulto asegurado",
          },
          {
            "@type": "PropertyValue",
            name: "Carencias",
            value: "Sin carencias - Uso desde el primer día",
          },
          {
            "@type": "PropertyValue",
            name: "Cuadro médico dental",
            value: "Más de 2.710 dentistas y 1.460 clínicas",
          },
          {
            "@type": "PropertyValue",
            name: "Descuentos",
            value: "Hasta 40% en ortodoncia, implantes y más",
          },
          {
            "@type": "PropertyValue",
            name: "Cobertura geográfica",
            value: "Toda España - Fuengirola, Málaga, Costa del Sol",
          },
        ],
        review: testimonials.map((t) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating.toString(),
            bestRating: "5",
            worstRating: "1",
          },
          author: {
            "@type": "Person",
            name: t.author,
          },
          reviewBody: t.text,
          datePublished: t.date,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: testimonials.length.toString(),
          bestRating: "5",
          worstRating: "1",
        },
      },

      // 3. PÁGINA WEB
      {
        "@type": "WebPage",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#webpage",
        url: "https://www.segurosfuengirola.es/seguro-dental",
        name: "Seguro Dental DKV | Precios desde 7,90€ | Agentes DKV Fuengirola y Málaga",
        description:
          "Seguro dental DKV Dentisalud con 59 tratamientos gratis, limpieza dental gratis, sin carencias. Niños menores de 14 años GRATIS. Agentes exclusivos DKV en Fuengirola.",
        inLanguage: "es-ES",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.segurosfuengirola.es/#website",
          url: "https://www.segurosfuengirola.es",
          name: "Seguros Fuengirola - Agentes Exclusivos DKV",
          publisher: {
            "@id": "https://www.segurosfuengirola.es/#organization",
          },
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
              name: "Seguro Dental DKV",
              item: "https://www.segurosfuengirola.es/seguro-dental",
            },
          ],
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-description", ".faq-answer"],
        },
        mainEntity: {
          "@id": "https://www.segurosfuengirola.es/seguro-dental#product",
        },
      },

      // 4. FAQ PAGE - Optimizado para Rich Snippets
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // 5. SERVICIO DE SEGURO DENTAL
      {
        "@type": "Service",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#service",
        serviceType: "Seguro Dental",
        name: "Seguro Dental DKV Dentisalud",
        provider: {
          "@id": "https://www.segurosfuengirola.es/#organization",
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
              name: "DKV Dentisalud Classic",
              description:
                "Seguro dental DKV con 57 tratamientos gratuitos incluyendo limpieza dental gratis. Descuento del 30% en ortodoncia e implantes.",
              price: "7.90",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "7.90",
                priceCurrency: "EUR",
                unitText: "mes",
                billingDuration: "P1M",
              },
              itemOffered: {
                "@type": "Service",
                name: "DKV Dentisalud Classic",
              },
            },
            {
              "@type": "Offer",
              name: "DKV Dentisalud Élite",
              description:
                "Seguro dental DKV premium con 59 tratamientos gratuitos. Limpieza dental gratis, 40% de descuento en ortodoncia e implantes dentales.",
              price: "10.90",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "10.90",
                priceCurrency: "EUR",
                unitText: "mes",
                billingDuration: "P1M",
              },
              itemOffered: {
                "@type": "Service",
                name: "DKV Dentisalud Élite",
              },
            },
          ],
        },
      },

      // 6. LISTA DE PRECIOS
      {
        "@type": "ItemList",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#pricing",
        name: "Precios del Seguro Dental DKV",
        description: "Tarifas y precios de DKV Dentisalud Classic y Élite",
        numberOfItems: 2,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Dentisalud Classic",
            item: {
              "@type": "Offer",
              price: "7.90",
              priceCurrency: "EUR",
              description:
                "57 tratamientos dentales gratis + 30% descuento. Limpieza dental gratis incluida.",
              availability: "https://schema.org/InStock",
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
              description:
                "59 tratamientos dentales gratis + 40% descuento. Limpieza dental gratis incluida.",
              availability: "https://schema.org/InStock",
            },
          },
        ],
      },

      // 7. NEGOCIO MÉDICO / RED DENTAL
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.segurosfuengirola.es/seguro-dental#medical",
        name: "Cuadro Médico Dental DKV",
        description:
          "Red de más de 2.710 dentistas profesionales y 1.460 clínicas dentales concertadas en toda España. Acceso sin autorización previa con el seguro dental DKV.",
        medicalSpecialty: [
          "Odontología General",
          "Odontología Preventiva",
          "Odontopediatría",
          "Odontología Quirúrgica",
          "Odontología Estética",
          "Implantología Dental",
          "Ortodoncia",
          "Endodoncia",
          "Periodoncia",
          "Radiología Dental",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Limpieza dental",
            procedureType: "Preventiva",
            description: "Limpieza dental profesional GRATIS con seguro DKV",
          },
          {
            "@type": "MedicalProcedure",
            name: "Revisión dental anual",
            procedureType: "Diagnóstico",
            description: "Revisión bucodental completa GRATIS",
          },
          {
            "@type": "MedicalProcedure",
            name: "Radiografía dental",
            procedureType: "Diagnóstico",
            description: "Radiografías dentales GRATIS",
          },
          {
            "@type": "MedicalProcedure",
            name: "Extracción dental simple",
            procedureType: "Quirúrgica",
            description: "Extracciones simples GRATIS",
          },
          {
            "@type": "MedicalProcedure",
            name: "Empastes dentales",
            procedureType: "Restaurativa",
            description: "Empastes con descuento especial DKV",
          },
          {
            "@type": "MedicalProcedure",
            name: "Ortodoncia",
            procedureType: "Correctiva",
            description: "Ortodoncia con hasta 40% de descuento",
          },
          {
            "@type": "MedicalProcedure",
            name: "Implantes dentales",
            procedureType: "Quirúrgica",
            description: "Implantes de titanio con descuento DKV",
          },
        ],
      },

      // 8. LUGAR LOCAL (para SEO local)
      {
        "@type": "LocalBusiness",
        "@id": "https://www.segurosfuengirola.es/#localbusiness",
        name: "DKV Fuengirola - Agentes Exclusivos",
        image: "https://www.segurosfuengirola.es/logo-sf.webp",
        telephone: "+34951681383",
        email: "info@segurosfuengirola.es",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Condes de San Isidro, Nº 80",
          addressLocality: "Fuengirola",
          addressRegion: "Málaga",
          postalCode: "29640",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "36.5398",
          longitude: "-4.6262",
        },
        url: "https://www.segurosfuengirola.es",
        priceRange: "€€",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: testimonials.length.toString(),
          bestRating: "5",
          worstRating: "1",
        },
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
