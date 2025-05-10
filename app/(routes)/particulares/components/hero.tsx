import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  description2: string;
  buttonText1: string;
  buttonText2: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = (props: HeroProps) => {
  const {
    title,
    description,
    description2,
    buttonText1,
    buttonText2,
    imageSrc,
    imageAlt,
  } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[90vh] mt-18 bg-gray-900 justify-end lg:justify-between items-center">
      <div className="flex flex-col sm:px-20 px-8 min-h-[43vh] lg:min-h-[90vh] justify-center text-slate-50 space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
          {title}
        </h1>
        <p className="text-lg font-light text-slate-300 mb-4">{description}</p>
        <p className="text-lg font-light text-slate-300">{description2}</p>
        <div className="flex space-x-4 w-full">
          <Button variant="outline" className="text-gray-950">
            {buttonText1}
          </Button>
          <Button className="flex items-center space-x-2">
            {buttonText2} <MoveRight />
          </Button>
        </div>
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
