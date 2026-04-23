/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check, LoaderCircle, MoveRight, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingresa un correo electronico valido",
  }),
  phone: z.string().min(7, {
    message: "El teléfono debe tener al menos 7 caracteres",
  }),
  optim: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

interface FormControllerProps {
  variant?: "default" | "banner";
}

export function FormController({ variant = "default" }: FormControllerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setIsSuccess(false);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || "",
        {
          method: "POST",
          mode: "no-cors", // importante para evitar problemas de CORS con Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("Formulario enviado:", response.json, data);
      setIsSuccess(true);
      setIsLoading(false);

      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (error: any) {
      setError(true);
      console.error(error.message);
    }
  };

  if (variant === "banner") {
    return (
      <Form {...form}>
        {!error && !isSuccess && (
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            {/* Fila de inputs + botón */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-0">
                    <FormLabel className="text-xs text-blue-200 font-medium">
                      Nombre
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Juan Pérez"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-white h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-0">
                    <FormLabel className="text-xs text-blue-200 font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="juan@gmail.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-white h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 min-w-0">
                    <FormLabel className="text-xs text-blue-200 font-medium">
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="622 333 444"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:border-white h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="h-10 w-full sm:w-auto shrink-0 bg-white text-blue-900 font-semibold hover:bg-blue-50 sm:self-end mt-auto"
              >
                {isLoading ? (
                  <span className="flex items-center gap-1.5">
                    Enviando <LoaderCircle className="animate-spin w-4 h-4" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    Solicitar info <MoveRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>

            {/* Checkbox privacidad */}
            <FormField
              control={form.control}
              name="optim"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 mt-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-blue-900"
                    />
                  </FormControl>
                  <FormLabel className="text-xs font-light text-blue-200 leading-tight cursor-pointer">
                    He leído y acepto la{" "}
                    <Link
                      href="/quienes-somos/politica-de-privacidad"
                      className="underline text-white"
                    >
                      política de protección de datos.
                    </Link>
                  </FormLabel>
                  <FormMessage className="text-xs text-red-300" />
                </FormItem>
              )}
            />
          </form>
        )}
        {error && (
          <div className="flex flex-col space-y-2 text-white">
            <p className="font-medium">Ha habido un problema al enviar el formulario.</p>
            <p className="flex items-center gap-2 font-semibold">
              <PhoneCall className="w-4 h-4" /> 951 68 13 83
            </p>
          </div>
        )}
        {isSuccess && (
          <div className="flex items-center gap-4 text-white">
            <Check className="w-10 h-10 border-2 rounded-full p-2 shrink-0" />
            <div>
              <p className="font-semibold">¡Formulario enviado!</p>
              <p className="text-sm text-blue-200">
                Te contactaremos en las próximas 24/48 h hábiles.
              </p>
            </div>
          </div>
        )}
      </Form>
    );
  }

  return (
    <Form {...form}>
      {!error && !isSuccess && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Perez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electronico</FormLabel>
                <FormControl>
                  <Input placeholder="juanperez@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero de Telefono</FormLabel>
                <FormControl>
                  <Input placeholder="622333444" {...field} />
                </FormControl>
                <FormDescription className="text-sm text-slate-300">
                  Aquí te contactaremos para enviarte más información y resolver
                  tus dudas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optim"
            render={({ field }) => (
              <FormItem className="flex items-start 2xl:items-center mb-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-light text-slate-300">
                  <p>
                    He leído y acepto la politica de{" "}
                    <Link
                      className="font-medium text-slate-50 text-decoration-line: underline"
                      href="/quienes-somos/politica-de-privacidad"
                    >
                      protección de datos.
                    </Link>
                  </p>
                </FormLabel>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            className="w-full text-gray-950 animate-bounce"
          >
            {isLoading === true && (
              <p className="flex items-center gap-x-2">
                Enviando información <LoaderCircle className="animate-spin" />
              </p>
            )}
            {!isLoading && (
              <p className="flex items-center gap-x-2">
                Quiero recibir más información <MoveRight />
              </p>
            )}
          </Button>
        </form>
      )}
      {error && (
        <div className="flex flex-col space-y-4 text-xl text-slate-50 font-medium">
          <p>Ha habido un problema al enviar el formulario</p>
          <p>Puedes contactarte al siguiente numero</p>
          <p className="flex items-center gap-x-2 text-xl text-slate-300 font-semibold">
            <PhoneCall />
            951 68 13 83
          </p>
        </div>
      )}
      {isSuccess && (
        <div className="flex flex-col items-center p-8 space-y-4 text-sm text-center text-slate-300 ">
          <Check size={92} className="border-2 rounded-full p-3" />
          <p className="text-lg font-semibold text-slate-50">
            Formulario enviado correctamente
          </p>
          <div>
            <p>Te contactaremos dentro de las proximas 24/48 hs habiles.</p>
            <p>Por cualquier duda puedes comunicarte al siguiente numero</p>
          </div>
          <p className="flex items-center gap-x-2 text-xl text-slate-300 font-semibold">
            <PhoneCall />
            951 68 13 83
          </p>
        </div>
      )}
    </Form>
  );
}
