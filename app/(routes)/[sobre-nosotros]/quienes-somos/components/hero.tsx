import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-18 relative h-[65vh] w-full overflow-hidden">
      <Image
        src="/oficina-dkv.webp"
        width={1000}
        height={500}
        alt="Oficina Comercial DKV Seguros Fuengirola"
        className="absolute pt-18 inset-0 w-full h-full z-0 object-cover opacity-50"
      />
      <div className="absolute top-43 lg:pt-0 inset-0 z-10 flex flex-col items-center text-center p-8 space-y-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
          ¿Quienes somos?
        </h1>
        <p className="text-gray-700 max-w-4xl">
          Somos tu{" "}
          <span className="font-semibold text-gray-950">
            Oficina Comercial DKV en Fuengirola
          </span>
          , estamos muy cerca de ti para ofrecerte el mejor asesoramiento en el
          seguro que más se adapte a ti, seas particular, profesional o empresa.
        </p>
      </div>
    </div>
  );
};

export default Hero;
