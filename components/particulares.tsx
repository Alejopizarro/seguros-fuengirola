import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Particulares = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row p-8 sm:px-20 sm:py-18 items-center justify-between bg-gray-900">
      <div className="flex flex-col gap-4 max-w-2xl mb-4 sm:mb-0">
        <h2 className="text-md font-semibold text-blue-600">
          Seguros de salud para particulares
        </h2>
        <p className="font-bold text-3xl sm:text-4xl leading-none tracking-tight sm:w-3/4 text-slate-50">
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
        <Button className="mt-4 sm:w-1/2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out">
          Contrata tu seguro <MoveRight />
        </Button>
      </div>
      <div className="relative">
        <div className="relative w-full">
          <Image
            src="/happy.webp"
            alt="Imagen de un pediatra"
            width={500}
            height={300}
            className="max-h-[80vh] object-cover rounded-lg shadow-lg"
          />
          <Image
            width={300}
            height={300}
            className="absolute -top-4 -left-12"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Particulares;
