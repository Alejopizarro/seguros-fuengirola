import type { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Blog de Seguros Fuengirola — Consejos y guías sobre seguros DKV",
  description:
    "Artículos y guías prácticas sobre seguros de salud, dental y decesos en Fuengirola. Resuelve tus dudas y toma mejores decisiones con el asesoramiento de Seguros Fuengirola.",
  keywords: [
    "blog seguros fuengirola",
    "guía seguros DKV",
    "seguro de salud fuengirola",
    "seguro dental fuengirola",
    "agente de seguros fuengirola",
  ],
  alternates: {
    canonical: "https://segurosfuengirola.es/blog",
  },
  openGraph: {
    title: "Blog de Seguros Fuengirola — Consejos y guías sobre seguros DKV",
    description:
      "Artículos y guías prácticas sobre seguros de salud, dental y decesos en Fuengirola y la Costa del Sol.",
    url: "https://segurosfuengirola.es/blog",
    siteName: "Seguros Fuengirola",
    locale: "es_ES",
    type: "website",
  },
};

// ─────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────
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
  ],
};

// ─────────────────────────────────────────────
// ARTICLES DATA
// ─────────────────────────────────────────────
const articles = [
  {
    href: "/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
    category: "Seguros de salud",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "20 de junio de 2026",
    readTime: "6 min",
    title: "Seguro de salud para mayores de 75 años en Fuengirola",
    excerpt:
      "¿Te han dicho que ya no puedes contratar un seguro de salud por tu edad? Te explicamos qué opciones reales existen sin límite de edad, incluso para mayores de 75 años, y cómo bajar la cuota con un plan de copago.",
    tags: ["Mayores", "Sin límite de edad", "DKV"],
  },
  {
    href: "/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
    category: "Seguros de salud",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "25 de mayo de 2026",
    readTime: "5 min",
    title: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
    excerpt:
      "Contratar un seguro no es como comprar un móvil. La persona que te lo vende importa tanto como el producto en sí. Descubre qué diferencia a un agente local de contratar online — y por qué importa cuando más lo necesitas.",
    tags: ["Agente local", "Asesoramiento", "DKV"],
  },
  {
    href: "/blog/que-es-seguro-de-decesos-dkv",
    category: "Seguros de vida y familia",
    categoryColor: "bg-purple-100 text-purple-700",
    date: "1 de marzo de 2025",
    readTime: "7 min",
    title:
      "¿Qué es el seguro de decesos DKV y qué cubre? Guía completa para familias en Málaga",
    excerpt:
      "Cuando fallece un ser querido, lo último que necesita una familia es preocuparse por los trámites. Te explicamos qué cubre el seguro de decesos DKV, cuánto cuesta y por qué cada vez más familias en la Costa del Sol eligen esta solución.",
    tags: ["Decesos", "DKV Protección Familiar", "Málaga"],
  },
  {
    href: "/seguro-dental/que-cubre-seguro-dental-dkv",
    category: "Seguro dental",
    categoryColor: "bg-emerald-100 text-emerald-700",
    date: "2025",
    readTime: "6 min",
    title:
      "¿Qué servicios dentales cubre DKV? Guía completa del seguro dental en Málaga",
    excerpt:
      "Revisiones, limpiezas, empastes, ortodoncia e implantes: descubre exactamente qué cubre el seguro dental DKV en sus modalidades Classic y Élite, y cuánto pagarías de tu bolsillo por cada tratamiento.",
    tags: ["Dental", "DKV Dentisalud", "Fuengirola"],
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function BlogPage() {
  return (
    <>
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
          <div className="relative max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-xs text-blue-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/60">Blog</li>
              </ol>
            </nav>

            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              Seguros Fuengirola
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              Guías y consejos{" "}
              <span className="text-blue-300">sobre seguros DKV</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Artículos escritos por nuestro equipo de agentes en Fuengirola
              para que entiendas tus opciones, compares coberturas y tomes
              mejores decisiones para proteger a tu familia.
            </p>
          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section className="max-w-4xl mx-auto px-5 py-14 md:py-20">
          <p className="text-sm text-slate-500 mb-8">
            {articles.length} artículos publicados
          </p>

          <div className="grid gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <div className="p-7">
                  {/* Top row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {article.date}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5"
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
                      {article.readTime} de lectura
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {article.excerpt}
                  </p>

                  {/* Tags + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 text-slate-500 text-xs rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors flex items-center gap-1">
                      Leer artículo
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="max-w-4xl mx-auto px-5 pb-16">
          <div className="border border-slate-200 rounded-2xl p-7 bg-slate-50 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <p className="font-bold text-slate-800 mb-1">
                Seguros Fuengirola — Agencia DKV exclusiva
              </p>
              <p className="text-slate-500 text-sm">
                ¿Tienes dudas? Nuestro equipo te asesora sin compromiso en
                persona, por teléfono o por email.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="flex-shrink-0 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors whitespace-nowrap shadow"
            >
              Contactar ahora
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
