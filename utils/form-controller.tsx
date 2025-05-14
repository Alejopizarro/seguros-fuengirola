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
});

export function FormController() {
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
        "https://script.google.com/macros/s/AKfycbzcpdep1PW6SpJspFjPJpcaXinuPeI3-35uJbnorzfe1oZBsnrr1BcwJRl8t19ms22P/exec",
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
      }, 5000);
    } catch (error: any) {
      setError(true);
      console.error(error.message);
    }
  };

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
                  <Input placeholder="622xxxxxx" {...field} />
                </FormControl>
                <FormDescription className="text-sm text-slate-300">
                  Aquí te contactaremos para enviarte más información y resolver
                  tus dudas.
                </FormDescription>
                <FormMessage />
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
