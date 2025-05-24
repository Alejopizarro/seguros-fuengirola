"use client";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Empresas = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse sm:flex-row p-8 gap-8 sm:px-20 sm:py-18">
      <Image
        src="/office.webp"
        width={500}
        height={500}
        alt="Imagen de un pediatra"
        className="w-full object-cover max-h-[90vh] rounded-lg shadow-lg"
      />
      <div className="flex flex-col">
        <p className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 xl:mb-6 2xl:mb-8">
          Seguros de Salud para Empresas
        </p>
        <p className="text-lg 2xl:text-xl text-gray-500 mb-4 xl:mb-6 2xl:mb-8">
          Ofrecemos seguros de salud para empresas con una amplia gama de
          coberturas y servicios. Nos adaptamos a tus necesidades y las de tu
          empresa.
        </p>
        <span className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl py-2 px-4 text-lg sm:py-1 sm:px-4 sm:text-sm font-semibold mb-4 xl:mb-6 2xl:mb-8 text-center text-slate-50">
          Deducción en el Impuesto de Sociedades al 100% del gasto
        </span>
        <Separator />
        <div className="flex w-full justify-between items-center mt-4 xl:mt-6 2xl:mt-8 gap-4 xl:gap-6 2xl:gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl">
              Seguros para Autónomos
            </h2>
            <p className="text-gray-500 text-sm xl:text-md 2xl:text-lg">
              Proteger tu salud y tu negocio es nuestra prioridad.{" "}
              <h3>Seguros de salud y de baja laboral para autónomos.</h3>
            </p>
            <span
              className="font-medium text-sm xl:text-md 2xl:text-lg text-blue-700 flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/seguro-para-autonomos")}
            >
              Más información <MoveRight />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-lg 2xl:text-2xl">
              Seguros para Empresas
            </h2>
            <h3 className="text-gray-500 text-sm 2xl:text-lg">
              Seguros de salud para Pymes y Grandes empresas, con más de 50
              empleados.
            </h3>
            <span
              className="font-medium text-sm 2xl:text-lg text-blue-700 flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/seguro-salud-empresas")}
            >
              Más información <MoveRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
