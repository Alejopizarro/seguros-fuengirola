import { Baby, BanknoteX, Handshake, Hospital } from "lucide-react";
import { Testimonial } from "../components/testimonials";

export const testimonials: Testimonial[] = [
  {
    author: "Elena Cobo",
    rating: 5,
    text: "Muy contenta por los servicios recibidos en esta oficina. Quiero destacar la excelente atención por parte de Federico, su eficiencia, claridad en la información y amabilidad. ¡Gracias!",
    date: "Hace 7 meses",
    isLocalGuide: false,
    reviewCount: 6,
  },
  {
    author: "Alan Gross",
    rating: 5,
    text: "Muy feliz de haber contratado a DKV para que manejen mis seguros. La atención al cliente es fantástica. 100% recomendable.",
    date: "Hace 7 meses",
    isLocalGuide: true,
    reviewCount: 27,
  },
  {
    author: "Diego Pancot",
    rating: 5,
    text: "Una gran atención del señor Federico tomando mucho tiempo para explicar cada consulta, todos los beneficios que brindan y enseñando todas las ventajas. Da gusto la atención servicio de esta oficina.",
    date: "Hace 7 meses",
    isLocalGuide: false,
    reviewCount: 12,
  },
  {
    author: "Rosa Molina",
    rating: 5,
    text: "Fabián ha estado asesorándome y apoyándome con todo desde hace 6 años siempre ha sido muy amable y está a disposición para atenderme rápidamente en cualquier consulta que tenga.",
    date: "Hace un mes",
    isLocalGuide: true,
    reviewCount: 18,
  },
  {
    author: "Daniel Gonzalez",
    rating: 5,
    text: "Fenomenal atención, siempre dispuestos a solucionar y dar respuestas a nuestras necesidades, rapidez, eficiencia, y sobre todo respeto. Una mención especial para Fabián quien siempre muestra una predisposición absoluta a colaborar y darnos un trato inmejorable. Súper recomendable!!",
    date: "Hace 2 años",
    isLocalGuide: true,
    reviewCount: 314,
  },
  {
    author: "Lucas Moreno",
    rating: 5,
    text: "La semana pasada me contacté con el señor Federico y me supo informar educada y pacientemente (cosa no muy común hoy en día en la atención al público) sobre ciertos puntos del contrato. ¡Gracias por la paciencia! Recomiendo!",
    date: "Hace 1 semana",
    isLocalGuide: false,
  },
];

export const features = [
  {
    title: "Cuadro médico dental DKV",
    description:
      "Más de 2.710 profesionales y 1.460 clínicas dentales en toda España. Acceso directo sin autorizaciones previas.",
    emoji: <Hospital size={32} />,
  },
  {
    title: "Tratamientos dentales gratis",
    description:
      "Hasta 59 tratamientos sin coste adicional: limpieza dental gratis, revisiones, radiografías y extracciones simples incluidas.",
    emoji: <BanknoteX size={32} />,
  },
  {
    title: "Seguro dental niños GRATIS",
    description:
      "Menores de 14 años totalmente gratis cuando se incluyen con un adulto asegurado. ¡Exclusivo de DKV!",
    emoji: <Baby size={32} />,
  },
  {
    title: "Sin carencias desde el primer día",
    description:
      "Utiliza tu seguro dental DKV desde el primer día. Sin carencias, sin autorizaciones y sin límites de uso.",
    emoji: <Handshake size={32} />,
  },
];

export const products = [
  {
    title: "DKV Dentisalud Classic",
    description:
      "Seguro dental DKV con 57 tratamientos incluidos sin coste adicional. Limpieza dental gratis, revisiones y radiografías incluidas. Resto de tratamientos con un 30% de descuento.",
    copago: "",
    price: "7,90€",
    features: [
      {
        text: "Cuadro médico dental - Más de 2.710 profesionales",
        included: true,
      },
      {
        text: "57 tratamientos incluidos - Limpiezas, radiografías, consultas, etc.",
        included: true,
      },
      {
        text: "Hasta 30% de descuento en el resto de tratamientos - Ortodoncia, implantes...",
        included: true,
      },
      {
        text: "Todas las especialidades dentales - Odontología general...",
        included: true,
      },
      {
        text: "Cobertura por accidente dental grave - Si afecta a más de tres...",
        included: true,
      },
      {
        text: "Odontología preventiva - Aplicaciones de gel o...",
        included: true,
      },
      {
        text: "Líneas médicas telefónicas - Un médico disponible las 24h (medicina general y pediatría)",
        included: true,
      },
    ],
  },
  {
    title: "DKV Dentisalud Élite",
    description:
      "El seguro dental DKV más completo con 59 tratamientos gratuitos. Incluye limpieza dental gratis, ortodoncia con descuento del 40% e implantes dentales a precio reducido.",
    copago: "",
    price: "10,90€",
    features: [
      {
        text: "Cuadro médico dental - Más de 2.710 profesionales",
        included: true,
      },
      {
        text: "59 tratamientos incluidos - Limpiezas, radiografías, consultas, etc.",
        included: true,
      },
      {
        text: "Hasta 40% de descuento en el resto de tratamientos - Ortodoncia, implantes...",
        included: true,
      },
      {
        text: "Todas las especialidades dentales - Odontología general...",
        included: true,
      },
      {
        text: "Cobertura por accidente dental grave - Si afecta a más de tres...",
        included: true,
      },
      {
        text: "Odontología preventiva - Aplicaciones de gel o...",
        included: true,
      },
      {
        text: "Líneas médicas telefónicas - Un médico telefónico disponible las 24h (medicina general y pediatría)",
        included: true,
      },
    ],
  },
];

export const comparatives = [
  {
    title: "Precio medio de mercado",
    description: "Coste habitual de los tratamientos dentales más demandados:",
    list: [
      {
        tratamiento: "Revisión dental anual:",
        precio: "40€",
      },
      {
        tratamiento: "Empaste dental:",
        precio: "50€",
      },
      {
        tratamiento: "Radiografía dental:",
        precio: "60€",
      },
      {
        tratamiento: "Limpieza bucal profesional:",
        precio: "80€",
      },
      {
        tratamiento: "Extracción dental simple:",
        precio: "100€",
      },
      {
        tratamiento: "Ortodoncia completa:",
        precio: "600€",
      },
      {
        tratamiento: "Implante dental de titanio:",
        precio: "800€",
      },
    ],
  },
  {
    title: "Precio con seguro dental DKV",
    description: "Precios DKV Dentisalud Élite - Ahorra hasta un 70%:",
    list: [
      {
        tratamiento: "Revisión dental anual:",
        precio: "GRATIS",
      },
      {
        tratamiento: "Empaste dental:",
        precio: "29€",
      },
      {
        tratamiento: "Radiografía dental:",
        precio: "GRATIS",
      },
      {
        tratamiento: "Limpieza bucal profesional:",
        precio: "GRATIS",
      },
      {
        tratamiento: "Extracción dental simple:",
        precio: "GRATIS",
      },
      {
        tratamiento: "Ortodoncia completa:",
        precio: "200€",
      },
      {
        tratamiento: "Implante dental de titanio:",
        precio: "550€",
      },
    ],
  },
];

export const faqs = [
  {
    question: "¿Cuánto cuesta el seguro dental DKV?",
    answer:
      "Los precios del seguro dental DKV empiezan desde solo 7,90€/mes con DKV Dentisalud Classic (57 tratamientos gratis) y 10,90€/mes con DKV Dentisalud Élite (59 tratamientos gratis y mayores descuentos). Son los seguros dentales más económicos del mercado con la mejor cobertura.",
  },
  {
    question: "¿Qué incluye DKV Dentisalud Elite?",
    answer:
      "DKV Dentisalud Élite incluye 59 tratamientos dentales sin coste adicional: limpieza dental gratis, revisiones, radiografías, extracciones simples, selladores y más. El resto de tratamientos como ortodoncia, implantes o endodoncias tienen hasta un 40% de descuento. Es el seguro dental DKV más completo.",
  },
  {
    question: "¿Qué coberturas tiene el seguro dental DKV?",
    answer:
      "La cobertura dental DKV incluye todas las especialidades odontológicas: odontología general, preventiva, odontopediatría, cirugía oral, estética dental, implantología, ortodoncia, endodoncia, periodoncia y urgencias dentales 24h. Con DKV Dentisalud tienes acceso completo al cuadro médico dental.",
  },
  {
    question: "¿La limpieza dental es gratis con DKV?",
    answer:
      "Sí, la limpieza dental es completamente gratis con el seguro dental DKV, tanto con Dentisalud Classic como con Dentisalud Élite. También son gratis las revisiones anuales, radiografías dentales y extracciones simples. Es uno de los tratamientos dentales gratuitos más valorados por nuestros asegurados.",
  },
  {
    question: "¿A qué dentistas puedo acudir con DKV?",
    answer:
      "Con el seguro dental DKV tendrás acceso a más de 2.710 dentistas profesionales y 1.460 clínicas dentales concertadas en toda España, incluyendo Fuengirola, Málaga y toda la Costa del Sol. Puedes elegir libremente tu dentista sin necesidad de autorización previa.",
  },
  {
    question: "¿El seguro dental para niños es gratuito?",
    answer:
      "Sí, el seguro dental DKV para niños menores de 14 años es totalmente GRATIS cuando se aseguran junto con un adulto. Es una ventaja exclusiva de DKV que ninguna otra aseguradora ofrece hasta esa edad. Protege la salud dental de toda tu familia sin coste adicional.",
  },
  {
    question: "¿Cuáles son las diferencias entre Dentisalud Classic y Élite?",
    answer:
      "DKV Dentisalud Classic (7,90€/mes) incluye 57 tratamientos gratis y 30% de descuento en el resto. DKV Dentisalud Élite (10,90€/mes) incluye 59 tratamientos gratis y 40% de descuento. La diferencia principal está en el mayor descuento de Élite en tratamientos como ortodoncia e implantes.",
  },
  {
    question: "¿Hay carencias en el seguro dental DKV?",
    answer:
      "No, el seguro dental DKV no tiene carencias. Puedes utilizar todos los servicios desde el primer día de contratación. Sin períodos de espera, sin autorizaciones previas y sin límites en el número de tratamientos. Es una de las grandes ventajas de DKV Dentisalud.",
  },
  {
    question: "¿Dónde está la oficina DKV en Fuengirola?",
    answer:
      "Nuestra oficina de agentes exclusivos DKV en Fuengirola está ubicada en Av. Condes de San Isidro, Nº 80, 29640 Fuengirola (Málaga). Atendemos presencialmente y por teléfono en el 951 68 13 83 o 633 10 60 25. Somos tu agencia DKV de confianza en la Costa del Sol.",
  },
  {
    question: "¿Hay dentistas DKV en Málaga y alrededores?",
    answer:
      "Sí, el cuadro médico dental DKV en Málaga es muy amplio. Hay cientos de clínicas dentales y dentistas DKV disponibles en Málaga capital, Fuengirola, Marbella, Torremolinos, Benalmádena y toda la Costa del Sol. Puedes consultar el cuadro médico actualizado en nuestra oficina.",
  },
  {
    question: "¿Hasta qué edad puedo contratar el seguro dental DKV?",
    answer:
      "Puedes contratar el seguro dental DKV Dentisalud a cualquier edad, sin restricciones ni límites de edad máxima. DKV no discrimina por edad y ofrece las mismas coberturas y precios a todos sus asegurados.",
  },
  {
    question: "¿Qué opiniones tiene el seguro dental DKV?",
    answer:
      "El seguro dental DKV tiene excelentes opiniones entre los asegurados por su relación calidad-precio, la amplitud del cuadro médico dental (más de 2.710 dentistas), los 59 tratamientos gratuitos y la atención sin carencias. Como agentes exclusivos DKV en Fuengirola, nuestros clientes destacan el trato personalizado y el asesoramiento profesional.",
  },
];

export const recomendations = [
  {
    imageSrc: "/happy.webp",
    title: "Seguro de salud DKV",
    description:
      "Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España. Cuadro médico amplio en Fuengirola y Málaga.",
    route: "seguro-de-salud",
  },
  {
    imageSrc: "/vida.webp",
    title: "Seguro de hogar DKV",
    description:
      "Los seguros de hogar más completos y económicos para proteger tu vivienda. Coberturas adaptadas a tus necesidades.",
    route: "seguro-de-hogar",
  },
  {
    imageSrc: "/family.webp",
    title: "Seguro de vida DKV",
    description:
      "Los seguros de vida más completos para proteger a tu familia. Tranquilidad y seguridad económica para los tuyos.",
    route: "seguro-de-vida",
  },
];
