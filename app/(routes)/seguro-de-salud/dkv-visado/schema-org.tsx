import Script from "next/script";
import { faqs } from "./data";

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
          "Seguro Médico Extranjeros Fuengirola",
        ],
        url: "https://www.segurosfuengirola.es",
        logo: {
          "@type": "ImageObject",
          url: "https://www.segurosfuengirola.es/logo.png",
          width: 250,
          height: 60,
        },
        image: "https://www.segurosfuengirola.es/extranjeros.webp",
        description:
          "Agentes exclusivos DKV en Fuengirola especializados en seguros médicos para extranjeros en España. Seguros válidos para visado, NIE y permiso de residencia. Más de 51.000 médicos en el cuadro médico DKV.",
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
          { "@type": "City", name: "Estepona" },
          { "@type": "State", name: "Andalucía" },
          { "@type": "Place", name: "Costa del Sol" },
        ],
        priceRange: "€€",
        telephone: "+34951681383",
        email: "info@segurosfuengirola.es",
        slogan: "Tu seguro médico para extranjeros en las mejores manos",
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
        knowsAbout: [
          "Seguro médico para extranjeros",
          "Seguro de salud para visado España",
          "Seguro médico NIE",
          "Seguro permiso residencia España",
          "DKV Integral extranjeros",
        ],
      },

      // 2. PRODUCTO PRINCIPAL - SEGURO MÉDICO PARA EXTRANJEROS
      {
        "@type": "Product",
        "@id":
          "https://www.segurosfuengirola.es/seguro-salud-extranjeros#product",
        name: "Seguro Médico para Extranjeros en España - DKV Integral",
        alternateName: [
          "DKV Integral Extranjeros",
          "Seguro Médico Extranjeros España",
          "Seguro Salud Visado España",
          "DKV Plan Visa",
          "Seguro Médico NIE",
        ],
        brand: {
          "@type": "Organization",
          name: "DKV Seguros",
          url: "https://www.dkvseguros.com",
        },
        description:
          "Seguro médico para extranjeros en España válido para solicitar visado, NIE y permiso de residencia. DKV Integral con cobertura completa, sin copagos (modalidad Élite), sin carencias en la mayoría de servicios. Más de 51.000 médicos y 1.000 centros sanitarios. Contratación disponible hasta 3 meses antes de la fecha de efecto.",
        image: "https://www.segurosfuengirola.es/extranjeros.webp",
        category: "Seguro Médico para Extranjeros",
        audience: {
          "@type": "Audience",
          audienceType:
            "Extranjeros en España, estudiantes internacionales, solicitantes de visado y residencia",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Válido para extranjería",
            value: "Visado, NIE y permiso de residencia",
          },
          {
            "@type": "PropertyValue",
            name: "Copagos",
            value: "Sin copagos en modalidad Élite",
          },
          {
            "@type": "PropertyValue",
            name: "Carencias",
            value: "Sin carencias en la mayoría de servicios",
          },
          {
            "@type": "PropertyValue",
            name: "Contratación anticipada",
            value: "Hasta 3 meses antes de la fecha de efecto",
          },
          {
            "@type": "PropertyValue",
            name: "Cuadro médico",
            value: "Más de 51.000 médicos y 1.000 centros sanitarios",
          },
          {
            "@type": "PropertyValue",
            name: "Cobertura dental",
            value: "Incluida sin coste adicional",
          },
          {
            "@type": "PropertyValue",
            name: "Asistencia internacional",
            value: "Hasta 20.000€ en viajes de 180 días",
          },
          {
            "@type": "PropertyValue",
            name: "Pago",
            value: "Anual, con tarjeta sin cuenta bancaria",
          },
          {
            "@type": "PropertyValue",
            name: "Póliza vitalicia",
            value: "A partir del tercer año",
          },
        ],
      },

      // 3. PÁGINA WEB
      {
        "@type": "WebPage",
        "@id":
          "https://www.segurosfuengirola.es/seguro-salud-extranjeros#webpage",
        url: "https://www.segurosfuengirola.es/seguro-salud-extranjeros",
        name: "Seguro Médico para Extranjeros en España | Visado y Residencia | DKV Fuengirola",
        description:
          "Seguro médico para extranjeros válido para visado, NIE y permiso de residencia en España. DKV Integral sin copagos, contratación hasta 3 meses antes. Agentes DKV en Fuengirola.",
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
              name: "Seguro Médico Extranjeros",
              item: "https://www.segurosfuengirola.es/seguro-salud-extranjeros",
            },
          ],
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-description", ".faq-answer"],
        },
        mainEntity: {
          "@id":
            "https://www.segurosfuengirola.es/seguro-salud-extranjeros#product",
        },
      },

      // 4. FAQ PAGE
      {
        "@type": "FAQPage",
        "@id": "https://www.segurosfuengirola.es/seguro-salud-extranjeros#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // 5. SERVICIO DE SEGURO MÉDICO PARA EXTRANJEROS
      {
        "@type": "Service",
        "@id":
          "https://www.segurosfuengirola.es/seguro-salud-extranjeros#service",
        serviceType: "Seguro Médico para Extranjeros",
        name: "Seguro Médico para Extranjeros DKV Integral",
        description:
          "Seguro de salud para extranjeros válido para visado y permiso de residencia en España",
        provider: {
          "@id": "https://www.segurosfuengirola.es/#organization",
        },
        brand: { "@type": "Organization", name: "DKV Seguros" },
        areaServed: {
          "@type": "Country",
          name: "España",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planes de Seguro Médico para Extranjeros DKV",
          itemListElement: [
            {
              "@type": "Offer",
              name: "DKV Integral Élite",
              description:
                "Seguro médico para extranjeros sin copagos. Cobertura completa para visado y residencia.",
              itemOffered: {
                "@type": "Service",
                name: "DKV Integral Élite - Extranjeros",
                description:
                  "Sin copagos, cobertura completa, dental incluido, asistencia internacional",
              },
            },
            {
              "@type": "Offer",
              name: "DKV Integral Classic",
              description:
                "Seguro médico para extranjeros con copago reducido. Válido para visado y residencia.",
              itemOffered: {
                "@type": "Service",
                name: "DKV Integral Classic - Extranjeros",
              },
            },
            {
              "@type": "Offer",
              name: "DKV Integral Plus",
              description:
                "Seguro médico para extranjeros equilibrio calidad-precio. Válido para visado y residencia.",
              itemOffered: {
                "@type": "Service",
                name: "DKV Integral Plus - Extranjeros",
              },
            },
            {
              "@type": "Offer",
              name: "DKV Integral Complet",
              description:
                "Seguro médico para extranjeros económico. Válido para visado y residencia.",
              itemOffered: {
                "@type": "Service",
                name: "DKV Integral Complet - Extranjeros",
              },
            },
          ],
        },
        termsOfService:
          "Póliza anual renovable. Contratación hasta 3 meses antes de la fecha de efecto.",
      },

      // 6. SERVICIO MÉDICO
      {
        "@type": "MedicalBusiness",
        "@id":
          "https://www.segurosfuengirola.es/seguro-salud-extranjeros#medical",
        name: "Cuadro Médico DKV para Extranjeros",
        description:
          "Red de más de 51.000 profesionales médicos y 1.000 centros sanitarios en toda España para asegurados extranjeros. Incluye hospitales de referencia como Clínica Universidad de Navarra, Quirón, Hospitales HM, Vithas y Ruber Juan Bravo.",
        medicalSpecialty: [
          "Medicina General",
          "Pediatría",
          "Ginecología",
          "Cardiología",
          "Dermatología",
          "Traumatología",
          "Oftalmología",
          "Otorrinolaringología",
          "Urología",
          "Neurología",
          "Oncología",
          "Psiquiatría",
          "Odontología",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Urgencias 24 horas",
            procedureType: "Urgencia",
          },
          {
            "@type": "MedicalProcedure",
            name: "Hospitalización",
            procedureType: "Hospitalización",
          },
          {
            "@type": "MedicalProcedure",
            name: "Cirugía",
            procedureType: "Quirúrgica",
          },
          {
            "@type": "MedicalProcedure",
            name: "Pruebas diagnósticas",
            procedureType: "Diagnóstico",
          },
          {
            "@type": "MedicalProcedure",
            name: "Videoconsulta médica",
            procedureType: "Telemedicina",
          },
        ],
      },

      // 7. LOCAL BUSINESS
      {
        "@type": "LocalBusiness",
        "@id": "https://www.segurosfuengirola.es/#localbusiness",
        name: "DKV Fuengirola - Seguros para Extranjeros",
        image: "https://www.segurosfuengirola.es/logo.png",
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
        url: "https://www.segurosfuengirola.es/seguro-salud-extranjeros",
        priceRange: "€€",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Seguros para Extranjeros",
          itemListElement: [
            { "@type": "Service", name: "Seguro Médico para Visado" },
            { "@type": "Service", name: "Seguro Médico para NIE" },
            { "@type": "Service", name: "Seguro Médico para Residencia" },
            { "@type": "Service", name: "Seguro para Estudiantes Extranjeros" },
          ],
        },
      },

      // 8. OFFER CATALOG
      {
        "@type": "ItemList",
        "@id":
          "https://www.segurosfuengirola.es/seguro-salud-extranjeros#offers",
        name: "Modalidades de Seguro Médico para Extranjeros",
        description:
          "Planes de seguro médico DKV Integral para extranjeros en España",
        numberOfItems: 4,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DKV Integral Élite",
            description:
              "Sin copagos - La opción más completa para extranjeros",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "DKV Integral Classic",
            description: "Copago reducido - Excelente cobertura a buen precio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "DKV Integral Plus",
            description: "Copago moderado - Equilibrio calidad-precio",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "DKV Integral Complet",
            description: "La opción más económica para extranjeros",
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-extranjeros"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="beforeInteractive"
    />
  );
}
