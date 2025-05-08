import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faqs = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-18 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Preguntas Frecuentes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:space-x-8 w-full">
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Se puede ir al médico el día siguiente de contratar la póliza?
              </AccordionTrigger>
              <AccordionContent>
                Sí, desde el primer día en que entra en vigor la póliza, excepto
                para algunos servicios que tienen periodo de carencia como
                intervenciones quirúrgicas, hospitalización, parto o
                trasplantes.{" "}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Hay que solicitar autorización para ir al especialista?
              </AccordionTrigger>
              <AccordionContent>
                No. Los especialistas son de libre acceso. Tan sólo debes
                solicitar la autorización de DKV en el caso de pruebas
                diagnósticas complejas, tratamientos e ingresos hospitalarios.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Como solicitar un reembolso?</AccordionTrigger>
              <AccordionContent>
                Puedes solicitarlo a través del área de cliente, enviándonos la
                factura, cumplimentando un formulario y adjuntando la imagen de
                la factura.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué es una preexistencia?</AccordionTrigger>
              <AccordionContent>
                Una preexistencia es aquella condición de la salud (por ejemplo,
                embarazo), alteración o trastorno orgánico que existe con
                anterioridad al momento de la contratación del seguro,
                independientemente de que exista un diagnóstico médico. A no ser
                que se detalle lo contrario en la póliza, las preexistencias
                quedan excluidas de la cobertura del seguro.{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué es un copago?</AccordionTrigger>
              <AccordionContent>
                El copago es el importe que deberás abonar por cada acto médico
                realizado, según la modalidad de seguro que tengas contratada.
                Puedes ver el importe de estos copagos en la «Tabla de Grupos de
                Actos Médicos y Copagos» de las condiciones particulares y/o
                especiales de tu póliza.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Qué es una carencia?</AccordionTrigger>
              <AccordionContent>
                Es el intervalo de tiempo, contado a partir de la entrada en
                vigor de la póliza, durante el cual no son efectivas algunas de
                las coberturas. Puedes consultar las carencias en las
                condiciones generales y particulares de tu póliza o contactando
                con la compañía.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Seguro de Hogar: ¿Qué es un continente?
              </AccordionTrigger>
              <AccordionContent>
                Se entiende por Continente el valor de la propia vivienda, de la
                edificación en sí: cimientos, muros, puertas, ventanas y techos,
                incluyendo construcciones adyacentes como patios, garajes,
                terrazas, piscinas e instalaciones deportivas, así como sus
                instalaciones fijas (calefacción, suministros de agua, luz, gas,
                paneles solares, etc.).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Seguro de Hogar: ¿Qué es el contenido?
              </AccordionTrigger>
              <AccordionContent>
                El término Contenido se refiere los bienes personales, como el
                mobiliario (incluida el mobiliario fijo de cocina y baño), ropa,
                libros, música, objetos de decoración, ajuar doméstico,
                electrodomésticos, ordenadores y tecnología, joyas normales,
                etc. que se encuentren dentro del inmueble asegurado y sean
                propiedad del asegurado, sus familiares o personas que convivan
                en el domicilio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
