"use client";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface Testimonial {
  author: string;
  rating: number;
  text: string;
  date: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

const Testimonials = ({ testimonials, title }: TestimonialsProps) => {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          {title || "Opiniones de nuestros clientes"}
        </h2>
        <p className="text-gray-600">
          Valoraciones reales de clientes en Google
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-800">5.0</span>
          <span className="text-gray-500">
            ({testimonials.length} reseñas en Google)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.author.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  {testimonial.isLocalGuide && (
                    <span className="text-xs text-blue-600 font-medium">
                      Local Guide
                      {testimonial.reviewCount &&
                        ` · ${testimonial.reviewCount} opiniones`}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>

              <div className="relative">
                <Quote
                  size={20}
                  className="absolute -top-1 -left-1 text-green-700/20"
                />
                <p className="text-gray-600 text-sm leading-relaxed pl-4">
                  {testimonial.text}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://g.page/r/CZsrpqXSugZcEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="currentColor"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Ver todas las reseñas en Google
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
