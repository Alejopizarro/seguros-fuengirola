"use client";
import { Button } from "@/components/ui/button";
import scrollToSection from "@/lib/scroll-to-section";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefObject } from "react";

interface HeroProps {
  title: string;
  description: string;
  description2: string;
  buttonRef: RefObject<HTMLDivElement | null>;
  imageSrc: string;
  imageAlt: string;
}

const Hero = (props: HeroProps) => {
  const { title, description, buttonRef, description2, imageSrc, imageAlt } =
    props;
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[90vh] pt-18 bg-gray-900 justify-end lg:justify-between items-center">
      <div className="flex flex-col sm:px-20 p-8 min-h-[43vh] lg:min-h-[90vh] justify-center text-slate-50 space-y-8">
        <Button
          variant="outline"
          onClick={() => router.push("/")}
          className="flex text-gray-950 items-center w-fit"
        >
          <MoveLeft /> Volver a la home
        </Button>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
          {title}
        </h1>
        <div>
          <p className="text-lg font-light text-slate-300 mb-4">
            {description}
          </p>
          <p className="text-lg font-light text-slate-300">{description2}</p>
        </div>
        <Button onClick={() => scrollToSection(buttonRef)} className="sm:w-3/4">
          Contratar seguro
          <MoveRight />
        </Button>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className="object-cover w-full h-[50vh] lg:h-[90vh] overflow-hidden"
      />
    </div>
  );
};

export default Hero;
