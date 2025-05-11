import { Banknote, Briefcase, HeartPlus, Users } from "lucide-react";

export const features = [
  {
    title: "Tú estableces el capital",
    description:
      "Elige el dinero que recibirá tu familia en caso de fallecimiento.",
    emoji: <Banknote />,
  },
  {
    title: "Asistencia Psicológica",
    description:
      "Atención al duelo y asistencia psicológica para ti y tu familia.",
    emoji: <HeartPlus />,
  },
  {
    title: "Asistencia familiar",
    description:
      "Un gestor se encargará de todos los trámites del servicio funerario.",
    emoji: <Users />,
  },
  {
    title: "Asesoría jurídica",
    description:
      "Testamento online, servicio de asesoría y asistencia jurídica telefónica.",
    emoji: <Briefcase />,
  },
];

export const table = {
  title: "Coberturas y servicios",
  description:
    "Un seguro de vida que te ofrece la seguridad de que, en el caso de fallecimiento por cualquier causa, tu familia seguirá contando con unos ingresos para poder continuar con su nivel de vida y estará acompañada en todo momento.",
};

export const tables = [
  {
    title: "Coberturas incluidas",
    bullet: [
      {
        title: "Fallecimiento por cualquier causa",
        description: "Tu familia recibirá el dinero que decidas contratar.",
      },
      {
        title: "Anticipo del capital por enfermedad terminal",
        description:
          "Si contraes una enfermedad terminal, puedes anticipar el cobro del 50% del capital establecido.",
      },
      {
        title: "Anticipo del capital para gastos de sepelio",
        description:
          "El beneficiario podrá solicitar el anticipo del capital para gastos de sepelio con un máximo de 4.000€.",
      },
      {
        title:
          "Anticipo de capital para la liquidación del Impuesto de Sucesiones y Donaciones",
        description:
          "El beneficiario podrá solicitar el anticipo del capital para el pago del Impuesto de Sucesiones y Donaciones.",
      },
    ],
  },
  {
    title: "Servicios incluidos",
    bullet: [
      {
        title: "Asistencia familiar",
        description:
          "Un gestor asesorará a tu familia en todos los momentos del servicio funerario y en todos los trámites.",
      },
      {
        title: "Asistencia psicológica presencial y telefónica",
        description:
          "Presencial en caso de invalidez, enfermedad grave, depresión, o como prevención del suicidio, y para tus familiares en caso de fallecimiento. Además, asistencia psicológica telefónica 24h los 365 días y de forma ilimitada.",
      },
      {
        title: "Testamento online gratis",
        description:
          "Podrás redactar tu testamento en cualquier momento y lugar con la herramienta Testamento online. ¡Cuenta con una modificación anual gratuita!",
      },
      {
        title: "Asistencia legal",
        description:
          "Servicio telefónico atendido por abogados que te asesorarán sobre dudas legales.",
      },
      {
        title: "Servicios de salud y bienestar",
        description:
          "Catálogo de servicios de salud a precios inferiores a los del mercado a través de DKV Club Salud y Bienestar.",
      },
    ],
  },
  {
    title: "Coberturas de contratación opcional",
    bullet: [
      {
        title: "Invalidez absoluta y permanente",
        description:
          "Esta cobertura te permite recibir el pago del capital en caso de que resultaras afectado por una invalidez absoluta y permanente.",
      },
      {
        title: "Fallecimiento por accidente (doble capital)",
        description:
          "En caso de fallecimiento por accidente, los beneficiarios recibirán el doble de capital de la cobertura por fallecimiento.",
      },
      {
        title: "Fallecimiento por accidente de circulación (triple capital)",
        description:
          "En caso de fallecimiento por accidente de circulación, los beneficiarios recibirán el triple de capital de la cobertura por fallecimiento.",
      },
      {
        title:
          "Fallecimiento o invalidez absoluta y permanente por accidente de circulación (doble capital)",
        description:
          "En caso de que sufras un accidente y, como consecuencia del mismo, diese lugar al fallecimiento o a la invalidez absoluta y permanente, los beneficiarios recibirán el doble del capital de la cobertura por fallecimiento.",
      },
      {
        title:
          "Fallecimiento o invalidez absoluta y permanente por accidente de circulación (triple capital)",
        description:
          "En caso de que sufras un accidente de circulación y, como consecuencia del mismo, diese lugar al fallecimiento o a la invalidez absoluta y permanente, los beneficiarios recibirán el triple del capital de la cobertura por fallecimiento.",
      },
      {
        title: "Enfermedad grave",
        description:
          "En caso de enfermedad grave, tendrás la opción de obtener anticipadamente el 10%, 25%, 50% o 100% (porcentaje que hayas elegido) del capital para que pueda hacer frente a los gastos que puedas necesitar y solo te centres en lo que más te importa: tu recuperación.",
      },
    ],
  },
];

export const comparatives = [
  {
    title: "Condiciones de contratación",
    description: "Cualquier seguro debe empezar con un compromiso",
    list: [
      {
        tratamiento: "Edad de contratación",
        precio: "El seguro de vida se puede contratar hasta los 65 años.",
      },
      {
        tratamiento: "Tu decisión",
        precio:
          "El cliente es quien decide el capital asegurado en la garantía de fallecimiento.",
      },
      {
        tratamiento: "Te anticipamos el capital",
        precio:
          "En casos de enfermedad grave como cáncer, infarto, fallo renal, etc.",
      },
      {
        tratamiento: "Flexibilidad en el pago",
        precio: "Nos adaptamos a la forma de pago o fraccionamiento.",
      },
    ],
  },
  {
    title: "Modalidades de contratación",
    description: "Duración, capital personalizado, prima y forma de pago",
    list: [
      {
        tratamiento: "Duracion",
        precio:
          "En el seguro de vida el contrato tiene una duración anual y se renueva año a año hasta que cumplas 70 años, siempre que tú no decidas cancelarlo antes. ",
      },
      {
        tratamiento: "Capital personalizado",
        precio:
          "Puedes establecer el capital que quieras, y que este permanezca fijo o que se revalorice anualmente.",
      },
      {
        tratamiento: "Prima",
        precio:
          "La prima varía anualmente según el capital contratado y la edad de la persona asegurada.",
      },
      {
        tratamiento: "Forma de pago",
        precio:
          "El pago de la prima podrá ser anual (5% dto), semestral (3% dto), trimestral (2% dto) o mensual.",
      },
    ],
  },
];

export const faqs = [
  {
    question: "¿Qué capital es el adecuado para un seguro de vida?",
    answer:
      "El capital en un seguro de vida debe permitir cubrir los gastos de la familia durante un periodo de tiempo suficiente. Es decir, el que cubre la diferencia entre los ingresos que se reciben (normalmente el salario) y la pensión de jubilación (aproximadamente el 50% del salario).",
  },
  {
    question: "¿Qué cubre un seguro de vida?",
    answer:
      "Un seguro de vida siempre cubre el riesgo de que el titular fallezca. Es la cobertura principal. Pero además se pueden contratar otras coberturas adicionales.",
  },
  {
    question: "¿Quién deberia contratar un seguro de vida?",
    answer:
      "El seguro de vida está diseñado para mantener la tranquilidad financiera de las personas que quedan si nosotros faltamos. Por tanto, es importante pensar en los que dependen o pueden depender económicamente de nosotros; pareja, hijos, padres de cierta edad, personas dependientes. Además, si tenemos deudas, hipotecas o algún negocio propio es importante pensar en qué obligaciones tendrían que asumir directamente a nuestros herederos en caso de un infortunio.",
  },
  {
    question: "¿Por qué debo contratar un seguro de vida?",
    answer:
      "Aunque no nos gusta pensarlo nadie estamos exentos de sufrir un accidente o una enfermedad mortal. Si se produjese esa situación la economía de la familia quedaría seriamente comprometida.",
  },
  {
    question: "¿Qué es un seguro de vida?",
    answer:
      "Es un contrato de seguro mediante el que el asegurador, a cambio del pago de una prima periódica y mientras el seguro esté en vigor, se compromete a la entrega de una suma económica (capital asegurado) si la persona asegurada falleciese o se viese incapacitada para trabajar. En caso de fallecimiento la indemnización pactada se entregará a los beneficiarios elegidos por el asegurado. En caso de haberse contratado la invalidez la prestación se entregará al propio asegurado.",
  },
  {
    question: "¿Cómo se calcula un seguro de vida?",
    answer:
      "La prima de seguro se calcula en función de la edad de la persona a asegurar y del capital que se necesita. Cuanto mayor es la edad y/o el capital, más elevada será la prima. Consulta los precios de acuerdo con tus necesidades, la prima puede ser mucho más pequeña de lo que piensas.",
  },
];
