import {
  Shield,
  Clock,
  Stethoscope,
  Smartphone,
  CreditCard,
  FileCheck,
  HeartPulse,
  Plane,
} from "lucide-react";

export const features = [
  {
    title: "Válido para visado y residencia",
    description:
      "Seguro médico que cumple todos los requisitos legales para solicitar tu permiso de residencia, NIE o visado en España. Aceptado por extranjería.",
    emoji: <FileCheck size={32} />,
  },
  {
    title: "Sin copagos ni carencias",
    description:
      "Utiliza tu seguro desde el primer día. Sin copagos, sin carencias (excepto parto 8 meses). Cobertura completa inmediata.",
    emoji: <Shield size={32} />,
  },
  {
    title: "Contratación hasta 3 meses antes",
    description:
      "Puedes contratar tu seguro DKV hasta 3 meses antes de la fecha de efecto. Ideal para planificar tu llegada a España con tranquilidad.",
    emoji: <Clock size={32} />,
  },
  {
    title: "Cuadro médico con +51.000 profesionales",
    description:
      "Acceso a más de 51.000 médicos y 1.000 centros sanitarios en toda España, incluyendo Clínica Universidad de Navarra, Quirón, HM y Vithas.",
    emoji: <Stethoscope size={32} />,
  },
  {
    title: "Seguro dental incluido",
    description:
      "A diferencia de otros seguros, DKV Integral incluye cobertura dental sin coste adicional: limpiezas ilimitadas, radiografías y consultas gratis.",
    emoji: <HeartPulse size={32} />,
  },
  {
    title: "Asistencia internacional",
    description:
      "Cobertura en viajes de hasta 180 días fuera de España con hasta 30.000€ en gastos médicos de urgencia. Uno de los límites más altos del mercado.",
    emoji: <Plane size={32} />,
  },
  {
    title: "Pago anual con tarjeta",
    description:
      "Opción de pago con tarjeta para quienes no disponen de cuenta bancaria en España en el momento de la contratación.",
    emoji: <CreditCard size={32} />,
  },
  {
    title: "Salud digital y videoconsultas",
    description:
      "App Quiero Cuidarme Más con videoconsultas, chat médico 24h, carpeta de salud digital y receta electrónica directa a tu farmacia.",
    emoji: <Smartphone size={32} />,
  },
];

export const products = [
  {
    title: "DKV Integral Élite",
    subtitle: "Sin copagos",
    description:
      "El único seguro médico válido para extranjería. Sin copagos en ningún servicio. Cobertura total sin carencias (excepto parto 8 meses). Ideal para solicitar tu visado o permiso de residencia en España.",
    copago: "Sin copagos",
    price: "Consultar",
    popular: true,
    features: [
      "Sin copagos en consultas ni pruebas",
      "Sin carencias (excepto parto)",
      "Hospitalización sin límites",
      "Seguro dental incluido",
      "Asistencia internacional 30.000€",
      "Videoconsultas ilimitadas",
      "Válido para visado y residencia",
    ],
  },
];

export const coberturas = [
  {
    categoria: "Asistencia básica",
    items: [
      "Urgencias 24 horas",
      "Medicina general",
      "Pediatría",
      "Ambulancias",
      "Análisis clínicos",
      "Enfermería",
    ],
  },
  {
    categoria: "Especialistas y diagnóstico",
    items: [
      "Todas las especialidades médicas",
      "Cardiología, dermatología, ginecología...",
      "Radiografías, escáner, resonancias",
      "PET y PET/RM en oncología",
      "Podología y fisioterapia sin límites",
      "Prótesis hasta 12.000€/año",
    ],
  },
  {
    categoria: "Hospitalización y cirugía",
    items: [
      "Hospitalización médica y quirúrgica",
      "UCI sin límites de días",
      "Cirugía robótica Da Vinci",
      "Tratamientos oncológicos completos",
      "Hospitalización psiquiátrica (60 días/año)",
      "Indemnización 80€/día si usas otro centro",
    ],
  },
  {
    categoria: "Servicios adicionales",
    items: [
      "Cobertura dental incluida",
      "Limpiezas dentales ilimitadas",
      "Embarazo y parto con ecografía 3D/4D",
      "20 sesiones logopedia/año",
      "Programa prevención cáncer",
      "Club Salud y Bienestar con descuentos",
    ],
  },
];

export const carencias = [
  {
    servicio: "Todos los servicios",
    tiempo: "Sin carencia",
    descripcion: "Disponible desde el primer día",
  },
  {
    servicio: "Parto",
    tiempo: "8 meses",
    descripcion: "Excepto urgencia vital",
  },
];

export const faqs = [
  {
    question:
      "¿Este seguro médico sirve para solicitar el permiso de residencia en España?",
    answer:
      "Sí, el seguro médico DKV Integral cumple todos los requisitos legales exigidos por extranjería para solicitar el visado, NIE o permiso de residencia en España. Es un seguro de salud completo, sin copagos (en modalidad Élite), con cobertura en todo el territorio nacional y válido para todos los trámites de extranjería.",
  },
  {
    question:
      "¿Puedo contratar el seguro médico para extranjeros antes de llegar a España?",
    answer:
      "Sí, una de las grandes ventajas del seguro DKV para extranjería es que puedes contratarlo hasta 3 meses antes de la fecha de efecto. Esto te permite tener todo preparado antes de tu llegada a España y presentar la documentación en tu solicitud de visado.",
  },
  {
    question: "¿Cuánto cuesta el seguro médico para extranjeros en España?",
    answer:
      "El precio del seguro médico para extranjeros DKV Integral Élite varía según la edad y la zona geográfica. Te ofrecemos presupuesto personalizado sin compromiso. El pago es anual y puedes pagar con tarjeta aunque no tengas cuenta bancaria en España.",
  },
  {
    question:
      "¿Qué coberturas incluye el seguro DKV Integral para extranjeros?",
    answer:
      "DKV Integral incluye cobertura completa: asistencia primaria, todas las especialidades médicas, hospitalización y cirugía sin límites, urgencias 24h, pruebas diagnósticas (radiografías, TAC, resonancias), seguro dental incluido, asistencia internacional hasta 30.000€ y servicios de salud digital con videoconsultas.",
  },
  {
    question: "¿El seguro médico tiene carencias?",
    answer:
      "Todos los servicios están disponibles desde el primer día sin carencias, excepto el parto que tiene una carencia de 8 meses. En caso de urgencia vital, no se aplica ninguna carencia. Es uno de los seguros con menos carencias del mercado.",
  },
  {
    question: "¿Puedo elegir cualquier médico o hospital?",
    answer:
      "Puedes elegir libremente entre más de 51.000 profesionales y 1.000 centros sanitarios del cuadro médico DKV en toda España, incluyendo hospitales de referencia como Clínica Universidad de Navarra, Quirón, Hospitales HM, Vithas y Ruber Juan Bravo. Puedes consultar el cuadro médico en medicos.dkv.es",
  },
  {
    question: "¿El seguro incluye cobertura dental?",
    answer:
      "Sí, a diferencia de otros seguros de salud, DKV Integral incluye seguro dental sin coste adicional. Incluye más de 50 actos gratuitos como limpiezas dentales ilimitadas, radiografías y consultas. El resto de tratamientos dentales tienen precios especiales.",
  },
  {
    question: "¿Qué pasa si viajo fuera de España?",
    answer:
      "DKV Integral incluye asistencia sanitaria internacional en viajes de hasta 180 días fuera de España, con una cobertura de hasta 30.000€ en gastos médicos, quirúrgicos, farmacéuticos, hospitalización y repatriación. Es uno de los límites más altos del mercado.",
  },
  {
    question:
      "¿El seguro médico para extranjeros cubre accidentes de tráfico y laborales?",
    answer:
      "Sí, DKV Integral cubre los accidentes de tráfico y los accidentes laborales. Tendrás asistencia completa sin importar el origen del accidente, algo que no todos los seguros para extranjeros incluyen.",
  },
  {
    question: "¿Cómo puedo pagar si no tengo cuenta bancaria en España?",
    answer:
      "Puedes pagar tu seguro médico para extranjeros con tarjeta de crédito o débito, aunque no dispongas de cuenta bancaria española en el momento de la contratación. El pago es anual y la póliza tiene duración de 365 días renovables.",
  },
  {
    question: "¿Qué es la póliza vitalicia de DKV?",
    answer:
      "A partir del tercer año de permanencia, tu póliza DKV se convierte en vitalicia. Esto significa que DKV no podrá cancelar tu seguro mientras sigas pagando las primas, dándote seguridad y tranquilidad a largo plazo.",
  },
  {
    question:
      "¿Dónde puedo contratar el seguro médico para extranjeros en Fuengirola?",
    answer:
      "Puedes contratar tu seguro médico para extranjeros en nuestra oficina de agentes exclusivos DKV en Fuengirola, ubicada en Av. Condes de San Isidro, Nº 80, 29640 Fuengirola (Málaga). También atendemos por teléfono al 951 68 13 83 o 633 10 60 25. Asesoramos a extranjeros de toda la Costa del Sol y Málaga.",
  },
];

export const requisitosExtranjeria = [
  {
    requisito: "Cobertura completa",
    cumple: true,
    descripcion: "Incluye todas las prestaciones sanitarias",
  },
  {
    requisito: "Sin copagos disponible",
    cumple: true,
    descripcion: "Modalidad Élite sin ningún copago",
  },
  {
    requisito: "Cobertura nacional",
    cumple: true,
    descripcion: "Válido en todo el territorio español",
  },
  {
    requisito: "Duración mínima anual",
    cumple: true,
    descripcion: "Póliza de 365 días renovable",
  },
  {
    requisito: "Hospitalización incluida",
    cumple: true,
    descripcion: "Sin límite de días",
  },
  {
    requisito: "Urgencias 24h",
    cumple: true,
    descripcion: "Atención de emergencias siempre",
  },
];

export const recomendations = [
  {
    imageSrc: "/happy.webp",
    title: "Seguro de salud DKV",
    description:
      "Seguros de salud para residentes en España. Diferentes modalidades adaptadas a tus necesidades y presupuesto.",
    route: "seguro-de-salud",
  },
  {
    imageSrc: "/dental.webp",
    title: "Seguro dental DKV",
    description:
      "Seguro dental con hasta 59 tratamientos gratis. Limpieza dental gratuita, sin carencias. Niños menores de 14 años gratis.",
    route: "seguro-dental",
  },
  {
    imageSrc: "/vida.webp",
    title: "Seguro de vida DKV",
    description:
      "Protección económica para tu familia. Seguros de vida flexibles y personalizados.",
    route: "seguro-de-vida",
  },
];
