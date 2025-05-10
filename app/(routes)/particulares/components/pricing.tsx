import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
    <div className="flex flex-col items-center max-w-4xl">
      <h2 className="text-2xl lg:text-3xl mb-8 text-gray-800">
        Seguros pensados para tí
      </h2>
      <div className="flex flex-col sm:flex-row gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            className="flex flex-col justify-center bg-white rounded-lg shadow-lg"
          >
            <CardHeader>
              <h4 className="text-xl font-bold text-blue-800 ">
                {product.title}
              </h4>
            </CardHeader>
            <Separator className="mx-4 max-w-3/4" />
            <CardContent>
              <p className="text-lg mb-4 text-gray-400">
                {product.description}
              </p>
              <p className="text-md font-semibold mb-4 text-gray-800">
                {product.copago}
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-xl font-bold mb-4 text-gray-800">
                {product.price} €
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
