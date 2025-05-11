"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const Carencias = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        Periodos de carencia, copagos y modalidades de seguros de salud de
        cuadro médico
      </h2>
      <p className="text-lg mb-8 text-center max-w-4xl text-gray-600 font-light">
        En DKV, entendemos que cada persona tiene necesidades únicas cuando se
        trata de su salud. Por eso, ofrecemos una variedad de modalidades de
        seguros de salud, cada una con sus propias características y beneficios.
        A continuación, te presentamos un resumen de las modalidades
        disponibles:
      </p>
      <div className="flex flex-col sm:flex-row items-start justify-center gap-x-8 max-w-4xl text-gray-700">
        <Card className="flex flex-col justify-center bg-white rounded-lg shadow-lg md:basis-1/2">
          <CardHeader className="font-bold text-xl text-gray-900">
            Periodos de carencia
          </CardHeader>
          <Separator className="mx-4 max-w-3/4" />
          <CardContent className="flex flex-col gap-y-4">
            Con los seguros de cuadro médico podrás utilizar todas las
            coberturas y servicios médicos desde el primer día, excepto:
            <ul>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">Trasplantes:</span> 12 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Intervenciones quirúrgicas, hospitalización y prótesis:
                </span>{" "}
                8 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Partos (excepto partos prematuros o cesárea):
                </span>{" "}
                8 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Actos e Intervenciones quirúrgicas ambulatorias:
                </span>{" "}
                6 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Medios diagnósticos de alta tecnología:
                </span>{" "}
                6 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Estudio biomecánico de la marcha:
                </span>{" "}
                6 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Protonterapia en tumores pediátricos:
                </span>{" "}
                8 meses
              </li>
              <li className="font-extralight text-gray-700">
                <span className="font-semibold">
                  Asistencia sanitaria por VIH/SIDA:
                </span>{" "}
                12 meses
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-center bg-white rounded-lg shadow-lg md:basis-1/2">
          <CardHeader className="font-bold text-xl">
            Modalidades y copagos seguros de salud
          </CardHeader>
          <Separator className="mx-4 max-w-3/4" />
          <CardContent className="flex flex-col gap-y-4">
            <p>
              El copago es el importe que deberás abonar al hacer uso de
              determinados servicios según la modalidad de seguro elegida. Esta
              cantidad se sumará a la cuota fija en función del seguro de salud
              que elijas. Recuerda que hay seguros en los que el copago es de
              0€.
            </p>
            <p>
              En los seguros médicos con copago tienes una cuota más económica y
              pagas un pequeño coste cuando haces un servicio como una prueba
              médica.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() =>
                router.push(
                  "https://docs.dkv.es/pdf-docs/copagos-modalidades/Tabla-copagos.pdf"
                )
              }
            >
              Más información
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Carencias;
