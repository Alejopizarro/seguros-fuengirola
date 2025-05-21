"use client";
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
import { particulares } from "@/utils/data";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <div className="p-8 sm:px-20 sm:py-18  flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl 2xl:text-4xl text-center font-semibold mb-4 text-gray-800">
        Seguros pensados para tí
      </h2>
      <p className="text-lg 2xl:text-xl mb-8 text-center text-gray-500">
        Ofrecemos una amplia gama de servicios para satisfacer todas tus
        necesidades de seguros.
      </p>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
          {particulares.map((service, i) => (
            <CarouselItem
              key={i}
              className="basis-1/1 md:basis-1/2 lg:basis-1/3 p-4"
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
                <CardHeader>
                  <Image
                    width={500}
                    height={500}
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm font-light line-clamp-1">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="bg-blue-600"
                    onClick={() => router.push(`${service.route}`)}
                  >
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
