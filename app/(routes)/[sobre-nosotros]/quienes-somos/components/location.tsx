import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Image
        src="/seguros-maps.webp"
        width={500}
        height={500}
        alt="Ubicacion Seguros Fuengirola Oficina Comercial DKV"
        className="rounded-xl shadow-xl"
      />
      <div className="flex flex-col justify-center gap-8 bg-gray-900 p-8 rounded-xl shadow-xl text-slate-50">
        <h4 className="text-2xl lg:text-3xl font-semibold">
          Encuentrános en nuestra oficina comercial
        </h4>
        <div className="flex flex-col space-y-4 text-lg items-start text-slate-300">
          <p className="flex items-start gap-x-2">
            <MapPin />
            <span className="font-medium text-slate-50">Direccion:</span> Av.
            Condes de San Isidro, Nº 80, 29640 Fuengirola.
          </p>
          <p className="flex items-start gap-x-2">
            <Phone />
            <span className="font-medium text-slate-50">
              Télefono de contacto:
            </span>{" "}
            951 68 13 83
          </p>
          <p className="text-sm text-slate-300 font-semibold">
            A tan solo 200m del Ayuntamiento de Fuengirola
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
