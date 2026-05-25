import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
  description:
    "Contratar un seguro de salud en Fuengirola con un agente especializado marca la diferencia. Descubre por qué la cercanía y el asesoramiento local son clave para proteger a tu familia.",
  keywords: [
    "agente de seguros Fuengirola",
    "contratar seguro Fuengirola",
    "seguro de salud Fuengirola",
    "agente DKV Fuengirola",
    "asesor de seguros Málaga",
  ],
  alternates: {
    canonical:
      "https://segurosfuengirola.es/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
  },
  openGraph: {
    title: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
    description:
      "La cercanía y el asesoramiento personal de un agente local marcan la diferencia cuando más lo necesitas.",
    url: "https://segurosfuengirola.es/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
    siteName: "Seguros Fuengirola",
    locale: "es_ES",
    type: "article",
    publishedTime: "2026-05-25T00:00:00Z",
    authors: ["Seguros Fuengirola"],
    images: [
      {
        url: "https://www.segurosfuengirola.es/happy.webp",
        width: 1200,
        height: 630,
        alt: "Agente de seguros local en Fuengirola — Seguros Fuengirola DKV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
    description:
      "La cercanía y el asesoramiento personal de un agente local marcan la diferencia cuando más lo necesitas.",
    images: ["https://www.segurosfuengirola.es/happy.webp"],
  },
};

// ─────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
  description:
    "Contratar un seguro de salud en Fuengirola con un agente especializado marca la diferencia. Descubre por qué la cercanía y el asesoramiento local son clave.",
  image: "https://www.segurosfuengirola.es/happy.webp",
  datePublished: "2026-05-25T00:00:00Z",
  dateModified: "2026-05-25T00:00:00Z",
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
      url: "https://www.segurosfuengirola.es/logo-sf.webp",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://segurosfuengirola.es/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
  },
  keywords:
    "agente de seguros Fuengirola, contratar seguro Fuengirola, seguro de salud Fuengirola, agente DKV Fuengirola",
  inLanguage: "es-ES",
  about: {
    "@type": "InsuranceAgency",
    name: "Seguros Fuengirola",
    areaServed: ["Fuengirola", "Málaga", "Costa del Sol"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta contratar un seguro con un agente en Fuengirola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El asesoramiento con un agente DKV en Fuengirola no tiene ningún coste adicional. El precio del seguro es exactamente el mismo que si lo contrataras directamente con la aseguradora — la diferencia es que tienes un asesor personal que te acompaña durante toda la vigencia de la póliza.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiarme de compañía si ya tengo un seguro contratado online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Podemos estudiar tu póliza actual, comparar coberturas y, si DKV se adapta mejor a tu situación, gestionar el cambio sin que quedes descubierto en ningún momento. El proceso es sencillo y te lo gestionamos nosotros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atendéis a clientes de fuera de Fuengirola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, atendemos a clientes de toda la Costa del Sol: Mijas, Benalmádena, Torremolinos, Marbella y alrededores. Puedes visitarnos en nuestra oficina en Fuengirola o gestionarlo todo por teléfono o email si te resulta más cómodo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué seguros gestiona Seguros Fuengirola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como agentes exclusivos DKV, gestionamos seguros de salud, dental, decesos, vida, hogar y accidentes, tanto para particulares como para autónomos y empresas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si tengo un problema con mi seguro? ¿A quién llamo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos llamas a nosotros directamente. Esa es exactamente la ventaja de tener un agente local: no tienes que navegar por un call center. Nosotros conocemos tu póliza y gestionamos el problema contigo.",
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
      name: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
      item: "https://segurosfuengirola.es/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
    },
  ],
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const comparisonData = [
  { feature: "Explicación personalizada", online: false, agente: true },
  {
    feature: "Atención en siniestros",
    online: "Call center",
    agente: "Agente personal",
  },
  { feature: "Conoce tu situación", online: false, agente: true },
  { feature: "Oficina física cerca", online: false, agente: true },
  {
    feature: "Gestión de autorizaciones",
    online: "Tú solo",
    agente: "Te lo gestionamos",
  },
  { feature: "Atención en inglés", online: "Limitada", agente: true },
];

const faqs = [
  {
    q: "¿Cuánto cuesta contratar un seguro con un agente en Fuengirola?",
    a: "El asesoramiento con un agente DKV en Fuengirola no tiene ningún coste adicional. El precio del seguro es exactamente el mismo que si lo contrataras directamente con la aseguradora — la diferencia es que tienes un asesor personal que te acompaña durante toda la vigencia de la póliza.",
  },
  {
    q: "¿Puedo cambiarme de compañía si ya tengo un seguro contratado online?",
    a: "Sí. Podemos estudiar tu póliza actual, comparar coberturas y, si DKV se adapta mejor a tu situación, gestionar el cambio sin que quedes descubierto en ningún momento. El proceso es sencillo y te lo gestionamos nosotros.",
  },
  {
    q: "¿Atendéis a clientes de fuera de Fuengirola?",
    a: "Sí, atendemos a clientes de toda la Costa del Sol: Mijas, Benalmádena, Torremolinos, Marbella y alrededores. Puedes visitarnos en nuestra oficina en Fuengirola o gestionarlo todo por teléfono o email si te resulta más cómodo.",
  },
  {
    q: "¿Qué seguros gestiona Seguros Fuengirola?",
    a: "Como agentes exclusivos DKV, gestionamos seguros de salud, dental, decesos, vida, hogar y accidentes, tanto para particulares como para autónomos y empresas.",
  },
  {
    q: "¿Qué pasa si tengo un problema con mi seguro? ¿A quién llamo?",
    a: "Nos llamas a nosotros directamente. Esa es exactamente la ventaja de tener un agente local: no tienes que navegar por un call center. Nosotros conocemos tu póliza y gestionamos el problema contigo.",
  },
];

// ─────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────
function ComparisonCell({ value }: { value: boolean | string }) {
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
export default function AgentLocalFuengirolaPage() {
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
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/60 truncate max-w-[200px]">
                  Agente local en Fuengirola
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              Seguros de salud
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              ¿Por qué contratar tu seguro con{" "}
              <span className="text-blue-300">
                un agente local en Fuengirola?
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              El <strong className="text-white">agente de seguros en Fuengirola</strong> que
              eliges importa tanto como la compañía. Cercanía, asesoramiento real
              y alguien que coge el teléfono cuando más lo necesitas.
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
                25 de mayo de 2026
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
                5 min de lectura
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
            Contratar un{" "}
            <strong className="text-slate-800">
              seguro de salud en Fuengirola
            </strong>{" "}
            no es como comprar un móvil. Es una decisión importante — y la
            persona que te lo vende importa tanto como el producto en sí.
            Cuando algo va mal, no quieres esperar cuarenta minutos en una línea
            de atención al cliente. Quieres llamar a alguien que te conoce, que
            conoce tu póliza, y que va a resolverlo.
          </p>

          <p className="text-slate-600 leading-relaxed mb-10">
            En este artículo te explicamos qué diferencia a un{" "}
            <strong>agente de seguros en Fuengirola</strong> de contratar
            online, por qué la proximidad geográfica importa más de lo que
            parece, y cómo trabajamos en Seguros Fuengirola para que siempre
            tengas una referencia de confianza cuando más lo necesitas.
          </p>

          {/* ── YOUTUBE EMBED ── */}
          <div
            className="mb-12 rounded-2xl overflow-hidden shadow-md"
            style={{ position: "relative", paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/GsOBOl-HI00"
              title="¿Por qué contratar tu seguro con un agente local en Fuengirola?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>

          {/* ── SECCIÓN 1 ── */}
          <section aria-labelledby="que-hace-agente" className="mb-14">
            <h2
              id="que-hace-agente"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              1. ¿Qué hace exactamente un agente de seguros especializado?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Contratar un seguro por internet puede parecer sencillo, pero la
              realidad es que la mayoría de las personas no saben exactamente
              qué están firmando hasta que necesitan usar la póliza. Un agente
              de seguros especializado cambia eso por completo.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Un buen agente no te entrega un PDF de cuarenta páginas y te desea
              suerte. Te explica qué cubre y qué no, detecta qué producto se
              adapta a tu situación personal — tu edad, tu familia, tus
              necesidades de salud — y se convierte en el intermediario entre tú
              y la compañía durante toda la vida de la póliza.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Lo que hace un agente que el canal online no hace
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Explica las coberturas reales, no el resumen de marketing",
                  "Detecta qué producto se adapta a tu situación personal",
                  "Es la persona a la que llamar cuando hay un problema o un siniestro",
                  "Gestiona autorizaciones médicas, reclamaciones y cualquier duda",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 2 ── */}
          <section aria-labelledby="momentos-dificiles" className="mb-14">
            <h2
              id="momentos-dificiles"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              2. La referencia en los momentos difíciles
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Tener una referencia en los momentos duros es lo más importante.
              Cuando hay una hospitalización inesperada, cuando surge una
              urgencia dental a medianoche, cuando necesitas tramitar un
              siniestro del hogar y no sabes ni por dónde empezar — esos son los
              momentos que revelan si tu seguro realmente funciona.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Con un agente local, la diferencia es clara: llamas a alguien que
              conoce tu póliza de memoria, que sabe exactamente qué pasos hay
              que dar y que los da contigo. No un call center anónimo en el que
              tienes que explicar tu situación desde cero cada vez que cambias
              de operador.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "🏥",
                  title: "Hospitalización inesperada",
                  desc: "Tu agente gestiona la autorización con la aseguradora para que solo tengas que pensar en recuperarte.",
                },
                {
                  icon: "🦷",
                  title: "Urgencia dental",
                  desc: "Te indicamos qué clínicas de la red están disponibles en Fuengirola y los alrededores en ese momento.",
                },
                {
                  icon: "🏠",
                  title: "Siniestro de hogar",
                  desc: "Coordinamos la peritación y el seguimiento para que el proceso sea lo más rápido y sencillo posible.",
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
          </section>

          {/* ── SECCIÓN 3 ── */}
          <section aria-labelledby="agente-local" className="mb-14">
            <h2
              id="agente-local"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              3. Por qué importa que sea un agente local en Fuengirola
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              No es lo mismo un agente en Madrid gestionando tu seguro por
              teléfono que un agente que conoce Fuengirola, que sabe qué
              clínicas y hospitales hay en Mijas, Benalmádena o Torremolinos, y
              que tiene su oficina a diez minutos de tu casa.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En la{" "}
              <strong>Costa del Sol</strong> hay una circunstancia adicional: un
              porcentaje muy alto de residentes son extranjeros — británicos,
              alemanes, nórdicos — que necesitan asesoramiento en inglés y, en
              muchos casos, coberturas específicas para su situación. Conocer
              ese contexto local marca la diferencia.
            </p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Conocimiento del cuadro médico local: clínicas y hospitales en Fuengirola, Mijas y Benalmádena",
                "Oficina presencial en Av. Condes de San Isidro, Nº 80, Fuengirola",
                "Asesoramiento en español e inglés para residentes de la Costa del Sol",
                "Años de experiencia trabajando con familias de Fuengirola y Málaga",
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

          {/* ── TABLA COMPARATIVA ── */}
          <div className="mb-14">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Contratar online vs contratar con un agente local en Fuengirola
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                      Característica
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Contratar online
                    </th>
                    <th className="text-center px-4 py-3 font-semibold rounded-tr-xl">
                      Agente local en Fuengirola
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 text-slate-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <ComparisonCell value={row.online} />
                      </td>
                      <td className="px-4 py-3 text-center bg-blue-50">
                        <ComparisonCell value={row.agente} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── SECCIÓN 4 ── */}
          <section aria-labelledby="seguros-fuengirola" className="mb-14">
            <h2
              id="seguros-fuengirola"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              4. Seguros Fuengirola: agentes exclusivos DKV en la Costa del Sol
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Somos una agencia exclusiva DKV con oficina en Fuengirola. Llevamos
              desde 2016 asesorando a familias, autónomos y empresas de la Costa
              del Sol — y en todo ese tiempo hemos aprendido que lo que más
              valoran nuestros clientes no es solo el precio del seguro, sino
              saber que tienen a alguien de confianza al otro lado del teléfono.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Gestionamos toda la cartera DKV:{" "}
              <Link
                href="/seguro-de-salud"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro de salud en Fuengirola
              </Link>
              ,{" "}
              <Link
                href="/seguro-dental"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro dental
              </Link>
              ,{" "}
              <Link
                href="/seguro-de-decesos"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro de decesos
              </Link>
              , vida, hogar, accidentes y pólizas para autónomos y empresas.
              Atendemos en español e inglés, cubriendo toda la zona: Fuengirola,
              Mijas, Benalmádena, Torremolinos, Marbella y el resto de la Costa
              del Sol y Málaga.
            </p>

            <ul className="space-y-2.5">
              {[
                "Agencia DKV exclusiva y autorizada en Fuengirola",
                "Más de 10 años asesorando a familias de la Costa del Sol",
                "Atención personalizada en español e inglés",
                "Oficina física en Av. Condes de San Isidro, Nº 80, Fuengirola",
                "Gestión completa de siniestros y autorizaciones",
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

          {/* ── CTA INTERMEDIO ── */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-14">
            <p className="font-semibold text-emerald-800 mb-1 text-base">
              💡 ¿Quieres que un agente te asesore sin compromiso?
            </p>
            <p className="text-emerald-700 text-sm leading-relaxed mb-4">
              Llámanos al{" "}
              <a
                href="tel:951681383"
                className="font-bold underline underline-offset-2"
              >
                951 68 13 83
              </a>{" "}
              o escríbenos a{" "}
              <a
                href="mailto:info@segurosfuengirola.es"
                className="font-bold underline underline-offset-2"
              >
                info@segurosfuengirola.es
              </a>
              . Sin costes adicionales, sin letra pequeña.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-emerald-700 transition-colors shadow"
            >
              Contactar ahora →
            </Link>
          </div>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq" className="mb-14">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200"
            >
              5. Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Las dudas más habituales de las personas que nos contactan en
              Fuengirola y la Costa del Sol.
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
              Elegir un agente de seguros especializado local no es un lujo — es
              la forma inteligente de contratar. El precio del seguro es el
              mismo, pero la diferencia está en lo que ocurre después: en si
              tienes a alguien que te acompaña o tienes que resolver todo solo
              frente a un call center.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Si vives en Fuengirola, en la Costa del Sol o en cualquier
              municipio de Málaga, en Seguros Fuengirola estamos aquí para
              ayudarte. Puedes visitarnos en nuestra oficina, llamarnos o
              escribirnos.{" "}
              <Link
                href="/sobre-nosotros/quienes-somos"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                Conoce a nuestro equipo
              </Link>{" "}
              y comprueba por qué tantas familias de la Costa del Sol confían en
              nosotros.
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
              href="/seguro-de-salud"
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
