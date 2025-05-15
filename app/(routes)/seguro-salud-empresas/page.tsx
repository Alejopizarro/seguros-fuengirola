"use client";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import React, { useRef } from "react";
import Features from "../components/features";
import { faqs, features, steps, table, tables } from "./data";
import Table from "../components/table";
import Steps from "../components/steps";
import Faqs from "../components/faqs";
import ScrollSection from "../components/scroll-section";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-dental/data";

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
    { title: "Ventajas para el empleado y la empresa", ref: empresaRef },
    { title: "Pasos para contratar", ref: stepsRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguros médicos para Pymes y Grandes Empresas"
        description="Seguros de salud para Pymes, con menos de 50 empleados, y Grandes empresas, con más de 50 empleados."
        description2="Acceso directo a los mejores profesionales médicos. Consultas virtuales con especialistas sin desplazamientos. Portal de gestión de empresa para trámites online. Cuidamos la salud de tus empleados y sus familias.​"
        buttonRef={contactRef}
        imageSrc="/family.webp"
        imageAlt="Seguros médicos para pymes y empresas grande."
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro de salud para empresas" features={features} />
        </div>
        <div ref={empresaRef}>
          <Table title={table.title} description="" tables={tables} />
        </div>
        <div ref={stepsRef}>
          <Steps title="seguro para empresas" steps={steps} />
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
