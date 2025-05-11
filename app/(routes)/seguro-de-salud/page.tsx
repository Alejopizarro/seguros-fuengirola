import Differential from "@/components/differential";
import LeadForm from "@/components/lead-form";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Carencias from "./components/carencias";
import Faqs from "../components/faqs";
import { faqs, products } from "./data";

const Page = () => {
  return (
    <div>
      <Hero
        title="Seguros de Salud"
        description="Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España."
        description2="Además, podrás disfrutar de un servicio de atención al cliente 24 horas y un asistente personal para resolver todas tus dudas."
        buttonText1="Solicitar Información"
        buttonText2="Contactar"
        imageSrc="/family.webp"
        imageAlt="Seguros de Salud para Particulares"
      />
      <div className="flex flex-col items-center bg-gradient-to-br from-gray-50 to-gray-100 mb-8">
        <Differential />
        <Pricing products={products} />
        <Carencias />
        <Faqs faqs={faqs} />
        <LeadForm />
      </div>
    </div>
  );
};

export default Page;
