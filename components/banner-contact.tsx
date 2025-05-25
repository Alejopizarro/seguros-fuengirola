import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import LinkUrl from "./ui/link-url";

const BannerContact = () => {
  return (
    <div className="hidden sm:flex relative z-1000 bg-blue-900 px-8 text-slate-300 font-light text-sm py-2 sm:px-20 items-center justify-between">
      <p className="text-md flex items-center gap-x-2">
        <MapPin className="ml-4" size={14} />
        <LinkUrl
          title="Av. Condes de San Isidro, Nº 80, 29640 Fuengirola. Málaga"
          route="https://maps.app.goo.gl/LpYm5FnhNxznpnYQA"
          titleSeo="Ubicación de Seguros Fuengirola"
        />
      </p>
      <div className="flex items-center justify-center">
        <p className="text-md flex items-center gap-x-2 ml-4">
          <Mail className="ml-4" size={14} /> info@segurosfuengirola.es
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
