"use client";
import LeadForm from "@/components/lead-form";
import { useRef } from "react";
import { comparative, comparatives, features } from "./data";
import Hero from "../components/hero";
import Features from "../components/features";
import Comparative from "../components/comparative";
import Faqs from "../components/faqs";
import { faqs, steps } from "../seguro-salud-empresas/data";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-dental/data";
import Steps from "../components/steps";
import ScrollSection from "../components/scroll-section";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Page = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const ventajasRef = useRef<HTMLDivElement>(null);
  const empresaRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Tipos de seguro", ref: empresaRef },
    { title: "Pasos para contratar", ref: stepsRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguros para autónomos"
        description="Proteger tu salud y tu negocio es nuestra prioridad."
        description2="Asistencia médica completa y apoyo económico ante una baja médica. Amplia cobertura con más de 51,000 especialistas y los mejores centros médicos. Agilidad en tus autorizaciones y pagos por baja laboral."
        buttonRef={contactRef}
        imageSrc="/family.webp"
        imageAlt="Seguros de salud para autonomos"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro para autónomos" features={features} />
        </div>
        <div ref={empresaRef}>
          <Comparative
            title={comparative.title}
            description={comparative.description}
            comparatives={comparatives}
          />
        </div>
        <div ref={stepsRef}>
          <Steps title="seguro para autonómos" steps={steps} />
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
