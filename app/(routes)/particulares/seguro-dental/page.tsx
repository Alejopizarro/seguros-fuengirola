"use client";
import Features from "../components/features";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Comparative from "../components/comparative";
import Faqs from "../components/faqs";
import LeadForm from "@/components/lead-form";
import { comparatives, faqs, features, products, recomendations } from "./data";
import Recomendations from "../components/recomendations";
import { useRef } from "react";
import ScrollSection from "../components/scroll-section";

const Page = () => {
  const ventajasRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const informacionRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Hero
        title="Seguros Dentales"
        description="Los seguros dentales más completos y económicos para utilizar desde el primer día."
        description2="Hasta 59 tratamientos dentales gratuitos a tu disposición. El resto de tratamientos con grandes descuentos. Incluye gratis a hijos menores de 14 años."
        buttonText1="Más información"
        buttonText2="Contactar"
        imageSrc="/family.webp"
        imageAlt="Seguros dentales para particulares"
      />
      <ScrollSection
        ventajasRef={ventajasRef}
        serviciosRef={serviciosRef}
        informacionRef={informacionRef}
        otrosRef={otrosRef}
        contactRef={contactRef}
        faqsRef={faqsRef}
      />
      <div className="flex flex-col space-y-8 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Features title="seguro dental" features={features} />
        </div>
        <div ref={serviciosRef}>
          <Pricing products={products} />
        </div>
        <div ref={informacionRef}>
          <Comparative
            title="¿Cuál es el coste de los prin  cipales tratamientos dentales?"
            comparatives={comparatives}
          />
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
