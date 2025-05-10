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
      <h1 className="text-2xl lg:text-3xl text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {comparatives.map((comparative, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl shadow-lg"
          >
            <div className="text-2xl font-medium bg-blue-200/40 rounded-t-xl p-8">
              {comparative.title}
            </div>
            <div className="space-y-4 p-8">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparative;
