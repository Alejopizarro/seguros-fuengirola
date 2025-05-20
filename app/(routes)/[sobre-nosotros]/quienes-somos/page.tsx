import Contact from "./components/contact";
import Hero from "./components/hero";
import Location from "./components/location";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col space-y-8 sm:space-y-16 lg:space-y-20 items-center p-8 sm:py-16 sm:px-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col items-center text-center space-y-4">
          <h4 className="text-3xl lg:text-4xl mb-4 lg:mb-8">
            ¿Como podemos ayudarte?
          </h4>
          <p>
            Ven y visita nuestra oficina, estaremos encantados de atenderte y
            resolver todas las dudas o preguntas que te ayuden a elegir el
            seguro que más se adapta a ti o a tu familia:
          </p>
          <p>
            <span className="font-semibold text-gray-950">
              DKV Salud, DKV Dental, DKV Decesos, DKV Renta, DKV Accidentes, DKV
              Hogar y DKV Vida
            </span>{" "}
            o para a tu Negocio. Somos activistas de la salud, así que no lo
            dudes más y confía en DKV Fuengirola, la aseguradora de salud líder
            en Europa.
          </p>
        </div>
        <Location />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
