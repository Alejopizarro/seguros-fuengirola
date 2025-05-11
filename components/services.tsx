import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export const services = [
  {
    id: 1,
    title: "Seguros de Salud",
    description:
      "Ofrecemos seguros de salud adaptados a tus necesidades y presupuesto.",
    icon: "/family.webp",
  },
  {
    id: 2,
    title: "Seguros de Vida",
    description:
      "Protege a tus seres queridos con nuestros seguros de vida flexibles.",
    icon: "/family.webp",
  },
  {
    id: 3,
    title: "Seguros de Hogar",
    description:
      "Asegura tu hogar y su contenido con nuestras pólizas completas.",
    icon: "/family.webp",
  },
  {
    id: 4,
    title: "Seguros de Automóvil",
    description:
      "Disfruta de la tranquilidad en la carretera con nuestros seguros de automóvil.",
    icon: "/family.webp",
  },
  {
    id: 5,
    title: "Seguros de Viaje",
    description:
      "Viaja sin preocupaciones con nuestros seguros de viaje personalizados.",
    icon: "/family.webp",
  },
  {
    id: 6,
    title: "Seguros de Responsabilidad Civil",
    description:
      "Protege tu patrimonio con nuestros seguros de responsabilidad civil.",
    icon: "/family.webp",
  },
];

const Services = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18  flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold mb-4 text-gray-800">
        Seguros pensados para tí
      </h2>
      <p className="text-lg mb-8 text-center">
        Ofrecemos una amplia gama de servicios para satisfacer todas tus
        necesidades de seguros.
      </p>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="basis-1/1 md:basis-1/2 lg:basis-1/3 p-4"
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
                <CardHeader>
                  <Image
                    width={500}
                    height={500}
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm font-light">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600">
                    Más informacion <MoveRight />
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <p className="flex sm:hidden text-gray-500 text-md gap-x-2 items-center text-center py-2">
        Desliza para ver más seguros <MoveRight />
      </p>
    </div>
  );
};

export default Services;
