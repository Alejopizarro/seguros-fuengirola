"use client";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import { useRef } from "react";
import Features from "../components/features";
import { faqs, features, products, table, tables } from "./data";
import Pricing from "../components/pricing";
import Table from "../components/table";
import Faqs from "../components/faqs";
import Recomendations from "../components/recomendations";
import { recomendations } from "./data";
import ScrollSection from "../components/scroll-section";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ClientPage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const ventajasRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const coberturasRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Información adicional", ref: coberturasRef },
    { title: "Servicios", ref: serviciosRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguro de Hogar"
        description="DKV Hogar es el seguro de hogar con las mejores coberturas para cuidar y proteger tu vivienda."
        description2="Distintas opciones para elegir tu seguro según las coberturas que necesites. Asistencia en el hogar 24 horas. Servicio manitas y reparación de electrodomésticos."
        buttonRef={contactRef}
        imageSrc="/vida.webp"
        imageAlt="Seguro de hogar para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro de hogar
          </h2>
          <Features title="seguro de hogar" features={features} />
        </section>

        <section ref={coberturasRef} aria-labelledby="coberturas-heading">
          <h2 id="coberturas-heading" className="sr-only">
            Coberturas y servicios del seguro de hogar
          </h2>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </section>

        <section ref={serviciosRef} aria-labelledby="planes-heading">
          <h2 id="planes-heading" className="sr-only">
            Planes y precios del seguro de hogar
          </h2>
          <Pricing products={products} />
        </section>

        <section
          ref={faqsRef}
          className="w-full max-w-4xl"
          aria-labelledby="faqs-heading"
        >
          <h2 id="faqs-heading" className="sr-only">
            Preguntas frecuentes sobre seguros de hogar
          </h2>
          <Faqs faqs={faqs} />
        </section>

        <section ref={contactRef} aria-labelledby="contacto-heading">
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro de hogar
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
