import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const blogPosts = [
  {
    href: "/blog/seguro-de-salud-para-mayores-de-75-fuengirola",
    category: "Seguros de salud",
    title: "Seguro de salud para mayores de 75 años en Fuengirola",
    description:
      "¿Te han dicho que ya no puedes contratar un seguro de salud por tu edad? Te contamos qué opciones reales existen sin límite de edad.",
  },
  {
    href: "/blog/por-que-contratar-seguro-con-agente-local-fuengirola",
    category: "Seguros de salud",
    title: "¿Por qué contratar tu seguro con un agente local en Fuengirola?",
    description:
      "La persona que te vende el seguro importa tanto como el producto. Descubre qué diferencia a un agente local de contratar online.",
  },
  {
    href: "/blog/que-es-seguro-de-decesos-dkv",
    category: "Seguros de vida y familia",
    title: "¿Qué es el seguro de decesos DKV y qué cubre?",
    description:
      "Coberturas, precios y por qué miles de familias en Fuengirola y Málaga confían en el seguro de decesos DKV.",
  },
];

const BlogSection = () => {
  return (
    <div className="p-8 sm:px-12 sm:py-18 max-w-[1440px] mx-auto flex flex-col items-center">
      <p className="text-2xl lg:text-3xl 2xl:text-4xl text-center font-semibold mb-4 text-gray-800">
        Consejos y guías sobre seguros
      </p>
      <p className="text-lg 2xl:text-xl mb-8 text-center text-gray-500 max-w-3xl">
        Artículos escritos por nuestro equipo de agentes en Fuengirola para
        ayudarte a entender tus opciones y proteger a tu familia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {blogPosts.map((post) => (
          <Card
            key={post.href}
            className="bg-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <CardHeader>
              <span className="inline-block w-fit px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                {post.category}
              </span>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">
                {post.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-blue-600">
                <Link href={post.href}>
                  Leer artículo <MoveRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Link
        href="/blog"
        className="flex items-center gap-x-2 text-blue-600 font-semibold mt-8 hover:text-blue-800 transition-colors"
      >
        Ver todos los artículos <MoveRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default BlogSection;
