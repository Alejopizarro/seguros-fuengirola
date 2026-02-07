import LeadForm from "./lead-form";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] pt-18">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row justify-end lg:justify-between items-center">
        <div className="flex flex-col sm:px-12 px-4 py-4 2xl:space-y-2 justify-center z-10">
          <div className="flex flex-col-reverse">
            <div className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 tracking-tight leading-none">
              <h1>
                Contrata tu{" "}
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text font-extrabold text-transparent">
                  Seguro en Fuengirola
                </span>
                <span> con DKV, compañía líder en el sector asegurador.</span>
              </h1>
            </div>
            <h2 className="text-md xl:text-lg 2xl:text-xl font-semibold mb-4 text-gray-800">
              Seguros de Salud, Hogar, Vida y Más
            </h2>
            {/* <div className="flex items-center mb-2 -ml-1.5">
              <Image
                src="/logo-sf.webp"
                alt="Seguros Fuengirola - Agentes Exclusivos DKV en Fuengirola y Málaga"
                title="Seguros Fuengirola - Agentes DKV"
                className="object-contain w-[75px] h-[75px] "
                width={100}
                height={100}
                priority
              />
              <p className="text-2xl text-gray-800 flex items-center gap-2 font-semibold tracking-tight leading-none">
                Agentes Exclusivos DKV{" "}
                <Medal className="text-yellow-500" size={24} />
              </p>
            </div> */}
          </div>
          <p className="text-md md:text-lg 2xl:text-2xl text-gray-500 mb-8">
            Somos tu{" "}
            <span className="font-semibold">
              Oficina Comercial DKV en Fuengirola
            </span>{" "}
            estamos muy cerca de ti para ofrecerte el mejor asesoramiento en el
            seguro que más se adapte a ti, seas particular, profesional o
            empresa.
          </p>
        </div>
        <div className="flex px-4 py-4 pt-0 mb-8 sm:mb-0 items-center justify-center w-full lg:h-[90vh] overflow-hidden z-10">
          <LeadForm />
        </div>
      </div>
      <div
        className="absolute hidden lg:flex -right-0 w-120 h-120 bg-blue-300 opacity-80 z-0 top-18"
        style={{ clipPath: "circle(52% at 76% 38%)" }}
      ></div>
      <div
        className="absolute -bottom-0 -right-0 w-150 h-150 bg-blue-500 opacity-90 z-0"
        style={{
          clipPath:
            "polygon(100% 33%, 100% 100%, 0% 100%, 14% 74%, 34% 59%, 57% 55%, 68% 42%, 83% 37%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
