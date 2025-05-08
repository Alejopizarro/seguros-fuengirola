import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

const BannerContact = () => {
  return (
    <div className="hidden sm:flex relative z-1000 bg-blue-900 px-8 text-slate-200 py-2 sm:px-20 items-center justify-between">
      <p className="text-md flex items-center gap-x-2">
        <MapPin className="ml-4" size={14} />
        Av. Condes de San Isidro, Nº 80, 29640 Fuengirola.
      </p>
      <div className="flex items-center justify-center">
        <p className="text-md flex items-center gap-x-2 ml-4">
          <Mail className="ml-4" size={14} /> oficina@segurosfuengirola.es
        </p>
        <p className="text-md gap-x-2 flex items-center">
          <Phone className="ml-4" size={14} /> 951 68 13 83
        </p>
        <p className="text-md flex gap-x-2 items-center">
          <Smartphone className="ml-4" size={14} /> 633 10 60 25
        </p>
      </div>
    </div>
  );
};

export default BannerContact;
