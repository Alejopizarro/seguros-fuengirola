"use client";
import LeadForm from "@/components/lead-form";
import Faqs from "../components/faqs";
import Features from "../components/features";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Table from "../components/table";
import { faqs, features, products, table, tables } from "./data";
import Recomendations from "../components/recomendations";
import { recomendations } from "../seguro-de-hogar/data";
import ScrollSection from "../components/scroll-section";
import { useRef } from "react";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ClientPage() {
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
        buttonRef={contactRef}
        imageSrc="/deceso.webp"
        imageAlt="Seguro de Decesos para particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <section ref={ventajasRef} aria-labelledby="ventajas-heading">
          <h2 id="ventajas-heading" className="sr-only">
            Ventajas del seguro de decesos
          </h2>
          <Features title="seguro de decesos" features={features} />
        </section>

        <section ref={informacionRef} aria-labelledby="coberturas-heading">
          <h2 id="coberturas-heading" className="sr-only">
            Coberturas y servicios del seguro de decesos
          </h2>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </section>

        <section ref={serviciosRef} aria-labelledby="planes-heading">
          <h2 id="planes-heading" className="sr-only">
            Planes y precios del seguro de decesos
          </h2>
          <Pricing products={products} />
        </section>

        <section
          ref={faqsRef}
          className="max-w-4xl w-full"
          aria-labelledby="faqs-heading"
        >
          <h2 id="faqs-heading" className="sr-only">
            Preguntas frecuentes sobre seguros de decesos
          </h2>
          <Faqs faqs={faqs} />
        </section>

        <section ref={contactRef} aria-labelledby="contacto-heading">
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro de decesos
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
