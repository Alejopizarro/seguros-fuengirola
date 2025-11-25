"use client";
import LeadForm from "@/components/lead-form";
import Comparative from "../components/comparative";
import Faqs from "../components/faqs";
import Features from "../components/features";
import Hero from "../components/hero";
import Table from "../components/table";
import { faqs, comparatives, features, table, tables } from "./data";
import Recomendations from "../components/recomendations";
import { recomendations } from "./data";
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
    { title: "Coberturas y servicios", ref: informacionRef },
    { title: "Modalidades y condiciones", ref: serviciosRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="DKV Vida - Seguros de Vida"
        description="El seguro de vida DKV que te ofrece la tranquilidad y seguridad económica que deseas para tu familia"
        description2="Indemnización por fallecimiento por cualquier causa. Adelanto de capital ante una enfermedad terminal. Servicio de atención al duelo para afrontar la pérdida de un ser querido. Asistencia familiar en caso de fallecimiento, testamento online y asesoría legal. Llámanos: 633 10 60 25"
        buttonRef={contactRef}
        imageSrc="/family.webp"
        imageAlt="DKV Vida - Seguros de vida para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro de vida DKV
          </h2>
          <Features title="seguro de vida DKV" features={features} />
        </section>

        <section ref={informacionRef} aria-labelledby="coberturas-heading">
          <h2 id="coberturas-heading" className="sr-only">
            Coberturas y servicios del seguro de vida DKV
          </h2>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </section>

        <section ref={serviciosRef} aria-labelledby="modalidades-heading">
          <h2 id="modalidades-heading" className="sr-only">
            Modalidades y condiciones de contratación del seguro DKV Vida
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
            Preguntas frecuentes sobre seguros de vida DKV
          </h2>
          <Faqs faqs={faqs} />
        </section>

        <section
          ref={contactRef}
          className="max-w-4xl"
          aria-labelledby="contacto-heading"
        >
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro de vida DKV - Tel: 633 10 60 25
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
