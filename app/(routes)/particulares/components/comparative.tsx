import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

interface Tratamiento {
  tratamiento: string;
  precio: string;
}

interface Comparative {
  title: string;
  description: string;
  list: Tratamiento[];
}

interface ComparativeProps {
  title: string;
  comparatives: Comparative[];
}

const Comparative = (props: ComparativeProps) => {
  const { title, comparatives } = props;
  return (
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        {comparatives.map((comparative, index) => (
          <Card key={index}>
            <CardHeader className="text-2xl font-semibold ">
              {comparative.title}
            </CardHeader>
            <Separator className="mx-4 max-w-3/4" />
            <CardContent className="space-y-4">
              <p>{comparative.description}</p>
              <ul>
                {comparative.list.map((li, i) => (
                  <li
                    key={i}
                    className="flex items-center font-light text-gray-500 space-x-2"
                  >
                    <Check color="green" />
                    {li.tratamiento}
                    <span className="font-semibold ml-2 text-gray-950">
                      {li.precio}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Comparative;
