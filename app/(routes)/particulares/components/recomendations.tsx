"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Recomendations {
  imageSrc: string;
  title: string;
  description: string;
  route: string;
}

interface RecomendationProps {
  recomendations: Recomendations[];
}

const Recomendations = (props: RecomendationProps) => {
  const { recomendations } = props;
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-y-8">
      <h2 className="text-3xl lg:text-4xl font-normal text-center">
        Otros seguros
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recomendations.map((recomendation, index) => (
          <div key={index} className="flex flex-col gap-y-4">
            <Image
              src={recomendation.imageSrc}
              className="rounded-lg w-full object-cover h-48"
              alt={recomendation.title}
              width={200}
              height={200}
            />
            <div className="flex flex-col gap-y-4">
              <h4 className="font-semibold text-lg text-gray-950">
                {recomendation.title}
              </h4>
              <p className="font-light text-sm text-gray-500 overflow-hidden overflow-ellipsis line-clamp-2">
                {recomendation.description}
              </p>
              <button
                className="text-sm text-blue-700 flex items-center gap-2 font-semibold cursor-pointer"
                onClick={() => router.push(`/${recomendation.route}`)}
              >
                Más información <MoveRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
