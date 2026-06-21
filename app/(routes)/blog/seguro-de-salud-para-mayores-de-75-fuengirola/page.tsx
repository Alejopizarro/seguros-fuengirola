import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Seguro de salud para mayores de 75 años en Fuengirola",
  description:
    "¿Crees que ya no puedes contratar un seguro de salud por tu edad? En Fuengirola tenemos opciones sin límite de edad, incluso para mayores de 75 años.",
  keywords: [
    "seguro de salud para mayores de 75 años",
    "seguro de salud sin límite de edad Fuengirola",
    "seguro salud mayores Fuengirola",
    "seguro de salud DKV mayores",
    "seguro salud tercera edad Málaga",
  ],
  alternates: {
    canonical:
      "https://segurosfuengirola.es/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
  },
  openGraph: {
    title: "Seguro de salud para mayores de 75 años en Fuengirola",
    description:
      "¿Crees que ya no puedes contratar un seguro de salud por tu edad? En Fuengirola tenemos opciones sin límite de edad, incluso para mayores de 75 años.",
    url: "https://segurosfuengirola.es/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
    siteName: "Seguros Fuengirola",
    locale: "es_ES",
    type: "article",
    publishedTime: "2026-06-20T00:00:00Z",
    authors: ["Seguros Fuengirola"],
    images: [
      {
        url: "https://www.segurosfuengirola.es/happy.webp",
        width: 1200,
        height: 630,
        alt: "Seguro de salud para mayores de 75 años en Fuengirola — Seguros Fuengirola DKV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de salud para mayores de 75 años en Fuengirola",
    description:
      "En Fuengirola tenemos seguros de salud sin límite de edad, incluso para mayores de 75 años.",
    images: ["https://www.segurosfuengirola.es/happy.webp"],
  },
};

// ─────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Seguro de salud para mayores de 75 años en Fuengirola",
  description:
    "¿Crees que ya no puedes contratar un seguro de salud por tu edad? En Fuengirola tenemos opciones sin límite de edad, incluso para mayores de 75 años.",
  author: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    url: "https://www.segurosfuengirola.es",
  },
  publisher: {
    "@type": "Organization",
    name: "Seguros Fuengirola",
    logo: {
      "@type": "ImageObject",
      url: "https://www.segurosfuengirola.es/logo-sf.webp",
    },
  },
  mainEntityOfPage: "https://segurosfuengirola.es/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
  image: "https://www.segurosfuengirola.es/happy.webp",
  datePublished: "2026-06-20",
  inLanguage: "es-ES",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Hay un límite de edad máximo para contratar un seguro de salud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con muchas compañías, sí — a partir de cierta edad dejan de aceptar nuevas contrataciones. En Seguros Fuengirola tenemos un producto que admite contratación hasta los 75 años y, a partir de esa edad, un producto especial diseñado específicamente para mayores de 75 años. En la práctica, no hay edad que te impida contratar un seguro de salud con nosotros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué cubre el seguro de salud para mayores de 75 años?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un seguro de salud completo: hospitalización, cirugía y acceso a especialistas, igual que cualquier otra póliza de salud. Tiene algunas pequeñas exclusiones propias de este producto, que te explicamos con total claridad antes de contratar, sin sorpresas ni letra pequeña.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo bajar la cuota de mi seguro de salud siendo mayor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una opción muy eficaz es un plan con copago y límite anual. Pagas una cuota mensual más baja y, si usas el seguro, aportas una pequeña cantidad por cada servicio hasta un tope máximo al año. Para muchas personas mayores esto reduce significativamente el precio mensual sin perder cobertura.",
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
      name: "Seguro de salud para mayores de 75 años en Fuengirola",
      item: "https://segurosfuengirola.es/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
    },
  ],
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const faqs = [
  {
    q: "¿Hay un límite de edad máximo para contratar un seguro de salud?",
    a: "Con muchas compañías, sí — a partir de cierta edad dejan de aceptar nuevas contrataciones. En Seguros Fuengirola tenemos un producto que admite contratación hasta los 75 años y, a partir de esa edad, un producto especial diseñado específicamente para mayores de 75 años. En la práctica, no hay edad que te impida contratar un seguro de salud con nosotros.",
  },
  {
    q: "¿Qué cubre el seguro de salud para mayores de 75 años?",
    a: "Es un seguro de salud completo: hospitalización, cirugía y acceso a especialistas, igual que cualquier otra póliza de salud. Tiene algunas pequeñas exclusiones propias de este producto, que te explicamos con total claridad antes de contratar, sin sorpresas ni letra pequeña.",
  },
  {
    q: "¿Cómo puedo bajar la cuota de mi seguro de salud siendo mayor?",
    a: "Una opción muy eficaz es un plan con copago y límite anual. Pagas una cuota mensual más baja y, si usas el seguro, aportas una pequeña cantidad por cada servicio hasta un tope máximo al año. Para muchas personas mayores esto reduce significativamente el precio mensual sin perder cobertura.",
  },
];

// ─────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────
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
export default function SeguroSaludMayoresPage() {
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
                  Seguro de salud para mayores
                </li>
              </ol>
            </nav>

            {/* Category badge */}
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              Seguros de salud
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              Seguro de salud para mayores de 75 años{" "}
              <span className="text-blue-300">en Fuengirola</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              ¿Te han dicho que ya no puedes contratar un{" "}
              <strong className="text-white">seguro de salud</strong> por tu
              edad? En Fuengirola tenemos opciones sin límite de edad, también
              para mayores de 75 años.
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
                20 de junio de 2026
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
                6 min de lectura
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
            &quot;A partir de cierta edad los seguros ya no te quieren.&quot; Es una
            frase que escuchamos constantemente, y es verdad que muchas
            compañías dejan de aceptar nuevas contrataciones a partir de
            cierta edad. Pero en{" "}
            <strong className="text-slate-800">
              Seguros Fuengirola tenemos un{" "}
              <strong>seguro de salud para mayores de 75 años</strong>
            </strong>{" "}
            con cobertura completa, y productos sin límite de edad para
            cualquier perfil.
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            En este artículo te explicamos qué opciones reales existen si
            tienes más de 75 años o si estás buscando un seguro para un
            familiar mayor en <strong>Fuengirola</strong>, qué cubre cada
            producto y cómo bajar la cuota sin renunciar a la cobertura.
          </p>

          {/* ── YOUTUBE EMBED ── */}
          <div
            className="mb-12 rounded-2xl overflow-hidden shadow-md"
            style={{ position: "relative", paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/BONfyE8m0Go"
              title="Seguro de salud para mayores de 75 años en Fuengirola"
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
          <section aria-labelledby="rechazo-mayores" className="mb-14">
            <h2
              id="rechazo-mayores"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              1. Por qué muchos seguros rechazan a los mayores de cierta edad
              (y por qué nosotros no)
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Es una frase horrible, pero la escuchamos muy a menudo: &quot;dada
              cierta edad, los seguros ya no nos quieren&quot;. Y, lamentablemente,
              suele pasar. Muchas compañías establecen una edad máxima de
              contratación porque a partir de ahí el riesgo estadístico de
              siniestralidad sube y deciden simplemente cerrar la puerta a
              nuevos clientes.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En Seguros Fuengirola trabajamos con productos diseñados
              específicamente para evitar este problema. Tenemos seguros de
              salud sin límite de edad de contratación, de forma que la edad
              nunca es, por sí sola, un motivo para que se te cierre la
              puerta.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                Lo que cambia con nosotros
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                  Producto de salud con contratación abierta hasta los 75
                  años, sin restricciones adicionales.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    →
                  </span>
                  Producto especial diseñado para mayores de 75 años, con
                  cobertura completa.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    ★
                  </span>
                  En resumen: en Seguros Fuengirola tenemos una opción para
                  cada edad.
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECCIÓN 2 ── */}
          <section aria-labelledby="hasta-75" className="mb-14">
            <h2
              id="hasta-75"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              2. Seguro de salud hasta los 75 años, sin restricciones
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Nuestro producto principal de salud admite contratación hasta
              los 75 años. No hay un proceso especial ni un cuestionario más
              estricto solo por tener más edad: si tienes hasta 75 años, puedes
              acceder al mismo seguro de salud completo que cualquier otra
              persona, con hospitalización, cirugía y acceso a especialistas.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Esto es especialmente importante para quienes ya han recibido un
              &quot;no&quot; de otra compañía y asumen que ya no tienen ninguna opción.
              En la mayoría de esos casos, sí la tienen — simplemente no con
              esa aseguradora en concreto.
            </p>
          </section>

          {/* ── SECCIÓN 3 ── */}
          <section aria-labelledby="mayores-75" className="mb-14">
            <h2
              id="mayores-75"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              3. Producto especial para mayores de 75 años
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              A partir de los 75 años contamos con un producto especial,
              diseñado específicamente para este perfil. No es un seguro
              &quot;reducido&quot;: incluye hospitalización, cirugía y acceso a
              especialistas, exactamente lo que necesita una persona mayor en
              caso de tener que ser atendida.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Tiene algunas pequeñas exclusiones propias de este tipo de
              producto, que te explicamos con total transparencia antes de
              firmar nada — sin sorpresas y sin letra pequeña. La idea es que
              sepas exactamente qué tienes cubierto desde el primer día.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "🏥",
                  title: "Hospitalización",
                  desc: "Ingreso y atención hospitalaria incluidos en la póliza para mayores de 75 años.",
                },
                {
                  icon: "🩺",
                  title: "Cirugía",
                  desc: "Intervenciones quirúrgicas cubiertas, con la red de centros DKV disponible.",
                },
                {
                  icon: "👨‍⚕️",
                  title: "Especialistas",
                  desc: "Acceso a consultas de especialistas según las necesidades de cada paciente.",
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

          {/* ── SECCIÓN 4 ── */}
          <section aria-labelledby="copago" className="mb-14">
            <h2
              id="copago"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              4. Planes con copago: cómo bajar la cuota a partir de cierta
              edad
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Hay un perfil muy importante de gente mayor que cree que no
              puede permitirse un seguro de salud porque, a cierta edad, el
              precio de las pólizas sube mucho. Para esos casos tenemos un
              plan con copago y límite anual.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              Funciona así: la cuota mensual baja considerablemente, y a
              cambio, si usas el seguro, aportas una pequeña cantidad por cada
              servicio. Pero hay un límite de copago al año — una vez
              alcanzado, no pagas nada más por el resto del periodo. Es una de
              las opciones que más recomendamos a quienes ven que su cuota se
              ha disparado con la edad.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-semibold text-emerald-800 mb-1">
                💡 ¿Tu cuota actual se ha subido mucho con la edad?
              </p>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Te estudiamos tu caso y te decimos si un plan con copago puede
                bajarte la cuota sin que pierdas cobertura. Sin compromiso.
              </p>
            </div>
          </section>

          {/* ── SECCIÓN 5 ── */}
          <section aria-labelledby="agente-local" className="mb-14">
            <h2
              id="agente-local"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              5. Por qué contratarlo con un agente local en Fuengirola
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Cuando se trata de un seguro de salud para una persona mayor —ya
              sea para ti o para un familiar— tener a alguien de confianza
              cerca importa todavía más. Un agente local en Fuengirola conoce
              el producto, conoce las clínicas y hospitales de la zona, y está
              disponible si surge cualquier duda o problema.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              En Seguros Fuengirola llevamos más de 10 años asesorando a
              familias de Fuengirola y de toda la{" "}
              <strong>Costa del Sol</strong> — Mijas, Benalmádena,
              Torremolinos, Marbella— y de <strong>Málaga</strong> en general.
              Te explicamos cada opción con calma, sin prisas, y te ayudamos a
              elegir el producto que mejor se adapta a tu edad y tu
              presupuesto.
            </p>

            <ul className="space-y-2.5">
              {[
                "Agencia DKV exclusiva y autorizada en Fuengirola",
                "Asesoramiento personalizado para seguros de salud de mayores",
                "Atención presencial en nuestra oficina de Fuengirola",
                "Gestión completa de autorizaciones médicas y trámites",
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

          {/* ── ENLACES INTERNOS Y CTA ── */}
          <section aria-labelledby="contratar" className="mb-14">
            <h2
              id="contratar"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200"
            >
              6. ¿Cómo contratar tu seguro de salud en Fuengirola?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Si quieres conocer todos los detalles de cobertura, precios y
              condiciones, visita nuestra página dedicada al{" "}
              <Link
                href="/seguro-de-salud"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro de salud en Fuengirola
              </Link>
              . Si además te interesa proteger a tu familia con otros
              productos, también gestionamos el{" "}
              <Link
                href="/seguro-de-decesos"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                seguro de decesos
              </Link>{" "}
              y puedes conocer{" "}
              <Link
                href="/sobre-nosotros/quienes-somos"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                quiénes somos
              </Link>{" "}
              y cómo trabajamos.
            </p>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-7 text-white text-center shadow-lg">
              <p className="text-xl font-bold mb-2">
                Solicita tu presupuesto sin compromiso
              </p>
              <p className="text-blue-100 text-sm mb-6">
                Llámanos al 951 68 13 83 o escríbenos por WhatsApp al 633 10
                60 25. Te asesoramos sin coste adicional.
              </p>
              <Link
                href="/#contacto"
                className="inline-block bg-white text-blue-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow"
              >
                Contactar ahora →
              </Link>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq" className="mb-14">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 pb-3 border-b border-slate-200"
            >
              7. Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Las dudas más habituales sobre el seguro de salud para mayores
              en Fuengirola.
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
              La edad no debería ser un obstáculo para tener un buen seguro de
              salud. En Seguros Fuengirola tenemos un producto que llega hasta
              los 75 años sin restricciones, un seguro especial para mayores
              de 75 años con cobertura completa, y planes con copago para
              quienes necesitan bajar la cuota sin renunciar a la protección.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Si estás en Fuengirola, en la Costa del Sol o en cualquier
              municipio de Málaga y quieres saber qué opción es la mejor para
              ti o para un familiar mayor, contacta con nosotros sin
              compromiso. Te asesoramos de forma personalizada y sin ningún
              coste adicional.
            </p>
          </section>

          {/* ── FINAL CTA ── */}
          <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="font-bold text-slate-800 mb-1">
                Seguros Fuengirola — Agencia DKV exclusiva
              </p>
              <p className="text-slate-500 text-sm">
                Seguros de salud sin límite de edad, asesoramiento local en la
                Costa del Sol.
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
