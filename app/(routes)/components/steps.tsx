import { ChevronDown, ChevronRight } from "lucide-react";

interface Steps {
  id: string;
  title: string;
  description: string;
}

interface StepsProps {
  title: string;
  steps: Steps[];
}

const Steps = (props: StepsProps) => {
  const { title, steps } = props;
  return (
    <div className="flex flex-col items-center space-y-16">
      <h2 className="text-2xl lg:text-3xl text center">
        Te ayudamos a contratar un {title}
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {steps[0] && (
          <div className="flex items-center gap-x-4">
            <p className="border-1 rounded-full p-4 hover:bg-blue-500 hover:text-slate-50 transition duration-300 ease-in-out cursor-pointer">
              {steps[0].id}
            </p>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-xl font-semibold">{steps[0].title}</h4>
              <p className="text-sm lg:text-md text-gray-500">
                {steps[0].description}
              </p>
            </div>
          </div>
        )}
        <ChevronRight size={48} className="hidden lg:flex" />
        <ChevronDown size={32} className="flex lg:hidden" />
        {steps[1] && (
          <div className="flex items-center gap-x-4">
            <p className="border-1 rounded-full p-4 hover:bg-blue-500 hover:text-slate-50 transition duration-300 ease-in-out cursor-pointer">
              {steps[1].id}
            </p>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-xl font-semibold">{steps[1].title}</h4>
              <p className="text-sm lg:text-md text-gray-500">
                {steps[1].description}
              </p>
            </div>
          </div>
        )}
        <ChevronRight size={48} className="hidden lg:flex" />
        <ChevronDown size={32} className="flex lg:hidden" />
        {steps[2] && (
          <div className="flex items-center gap-x-4">
            <p className="border-1 rounded-full p-4 hover:bg-blue-500 hover:text-slate-50 transition duration-300 ease-in-out cursor-pointer">
              {steps[2].id}
            </p>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-xl font-semibold">{steps[2].title}</h4>
              <p className="text-sm lg:text-md text-gray-500">
                {steps[2].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Steps;
