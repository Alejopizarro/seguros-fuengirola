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
  description: string;
  comparatives: Comparative[];
}

const Comparative = (props: ComparativeProps) => {
  const { title, comparatives } = props;
  return (
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-2xl lg:text-3xl text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {comparatives.map((comparative, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl shadow-lg"
          >
            <div className="text-2xl font-semibold bg-blue-200/40 rounded-xl m-3 p-8">
              <h4>{comparative.title}</h4>
            </div>
            <div className="space-y-4 px-6 pt-1 pb-4">
              <p>{comparative.description}</p>
              <ul className="space-y-4">
                {comparative.list.map((li, i) => (
                  <li
                    key={i}
                    className="flex flex-col font-medium text-gray-950 space-y-2"
                  >
                    <p className="flex items-center gap-x-2">
                      <Check color="green" />
                      {li.tratamiento}
                    </p>
                    <span className="font-light ml-8 text-gray-500">
                      {li.precio}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparative;
