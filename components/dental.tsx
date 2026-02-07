"use client";
import { Check, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Dental = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-800">
      <div className="p-8 sm:px-12 max-w-[1440px] mx-auto sm:py-18 space-y-8 flex flex-col items-center text-center text-slate-50">
        <h2 className="bg-green-700 py-1 px-8 rounded-xl text-md lg:text-2xl font-semibold mb-4 2xl:mb-8">
          🦷 Seguros Dentales para particulares
        </h2>
        <p className="font-bold text-3xl lg:text-4xl 2xl:text-5xl leading-none tracking-tight lg:w-3/4 mb-4 2xl:mb-8">
          Los seguros dentales más completos y económicos para utilizar desde el
          primer día.
        </p>
        <ul className="my-4 2xl:my-8 text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-slate-300 space-y-4 font-extralight">
          <li className="flex items-start lg:items-center gap-4">
            <Check color="green" />
            Hasta 59 tratamientos dentales gratuitos a tu disposición.
          </li>
          <li className="flex items-start lg:items-center gap-4">
            <Check color="green" />
            El resto de tratamientos con grandes descuentos.
          </li>
          <li className="flex items-start lg:items-center gap-4">
            <Check color="green" />
            Incluye gratis a hijos menores de 14 años.
          </li>
        </ul>
        <div className="space-y-4">
          <p className="text-4xl lg:text-5xl 2xl:text-6xl font-bold mt-4 2xl:mt-8 ">
            Desde 7,90€/mes
          </p>
          <Button
            className="mt-4 w-full bg-green-700 text-white hover:bg-green-800 transition duration-300 ease-in-out"
            onClick={() => router.push("/seguro-dental")}
          >
            Quiero recibir más información <MoveRight />
          </Button>
          <p className="mt-4 text-slate-300">
            Consulta con nosotros y te asesoraremos sin compromiso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dental;
