import { Baby, BanknoteX, Handshake, Hospital } from "lucide-react";

export const features = [
  {
    title: "Cuadro médico dental",
    description:
      "Más de 2.710 profesionales, las mejores clínicas y tratamientos dentales.",
    emoji: <Hospital size={32} />,
  },
  {
    title: "Servicios sin coste adicional",
    description:
      "Numerosos tratamientos sin pagar de más, y el resto con hasta un 40% de descuento.",
    emoji: <BanknoteX size={32} />,
  },
  {
    title: "Menores de 14 años GRATIS",
    description: "Siempre y cuando se incluyan en el seguro con un adulto.",
    emoji: <Baby size={32} />,
  },
  {
    title: "Utilízalo desde el primer día",
    description:
      "Sin carencias, sin autorizaciones y sin límites en el uso de tratamientos realizados.",
    emoji: <Handshake size={32} />,
  },
];

export const products = [
  {
    title: "DKV Dentisalud Classic",
    description:
      "Seguro dental con 57 tratamientos incluidos sin coste adicional y otros con un 30% de descuento.",
    copago: "",
    price: "Desde 7,90€/mes",
  },
  {
    title: "DKV Dentisalud Élite",
    description:
      "Seguro dental con 59 tratamientos incluidos sin coste adicional y otros con un 40% de descuento.",
    copago: "",
    price: "Desde 10,90€/mes",
  },
];

export const comparatives = [
  {
    title: "Precio medio de mercado",
    description: "Coste de los tratamientos más utilizados:",
    list: [
      {
        tratamiento: "Revision anual: ",
        precio: "40€",
      },
      {
        tratamiento: "Empaste: ",
        precio: "50€",
      },
      {
        tratamiento: "Radiografía: ",
        precio: "60€",
      },
      {
        tratamiento: "Limpieza bucal: ",
        precio: "80€",
      },
      {
        tratamiento: "Extracciones dentales símples: ",
        precio: "100€",
      },
      {
        tratamiento: "Ortodoncia: ",
        precio: "600€",
      },
      {
        tratamiento: "Implante de titanio: ",
        precio: "800€",
      },
    ],
  },
  {
    title: "Precio con DKV",
    description: "Coste con el seguro DKV Dentisalud Élite: ",
    list: [
      {
        tratamiento: "Revision anual: ",
        precio: "GRATIS",
      },
      {
        tratamiento: "Empaste: ",
        precio: "29€",
      },
      {
        tratamiento: "Radiografía: ",
        precio: "GRATIS",
      },
      {
        tratamiento: "Limpieza bucal: ",
        precio: "GRATIS",
      },
      {
        tratamiento: "Extracciones dentales símples: ",
        precio: "GRATIS",
      },
      {
        tratamiento: "Ortodoncia: ",
        precio: "200€",
      },
      {
        tratamiento: "Implante de titanio: ",
        precio: "550€",
      },
    ],
  },
];

export const faqs = [
  {
    question: "¿Qué cubre un seguro de salud?",
    answer:
      "Un seguro dental es la mejor opción para cuidar de tu salud bucodental de manera integral. Con el seguro dental de DKV, tendrás hasta 59 servicios odontológicos incluidos sin coste adicional, y podrás acceder a otros tratamientos con descuentos de hasta un 40%, lo que te permitirá ahorrar en tus visitas al dentista.",
  },
  {
    question: "¿A qué dentistas puedo acudir?",
    answer:
      "Tendrás acceso a más de 2.710 dentistas y 1.460 clínicas dentales concertadas en toda España. ",
  },
  {
    question:
      "¿Tengo acceso a todas las especialidades dentales con el seguro DKV Dentisalud?",
    answer:
      "Con DKV Dentisalud tendrás acceso a todas las especialidades odontológicas: odontología general, odontología preventiva, odontopediatría, odontología quirúrgica, odontología estética, implantes, radiología, diagnóstico dental y urgencias dentales. Además tendrás acceso a numerosos tratamientos dentales, como limpieza dental, empastes, blanqueamiento, ortodoncia, endodoncia, extracciones, implantes, prótesis dentales, periodoncia y muchos más. Recuerda que con el seguro DKV Dentisalud, tendrás hasta 59 tratamientos dentales incluidos sin coste adicional y el resto con hasta el 40% de descuento.",
  },
  {
    question: "¿El seguro dental para niños es gratuito?",
    answer:
      "No tendrás que preocuparte por la salud dental de los tuyos. Si tienes hijos menores de 14 años, su seguro será gratuito si se aseguran contigo. ¡Ninguna otra compañía ofrece gratis el seguro hasta esa edad!",
  },
  {
    question:
      "¿Hasta qué edad puedo contratar el seguro dental DKV Dentisalud?",
    answer:
      "Podrás contratar el seguro dental a cualquier edad, sin restricciones.",
  },
];

export const recomendations = [
  {
    imageSrc: "/family.webp",
    title: "Seguro dental",
    description:
      "Los seguros dentales más completos y económicos para utilizar desde el primer día.",
    route: "particulares/seguro-dental",
  },
  {
    imageSrc: "/family.webp",
    title: "Seguro de salud",
    description:
      "Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España.",
    route: "particulares/seguro-de-salud",
  },
];
