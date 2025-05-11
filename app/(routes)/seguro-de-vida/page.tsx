"use client";
import LeadForm from "@/components/lead-form";
import Comparative from "../components/comparative";
import Faqs from "../components/faqs";
import Features from "../components/features";
import Hero from "../components/hero";
import Table from "../components/table";
import { faqs, comparatives, features, table, tables } from "./data";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-dental/data";
import { useRef } from "react";
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
        title="Seguros de Vida"
        description="El seguro de vida que me ofrece la tranquilidad y seguridad económica que deseo para mi familia"
        description2="Indemnización por fallecimiento por cualquier causa. Adelanto de capital ante una enfermedad terminal. Servicio de atención al duelo para afrontar la pérdida de un ser querido. Asistencia familiar en caso de fallecimiento, testamento online y asesoría legal."
        buttonText1="Más información"
        buttonText2="Contactar"
        imageSrc="/family.webp"
        imageAlt="Seguros de vida para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro de vida" features={features} />
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
