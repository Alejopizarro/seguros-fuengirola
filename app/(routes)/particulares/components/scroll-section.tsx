import scrollToSection from "@/lib/scroll-to-section";

interface RefProps {
  ventajasRef: React.RefObject<HTMLElement | null>;
  serviciosRef: React.RefObject<HTMLElement | null>;
  informacionRef: React.RefObject<HTMLElement | null>;
  faqsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  otrosRef: React.RefObject<HTMLElement | null>;
}

const ScrollSection = (props: RefProps) => {
  const { contactRef, faqsRef } = props;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-blue-900 text-slate-50 p-8 sm:px-20 sm:py-8 gap-4 font-medium text-xl">
      <button
        onClick={() => scrollToSection(faqsRef)}
        className="cursor-pointer"
      >
        Ventajas
      </button>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="cursor-pointer"
      >
        Servicios
      </button>
      <button
        onClick={() => scrollToSection(faqsRef)}
        className="cursor-pointer"
      >
        Información adicional
      </button>
      <button
        onClick={() => scrollToSection(faqsRef)}
        className="cursor-pointer"
      >
        Preguntas frecuentes
      </button>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="cursor-pointer"
      >
        Contratar seguro
      </button>
      <button
        onClick={() => scrollToSection(contactRef)}
        className="cursor-pointer"
      >
        Otros seguros
      </button>
    </div>
  );
};

export default ScrollSection;
