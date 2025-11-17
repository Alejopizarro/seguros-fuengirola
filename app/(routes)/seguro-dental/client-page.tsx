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
  const serviciosRef = useRef<HTMLDivElement>(null);
  const informacionRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Servicios", ref: serviciosRef },
    { title: "Información adicional", ref: informacionRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguros Dentales"
        description="Los seguros dentales más completos y económicos para utilizar desde el primer día."
        description2="Hasta 59 tratamientos dentales gratuitos a tu disposición. El resto de tratamientos con grandes descuentos. Incluye gratis a hijos menores de 14 años."
        imageSrc="/dental.webp"
        imageAlt="Seguros dentales para particulares"
        buttonRef={contactRef}
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro dental DKV
          </h2>
          <Features title="seguro dental" features={features} />
        </section>

        <section ref={serviciosRef} aria-labelledby="planes-heading">
          <h2 id="planes-heading" className="sr-only">
            Planes y precios del seguro dental DKV
          </h2>
          <Pricing products={products} />
        </section>

        <section
          ref={informacionRef}
          className="w-full"
          aria-labelledby="comparativa-heading"
        >
          <h2 id="comparativa-heading" className="sr-only">
            Comparativa de precios de tratamientos dentales
          </h2>
          <Comparative
            title="¿Cuál es el coste de los principales tratamientos dentales?"
            description=""
            comparatives={comparatives}
          />
        </section>

        <section
          ref={faqsRef}
          className="w-full max-w-4xl"
          aria-labelledby="faqs-heading"
        >
          <h2 id="faqs-heading" className="sr-only">
            Preguntas frecuentes sobre seguros dentales DKV
          </h2>
          <Faqs faqs={faqs} />
        </section>

        <section ref={contactRef} aria-labelledby="contacto-heading">
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro dental DKV
          </h2>
          <LeadForm />
        </section>

        <section ref={otrosRef} aria-labelledby="otros-heading">
          <h2 id="otros-heading" className="sr-only">
            Otros seguros DKV disponibles
          </h2>
          <Recomendations recomendations={recomendations} />
        </section>
      </div>
    </div>
  );
}
