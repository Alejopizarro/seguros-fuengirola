import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Particulares = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18 flex items-center justify-between bg-gray-900">
      <div className="flex flex-col gap-4 max-w-2xl">
        <h2 className="text-md font-semibold text-green-600">
          Seguros de salud para particulares
        </h2>
        <p className="font-bold text-2xl sm:text-4xl leading-none tracking-tight w-3/4 text-slate-50">
          Seguros de salud para acceder al mejor servicio de la medicina privada
        </p>
        <ul className="mt-4 text-lg text-slate-200 space-y-4">
          <li className="flex items-center gap-2">
            <Check color="green" />
            Cuidaremos de tu salud física y emocional.
          </li>
          <li className="flex items-center gap-2">
            <Check color="green" />
            Tendrás una extensa cobertura y servicios a tu alcance.
          </li>
          <li className="flex items-center gap-2">
            <Check color="green" />
            Te facilitaremos todos los procesos y gestiones.
          </li>
        </ul>
        <Button className="mt-4 w-1/2 bg-green-600 text-white hover:bg-green-700 transition duration-300 ease-in-out">
          Contrata tu seguro <MoveRight />
        </Button>
      </div>
      <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
        <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
          <Image
            src="/happy.jpg"
            alt="Imagen de un pediatra"
            width={300}
            height={300}
            className=" shadow-lg"
          />
          <img
            className="absolute -top-4 -left-12"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
            alt=""
          />

          <div className="absolute -bottom-10 -left-16 shadow-lg">
            <div className="bg-green-500">
              <div className="px-8 py-10">
                <span className="block text-gray-700 ">Hasta un</span>
                <span className="block tracking-tight leading-none text-4xl font-extrabold text-gray-950 lg:text-5xl">
                  35%
                </span>
                <span className="block mt-2 text-base leading-none text-gray-700">
                  de descuento <br /> durante 6 años
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Particulares;
