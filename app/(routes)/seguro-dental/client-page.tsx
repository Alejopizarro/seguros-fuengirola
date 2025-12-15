"use client";
import Features from "../components/features";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Comparative from "../components/comparative";
import Faqs from "../components/faqs";
import LeadForm from "@/components/lead-form";
import { comparatives, faqs, features, products, recomendations } from "./data";
import Recomendations from "../components/recomendations";
import { useRef } from "react";
import ScrollSection from "../components/scroll-section";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ClientPage() {
  const ventajasRef = useRef<HTMLDivElement>(null);
  const preciosRef = useRef<HTMLDivElement>(null);
  const coberturasRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Precios DKV", ref: preciosRef },
    { title: "Coberturas", ref: coberturasRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      {/* HERO - H1 único y optimizado */}
      <Hero
        title="Seguro Dental DKV en Málaga"
        description="El seguro dental DKV más completo y económico. Utilízalo desde el primer día sin carencias."
        description2="Hasta 59 tratamientos dentales gratuitos incluyendo limpieza dental gratis. Precios desde 7,90€/mes. Niños menores de 14 años GRATIS con adulto asegurado."
        imageSrc="/dental.webp"
        imageAlt="Seguro dental DKV Dentisalud - Agentes exclusivos en Fuengirola y Málaga - Tratamientos dentales gratis"
        buttonRef={contactRef}
      />

      <ScrollSection refs={refButtons} />

      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* SECCIÓN 1: Ventajas del seguro dental DKV */}
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro dental DKV Dentisalud
          </h2>
          <Features title="seguro dental DKV" features={features} />
        </section>

        {/* SECCIÓN 2: Precios del seguro dental DKV */}
        <section ref={preciosRef} aria-labelledby="precios-heading">
          <h2 id="precios-heading" className="sr-only">
            Precios del seguro dental DKV - DKV Dentisalud Classic y Élite
          </h2>
          <Pricing products={products} />
        </section>

        {/* SECCIÓN 3: Comparativa de precios - Coberturas DKV */}
        <section
          ref={coberturasRef}
          className="w-full"
          aria-labelledby="coberturas-heading"
        >
          <h2 id="coberturas-heading" className="sr-only">
            Coberturas y precios de tratamientos dentales DKV
          </h2>
          <Comparative
            title="Precios de tratamientos dentales con DKV"
            description="Compara el ahorro con el seguro dental DKV Dentisalud Élite frente al precio de mercado"
            comparatives={comparatives}
          />
        </section>

        {/* SECCIÓN 4: FAQ optimizado para SEO */}
        <section
          ref={faqsRef}
          className="w-full max-w-4xl"
          aria-labelledby="faqs-heading"
        >
          <h2 id="faqs-heading" className="sr-only">
            Preguntas frecuentes sobre el seguro dental DKV
          </h2>
          <Faqs faqs={faqs} />
        </section>

        {/* CONTENIDO SEO ADICIONAL - Texto enriquecido para posicionamiento */}
        <section
          className="w-full max-w-4xl"
          aria-labelledby="info-seo-heading"
        >
          <h2
            id="info-seo-heading"
            className="text-2xl font-bold text-gray-800 mb-4 text-center"
          >
            Tu agencia de seguros dentales DKV en Fuengirola
          </h2>
          <div className="prose prose-lg text-center max-w-none text-gray-600 space-y-4">
            <p>
              Como <strong>agentes exclusivos DKV en Fuengirola</strong>, te
              ofrecemos asesoramiento personalizado para encontrar el{" "}
              <strong>seguro dental DKV</strong> que mejor se adapte a tus
              necesidades. Nuestros clientes en{" "}
              <strong>Málaga y la Costa del Sol</strong> confían en nosotros
              para proteger su salud bucodental con las mejores coberturas del
              mercado.
            </p>
            <p>
              El <strong>seguro dental DKV Dentisalud</strong> destaca por sus{" "}
              <strong>precios competitivos</strong> desde solo 7,90€/mes, sus{" "}
              <strong>59 tratamientos dentales gratuitos</strong> incluyendo
              <strong> limpieza dental gratis</strong>, y la posibilidad de
              asegurar a los
              <strong> niños menores de 14 años totalmente gratis</strong>.
              Además, no tiene carencias: puedes usar tu seguro desde el primer
              día.
            </p>
            <p>
              Visítanos en nuestra oficina de <strong>Fuengirola</strong> en Av.
              Condes de San Isidro, Nº 80, o llámanos al{" "}
              <strong>951 68 13 83</strong>. Atendemos a clientes de toda la
              provincia de
              <strong> Málaga</strong>: Marbella, Torremolinos, Benalmádena,
              Mijas y más.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5: Formulario de contacto */}
        <section ref={contactRef} aria-labelledby="contacto-heading">
          <h2 id="contacto-heading" className="sr-only">
            Solicita presupuesto del seguro dental DKV en Fuengirola
          </h2>
          <LeadForm />
        </section>

        {/* SECCIÓN 6: Otros seguros */}
        <section ref={otrosRef} aria-labelledby="otros-heading">
          <h2 id="otros-heading" className="sr-only">
            Otros seguros DKV disponibles en Fuengirola y Málaga
          </h2>
          <Recomendations recomendations={recomendations} />
        </section>
      </div>
    </div>
  );
}
