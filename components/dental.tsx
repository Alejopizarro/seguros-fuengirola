import { Check, MoveRight } from "lucide-react";
import { Button } from "./ui/button";

const Dental = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18 space-y-8 flex flex-col items-center text-center bg-gray-900 text-slate-50">
      <h4 className="bg-gradient-to-r from-blue-500 to-violet-500 py-1 px-8 rounded-xl text-xl font-semibold mb-4">
        🦷 Seguros Dentales
      </h4>
      <p className="font-bold text-3xl sm:text-4xl leading-none tracking-tight sm:w-3/4 mb-4">
        Los seguros dentales más completos y económicos para utilizar desde el
        primer día.
      </p>
      <ul className="my-4 text-lg md:text-xl lg:text-2xl text-slate-200 space-y-4 font-extralight">
        <li className="flex items-center gap-4">
          <Check color="green" />
          Hasta 59 tratamientos dentales gratuitos a tu disposición.
        </li>
        <li className="flex items-center gap-4">
          <Check color="green" />
          El resto de tratamientos con grandes descuentos.
        </li>
        <li className="flex items-center gap-4">
          <Check color="green" />
          Incluye gratis a hijos menores de 14 años.
        </li>
      </ul>
      <div>
        <p className="text-4xl font-bold mt-4">Desde solo 7,90€ por mes</p>
        <Button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 transition duration-300 ease-in-out">
          Quiero recibir más información <MoveRight />
        </Button>
        <p className="mt-4">
          Consulta con nosotros y te asesoraremos sin compromiso.
        </p>
      </div>
    </div>
  );
};

export default Dental;
