import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "¿Qué es el seguro de decesos DKV y qué cubre? Guía completa para familias en Málaga",
  description:
    "Descubre qué cubre el seguro de decesos DKV, cuánto cuesta y por qué es la mejor opción para familias en Fuengirola y Málaga. Guía completa actualizada.",
  keywords: [
    "dkv decesos",
    "seguro de decesos dkv",
    "seguros de decesos malaga",
    "dkv decesos precios",
    "dkv protección familiar",
    "seguro de decesos fuengirola",
  ],
  alternates: {
    canonical:
      "https://segurosfuengirola.es/blog/que-es-seguro-de-decesos-dkv-guia-completa-malaga",
  },
  openGraph: {
    title:
      "¿Qué es el seguro de decesos DKV y qué cubre? Guía completa para familias en Málaga",
    description:
      "Descubre qué cubre el seguro de decesos DKV, cuánto cuesta y por qué es la mejor opción para familias en Fuengirola y Málaga.",
    url: "https://segurosfuengirola.es/blog/que-es-seguro-de-decesos-dkv-guia-completa-malaga",
    siteName: "Seguros Fuengirola",
    locale: "es_ES",
    type: "article",
    publishedTime: "2025-03-01T00:00:00Z",
    authors: ["Seguros Fuengirola"],
    images: [
      {
        url: "https://www.segurosfuengirola.es/deceso.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de decesos DKV Málaga - Seguros Fuengirola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es el seguro de decesos DKV y qué cubre?",
    description:
      "Guía completa sobre el seguro de decesos DKV para familias en Fuengirola y Málaga.",
    images: ["https://www.segurosfuengirola.es/deceso.webp"],
  },
};

// ─────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "¿Qué es el seguro de decesos DKV y qué cubre? Guía completa para familias en Málaga",
  description:
    "Descubre qué cubre el seguro de decesos DKV, cuánto cuesta y por qué es la mejor opción para familias en Fuengirola y Málaga.",
  image: "https://www.segurosfuengirola.es/deceso.webp",
  datePublished: "2025-03-01T00:00:00Z",
  dateModified: "2025-03-01T00:00:00Z",
  author: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    url: "https://segurosfuengirola.es",
  },
  publisher: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    url: "https://segurosfuengirola.es",
    logo: {
      "@type": "ImageObject",
      url: "https://segurosfuengirola.es/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://segurosfuengirola.es/blog/que-es-seguro-de-decesos-dkv-guia-completa-malaga",
  },
  keywords:
    "dkv decesos, seguro de decesos dkv, seguros de decesos malaga, dkv decesos precios",
  inLanguage: "es-ES",
  about: {
    "@type": "InsuranceAgency",
    name: "Seguros Fuengirola",
    areaServed: ["Fuengirola", "Málaga", "Andalucía"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El seguro de decesos DKV cubre fallecimientos en el extranjero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El producto DKV Protección Familiar incluye cobertura de traslado internacional, lo que es especialmente relevante para familias con residentes extranjeros o que viajan con frecuencia. El traslado desde cualquier país del mundo está cubierto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre DKV Protección Familiar y un seguro de decesos normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DKV Protección Familiar es un producto más completo: además de las coberturas de decesos estándar (sepelio, traslado, gestiones), incluye un seguro de vida incorporado para el titular y cubre a toda la unidad familiar. El seguro de decesos básico cubre el sepelio de una sola persona y no incluye el componente de vida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo incluir a mis padres en el mismo seguro de decesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la modalidad contratada. Con DKV Protección Familiar es posible incluir a distintos miembros de la familia. Te recomendamos consultarnos directamente para ver qué opción se adapta mejor a tu situación familiar.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad conviene contratar el seguro de decesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuanto antes se contrate, más económica es la prima. Lo ideal es contratarlo cuando se es joven y sano, ya que el precio aumenta con la edad. En cualquier caso, DKV ofrece cobertura para personas de todas las edades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en activarse la cobertura del seguro de decesos DKV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos, la cobertura es inmediata desde la firma del contrato. Para consultar las condiciones específicas, no dudes en contactar con nuestra oficina en Fuengirola.",
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
      item: "https://segurosfuengirola.es",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://segurosfuengirola.es/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "¿Qué es el seguro de decesos DKV?",
      item: "https://segurosfuengirola.es/blog/que-es-seguro-de-decesos-dkv-guia-completa-malaga",
    },
  ],
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const coverageData = [
  { feature: "Traslado nacional", basic: true, dkv: true },
  { feature: "Traslado internacional", basic: false, dkv: true },
  { feature: "Ceremonia y sepelio", basic: true, dkv: true },
  { feature: "Gestiones administrativas", basic: "Limitado", dkv: "Completo" },
  { feature: "Seguro de vida incluido", basic: false, dkv: true },
  { feature: "Cobertura familiar", basic: "Individual", dkv: "Toda la unidad" },
];

const faqs = [
  {
    q: "¿El seguro de decesos DKV cubre fallecimientos en el extranjero?",
    a: "Sí. El producto DKV Protección Familiar incluye cobertura de traslado internacional, lo que es especialmente relevante para familias con residentes extranjeros o que viajan con frecuencia. El traslado desde cualquier país del mundo está cubierto.",
  },
  {
    q: "¿Qué diferencia hay entre DKV Protección Familiar y un seguro de decesos normal?",
    a: "DKV Protección Familiar es un producto más completo: además de las coberturas de decesos estándar (sepelio, traslado, gestiones), incluye un seguro de vida incorporado para el titular y cubre a toda la unidad familiar. El seguro de decesos básico cubre el sepelio de una sola persona y no incluye el componente de vida.",
  },
  {
    q: "¿Puedo incluir a mis padres en el mismo seguro de decesos?",
    a: "Depende de la modalidad contratada. Con DKV Protección Familiar es posible incluir a distintos miembros de la familia. Te recomendamos consultarnos directamente para ver qué opción se adapta mejor a tu situación familiar.",
  },
  {
    q: "¿A qué edad conviene contratar el seguro de decesos?",
    a: "Cuanto antes se contrate, más económica es la prima. Lo ideal es contratarlo cuando se es joven y sano, ya que el precio aumenta con la edad. En cualquier caso, DKV ofrece cobertura para personas de todas las edades.",
  },
  {
    q: "¿Cuánto tiempo tarda en activarse la cobertura?",
    a: "En la mayoría de los casos, la cobertura es inmediata desde la firma del contrato. Para consultar las condiciones específicas, no dudes en contactar con nuestra oficina en Fuengirola.",
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
export default function SeguroDecesosArticlePage() {
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
          {/* Subtle grid texture */}
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
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/60 truncate max-w-[180px]">
                  Seguro de Decesos DKV
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              Seguros de vida y familia
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              ¿Qué es el seguro de decesos DKV y qué cubre?{" "}
              <span className="text-blue-300">
                Guía completa para familias en Málaga
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Todo lo que necesitas saber sobre el{" "}
              <strong className="text-white">seguro de decesos DKV</strong>:
              coberturas, precios y por qué miles de familias en Fuengirola y
              Málaga confían en este producto.
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
                1 de marzo de 2025
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
                7 min de lectura
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
            Cuando fallece un ser querido, lo último que necesita una familia es
            preocuparse por los trámites. Un{" "}
            <strong className="text-slate-800">seguro de decesos DKV</strong> se
            encarga de gestionar todos los aspectos prácticos del sepelio —desde
            el traslado hasta las gestiones administrativas— para que en uno de
            los momentos más difíciles, tu familia solo tenga que ocuparse de lo
            importante.
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            En este artículo explicamos qué es exactamente el seguro de decesos
            DKV, qué coberturas incluye, cuánto cuesta y por qué cada vez más
            familias en <strong>Fuengirola y Málaga</strong> eligen esta
            solución para proteger a los suyos.
          </p>

          {/* ── SECCIÓN 1 ── */}
          <section aria-labelledby="que-es" className="mb-14">
            <h2
              id="que-es"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              1. ¿Qué es un seguro de decesos?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Un seguro de decesos es una póliza que cubre los gastos y
              gestiones derivados del fallecimiento de un asegurado. A
              diferencia de un seguro de vida —que paga un capital al
              beneficiario— el seguro de decesos ofrece un{" "}
              <strong className="text-slate-800">servicio completo</strong>:
              organiza y financia el sepelio, gestiona los trámites legales y
              facilita el traslado del fallecido, ya sea dentro de España o
              desde el extranjero.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Es uno de los seguros con mayor contratación en España,
              especialmente entre familias que quieren evitar imprevistos
              económicos y administrativos en un momento tan delicado.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                ¿Seguro de decesos vs seguro de vida?
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                  El <strong>seguro de vida</strong> paga una cantidad de dinero
                  a los beneficiarios tras el fallecimiento.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                  El <strong>seguro de decesos</strong> presta un servicio:
                  organiza y asume el coste del funeral, traslados y trámites.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    ★
                  </span>
                  <strong>DKV Protección Familiar</strong> combina ambos: seguro
                  de decesos + cobertura de vida en la misma póliza.
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 2 ── */}
          <section aria-labelledby="que-cubre" className="mb-14">
            <h2
              id="que-cubre"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              2. ¿Qué cubre el seguro de decesos DKV?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              El <strong>seguro de decesos DKV</strong> ofrece una cobertura
              completa que va más allá del servicio funerario básico.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: "🚌",
                  title: "Traslado y sepelio",
                  desc: "Traslado de restos a nivel nacional e internacional. Incluye féretro, tanatorio, servicio religioso o laico, y cementerio o crematorio.",
                },
                {
                  icon: "📋",
                  title: "Gestiones administrativas",
                  desc: "Registro Civil, baja en Seguridad Social, certificados de defunción, gestión del testamento y orientación legal.",
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Cobertura familiar",
                  desc: "Con DKV Protección Familiar, una sola póliza cubre a toda la unidad familiar con una única prima.",
                },
              ].map((item) => (
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

            {/* Coverage table */}
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Comparativa: Decesos básico vs DKV Protección Familiar
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                        Cobertura
                      </th>
                      <th className="text-center px-4 py-3 font-semibold">
                        Decesos básico
                      </th>
                      <th className="text-center px-4 py-3 font-semibold rounded-tr-xl">
                        DKV Protección Familiar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coverageData.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-4 py-3 text-slate-700 font-medium">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <CoverageCell value={row.basic} />
                        </td>
                        <td className="px-4 py-3 text-center bg-blue-50">
                          <CoverageCell value={row.dkv} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── SECCIÓN 3 ── */}
          <section aria-labelledby="precios" className="mb-14">
            <h2
              id="precios"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              3. ¿Cuánto cuesta el seguro de decesos DKV?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              El precio del <strong>seguro de decesos DKV</strong> depende de
              varios factores: la edad del tomador, el número de asegurados y
              las coberturas elegidas. En términos generales, se trata de uno de
              los seguros con mejor relación coste-beneficio del mercado.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Como agencia DKV exclusiva en Fuengirola, en Seguros Fuengirola
              ofrecemos asesoramiento personalizado para que cada familia
              encuentre la cobertura más adecuada a su situación y presupuesto.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-semibold text-emerald-800 mb-1">
                💡 ¿Quieres saber el precio exacto para tu familia?
              </p>
              <p className="text-emerald-700 text-sm leading-relaxed">
                El precio del seguro de decesos DKV varía según la edad y el
                número de asegurados. Contáctanos y te facilitamos un
                presupuesto personalizado sin compromiso.
              </p>
            </div>
          </section>

          {/* ── SECCIÓN 4 ── */}
          <section aria-labelledby="fuengirola" className="mb-14">
            <h2
              id="fuengirola"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              4. ¿Por qué contratar el seguro de decesos en Fuengirola con DKV?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Contratar un <strong>seguro de decesos en Málaga</strong> con una
              agencia local tiene ventajas reales: trato personalizado,
              asesoramiento en persona y una gestión más ágil en caso de
              siniestro.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En Seguros Fuengirola llevamos años ayudando a familias de la
              Costa del Sol a protegerse con los productos DKV. Conocemos las
              particularidades de la zona —incluyendo la presencia de residentes
              extranjeros que necesitan cobertura de traslado internacional— y
              adaptamos cada póliza a las necesidades reales de cada familia.
            </p>

            <ul className="space-y-2.5">
              {[
                "Agencia DKV exclusiva y autorizada en Fuengirola",
                "Atención personalizada en español, inglés y otros idiomas",
                "Cobertura de traslado internacional, especialmente importante en la Costa del Sol",
                "Gestión rápida de siniestros con acompañamiento a la familia",
                "Posibilidad de incluir a toda la familia en una sola póliza",
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
          </section>

          {/* ── SECCIÓN 5 — INTERNAL LINK ── */}
          <section aria-labelledby="contratar" className="mb-14">
            <h2
              id="contratar"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              5. ¿Cómo contratar el seguro de decesos DKV en Fuengirola?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              El proceso de contratación es sencillo. Puedes ponerte en contacto
              con nosotros por teléfono, email o visitarnos en nuestra oficina
              en Fuengirola. En menos de 24 horas te preparamos un presupuesto
              personalizado y, si decides contratar, la póliza queda activa de
              forma inmediata.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Si quieres conocer todos los detalles de cobertura, precios y
              condiciones, visita nuestra página dedicada al{" "}
              {/* ── ENLACE INTERNO PRINCIPAL ── */}
              <Link
                href="/seguro-de-decesos"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro de decesos DKV en Fuengirola
              </Link>
              , donde encontrarás información completa sobre el producto y un
              formulario de contacto directo.
            </p>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-7 text-white text-center shadow-lg">
              <p className="text-xl font-bold mb-2">
                ¿Listo para proteger a tu familia?
              </p>
              <p className="text-blue-100 text-sm mb-6">
                Solicita tu presupuesto personalizado sin compromiso. Sin coste
                adicional.
              </p>
              <Link
                href="/seguro-de-decesos"
                className="inline-block bg-white text-blue-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow"
              >
                Ver el seguro de decesos DKV →
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq" className="mb-14">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200"
            >
              6. Preguntas frecuentes sobre el seguro de decesos DKV
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Las dudas más habituales que nos trasladan las familias de
              Fuengirola y Málaga.
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
              Conclusión
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              El <strong>seguro de decesos DKV</strong> es una de las mejores
              formas de proteger a tu familia de los imprevistos económicos y
              administrativos que rodean al fallecimiento de un ser querido. Con
              coberturas que van desde el traslado nacional e internacional
              hasta las gestiones legales, y con la posibilidad de cubrir a toda
              la unidad familiar en una sola póliza, es un producto que ofrece
              una tranquilidad real.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Si estás en Fuengirola o en cualquier municipio de Málaga y
              quieres conocer el precio exacto para tu familia, contacta con
              nosotros sin compromiso. En Seguros Fuengirola te asesoramos de
              forma personalizada y sin ningún coste adicional.
            </p>
          </section>

          {/* ── FINAL CTA ── */}
          <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="font-bold text-slate-800 mb-1">
                Seguros Fuengirola — Agencia DKV exclusiva
              </p>
              <p className="text-slate-500 text-sm">
                Asesoramiento local, trato personal y gestión rápida de
                siniestros en la Costa del Sol.
              </p>
            </div>
            <Link
              href="/seguro-de-decesos"
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
