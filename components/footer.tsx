"use client";
import { Instagram, Mail, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { autonomos, empresas, particulares, sobreNosotros } from "@/utils/data";
import { useRouter } from "next/navigation";
import LinkUrl from "./ui/link-url";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-800 text-slate-50">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 p-4 sm:py-16 sm:px-24 text-left gap-4">
        <div>
          <p className="font-bold text-xl mb-4">{sobreNosotros.title}</p>
          <ul className="space-y-4">
            {sobreNosotros.pages.map((page, index) => (
              <li key={index}>
                <h4>
                  <LinkUrl title={page.title} route={page.url} />
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-xl">Nuestros seguros</p>
          <ul className="font-light text-slate-300 space-y-4 text-sm">
            {particulares.map((seguro, index) => (
              <li key={index}>
                <LinkUrl title={seguro.title} route={seguro.route} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">Otros seguros</p>
          <ul className="space-y-4 text-sm font-light text-slate-300">
            <li>
              <button
                onClick={() => router.push(`${autonomos.route}`)}
                className="hover:underline cursor-pointer"
              >
                {autonomos.largeTitle}
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push(`${empresas.route}`)}
                className="cursor-pointer hover:underline"
              >
                {empresas.largeTitle}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">Seguros fuengirola</p>
          <ul className="text-sm font-light text-slate-300 space-y-4">
            <li>
              <h4>
                <Link
                  href="https://www.instagram.com/segurosfuengirola"
                  className="flex items-center gap-x-2"
                  title="Instagram de Seguros Fuengirola"
                >
                  <Instagram size={14} />
                  segurosfuengirola
                </Link>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md flex items-center gap-x-2">
                  <Mail size={14} /> oficina@segurosfuengirola.es
                </p>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md gap-x-2 flex items-center">
                  <Phone size={14} /> 951 68 13 83
                </p>
              </h4>
            </li>
            <li>
              <h4>
                <p className="text-md flex gap-x-2 items-center">
                  <Smartphone size={14} /> 633 10 60 25
                </p>
              </h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 sm:px-24">
        <Separator />
        <span className="py-4 block text-sm text-slate-300 justify-start">
          &copy; 2016 - 2025
          <Link href="*"> Seguros Fuengirola</Link> Todos los derechos
          reservados.
        </span>
      </div>
    </div>
  );
};

export default Footer;
