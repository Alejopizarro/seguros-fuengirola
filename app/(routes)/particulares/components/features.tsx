import { Card } from "@/components/ui/card";
import React from "react";

interface Features {
  title: string;
  description: string;
  emoji: React.ReactElement;
}

interface FeaturesProps {
  title: string;
  features: Features[];
}
const Features = (props: FeaturesProps) => {
  const { features, title } = props;
  return (
    <div className="flex flex-col items-center gap-y-8 sm:gap-y-16">
      <h2 className="text-2xl lg:text-3xl font-normal text-center">
        ¿Por qué elegir un {title} con DKV?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            {feature.emoji}
            <div className="flex flex-col gap-y-2">
              <h4 className="text-lg font-medium">{feature.title}</h4>
              <p className="text-sm font-light text-gray-500">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
