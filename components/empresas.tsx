import Image from "next/image";
import { Separator } from "./ui/separator";
import { MoveRight } from "lucide-react";

const Empresas = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row p-8 gap-8 sm:px-20 sm:py-18">
      <Image
        src="/office.jpg"
        width={500}
        height={500}
        alt="Imagen de un pediatra"
        className="w-full object-cover max-h-[90vh] rounded-lg shadow-lg"
      />
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Seguros de Salud para Empresas
        </h2>
        <p className="text-lg text-gray-500 mb-4">
          Ofrecemos seguros de salud para empresas con una amplia gama de
          coberturas y servicios. Nos adaptamos a tus necesidades y las de tu
          empresa.
        </p>
        <span className="bg-green-500 rounded-xl py-2 px-4 text-lg sm:py-1 sm:px-4 sm:text-sm font-semibold mb-4 text-center text-slate-50">
          Deducción en el Impuesto de Sociedades al 100% del gasto
        </span>
        <Separator />
        <div className="flex w-full justify-between items-center mt-4 gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-lg">Seguros para Autonomos</h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur repudiandae magnam corrupti incidunt, numquam.
            </p>
            <span className="font-medium text-sm text-green-700 flex items-center gap-2 cursor-pointer">
              Más información <MoveRight />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-lg">Seguros para Empresas</h4>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur repudiandae magnam corrupti incidunt, numquam.
            </p>
            <span className="font-medium text-sm text-green-700 flex items-center gap-2 cursor-pointer">
              Más información <MoveRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
