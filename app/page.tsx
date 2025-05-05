import Dental from "@/components/dental";
import Differential from "@/components/differential";
import Empresas from "@/components/empresas";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero-section";
import LeadForm from "@/components/lead-form";
import Particulares from "@/components/particulares";
import Services from "@/components/services";
import StatsDisplay from "@/components/stats-display";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <StatsDisplay />
        <Services />
        <Particulares />
        <Differential />
        <Separator className="my-8" />
        <Empresas />
        <Dental />
        <Faqs />
        <LeadForm />
      </div>
    </div>
  );
}
