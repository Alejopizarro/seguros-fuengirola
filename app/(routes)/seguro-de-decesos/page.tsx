"use client";
import LeadForm from "@/components/lead-form";
import Faqs from "../components/faqs";
import Features from "../components/features";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Table from "../components/table";
import { faqs, features, products, table, tables } from "./data";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-dental/data";
import ScrollSection from "../components/scroll-section";
import { useRef } from "react";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Page = () => {
  const ventajasRef = useRef<HTMLDivElement>(null);
  const informacionRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Ventajas", ref: ventajasRef },
    { title: "Coberturas y servicios", ref: informacionRef },
    { title: "Seguros", ref: serviciosRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguro de Decesos"
        description="El seguro de decesos que acompaña a tu familia en todo momento"
        description2="Uno de los mejores servicios funerarios. Repatriación al país de origen. Niños GRATIS hasta los 6 años."
        buttonText1="Más información"
        buttonText2="Contactar"
        imageSrc="/family.webp"
        imageAlt="Seguro de Decesos para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro de decesos" features={features} />
        </div>
        <div ref={informacionRef}>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </div>
        <div ref={serviciosRef}>
          <Pricing products={products} />
        </div>
        <div ref={faqsRef}>
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
