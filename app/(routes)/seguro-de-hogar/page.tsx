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
import { recomendations } from "../seguro-dental/data";
import ScrollSection from "../components/scroll-section";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Page = () => {
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
        imageSrc="/family.webp"
        imageAlt="Seguro de hogar para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro de hogar" features={features} />
        </div>
        <div ref={coberturasRef}>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </div>
        <div ref={serviciosRef}>
          <Pricing products={products} />
        </div>
        <div ref={faqsRef} className="w-full max-w-4xl">
          <Faqs faqs={faqs} />
        </div>
        <div ref={contactRef}>
          <LeadForm />
        </div>
        <div ref={otrosRef}>
          <Recomendations recomendations={recomendations} />
        </div>
      </div>
    </div>
  );
};

export default Page;
