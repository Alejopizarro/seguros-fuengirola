import Dental from "@/components/dental";
import Differential from "@/components/differential";
import Empresas from "@/components/empresas";
import ExtranjeriaBanner from "@/components/extranjeria-banner";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero-section";
import Particulares from "@/components/particulares";
import Services from "@/components/services";
import StatsDisplay from "@/components/stats-display";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <StatsDisplay />
        <Services />
        <Particulares />
        <Differential />
        <Dental />
        <Empresas />
        <ExtranjeriaBanner className="max-w-7xl py-4 px-4 lg:py-8 mx-auto" />
        <Faqs />
      </div>
    </div>
  );
}
