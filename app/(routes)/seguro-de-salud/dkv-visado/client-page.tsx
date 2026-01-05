"use client";
import Hero from "../../components/hero";
import Faqs from "../../components/faqs";
import LeadForm from "@/components/lead-form";
import {
  faqs,
  features,
  products,
  recomendations,
  coberturas,
  carencias,
  requisitosExtranjeria,
} from "./data";
import Recomendations from "../../components/recomendations";
import { useRef } from "react";
import ScrollSection from "../../components/scroll-section";
import { CheckCircle } from "lucide-react";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ClientPage() {
  const ventajasRef = useRef<HTMLDivElement>(null);
  const planesRef = useRef<HTMLDivElement>(null);
  const coberturasRef = useRef<HTMLDivElement>(null);
  const requisitosRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Planes y precios", ref: planesRef },
    { title: "Coberturas", ref: coberturasRef },
    { title: "Requisitos extranjería", ref: requisitosRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Solicitar presupuesto", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      {/* HERO - H1 único y optimizado para SEO */}
      <Hero
        title="Seguro Médico para Extranjeros en España"
        description="El seguro de salud DKV Integral Élite válido para solicitar tu visado, NIE o permiso de residencia en España. Sin copagos, sin carencias (excepto parto 8 meses)."
        description2="Contratación disponible hasta 3 meses antes de la fecha de efecto. Pago anual con tarjeta aunque no tengas cuenta bancaria en España. Más de 51.000 médicos y 1.000 centros sanitarios."
        imageSrc="/extranjeros.webp"
        imageAlt="Seguro médico para extranjeros en España - DKV Integral - Válido para visado y permiso de residencia"
        buttonRef={contactRef}
      />

      <ScrollSection refs={refButtons} />

      <div className="flex flex-col space-y-12 sm:space-y-20 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* SECCIÓN: Ventajas del seguro para extranjeros */}
        <section
          ref={ventajasRef}
          aria-labelledby="ventajas-heading"
          className="w-full max-w-6xl"
        >
          <h2
            id="ventajas-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Ventajas del seguro médico para extranjeros DKV
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            DKV Integral es el seguro de salud diseñado especialmente para
            extranjeros que necesitan un seguro médico válido para extranjería
            en España
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-emerald-600 mb-4">{feature.emoji}</div>
                <p className="font-semibold text-gray-800 mb-2 text-lg">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: Planes y precios */}
        <section
          ref={planesRef}
          aria-labelledby="planes-heading"
          className="w-full max-w-6xl"
        >
          <h2
            id="planes-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Plan de seguro médico para extranjeros - DKV Integral Élite
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            El único plan válido para extranjería. Sin copagos y sin carencias
            (excepto parto 8 meses), ideal para solicitar el visado y permiso de
            residencia en España.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-emerald-500"
                >
                  <p className="font-bold text-2xl text-gray-800 mb-2">
                    {product.title}
                  </p>
                  <p className="text-emerald-600 font-medium text-lg mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-3xl font-bold text-emerald-600">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            * El precio del seguro médico para extranjeros varía según edad y
            zona geográfica. Solicita tu presupuesto personalizado sin
            compromiso.
          </p>
        </section>

        {/* SECCIÓN: Coberturas */}
        <section
          ref={coberturasRef}
          aria-labelledby="coberturas-heading"
          className="w-full max-w-6xl"
        >
          <h2
            id="coberturas-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Coberturas del seguro médico para extranjeros
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            DKV Integral ofrece una cobertura sanitaria completa que cumple
            todos los requisitos exigidos por extranjería para el visado y
            permiso de residencia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coberturas.map((cobertura, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <p className="font-bold text-lg text-emerald-700 mb-4">
                  {cobertura.categoria}
                </p>
                <ul className="space-y-2">
                  {cobertura.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: Carencias */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Carencias del seguro médico para extranjeros
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Todos los servicios están disponibles desde el primer día, excepto el
            parto. En caso de urgencia vital, no se aplica ninguna carencia.
          </p>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Servicio</th>
                  <th className="px-6 py-3 text-center">Carencia</th>
                  <th className="px-6 py-3 text-left hidden sm:table-cell">
                    Nota
                  </th>
                </tr>
              </thead>
              <tbody>
                {carencias.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-gray-800">{item.servicio}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.tiempo === "Sin carencia"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.tiempo}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm hidden sm:table-cell">
                      {item.descripcion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECCIÓN: Requisitos de extranjería */}
        <section
          ref={requisitosRef}
          aria-labelledby="requisitos-heading"
          className="w-full max-w-4xl"
        >
          <h2
            id="requisitos-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Requisitos de extranjería que cumple DKV Integral
          </h2>
          <p className="text-center text-gray-600 mb-8">
            El seguro médico para extranjeros DKV Integral cumple todos los
            requisitos legales para solicitar el visado y permiso de residencia
            en España
          </p>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requisitosExtranjeria.map((req, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {req.requisito}
                    </p>
                    <p className="text-sm text-gray-600">{req.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Importante:</strong> DKV Integral es aceptado por las
                oficinas de extranjería de toda España. Nuestros agentes en
                Fuengirola te ayudarán con toda la documentación necesaria para
                tu trámite de visado o residencia.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: FAQ */}
        <section
          ref={faqsRef}
          className="w-full max-w-4xl"
          aria-labelledby="faqs-heading"
        >
          <h2
            id="faqs-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Preguntas frecuentes sobre el seguro médico para extranjeros
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Resolvemos tus dudas sobre el seguro de salud para extranjeros en
            España
          </p>
          <Faqs faqs={faqs} />
        </section>

        {/* SECCIÓN: Formulario de contacto */}
        <section
          ref={contactRef}
          aria-labelledby="contacto-heading"
          className="w-full max-w-2xl"
        >
          <h2
            id="contacto-heading"
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Solicita tu presupuesto de seguro médico para extranjeros
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Agentes exclusivos DKV en Fuengirola - Presupuesto personalizado sin
            compromiso
          </p>
          <LeadForm />
        </section>

        {/* SECCIÓN: Contenido SEO adicional */}
        <section
          className="w-full max-w-4xl"
          aria-labelledby="info-seo-heading"
        >
          <h2
            id="info-seo-heading"
            className="text-2xl font-bold text-gray-800 mb-4 text-center"
          >
            Tu seguro médico para extranjeros en Fuengirola y Málaga
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Como <strong>agentes exclusivos DKV en Fuengirola</strong>,
              estamos especializados en
              <strong> seguros médicos para extranjeros en España</strong>.
              Asesoramos a ciudadanos de todas las nacionalidades que necesitan
              un <strong>seguro de salud válido para extranjería</strong>, ya
              sea para solicitar el <strong>visado</strong>, el
              <strong> NIE</strong> o el <strong>permiso de residencia</strong>.
            </p>
            <p>
              El <strong>seguro médico para extranjeros DKV Integral</strong>{" "}
              cumple todos los requisitos exigidos por las oficinas de
              extranjería españolas. Ofrecemos la modalidad
              <strong> Élite sin copagos</strong>, cobertura completa en todo el
              territorio nacional, y la posibilidad de{" "}
              <strong>contratar hasta 3 meses antes</strong> de tu llegada a
              España.
            </p>
            <p>
              Si eres <strong>estudiante extranjero en España</strong>, también
              tenemos opciones adaptadas a tus necesidades. El{" "}
              <strong>seguro médico para estudiantes extranjeros</strong>
              DKV Integral incluye todas las coberturas necesarias para tu
              estancia académica.
            </p>
            <p>
              Visítanos en nuestra oficina de <strong>Fuengirola</strong> en Av.
              Condes de San Isidro, n.º 80, o llámanos al{" "}
              <strong>951 68 13 83</strong>. Atendemos a extranjeros de toda la
              provincia de <strong>Málaga</strong> y la{" "}
              <strong>Costa del Sol</strong>: Marbella, Torremolinos,
              Benalmádena, Mijas, Estepona y más.
            </p>
          </div>
        </section>

        {/* SECCIÓN: Otros seguros */}
        <section ref={otrosRef} aria-labelledby="otros-heading" className="w-full max-w-6xl">
          <h2 id="otros-heading" className="text-3xl font-bold text-center text-gray-800 mb-8">
            Otros seguros DKV disponibles en Fuengirola
          </h2>
          <Recomendations recomendations={recomendations} />
        </section>
      </div>
    </div>
  );
}
