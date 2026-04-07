import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "¿Qué servicios dentales cubre DKV? Guía completa del seguro dental en Málaga",
  description:
    "Descubre qué servicios dentales cubre DKV: revisiones, limpiezas, empastes, ortodoncia e implantes. Precios reales y comparativa Classic vs Élite para Fuengirola y Málaga.",
  keywords: [
    "que cubre seguro dental dkv",
    "qué servicios dentales cubre dkv",
    "seguro dental dkv coberturas",
    "seguro dental dkv fuengirola",
    "dkv dentisalud coberturas",
    "seguro dental malaga",
    "dkv dentisalud classic elite",
    "seguro dental sin carencias",
  ],
  alternates: {
    canonical:
      "https://www.segurosfuengirola.es/seguro-dental/que-cubre-seguro-dental-dkv",
  },
  openGraph: {
    title:
      "¿Qué servicios dentales cubre DKV? Guía completa del seguro dental en Málaga",
    description:
      "Descubre qué servicios dentales cubre DKV: revisiones, limpiezas, empastes, ortodoncia e implantes. Precios reales y comparativa para Fuengirola y Málaga.",
    url: "https://www.segurosfuengirola.es/seguro-dental/que-cubre-seguro-dental-dkv",
    siteName: "Seguros Fuengirola",
    locale: "es_ES",
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Seguros Fuengirola"],
    images: [
      {
        url: "https://www.segurosfuengirola.es/dental.webp",
        width: 1200,
        height: 630,
        alt: "¿Qué servicios dentales cubre DKV? - Seguros Fuengirola Málaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué servicios dentales cubre DKV?",
    description:
      "Guía completa de coberturas del seguro dental DKV para familias en Fuengirola y Málaga.",
    images: ["https://www.segurosfuengirola.es/dental.webp"],
  },
};

// ─────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "¿Qué servicios dentales cubre DKV? Guía completa del seguro dental en Málaga",
  description:
    "Descubre qué servicios dentales cubre DKV: revisiones, limpiezas, empastes, ortodoncia e implantes. Precios reales y comparativa Classic vs Élite para Fuengirola y Málaga.",
  image: "https://www.segurosfuengirola.es/dental.webp",
  datePublished: "2026-04-07T00:00:00Z",
  dateModified: "2026-04-07T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    url: "https://www.segurosfuengirola.es",
  },
  publisher: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    url: "https://www.segurosfuengirola.es",
    logo: {
      "@type": "ImageObject",
      url: "https://www.segurosfuengirola.es/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.segurosfuengirola.es/seguro-dental/que-cubre-seguro-dental-dkv",
  },
  keywords:
    "qué servicios dentales cubre dkv, seguro dental dkv coberturas, dkv dentisalud, seguro dental fuengirola, seguro dental malaga",
  inLanguage: "es-ES",
  about: {
    "@type": "InsuranceAgency",
    name: "Seguros Fuengirola",
    areaServed: ["Fuengirola", "Málaga", "Costa del Sol", "Andalucía"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué servicios dentales cubre DKV desde el primer día?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DKV Dentisalud no tiene carencias, por lo que desde el primer día tienes acceso a todos los servicios incluidos: revisión anual, radiografías, limpieza bucal profesional, empastes de composite, extracciones simples y urgencias dentales, entre otros. No hay que esperar meses para empezar a usarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El seguro dental DKV cubre la ortodoncia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tanto el plan Classic como el Élite incluyen descuentos significativos en ortodoncia. Con DKV Dentisalud Élite, una ortodoncia completa que en clínica privada puede costar 1.500€ o más se reduce aproximadamente en un 40%, pudiendo quedar alrededor de los 200€ en el presupuesto orientativo. El precio exacto depende del caso clínico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los niños tienen seguro dental gratis con DKV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Los menores de 14 años van completamente gratis cuando uno de los padres está asegurado con DKV Dentisalud. Es una de las mayores ventajas del seguro: puedes asegurar a toda la familia por el precio de un adulto si los hijos tienen menos de 14 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre DKV Dentisalud Classic y Élite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La diferencia principal está en la cantidad de tratamientos gratuitos y el porcentaje de descuento en el resto. El plan Classic incluye 57 tratamientos gratis y un 30% de descuento en los demás, a partir de 7,90€/mes. El plan Élite amplía eso a 59 tratamientos gratuitos y un 40% de descuento, desde 10,90€/mes. Además, el Élite añade cobertura por accidente grave de hasta 6.000€ para tratamientos que requieran más de 3 piezas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas clínicas dentales tiene DKV en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La red dental DKV cuenta con más de 2.710 profesionales y 1.460 clínicas en toda España, más 23 centros propios DKV. Esto significa que en Fuengirola, Marbella, Torremolinos y prácticamente cualquier municipio de Málaga encontrarás clínicas dentales adheridas a la red DKV cerca de tu domicilio.",
      },
    },
    {
      "@type": "Question",
      name: "¿El seguro dental DKV cubre implantes dentales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, con descuentos importantes. Un implante dental de titanio que en el mercado puede costar entre 800€ y 1.200€, con DKV Dentisalud Élite se reduce aproximadamente hasta los 550€ (un 40% de descuento). Además, en caso de accidente grave que requiera más de 3 piezas, el plan Élite cubre hasta 6.000€ con libre elección de odontólogo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo elegir mi propio dentista con el seguro DKV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con los planes estándar utilizas la red de clínicas adheridas a DKV, que en Málaga es muy amplia. Adicionalmente, el plan Élite incluye libre elección de odontólogo en casos de accidente grave con más de 3 piezas afectadas. Para el día a día, la red DKV tiene más de 1.460 clínicas en España, así que encontrar una cerca en la Costa del Sol no es ningún problema.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Seguro dental",
      item: "https://www.segurosfuengirola.es/seguro-dental",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "¿Qué servicios dentales cubre DKV?",
      item: "https://www.segurosfuengirola.es/seguro-dental/que-cubre-seguro-dental-dkv",
    },
  ],
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const coverageComparison = [
  { feature: "Revisión dental anual", classic: true, elite: true },
  { feature: "Radiografías diagnósticas", classic: true, elite: true },
  { feature: "Limpieza bucal profesional", classic: true, elite: true },
  { feature: "Empastes de composite", classic: true, elite: true },
  { feature: "Extracciones simples", classic: true, elite: true },
  { feature: "Urgencias dentales", classic: true, elite: true },
  {
    feature: "Tratamientos de conductos (endodoncia)",
    classic: "30% dto.",
    elite: "40% dto.",
  },
  {
    feature: "Ortodoncia completa",
    classic: "30% dto.",
    elite: "40% dto.",
  },
  {
    feature: "Implantes dentales de titanio",
    classic: "30% dto.",
    elite: "40% dto.",
  },
  {
    feature: "Blanqueamiento dental",
    classic: "30% dto.",
    elite: "40% dto.",
  },
  {
    feature: "Prótesis dentales",
    classic: "30% dto.",
    elite: "40% dto.",
  },
  {
    feature: "Accidente grave (más de 3 piezas)",
    classic: false,
    elite: "Hasta 6.000€",
  },
  {
    feature: "Libre elección de odontólogo (accidente)",
    classic: false,
    elite: true,
  },
  { feature: "Niños menores de 14 años", classic: "Gratis", elite: "Gratis" },
  {
    feature: "Carencias",
    classic: "Sin carencias",
    elite: "Sin carencias",
  },
  { feature: "Precio desde", classic: "7,90€/mes", elite: "10,90€/mes" },
];

const priceComparison = [
  {
    treatment: "Revisión dental anual",
    market: "40€",
    elite: "GRATIS",
    saving: "40€",
  },
  {
    treatment: "Radiografía dental",
    market: "60€",
    elite: "GRATIS",
    saving: "60€",
  },
  {
    treatment: "Limpieza bucal profesional",
    market: "80€",
    elite: "GRATIS",
    saving: "80€",
  },
  {
    treatment: "Extracción dental simple",
    market: "100€",
    elite: "GRATIS",
    saving: "100€",
  },
  {
    treatment: "Empaste dental",
    market: "50€",
    elite: "29€",
    saving: "21€",
  },
  {
    treatment: "Ortodoncia completa",
    market: "600€",
    elite: "~200€",
    saving: "~400€",
  },
  {
    treatment: "Implante dental de titanio",
    market: "800€",
    elite: "~550€",
    saving: "~250€",
  },
];

const preventiveServices = [
  {
    icon: "🔍",
    title: "Revisión anual",
    desc: "Exploración completa de la salud bucodental: encías, dientes, oclusión y mucosas. Incluida 100% gratis en ambos planes.",
  },
  {
    icon: "📸",
    title: "Radiografías diagnósticas",
    desc: "Radiografías periapicales y panorámicas necesarias para el diagnóstico. Incluidas en el precio de la póliza.",
  },
  {
    icon: "✨",
    title: "Limpieza bucal profesional",
    desc: "Eliminación del sarro y la placa bacteriana. Uno de los tratamientos más demandados, y con DKV totalmente gratis.",
  },
  {
    icon: "🚨",
    title: "Urgencias dentales",
    desc: "Atención inmediata en caso de dolor agudo, traumatismo o infección dental. Sin coste adicional dentro de la red DKV.",
  },
];

const faqs = [
  {
    q: "¿Qué servicios dentales cubre DKV desde el primer día?",
    a: "DKV Dentisalud no tiene carencias, por lo que desde el primer día tienes acceso a todos los servicios incluidos: revisión anual, radiografías, limpieza bucal profesional, empastes de composite, extracciones simples y urgencias dentales, entre otros. No hay que esperar meses para empezar a usarlo.",
  },
  {
    q: "¿El seguro dental DKV cubre la ortodoncia?",
    a: "Sí. Tanto el plan Classic como el Élite incluyen descuentos significativos en ortodoncia. Con DKV Dentisalud Élite, una ortodoncia completa que en clínica privada puede costar 1.500€ o más se reduce aproximadamente en un 40%. El precio exacto depende del caso clínico.",
  },
  {
    q: "¿Los niños tienen seguro dental gratis con DKV?",
    a: "Sí. Los menores de 14 años van completamente gratis cuando uno de los padres está asegurado con DKV Dentisalud. Es una de las mayores ventajas del seguro: puedes asegurar a toda la familia por el precio de un adulto si los hijos tienen menos de 14 años.",
  },
  {
    q: "¿Cuál es la diferencia entre DKV Dentisalud Classic y Élite?",
    a: "La diferencia principal está en la cantidad de tratamientos gratuitos y el porcentaje de descuento. El plan Classic incluye 57 tratamientos gratis y un 30% de descuento, desde 7,90€/mes. El plan Élite amplía eso a 59 tratamientos gratuitos y un 40% de descuento, desde 10,90€/mes, más cobertura por accidente grave de hasta 6.000€.",
  },
  {
    q: "¿Cuántas clínicas dentales tiene DKV en España?",
    a: "La red dental DKV cuenta con más de 2.710 profesionales y 1.460 clínicas en toda España, más 23 centros propios DKV. En Fuengirola, Marbella, Torremolinos y cualquier municipio de Málaga encontrarás clínicas adheridas a la red DKV.",
  },
  {
    q: "¿El seguro dental DKV cubre implantes dentales?",
    a: "Sí, con descuentos importantes. Un implante dental de titanio que puede costar entre 800€ y 1.200€, con DKV Dentisalud Élite se reduce aproximadamente hasta los 550€ (un 40% de descuento). Además, en caso de accidente grave con más de 3 piezas, el plan Élite cubre hasta 6.000€.",
  },
  {
    q: "¿Puedo elegir mi propio dentista con el seguro DKV?",
    a: "Con los planes estándar utilizas la red de clínicas adheridas a DKV, muy amplia en Málaga. El plan Élite incluye además libre elección de odontólogo en casos de accidente grave con más de 3 piezas afectadas.",
  },
];

// ─────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────
function CoverageCell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
        ✓
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-500 text-sm font-bold">
        ✗
      </span>
    );
  return <span className="text-sm text-slate-600 font-medium">{value}</span>;
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <details className="group border border-slate-200 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="font-semibold text-slate-800 text-sm leading-snug">
            {q}
          </span>
        </span>
        <svg
          className="flex-shrink-0 w-5 h-5 text-blue-600 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-5 pb-5 pt-3 bg-slate-50 text-slate-600 text-sm leading-relaxed border-t border-slate-200">
        {a}
      </div>
    </details>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function QueCubreSeguroDentalDKVPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-blue-300 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/seguro-dental"
                    className="hover:text-white transition-colors"
                  >
                    Seguro dental
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/60 truncate max-w-[200px]">
                  ¿Qué cubre DKV?
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              Seguro dental
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              ¿Qué servicios dentales cubre DKV?{" "}
              <span className="text-blue-300">
                Guía completa con precios reales
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Todo lo que necesitas saber sobre{" "}
              <strong className="text-white">
                qué servicios dentales cubre DKV
              </strong>
              : tratamientos gratuitos, descuentos reales, diferencias entre
              planes y cuánto puedes ahorrar en Fuengirola y la Costa del Sol.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                7 de abril de 2026
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
                11 min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Seguros Fuengirola
              </span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="max-w-3xl mx-auto px-5 py-12 md:py-16">
          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-6 border-l-4 border-blue-600 pl-5 bg-blue-50 py-4 pr-4 rounded-r-xl">
            Una de las preguntas que más nos hacen en nuestra oficina de
            Fuengirola es:{" "}
            <strong className="text-slate-800">
              ¿qué servicios dentales cubre DKV exactamente?
            </strong>{" "}
            Y tiene mucho sentido preguntarlo, porque hay seguros dentales que
            prometen mucho en el papel y luego en el dentista descubres que casi
            nada está cubierto de verdad. Con DKV Dentisalud la situación es muy
            diferente, y en esta guía te lo explicamos con datos reales.
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            En este artículo encontrarás la lista completa de tratamientos
            cubiertos, la comparativa entre los planes{" "}
            <strong>Classic y Élite</strong>, precios reales con y sin seguro, y
            todo lo que necesitas saber para decidir si el{" "}
            <Link
              href="/seguro-dental"
              className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
            >
              seguro dental DKV
            </Link>{" "}
            es lo que buscas para ti y tu familia en Málaga.
          </p>

          {/* ── SECCIÓN 1 ── */}
          <section aria-labelledby="sanidad-publica" className="mb-14">
            <h2
              id="sanidad-publica"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              1. Por qué la sanidad pública no cubre los dientes
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Antes de entrar en detalle sobre qué cubre DKV, conviene entender
              por qué tanta gente en España empieza a plantearse contratar un
              seguro dental privado. La respuesta es sencilla: la sanidad
              pública española cubre muy poco en materia dental.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              El Sistema Nacional de Salud solo financia extracciones de piezas
              con dolor agudo, alguna actuación de urgencia y revisiones muy
              básicas. Tratamientos tan habituales como una{" "}
              <strong className="text-slate-800">limpieza bucal</strong>, un
              empaste de composite estético, una endodoncia o cualquier tipo de
              ortodoncia o implante son servicios que el paciente tiene que
              pagar íntegramente de su bolsillo si acude a la sanidad pública, o
              bien contratar un seguro dental privado.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En la Costa del Sol —y en Fuengirola en particular— esto es
              especialmente relevante. La zona tiene una alta proporción de
              residentes europeos que están acostumbrados a una cobertura dental
              mucho más amplia en sus países de origen, y que al instalarse aquí
              se encuentran con que tienen que pagar precios de mercado por
              tratamientos que daban por descontado.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Cobertura dental en la sanidad pública española
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  {
                    covered: true,
                    item: "Extracciones de urgencia con dolor agudo",
                  },
                  {
                    covered: true,
                    item: "Tratamientos en menores de 16 años (básicos)",
                  },
                  { covered: false, item: "Limpiezas bucales preventivas" },
                  { covered: false, item: "Empastes estéticos de composite" },
                  {
                    covered: false,
                    item: "Endodoncias (tratamientos de conducto)",
                  },
                  { covered: false, item: "Ortodoncia" },
                  { covered: false, item: "Implantes dentales" },
                  { covered: false, item: "Prótesis dentales completas" },
                ].map((row) => (
                  <li key={row.item} className="flex items-center gap-2.5">
                    {row.covered ? (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">
                        ✗
                      </span>
                    )}
                    {row.item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 2 ── */}
          <section aria-labelledby="servicios-dkv" className="mb-14">
            <h2
              id="servicios-dkv"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              2. ¿Qué servicios dentales cubre DKV? Lista completa
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              El seguro dental DKV Dentisalud divide sus coberturas en cuatro
              grandes bloques: servicios preventivos (totalmente gratuitos),
              tratamientos básicos, tratamientos avanzados y servicios
              estéticos. Veamos cada uno en detalle.
            </p>

            {/* Preventivos */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  A
                </span>
                Servicios preventivos — 100% gratuitos
              </h3>

              <p className="text-slate-600 leading-relaxed mb-5">
                Los servicios preventivos son la base del seguro dental DKV y
                están incluidos en el precio de la póliza sin ningún coste
                adicional. Son los tratamientos que más se usan y que más dinero
                te ahorran a lo largo del año.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {preventiveServices.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Básicos */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  B
                </span>
                Tratamientos básicos — incluidos o con descuento
              </h3>

              <p className="text-slate-600 leading-relaxed mb-5">
                Los tratamientos básicos son aquellos que más frecuentemente
                necesita cualquier persona a lo largo de su vida. Con DKV
                Dentisalud, la mayoría están incluidos en el precio de la
                póliza, y los que no están gratis tienen descuentos del 30%
                (Classic) o 40% (Élite) sobre el precio de tarifa.
              </p>

              <ul className="space-y-2.5 mb-4">
                {[
                  "Empastes de composite (blancos) en dientes posteriores y anteriores",
                  "Extracciones simples sin complicaciones quirúrgicas",
                  "Tratamientos para las encías (periodontitis inicial)",
                  "Fluorización y selladores de fosas y fisuras",
                  "Obturaciones y reconstrucciones dentales básicas",
                  "Tratamiento del bruxismo: férulas de descarga",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Avanzados */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  C
                </span>
                Tratamientos avanzados — con descuento del 30% o 40%
              </h3>

              <p className="text-slate-600 leading-relaxed mb-5">
                Los tratamientos avanzados son los más costosos en el mercado
                dental privado. Aquí es donde el seguro DKV Dentisalud marca
                realmente la diferencia en tu bolsillo: gracias al convenio con
                la red de clínicas, pagas la tarifa reducida del seguro, no el
                precio de mercado.
              </p>

              <ul className="space-y-2.5 mb-4">
                {[
                  "Endodoncias (tratamientos de conducto) en cualquier pieza",
                  "Implantes dentales de titanio con porcelana o circonio",
                  "Ortodoncia fija metálica, cerámica y alineadores invisibles",
                  "Cirugía oral: exodoncias complejas e impactaciones de cordales",
                  "Periodontitis avanzada: curetajes y cirugías periodontales",
                  "Prótesis fija: coronas y puentes de porcelana sobre metal o circonio",
                  "Prótesis removible: parcial y completa",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800 font-medium">
                  💡 <strong>Accidente grave con Élite:</strong> si en un
                  accidente se ven afectadas más de 3 piezas, el plan Élite
                  cubre hasta 6.000€ para los tratamientos necesarios con libre
                  elección de odontólogo, aunque no sea de la red DKV.
                </p>
              </div>
            </div>

            {/* Estéticos */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  D
                </span>
                Servicios estéticos — con descuento
              </h3>

              <p className="text-slate-600 leading-relaxed mb-5">
                Aunque la estética dental no es una necesidad médica, cada vez
                más personas valoran tener una sonrisa cuidada. DKV Dentisalud
                también incluye descuentos en tratamientos estéticos para los
                asegurados.
              </p>

              <ul className="space-y-2.5">
                {[
                  "Blanqueamiento dental profesional (LED o cubetas)",
                  "Carillas de composite y porcelana",
                  "Reconstrucciones estéticas con composite",
                  "Coronas de zirconio de alta estética",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 3 ── */}
          <section aria-labelledby="classic-vs-elite" className="mb-14">
            <h2
              id="classic-vs-elite"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              3. DKV Dentisalud Classic vs Élite: comparativa completa
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              DKV Dentisalud se comercializa en dos modalidades:{" "}
              <strong className="text-slate-800">Classic</strong> y{" "}
              <strong className="text-slate-800">Élite</strong>. Ambos son
              buenos seguros dentales, pero hay diferencias concretas que pueden
              ser determinantes según lo que necesites. Aquí tienes la
              comparativa completa:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                      Cobertura / Característica
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Classic
                    </th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-xl">
                      Élite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coverageComparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 text-slate-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CoverageCell value={row.classic} />
                      </td>
                      <td className="px-4 py-3 text-center bg-blue-50">
                        <CoverageCell value={row.elite} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-3">
                ¿Cuál te conviene más?
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                  <span>
                    <strong>Classic</strong> es ideal si quieres cubrir las
                    necesidades dentales básicas de toda la familia a un precio
                    muy ajustado desde 7,90€/mes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    ★
                  </span>
                  <span>
                    <strong>Élite</strong> compensa especialmente si tienes
                    pendiente ortodoncia, implantes o tratamientos avanzados, o
                    si quieres la tranquilidad de la cobertura por accidente
                    grave de hasta 6.000€.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 4 — PRECIOS ── */}
          <section aria-labelledby="precios-reales" className="mb-14">
            <h2
              id="precios-reales"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              4. Precios reales: con y sin seguro DKV
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Una cosa es decir que tienes descuentos del 40%, y otra es ver los
              números en negro sobre blanco. Esto es lo que suelen costar los
              tratamientos más habituales en una clínica dental privada en
              Málaga frente a lo que pagarías siendo asegurado de DKV Dentisalud
              Élite:
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Los precios de mercado son orientativos y pueden variar según la
              clínica y la complejidad del caso. Los precios con DKV
              corresponden a la tarifa del cuadro médico DKV.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                      Tratamiento
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Precio mercado
                    </th>
                    <th className="text-center px-4 py-3 font-semibold bg-blue-700">
                      Con DKV Élite
                    </th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-xl">
                      Ahorro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparison.map((row, i) => (
                    <tr
                      key={row.treatment}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 text-slate-700 font-medium">
                        {row.treatment}
                      </td>
                      <td className="px-4 py-3 text-center text-slate-500">
                        {row.market}
                      </td>
                      <td className="px-4 py-3 text-center font-bold bg-blue-50">
                        <span
                          className={
                            row.elite === "GRATIS"
                              ? "text-emerald-600"
                              : "text-blue-700"
                          }
                        >
                          {row.elite}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-emerald-600 font-semibold">
                        {row.saving}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-semibold text-emerald-800 mb-2">
                💶 ¿Cuánto se amortiza el seguro?
              </p>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Con DKV Dentisalud Élite pagas desde <strong>10,90€/mes</strong>{" "}
                (130,80€ al año por adulto). Con una sola revisión + limpieza
                bucal al año ya estás recuperando ese dinero —y eso son dos
                servicios gratuitos incluidos que en el mercado suman 120€. Si
                necesitas un empaste durante el año, el ahorro supera con creces
                el coste anual de la póliza.
              </p>
            </div>
          </section>

          {/* ── SECCIÓN 5 — NIÑOS GRATIS y SIN CARENCIAS ── */}
          <section aria-labelledby="ventajas" className="mb-14">
            <h2
              id="ventajas"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              5. Niños gratis y sin carencias: las dos grandes ventajas
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Hay dos características del seguro dental DKV que nos parecen
              especialmente relevantes para las familias de Fuengirola y la
              Costa del Sol y que queremos destacar por separado.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {/* Niños gratis */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="font-bold text-slate-800 text-lg mb-3">
                  Niños menores de 14 años: gratis
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Si eres padre o madre asegurado con DKV Dentisalud, tus hijos
                  menores de 14 años tienen el seguro dental incluido sin coste
                  adicional. No pagas nada extra por ellos.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Esto es enorme para familias: por el precio de un adulto
                  (desde 7,90€/mes o 10,90€/mes), toda la unidad familiar con
                  hijos pequeños queda cubierta. Los niños tienen acceso
                  exactamente a los mismos servicios que los adultos.
                </p>
              </div>

              {/* Sin carencias */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-slate-800 text-lg mb-3">
                  Sin carencias desde el primer día
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Muchos seguros dentales tienen carencias de 3, 6 o incluso 12
                  meses para ciertos tratamientos, lo que significa que pagas la
                  cuota pero no puedes utilizar el seguro hasta que pase ese
                  tiempo.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Con DKV Dentisalud eso no existe.{" "}
                  <strong>Desde el primer día</strong> que firmas la póliza
                  puedes ir al dentista y utilizar todos los servicios
                  cubiertos. Si tienes una urgencia dental el día 2, está
                  cubierta. Si necesitas una limpieza la semana siguiente, está
                  cubierta.
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              En nuestra experiencia como agencia DKV en Fuengirola, estas dos
              características —niños gratis y ausencia de carencias— son
              frecuentemente las que terminan de convencer a las familias que
              estaban dudando entre contratar o no contratar. El riesgo de
              &ldquo;pagar y no poder usar&rdquo; desaparece por completo.
            </p>
          </section>

          {/* ── SECCIÓN 6 — RED DENTAL ── */}
          <section aria-labelledby="red-dental" className="mb-14">
            <h2
              id="red-dental"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              6. La red de dentistas DKV en Málaga y la Costa del Sol
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Un seguro dental solo es útil si hay clínicas adheridas cerca de
              donde vives. En el caso de DKV Dentisalud, la red es una de las
              más amplias de España:{" "}
              <strong className="text-slate-800">
                más de 2.710 profesionales y 1.460 clínicas dentales
              </strong>{" "}
              en todo el territorio nacional, más 23 centros propios DKV.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En la provincia de Málaga la cobertura es muy buena. Tanto si
              vives en Fuengirola, Marbella, Torremolinos, Benalmádena o Mijas,
              encontrarás clínicas dentales adheridas a la red DKV. Y si en
              algún momento te mudas o cambias de residencia, la red te acompaña
              por toda España.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "🏥",
                  label: "2.710+",
                  sublabel: "Profesionales dentales",
                },
                { icon: "📍", label: "1.460+", sublabel: "Clínicas adheridas" },
                { icon: "⭐", label: "23", sublabel: "Centros propios DKV" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-blue-600 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed">
              Para comprobar qué clínicas están disponibles en tu zona, puedes
              consultar el buscador de la red DKV o preguntarnos directamente en
              nuestra oficina de Fuengirola: te indicamos las opciones más
              cercanas a tu domicilio.
            </p>
          </section>

          {/* ── SECCIÓN 7 — CTA LOCAL ── */}
          <section aria-labelledby="contratar-fuengirola" className="mb-14">
            <h2
              id="contratar-fuengirola"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              7. Contratar el seguro dental DKV en Fuengirola
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              En Seguros Fuengirola somos agencia exclusiva DKV en Fuengirola y
              llevamos años ayudando a familias de toda la Costa del Sol a
              encontrar la cobertura dental que mejor se adapta a sus
              necesidades. No vendemos seguros de forma genérica: te asesoramos
              sobre qué plan te conviene más según tu situación familiar, tu
              presupuesto y los tratamientos que tienes pendientes o prevés
              necesitar.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Además, como agencia local, tienes la ventaja del trato
              personalizado. Si tienes algún problema con el seguro, si no
              encuentras un dentista en la red, o si necesitas ayuda con
              cualquier gestión, puedes llamarnos o pasarte por nuestra oficina
              en <strong>Av. Condes de San Isidro, Nº 80 (Fuengirola)</strong> y
              te atendemos directamente.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Oficina Seguros Fuengirola
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2.5">
                  <span className="text-blue-600">📍</span>
                  Av. Condes de San Isidro, Nº 80, 29640 Fuengirola (Málaga)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-blue-600">📞</span>
                  <a
                    href="tel:951681383"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    951 68 13 83
                  </a>{" "}
                  /{" "}
                  <a
                    href="tel:633106025"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    633 10 60 25
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-blue-600">✉️</span>
                  <a
                    href="mailto:info@segurosfuengirola.es"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@segurosfuengirola.es
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Si quieres ver todos los detalles de los planes DKV Dentisalud,
              incluyendo condiciones completas, tratamientos cubiertos y el
              formulario de contacto directo, visita nuestra página del{" "}
              <Link
                href="/seguro-dental"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro dental DKV en Fuengirola
              </Link>
              .
            </p>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-7 text-white text-center shadow-lg">
              <p className="text-xl font-bold mb-2">
                ¿Quieres saber cuánto te costaría el seguro dental DKV?
              </p>
              <p className="text-blue-100 text-sm mb-6">
                Solicita tu presupuesto personalizado sin compromiso. Te
                respondemos en menos de 24 horas.
              </p>
              <Link
                href="/seguro-dental"
                className="inline-block bg-white text-blue-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow"
              >
                Ver seguro dental DKV →
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq" className="mb-14">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200"
            >
              8. Preguntas frecuentes sobre los servicios dentales DKV
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Las dudas que más nos plantean en nuestra oficina de Fuengirola
              sobre el seguro dental DKV.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </section>

          {/* ── CONCLUSIÓN ── */}
          <section aria-labelledby="conclusion" className="mb-12">
            <h2
              id="conclusion"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              Conclusión: ¿merece la pena el seguro dental DKV?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Después de revisar en detalle{" "}
              <strong className="text-slate-800">
                qué servicios dentales cubre DKV
              </strong>
              , la respuesta es bastante clara para la mayoría de familias en
              Fuengirola y la Costa del Sol: sí, merece la pena, y mucho.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              Desde el primer día, sin carencias, tienes acceso a revisiones
              anuales, radiografías, limpiezas bucales y urgencias dentales sin
              ningún coste adicional. Los tratamientos más habituales —empastes,
              extracciones, endodoncias— los pagas con descuentos del 30% al 40%
              sobre tarifa de clínica privada. Y si tienes hijos menores de 14
              años, ellos van gratis.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Para una familia que use el seguro con normalidad —una revisión y
              una limpieza al año para cada miembro— el ahorro supera con creces
              el coste de la póliza desde el primer año. Y si necesitas algún
              tratamiento más avanzado, el ahorro puede ser de cientos de euros.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Si estás en Fuengirola, Marbella, Torremolinos, Benalmádena, Mijas
              o cualquier municipio de Málaga y quieres contratar el seguro
              dental DKV, contáctanos. En Seguros Fuengirola te asesoramos sin
              compromiso y te ayudamos a elegir el plan que mejor se adapta a
              ti.
            </p>
          </section>

          {/* ── FINAL CTA ── */}
          <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="font-bold text-slate-800 mb-1">
                Seguros Fuengirola — Agencia DKV exclusiva
              </p>
              <p className="text-slate-500 text-sm">
                Asesoramiento local, trato personal y gestión rápida en la Costa
                del Sol. Llámanos: 951 68 13 83.
              </p>
            </div>
            <Link
              href="/seguro-dental"
              className="flex-shrink-0 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors whitespace-nowrap shadow"
            >
              Pedir presupuesto gratis
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
