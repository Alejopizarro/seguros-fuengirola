"use client";
import Image from "next/image";
import { FormController } from "@/utils/form-controller";

// Bubble data: posición, tamaño y color para el "salpicón" detrás del logo
const BUBBLES = [
  { cx: "18%", cy: "12%", r: 38, color: "#1565C0", opacity: 0.85 },
  { cx: "82%", cy: "8%", r: 22, color: "#1E88E5", opacity: 0.75 },
  { cx: "90%", cy: "30%", r: 44, color: "#1565C0", opacity: 0.7 },
  { cx: "6%", cy: "42%", r: 18, color: "#1E88E5", opacity: 0.8 },
  { cx: "75%", cy: "58%", r: 30, color: "#1565C0", opacity: 0.65 },
  { cx: "20%", cy: "72%", r: 52, color: "#1E88E5", opacity: 0.72 },
  { cx: "88%", cy: "75%", r: 20, color: "#1565C0", opacity: 0.9 },
  { cx: "50%", cy: "90%", r: 34, color: "#1E88E5", opacity: 0.6 },
  { cx: "35%", cy: "20%", r: 14, color: "#1565C0", opacity: 0.55 },
  { cx: "60%", cy: "40%", r: 26, color: "#1E88E5", opacity: 0.5 },
  { cx: "10%", cy: "85%", r: 16, color: "#1565C0", opacity: 0.7 },
  { cx: "68%", cy: "15%", r: 10, color: "#1E88E5", opacity: 0.9 },
];

const HeroIi = () => {
  return (
    <section
      className="relative min-h-[92vh] pt-20 bg-white"
      style={{ overflowX: "hidden" }}
    >
      {/* ── Layout principal ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full min-h-[88vh] flex flex-col lg:flex-row items-center gap-8 px-4 sm:px-10 py-8">
        {/* ══ COLUMNA IZQUIERDA: Logo con salpicón ══════════════════════ */}
        <div className="relative flex items-center justify-center w-full lg:w-[45%] shrink-0 overflow-visible order-2 lg:order-1">
          {/* Contenedor del salpicón + logo */}
          <div className="relative w-[88%] aspect-square mx-auto sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] overflow-visible p-3">
            {/* SVG con burbujas de salpicón */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="-5 -5 110 110"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
              aria-hidden="true"
            >
              {/* Mancha principal de fondo (blob grande) */}
              <ellipse
                cx="50"
                cy="52"
                rx="52"
                ry="51"
                fill="#1565C0"
                opacity="0.12"
              />

              {/* Burbujas de salpicón */}
              {BUBBLES.map((b, i) => (
                <circle
                  key={i}
                  cx={b.cx}
                  cy={b.cy}
                  r={b.r * 0.12}
                  fill={b.color}
                  opacity={b.opacity}
                  style={{
                    animation: `floatBubble ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite alternate`,
                  }}
                />
              ))}

              {/* Gota grande izquierda */}
              <circle cx="0" cy="50" r="5.5" fill="#1565C0" opacity="0.75" />
              {/* Gota grande derecha */}
              <circle cx="92" cy="48" r="4" fill="#1E88E5" opacity="0.8" />
              {/* Gota arriba */}
              <circle cx="50" cy="4" r="3.5" fill="#1565C0" opacity="0.65" />
              {/* Gota abajo */}
              <circle cx="52" cy="96" r="4.5" fill="#1E88E5" opacity="0.7" />

              {/* Microgotas dispersas */}
              <circle cx="12" cy="14" r="2" fill="#1E88E5" opacity="0.9" />
              <circle cx="78" cy="18" r="1.5" fill="#1565C0" opacity="0.85" />
              <circle cx="55" cy="72" r="2.5" fill="#1E88E5" opacity="0.75" />
              <circle cx="5" cy="78" r="1.8" fill="#1565C0" opacity="0.8" />
              <circle cx="15" cy="88" r="1.2" fill="#1E88E5" opacity="0.7" />
              <circle cx="70" cy="85" r="1.6" fill="#1565C0" opacity="0.75" />
            </svg>

            {/* Logo en el centro */}
            <div className="absolute inset-0 flex items-center justify-center sm:p-10">
              <Image
                src="/logo-sf.png"
                alt="Seguros Fuengirola — Agentes Exclusivos DKV en Fuengirola y Málaga"
                title="Seguros Fuengirola — Agentes DKV"
                className="object-contain align-start w-full h-full drop-shadow-2xl"
                width={480}
                height={480}
                priority
              />
            </div>
          </div>

          {/* Badge DKV flotante */}
          <div className="absolute -bottom-3 right-1 lg:bottom-4 lg:right-auto lg:translate-x-0 lg:-right-4 bg-white border border-blue-100 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span className="text-xs sm:text-sm font-semibold text-blue-800 tracking-tight">
              Agente Exclusivo DKV
            </span>
          </div>
        </div>

        {/* ══ COLUMNA DERECHA: Texto + Formulario ═══════════════════════ */}
        <div className="flex flex-col gap-10 w-full lg:w-[55%] order-1 lg:order-2">
          {/* Texto hero */}
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-widest">
              Seguros de Salud, Hogar, Vida y Más
            </p>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-none">
              Contrata tu{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent font-extrabold">
                Seguro en Fuengirola
              </span>{" "}
              con DKV, compañía líder en el sector asegurador.
            </h1>
            <p className="text-base md:text-md text-gray-500 leading-relaxed max-w-xl">
              Somos tu{" "}
              <span className="font-semibold text-gray-700">
                Oficina Comercial DKV en Fuengirola
              </span>
              , muy cerca de ti para ofrecerte el mejor asesoramiento en el
              seguro que más se adapte a ti, seas particular, profesional o
              empresa.
            </p>
          </div>

          {/* Form banner */}
          <div className="rounded-xl bg-blue-900 px-6 py-6 shadow-lg">
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-4">
              Solicita información sin compromiso
            </p>
            <FormController variant="banner" />
          </div>
        </div>
      </div>

      {/* Animación CSS para las burbujas */}
      <style jsx global>{`
        @keyframes floatBubble {
          from {
            transform: translateY(0px) scale(1);
          }
          to {
            transform: translateY(-6px) scale(1.08);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroIi;
