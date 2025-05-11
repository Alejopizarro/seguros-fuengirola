import LeadForm from "./lead-form";

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row min-h-[90vh] pt-18 justify-end lg:justify-between items-center">
      <div className="flex flex-col sm:px-20 px-8 min-h-[43vh] lg:min-h-[90vh] justify-center">
        <h1 className="text-md font-semibold mb-4 text-gray-800">
          Seguros de Salud, Hogar, Vida y Más
        </h1>
        <p className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight leading-none">
          Contrata tu{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-4xl sm:text-5xl font-extrabold text-transparent">
            Seguro en Fuengirola
          </span>{" "}
          con DKV, compañía líder en el sector asegurador.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Somos tu{" "}
          <span className="font-semibold">
            Oficina Comercial DKV en Fuengirola
          </span>{" "}
          estamos muy cerca de ti para ofrecerte el mejor asesoramiento en el
          seguro que más se adapte a ti, seas particular, profesional o empresa.
        </p>
      </div>
      <div className="flex px-8 mb-8 sm:mb-0 items-center justify-center w-full lg:h-[90vh] overflow-hidden">
        <LeadForm />
      </div>
      <div
        className="absolute hidden sm:flex -right-0 w-120 h-120 bg-blue-300 opacity-80 z-0 top-18"
        style={{ clipPath: "circle(52% at 76% 38%)" }}
      ></div>
      <div
        className="absolute -bottom-0 -right-0 w-150 h-150 bg-blue-500 z-0"
        style={{
          clipPath:
            "polygon(100% 33%, 100% 100%, 0% 100%, 14% 74%, 34% 59%, 57% 55%, 68% 42%, 83% 37%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
