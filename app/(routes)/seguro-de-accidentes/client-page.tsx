"use client";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import { useRef } from "react";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-de-hogar/data";
import { comparatives, faqs, features, table, tables } from "./data";
import Faqs from "../components/faqs";
import Comparative from "../components/comparative";
import Table from "../components/table";
import Features from "../components/features";
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
    { title: "Coberturas y servicios", ref: informacionRef },
    { title: "Modalidades y condiciones", ref: serviciosRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguro de Accidentes"
        description="Un seguro de accidentes para protegerte a ti y a los tuyos."
        description2="Indemnización en caso de invalidez. Indemnización por fallecimiento en caso de accidente. Atención médica 24h con nuestros médicos de confianza."
        buttonRef={contactRef}
        imageSrc="/accidentes.webp"
        imageAlt="Seguro de accidentes para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro de accidentes
          </h2>
          <Features title="seguro de accidentes" features={features} />
        </section>

        <section ref={informacionRef} aria-labelledby="coberturas-heading">
          <h2 id="coberturas-heading" className="sr-only">
            Coberturas y servicios del seguro de accidentes
          </h2>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </section>

        <section ref={serviciosRef} aria-labelledby="modalidades-heading">
          <h2 id="modalidades-heading" className="sr-only">
            Modalidades y condiciones de contratación
          </h2>
          <Comparative
            title="Modalidades y condiciones de contratación"
            description=""
            comparatives={comparatives}
          />
        </section>

        <section
          ref={faqsRef}
          className="max-w-4xl"
          aria-labelledby="faqs-heading"
        >
          <h2 id="faqs-heading" className="sr-only">
            Preguntas frecuentes sobre seguros de accidentes
          </h2>
          <Faqs faqs={faqs} />
        </section>

        <section
          ref={contactRef}
          className="max-w-4xl"
          aria-labelledby="contacto-heading"
        >
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro de accidentes
          </h2>
          <LeadForm />
        </section>

        <section ref={otrosRef} aria-labelledby="otros-heading">
          <h2 id="otros-heading" className="sr-only">
            Otros seguros disponibles
          </h2>
          <Recomendations recomendations={recomendations} />
        </section>
      </div>
    </div>
  );
}
