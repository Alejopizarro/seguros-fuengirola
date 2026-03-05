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
import Link from "next/link";

interface RefButtons {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function ClientPage() {
  const ventajasRef = useRef<HTMLDivElement>(null);
  const informacionRef = useRef<HTMLDivElement>(null);
  const preciosRef = useRef<HTMLDivElement>(null);
  const porqueRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const otrosRef = useRef<HTMLDivElement>(null);

  const refButtons: RefButtons[] = [
    { title: "Qué cubre", ref: ventajasRef },
    { title: "Coberturas", ref: informacionRef },
    { title: "Precios", ref: preciosRef },
    { title: "Por qué DKV", ref: porqueRef },
    { title: "Preguntas frecuentes", ref: faqsRef },
    { title: "Contratar seguro", ref: contactRef },
    { title: "Otros seguros", ref: otrosRef },
  ];

  return (
    <div>
      <Hero
        title="Seguro de Decesos DKV: Protección Familiar en Fuengirola y Málaga"
        description="El seguro de decesos DKV que acompaña a tu familia en todo momento"
        description2="Uno de los mejores servicios funerarios. Repatriación al país de origen incluida. Niños GRATIS hasta los 6 años. Llámanos: 633 10 60 25"
        buttonRef={contactRef}
        imageSrc="/deceso.webp"
        imageAlt="Seguro de decesos DKV en Fuengirola - Protección familiar completa"
      />
      <ScrollSection refs={refButtons} />
      <div className="flex flex-col space-y-8 sm:space-y-16 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Sección: ¿Qué es el seguro de decesos DKV y qué cubre? */}
        <section
          ref={ventajasRef}
          className="max-w-4xl w-full"
          aria-labelledby="que-es-heading"
        >
          <h2
            id="que-es-heading"
            className="text-2xl lg:text-3xl font-semibold text-center mb-6"
          >
            ¿Qué es el seguro de decesos DKV y qué cubre?
          </h2>
          <div className="text-gray-600 space-y-4 text-base leading-relaxed">
            <p>
              El <strong>seguro de decesos DKV</strong> es una póliza diseñada
              para garantizar la prestación completa del servicio funerario ante
              el fallecimiento del asegurado, cubriendo todos los gastos y
              gestiones asociados. Contratar un{" "}
              <strong>seguro de decesos en Fuengirola y Málaga</strong> con DKV
              significa contar con el respaldo de una de las aseguradoras más
              reconocidas de España, con más de 100 años de experiencia en el
              sector.
            </p>
            <p>
              Con <strong>DKV Decesos</strong>, tu familia no tendrá que
              preocuparse por ningún trámite administrativo, legal ni logístico
              en un momento tan delicado. El seguro incluye la organización
              completa de la ceremonia, el traslado del féretro a cualquier punto
              de España y la repatriación internacional al país de origen sin
              coste adicional, una ventaja especialmente valorada por la
              comunidad extranjera residente en la Costa del Sol.
            </p>
            <p>
              Además, el seguro de decesos DKV va mucho más allá del servicio
              funerario tradicional: incluye apoyo psicológico para los
              familiares durante el duelo, testamento online gratuito,
              asesoramiento jurídico telefónico, borrado de huella digital y
              asistencia médica mundial de hasta 18.000 € en viajes de urgencia.
              Todo ello desde tan solo 1,80 €/mes, con niños gratis hasta los 6
              años.
            </p>
          </div>
          <div className="mt-8">
            <Features title="seguro de decesos DKV" features={features} />
          </div>
        </section>

        {/* Sección: Coberturas del seguro de decesos DKV Protección Familiar */}
        <section
          ref={informacionRef}
          aria-labelledby="coberturas-heading"
        >
          <h2
            id="coberturas-heading"
            className="text-2xl lg:text-3xl font-semibold text-center mb-6"
          >
            Coberturas del seguro de decesos DKV Protección Familiar
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4 text-base leading-relaxed mb-8">
            <p>
              <strong>DKV Protección Familiar</strong> es el plan más completo
              del seguro de decesos DKV. Incluye todas las coberturas esenciales
              para que tu familia esté protegida ante cualquier eventualidad,
              tanto en España como en el extranjero. A diferencia de otros
              seguros de decesos del mercado, DKV Protección Familiar destaca por
              incluir la repatriación internacional sin coste adicional y
              servicios innovadores como la planificación personalizada del
              funeral y el testamento online.
            </p>
            <p>
              El seguro de decesos estándar cubre el servicio funerario básico y
              el traslado nacional. Sin embargo,{" "}
              <strong>DKV Protección Familiar</strong> amplía estas coberturas
              con repatriación internacional, apoyo psicológico extendido,
              asistencia médica mundial, borrado de huella digital y
              asesoramiento jurídico. Es la opción más completa para familias que
              buscan tranquilidad total, especialmente para residentes
              extranjeros en Fuengirola y Málaga que necesitan garantizar la
              repatriación a su país de origen.
            </p>
          </div>
          <Table
            title={table.title}
            description={table.description}
            tables={tables}
          />
        </section>

        {/* Sección: Precios del seguro de decesos DKV en Fuengirola */}
        <section ref={preciosRef} aria-labelledby="precios-heading">
          <h2
            id="precios-heading"
            className="text-2xl lg:text-3xl font-semibold text-center mb-6"
          >
            Precios del seguro de decesos DKV en Fuengirola
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4 text-base leading-relaxed mb-8">
            <p>
              Los <strong>precios del seguro de decesos DKV</strong> son de los
              más competitivos del mercado. El coste varía en función de la edad
              del asegurado y las coberturas opcionales que se contraten, pero
              los precios de referencia son los siguientes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>DKV Protección Familiar:</strong> desde 1,80 €/mes por
                persona. Incluye servicio funerario completo, repatriación,
                apoyo psicológico y testamento online.
              </li>
              <li>
                <strong>DKV Buen Legado:</strong> desde 2,00 €/mes. Incluye
                todas las coberturas de Protección Familiar más la opción de una
                despedida con bajo impacto medioambiental.
              </li>
              <li>
                <strong>DKV Protección Familiar con Serviplus:</strong> desde
                2,25 €/mes. Añade 47 tratamientos dentales gratuitos, chat
                médico 24h y consultas con especialistas a precios reducidos.
              </li>
            </ul>
            <p>
              Los niños están incluidos de forma gratuita hasta los 6 años. El
              seguro de decesos DKV no tiene carencias para el servicio funerario
              básico, por lo que la cobertura es inmediata desde el primer día.
              Para obtener un presupuesto personalizado según tu situación
              familiar, contacta con nuestros agentes en Fuengirola al{" "}
              <strong>633 10 60 25</strong>.
            </p>
          </div>
          <Pricing products={products} />
        </section>

        {/* Sección: ¿Por qué contratar un seguro de decesos en Málaga con DKV? */}
        <section
          ref={porqueRef}
          className="max-w-4xl w-full"
          aria-labelledby="porque-heading"
        >
          <h2
            id="porque-heading"
            className="text-2xl lg:text-3xl font-semibold text-center mb-6"
          >
            ¿Por qué contratar un seguro de decesos en Málaga con DKV?
          </h2>
          <div className="text-gray-600 space-y-4 text-base leading-relaxed">
            <p>
              Contratar un{" "}
              <strong>seguro de decesos en Málaga y Fuengirola</strong> con DKV
              ofrece ventajas que no encontrarás con otras aseguradoras. Como
              agentes oficiales DKV en Fuengirola, te ofrecemos asesoramiento
              personalizado y cercano, con atención presencial y telefónica para
              resolver cualquier duda sobre tu póliza.
            </p>
            <p>
              La Costa del Sol cuenta con una importante comunidad internacional,
              y el seguro de decesos DKV es especialmente adecuado para
              residentes extranjeros gracias a su cobertura de repatriación
              internacional sin coste adicional. Ya seas de origen europeo,
              latinoamericano o de cualquier otra nacionalidad, DKV garantiza el
              traslado al país de origen y el viaje de ida y vuelta de un
              acompañante.
            </p>
            <p>
              Además, como correduría local en Fuengirola, conocemos las
              necesidades específicas de nuestros vecinos. Te ayudamos con la
              contratación, la gestión de siniestros y cualquier modificación de
              tu póliza de forma rápida y sin complicaciones. La combinación de
              la solidez de DKV Seguros con la cercanía de un agente local es lo
              que hace de <strong>Seguros Fuengirola</strong> tu mejor opción
              para contratar un seguro de decesos en la provincia de Málaga.
            </p>
          </div>
        </section>

        {/* Sección: Preguntas frecuentes sobre el seguro de decesos DKV */}
        <section
          ref={faqsRef}
          className="max-w-4xl w-full"
          aria-labelledby="faqs-heading"
        >
          <h2
            id="faqs-heading"
            className="text-2xl lg:text-3xl font-semibold text-center mb-6"
          >
            Preguntas frecuentes sobre el seguro de decesos DKV
          </h2>
          <Faqs faqs={faqs} />
        </section>

        {/* Sección: Contacto / CTA */}
        <section ref={contactRef} aria-labelledby="contacto-heading">
          <h2 id="contacto-heading" className="sr-only">
            Solicita tu presupuesto de seguro de decesos DKV
          </h2>
          <div className="max-w-4xl mx-auto text-center text-gray-600 mb-8">
            <p className="text-lg">
              ¿Quieres contratar tu{" "}
              <strong>seguro de decesos DKV en Fuengirola o Málaga</strong>?
              Rellena el formulario y te llamamos sin compromiso, o contacta
              directamente con nosotros al{" "}
              <strong>633 10 60 25</strong>. Nuestros agentes te
              asesorarán sobre el plan que mejor se adapte a las necesidades de
              tu familia.
            </p>
          </div>
          <LeadForm />
        </section>

        {/* Sección: Otros seguros */}
        <section ref={otrosRef} aria-labelledby="otros-heading">
          <h2 id="otros-heading" className="sr-only">
            Otros seguros DKV disponibles
          </h2>
          <Recomendations recomendations={recomendations} />
        </section>

        {/* Enlazado interno */}
        <nav className="max-w-4xl w-full text-sm text-gray-500 border-t pt-8">
          <p className="mb-2 font-medium text-gray-700">
            También te puede interesar:
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 underline"
              >
                Seguros DKV en Fuengirola
              </Link>
            </li>
            <li>
              <Link
                href="/seguro-de-salud"
                className="hover:text-blue-600 underline"
              >
                Seguro de salud DKV
              </Link>
            </li>
            <li>
              <Link
                href="/seguro-de-hogar"
                className="hover:text-blue-600 underline"
              >
                Seguro de hogar DKV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
