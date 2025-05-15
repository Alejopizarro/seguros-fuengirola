import { BanknoteArrowUp, HandCoins, Hospital, PhoneCall } from "lucide-react";

export const features = [
  {
    title: "Indemnización diaria",
    description: "Inmediata por fallecimiento o invalidez.",
    emoji: <HandCoins />,
  },
  {
    title: "Respaldamos tu economía",
    description:
      "Tu familia no se verá afectada por un fallecimiento, invalidez permanente.",
    emoji: <BanknoteArrowUp />,
  },
  {
    title: "Coberturas opcionales",
    description:
      "Indemnización diaria por hospitalización o invalidez temporal, asistencia médica, etc.",
    emoji: <Hospital />,
  },
  {
    title: "Médico 24hs",
    description: "Líneas médicas telefónicas gratuitas a tu disposición.",
    emoji: <PhoneCall />,
  },
];

export const table = {
  title: "Coberturas y servicios",
  description:
    "Ofrece tranquilidad a tu familia ante cualquier accidente doméstico, de salud, laboral o de circulación",
};

export const tables = [
  {
    title: "Coberturas incluidas",
    bullet: [
      {
        title: "Indemnización por invalidez absoluta y permanente",
        description:
          "Garantizamos la indemnización pactada según la modalidad contratada y baremo.",
      },
      {
        title: "Indemnización por fallecimiento",
        description:
          "Garantía de indemnización si el asegurado fallece a causa de accidente, dentro del plazo de un año a contar desde la fecha en que éste ocurra. Y si es de circulación y fallece también el cónyuge se amplía para todos los hijos menores de 18 años.",
      },
      {
        title: "Indemnización por fallecimiento simultáneo",
        description: "De ambos cónyuges en el mismo accidente de circulación.",
      },
    ],
  },
  {
    title: "Servicios incluidos",
    bullet: [
      {
        title: "Líneas de orientación médica telefónica",
        description:
          "Si te preocupa un síntoma, te ofrecemos líneas telefónicas para atender dudas: medicina general 24h, del embarazo, de la mujer, nutricional o psicoemocional.",
      },
      {
        title: "Segunda opinión médica",
        description:
          "Para cualquier enfermedad grave, podrás contrastar un diagnóstico y tener un segunda opinión médica.",
      },
      {
        title: "Servicios de salud complementarios al seguro",
        description:
          "Podrás acceder a un catálogo de servicios de salud y bienestar a precios inferiores a los del mercado a través de DKV Club Salud y Bienestar.",
      },
    ],
  },
  {
    title: "Coberturas de contratación opcional",
    bullet: [
      {
        title: "Indemnización por incapacidad temporal",
        description:
          "Hasta 1 año en el caso de que el accidente provoque invalidez temporal.",
      },
      {
        title: "Indemnización por hospitalización",
        description:
          "Tendrás una indemnización por cada día que estés ingresado (máximo un año).",
      },
      {
        title: "Asistencia médica por accidente",
        description:
          "Sin límites en un centro concertado, o máximo 1.800 euros en uno no concertado.",
      },
      {
        title:
          "Indemnización adicional por invalidez total o muerte en accidente de circulación",
        description: "",
      },
      {
        title: "Indemnización por gran invalidez",
        description: "",
      },
      {
        title: "Indemnización por fallecimiento por infarto de miocardio",
        description:
          "Como consecuencia directa y exclusiva del desarrollo de su actividad laboral transcurrido un periodo de carencia de un mes. Hasta los 65 años.",
      },
    ],
  },
];

export const comparatives = [
  {
    title: "Modalidades del seguro de accidentes",
    description:
      "Elige la modalidad de tu seguro de accidentes según tus necesidades",
    list: [
      {
        tratamiento: "Cobertura 24 horas",
        precio:
          "Cubre todos los accidentes ocurridos en tu vida personal y profesional.",
      },
      {
        tratamiento: "Cobertura profesional",
        precio: "Cubre exclusivamente los accidentes laborales.",
      },
      {
        tratamiento: "Cobertura extraprofesional",
        precio: "Cubre exclusivamente los accidentes en tu vida privada.",
      },
      {
        tratamiento: "Cobertura por accidente de circulación",
        precio: "Cubre todos los accidentes en circulación.",
      },
    ],
  },
  {
    title: "Opciones de seguro",
    description:
      "¿Buscas algo especial para ti o para tu negocio? Tenemos diferentes opciones de seguro de accidentes",
    list: [
      {
        tratamiento: "Cobertura para centros docentes",
        precio:
          "Cubre a los alumnos de centros docentes, incluyendo los desplazamientos de ida y vuelta desde el domicilio.",
      },
      {
        tratamiento: "Cobertura especial para mujeres",
        precio:
          "Cubre las necesidades específicas de las mujeres durante las 24 horas, con garantías que no todos los seguros de accidentes incorporan, como la revisión ginecológica anual o los gastos por cirugía estética reparadora, entre otros.",
      },
      {
        tratamiento: "Cobertura empresas",
        precio: "Para convenios colectivos o autónomos.",
      },
    ],
  },
];

export const faqs = [
  {
    question: "¿Cuánto dura un seguro de accidentes?",
    answer:
      "El periodo acordado que figure en el contrato. Habitualmente se contrata por anualidades, naturales o no, aunque su duración inicial también puede ser menor o alcanzar varios años. En el contrato se prevén renovaciones, normalmente anuales y automáticas, al vencimiento del periodo inicial, salvo en los casos en que se comunique lo contrario por una de las partes.",
  },
  {
    question:
      "¿Puedo cobrar las prestaciones del seguro de accidentes en forma de renta?",
    answer:
      "Solamente las garantías de Incapacidad temporal o de Hospitalización por accidente devengan indemnización diariamente y, su abono suele hacerse en un solo pago o en periodos mensuales.",
  },
  {
    question: "¿Cómo evolucionan las primas del seguro de accidentes?",
    answer:
      "En el momento de la contratación de la póliza se puede acordar la actualización de capitales y primas vinculando la revalorización al IPC, a un porcentaje fijo o permanecer invariable.",
  },
  {
    question: "¿Qué coberturas incluye el seguro de accidentes?",
    answer:
      "Las posibles coberturas que contempla el seguro de accidentes son: 24 horas, profesional, Extraprofesional, Circulación",
  },
  {
    question:
      "¿Sigo asegurado en una póliza de accidentes una vez que he recibido la prestación por invalidez permanente?",
    answer:
      "Dependiendo del grado de invalidez, por lo que precisarías una nueva valoración médica del riesgo.",
  },
];
