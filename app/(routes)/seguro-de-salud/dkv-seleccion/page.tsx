"use client";
import { useRef } from "react";
import Hero from "../../components/hero";
import LeadForm from "@/components/lead-form";
import Features from "../../components/features";
import { features, table, tables } from "./data";
import Table from "../../components/table";

const Page = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Hero
        title="Seguro de Salud Sin Límite de Edad"
        description=""
        description2="DKV Selección es un seguro de salud privado que destaca por no tener límite de edad de contratación, ofreciendo cobertura médica completa para personas de todas las edades."
        imageSrc="/abuelo.webp"
        imageAlt="DKV Selección - Seguro de salud sin limite de edad"
        buttonRef={contactRef}
      />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div>
          <Features
            title="seguro de salud sin limite de edad"
            features={features}
          />
        </div>
        <div>
          <Table title={table.title} description="" tables={tables} />
        </div>
        <div ref={contactRef}>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
