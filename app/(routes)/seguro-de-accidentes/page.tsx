"use client";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import { useRef } from "react";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-dental/data";
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

const Page = () => {
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
        imageSrc="/family.webp"
        imageAlt="Seguro de accidentes para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro de accidentes" features={features} />
        </div>
        <div ref={informacionRef}>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </div>
        <div ref={serviciosRef}>
          <Comparative
            title="Modalidades y condiciones de contratación"
            description=""
            comparatives={comparatives}
          />
        </div>
        <div ref={faqsRef} className="max-w-4xl">
          <Faqs faqs={faqs} />
        </div>
        <div ref={contactRef} className="max-w-4xl">
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
