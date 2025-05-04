import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col bg-green-400 min-h-[90vh] pt-18 lg:flex-row justify-end lg:justify-between items-center">
      <div className="p-4 lg:px-12 ">
        <h1 className="text-lg font-semibold text-green-800 mb-4">
          Seguros Fuengirola
        </h1>
        <p className="text-4xl font-bold mb-8 tracking-tight leading-none">
          Contrata tu seguro en Fuengirola con DKV, compañía líder en el sector
          asegurador.
        </p>
        <div className="flex space-x-4">
          <Button variant="outline">Más información</Button>
          <Button>
            Contactar <MoveRight />
          </Button>
        </div>
      </div>
      <Image
        src="/family.jpg"
        width={1000}
        height={1000}
        alt="Imagen de un pediatra"
        className="w-full object-cover max-h-[90vh]"
      />
    </div>
  );
};

export default Hero;
