import { Mail, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-slate-50">
      <div className="grid sm:grid-cols-3">
        <div className="w-full items-start p-4 flex flex-col gap-4 mx-auto sm:py-16 sm:px-24 text-left">
          <h5 className="font-bold text-xl">Seguros Fuengirola</h5>
          <p>Sobre Nosotros</p>
          <p>FAQs</p>
          <p>Blog</p>
          <p>Legal notice, privacity, terms and conditions</p>
        </div>
        <div className="w-full items-start p-4 flex flex-col gap-4 mx-auto sm:py-16 sm:px-24 text-left">
          <h5 className="font-bold text-xl">Contact us</h5>
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
        <div className="w-full items-start p-4 flex flex-col gap-4 mx-auto sm:py-16 sm:px-24 text-left">
          <h5 className="font-bold text-xl">Other activities</h5>
          <Link href="https://marbellahiking.com">marbellahiking.com</Link>
          <Link href="https://tuuradventure.com">tuuradventure.com</Link>
          <Link href="https://coasteeringmenorca.com">
            coasteeringmenorca.com
          </Link>
        </div>
      </div>
      <div className="p-4 sm:px-24">
        <Separator />
        <span className="py-4 block text-sm text-gray-500 justify-start dark:text-gray-400">
          &copy; 2016 - 2025
          <Link href="*"> TUUR Canyoning.</Link> Todos los derechos reservados.
        </span>
      </div>
    </div>
  );
};

export default Footer;
