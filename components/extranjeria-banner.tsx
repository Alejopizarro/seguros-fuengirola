"use client";

import {
  Globe,
  FileCheck,
  Shield,
  Clock,
  ArrowRight,
  Plane,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ExtranjeriaBannerProps {
  variant?: "default" | "compact" | "horizontal";
  showImage?: boolean;
  className?: string;
}

export default function ExtranjeriaBanner({
  variant = "default",
  showImage = true,
  className = "",
}: ExtranjeriaBannerProps) {
  const features = [
    {
      icon: <FileCheck className="w-5 h-5" />,
      text: "Válido para visado y NIE",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Sin copagos ni carencias",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Contrátalo 3 meses antes",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      text: "Asistencia internacional",
    },
  ];

  // Versión compacta para sidebars o espacios reducidos
  if (variant === "compact") {
    return (
      <div
        className={`bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white ${className}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-6 h-6" />
          <span className="text-emerald-200 text-sm font-medium">Nuevo</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Seguro para Extranjeros</h3>
        <p className="text-emerald-100 text-sm mb-4">
          Seguro médico válido para visado y permiso de residencia en España.
        </p>
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-emerald-100"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/seguro-de-salud/dkv-visado"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors w-full justify-center"
        >
          Más información
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Versión horizontal para banners en páginas
  if (variant === "horizontal") {
    return (
      <div
        className={`bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 rounded-2xl overflow-hidden ${className}`}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-6 md:p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5" />
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                DKV Visado
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              ¿Necesitas un seguro médico para tu visado?
            </h3>
            <p className="text-emerald-100 mb-4 max-w-xl">
              DKV Integral cumple todos los requisitos de extranjería para
              solicitar tu permiso de residencia en España. Sin copagos, sin
              carencias.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-sm text-emerald-100"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </span>
              ))}
            </div>
            <Link
              href="/seguro-de-salud/dkv-visado"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Solicitar información
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          {showImage && (
            <div className="hidden md:block w-64 lg:w-80 h-full">
              <div className="relative h-full min-h-[250px]">
                <Image
                  src="/extranjeros.webp"
                  alt="Seguro médico para extranjeros en España"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Versión default - banner destacado completo
  return (
    <section className={`w-full ${className}`}>
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contenido */}
          <div className="p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold uppercase">
                  Nuevo
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Seguro Médico para Extranjeros en España
            </h2>

            <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
              ¿Necesitas un seguro de salud para solicitar tu{" "}
              <strong>visado</strong>,<strong> NIE</strong> o{" "}
              <strong>permiso de residencia</strong>? DKV Integral cumple todos
              los requisitos de extranjería.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                >
                  <div className="text-emerald-300">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/seguro-de-salud/dkv-visado"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Ver planes y precios
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/seguro-de-salud/dkv-visado#contacto"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors border border-emerald-400"
              >
                Solicitar presupuesto
              </Link>
            </div>
          </div>

          {/* Imagen */}
          {showImage && (
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent z-10" />
              <Image
                src="/extranjeros.webp"
                alt="Seguro médico para extranjeros - DKV Integral - Válido para visado y residencia en España"
                fill
                className="object-cover"
                priority
              />
              {/* Badges flotantes */}
              <div className="absolute bottom-8 right-8 z-20 space-y-3">
                <div className="bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-800">
                    +51.000 médicos
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-800">
                    Aceptado por extranjería
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Barra inferior con info adicional */}
        <div className="bg-emerald-700/50 px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-100 text-sm">
            <p>
              <strong className="text-white">Pago anual con tarjeta</strong> —
              No necesitas cuenta bancaria española
            </p>
            <p className="flex items-center gap-2">
              <span>Agentes DKV en Fuengirola y Málaga</span>
              <span className="text-white font-semibold">951 68 13 83</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
