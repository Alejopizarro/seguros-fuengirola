import {
  BanknoteArrowDown,
  FileCheck,
  HandCoins,
  Smartphone,
} from "lucide-react";

export const features = [
  {
    title: "Coberturas personalizadas",
    description:
      "Según tus necesidades, podrás combinar un seguro de salud con uno de baja laboral.",
    emoji: <FileCheck />,
  },
  {
    title: "Tranquilidad económica",
    description:
      "Ante la posibilidad de perder ingresos para concentrarte en tu recuperación.",
    emoji: <HandCoins />,
  },
  {
    title: "Atención 24 hs",
    description:
      "Videoconsulta y chat con especialistas estés donde estés, para ofrecerte la mejor atención",
    emoji: <Smartphone />,
  },
  {
    title: "Gastos deducibles",
    description:
      "Como autónomo te puedes deducir hasta 500 euros en la declaración de IRPF.",
    emoji: <BanknoteArrowDown />,
  },
];

export const comparative = {
  title:
    "Con nuestros seguros para autónomos cuidarás tu salud y protegerás tu negocio",
  description:
    "En DKV entendemos que la rutina diaria de los autónomos puede hacer que pospongan las visitas médicas. Por ello, ofrecemos acceso a nuestro cuadro médico en un amplio horario, cuidando de su salud sin afectar su economía en caso de no poder ir al trabajo.",
};

export const comparatives = [
  {
    title: "Seguros médicos para autónomos",
    description:
      "Como autónomo, la falta de tiempo no debería ser un obstáculo a la hora de proteger tu salud.",
    list: [
      {
        tratamiento: "Amplio horario de atencíon",
        precio:
          "Podrás acudir a un gran cuadro médico en un amplio horario de atención para no desatender tu negocio.",
      },
      {
        tratamiento: "Coberturas específicas",
        precio: "Tendrás coberturas específicas para tu estilo de vida.",
      },
      {
        tratamiento: "Ventajas fiscales",
        precio: "Tendrás ventajas fiscales por ser autonómo",
      },
    ],
  },
  {
    title: "Seguros de baja laboral para autónomos",
    description:
      "Te ayudamos a proteger tu economía ante una incapacidad laboral temporal.",
    list: [
      {
        tratamiento: "Por enfermedad o accidente",
        precio:
          "Si por enfermedad o accidente no puedes desarrollar tu actividad o acudir a tu puesto de trabajo.",
      },
      {
        tratamiento: "Indemnización diaria",
        precio: "Indemnización por cada día que estés de baja.",
      },
      {
        tratamiento: "Asesoramiento médico",
        precio: "Asesoramiento médico por teléfono 24h.",
      },
    ],
  },
];

export const recomendations = [
  {
    imageSrc: "/office.webp",
    title: "Seguro médico para empresas grandes y pymes",
    description:
      "Los seguros de salud para empresas más completos y económicos para proteger a tus empleados.",
    route: "seguro-para-autonomos",
  },
  {
    imageSrc: "/happy.webp",
    title: "Seguro de salud",
    description:
      "Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España.",
    route: "seguro-de-salud",
  },
  {
    imageSrc: "/dental.webp",
    title: "Seguro dental",
    description:
      "Los seguros dentales más completos y económicos para utilizar desde el primer día.",
    route: "seguro-dental",
  },
];
