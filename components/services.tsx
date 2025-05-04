import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

/* eslint-disable @next/next/no-img-element */
export const services = [
  {
    id: 1,
    title: "Seguros de Salud",
    description:
      "Ofrecemos seguros de salud adaptados a tus necesidades y presupuesto.",
    icon: "/vercel.svg",
  },
  {
    id: 2,
    title: "Seguros de Vida",
    description:
      "Protege a tus seres queridos con nuestros seguros de vida flexibles.",
    icon: "/vercel.svg",
  },
  {
    id: 3,
    title: "Seguros de Hogar",
    description:
      "Asegura tu hogar y su contenido con nuestras pólizas completas.",
    icon: "/vercel.svg",
  },
  {
    id: 4,
    title: "Seguros de Automóvil",
    description:
      "Disfruta de la tranquilidad en la carretera con nuestros seguros de automóvil.",
    icon: "/vercel.svg",
  },
  {
    id: 5,
    title: "Seguros de Viaje",
    description:
      "Viaja sin preocupaciones con nuestros seguros de viaje personalizados.",
    icon: "/vercel.svg",
  },
  {
    id: 6,
    title: "Seguros de Responsabilidad Civil",
    description:
      "Protege tu patrimonio con nuestros seguros de responsabilidad civil.",
    icon: "/vercel.svg",
  },
];

const Services = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18  flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Nuestros Servicios
      </h2>
      <p className="text-lg mb-8">
        Ofrecemos una amplia gama de servicios para satisfacer todas tus
        necesidades de seguros.
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-700">
        {services.map((service) => (
          <Card
            key={service.id}
            className="w-72 bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
          >
            <CardHeader>
              <div className="relative inline-block mb-4">
                <div className="absolute -top-0 -right-2 w-18 h-18 bg-green-300 rounded-full opacity-80 z-0"></div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-24 h-24 relative z-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-sm font-light">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-600">
                Más informacion <MoveRight />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Services;
