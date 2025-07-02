import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Product {
  title: string;
  description: string;
  copago: string;
  price: string;
}

interface PricingProps {
  products: Product[];
}

const Pricing = (props: PricingProps) => {
  const { products } = props;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl mb-8 text-gray-800">
        Seguros pensados para tí
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 w-full">
        {products.map((product, index) => (
          <Card
            key={index}
            className={`flex flex-col justify-center bg-white rounded-lg shadow-lg relative flex-1 min-w-[260px] max-w-sm mx-auto ${
              products.length === 3 && index === 1
                ? "border-4 border-blue-500 shadow-xl scale-105"
                : ""
            }`}
          >
            {products.length === 3 && index === 1 && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-slate-50 px-4 py-1 rounded-full text- font-semibold shadow-md border-2 border-white">
                Más popular
              </div>
            )}
            <CardContent>
              <h4 className="text-lg font-bold text-blue-500">
                {product.title}
              </h4>
              <div className="flex items-center mt-2 gap-x-4">
                <p className="flex items-center gap-x-4 text-7xl lg:text-8xl font-medium mb-4 text-gray-800">
                  {product.price}
                </p>
                <div className="flex flex-col text-sm text-gray-500">
                  <span>Desde</span>
                  <span>por mes</span>
                </div>
              </div>
              <p className="text-lg mb-4 text-gray-400">
                {product.description}
              </p>
            </CardContent>
            <Separator className="mx-4 max-w-11/12" />
            <CardFooter>
              <p className="text-md font-semibold mb-4 text-gray-800">
                {product.copago}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
