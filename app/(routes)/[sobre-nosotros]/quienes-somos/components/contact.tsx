import { Instagram, Mail, Smartphone } from "lucide-react";

interface medios {
  title: string;
  emoji: React.ReactElement;
}

export const medios = [
  {
    title: "oficina@segurosfuengirola.es",
    emoji: <Mail size={48} />,
  },
  {
    title: "@segurosfuengirola",
    emoji: <Instagram size={48} />,
  },
  {
    title: "633 10 60 25",
    emoji: <Smartphone size={48} />,
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 w-full">
      <h4 className="text-2xl lg:text-3xl font-semibold">
        Otros medios de contácto
      </h4>
      <p className="text-lg font-gray-500">
        Puedes contáctarnos a través de nuestras redes sociales, correo o
        WhatsApp.
      </p>
      <div className="grid lg:grid-cols-3 gap-8 w-full">
        {medios.map((medio, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 gap-y-8 bg-white rounded-xl shadow-xl hover:bg-gray-900 hover:text-slate-50 transition duration-300 ease-in-out"
          >
            <span className="">{medio.emoji}</span>
            <h6 className="text-xl font-semibold">{medio.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
