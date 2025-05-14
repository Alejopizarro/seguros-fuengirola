import Differential from "@/components/differential";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Carencias from "./components/carencias";
import Faqs from "../components/faqs";
import { faqs, products } from "./data";
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
    { title: "Servicios", ref: serviciosRef },
    { title: "Información adicional", ref: informacionRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguros de Salud"
        description="Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España."
        description2="Además, podrás disfrutar de un servicio de atención al cliente 24 horas y un asistente personal para resolver todas tus dudas."
        buttonRef={contactRef}
        imageSrc="/family.webp"
        imageAlt="Seguros de Salud para Particulares"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div ref={ventajasRef}>
          <Differential />
        </div>
        <div ref={serviciosRef}>
          <Pricing products={products} />
        </div>
        <div ref={informacionRef}>
          <Carencias />
        </div>
        <div ref={faqsRef}>
          <Faqs faqs={faqs} />
        </div>
        <div ref={contactRef}>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
