import Image from "next/image";

export const differentials = [
  {
    id: 1,
    title: "Cuadro Medico",
    description: "Más de 51.000 médicos y 1.000 centros.",
    img: "/Pediatra-1.webp",
  },
  {
    id: 2,
    title: "Cobertura Dental",
    description: "Incluida sin coste adicional.",
    img: "/Cobertura dental.webp",
  },
  {
    id: 3,
    title: "Gestiones Online",
    description: "Videoconsultas y chat médico 24hs.",
    img: "/videoconsulta.webp",
  },
];

const Differential = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ¿Por qué elegirnos?
      </h2>
      <p className="text-lg mb-8 text-center max-w-4xl">
        El seguro salud de cuadro médico DKV Integral tiene incluidas las
        siguientes coberturas y servicios, disfruta del seguro más completo y de
        la mejor asistencia sanitaria.
      </p>
      <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-gray-700">
        {differentials.map((differential) => (
          <li
            key={differential.id}
            className="flex flex-col items-center text-center gap-4 mb-4 p-4"
          >
            <Image
              width={200}
              height={200}
              src={differential.img}
              alt={differential.title}
              className="w-48 h-auto"
            />
            <div>
              <h4 className="text-xl mb-4 font-semibold">
                {differential.title}
              </h4>
              <p className="text-md text-gray-600">
                {differential.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Differential;
