"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, PanelRightClose } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { particulares } from "@/lib/data";

const ItemsMenuMobile = () => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-x-2 text-gray-950 text-sm font-semibold"
        >
          <Menu width={20} color="black" /> Menú
        </Button>
      </SheetTrigger>
      <SheetContent className="z-1000">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4 flex flex-col gap-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <button
                className="font-semibold"
                onClick={() => router.push("/")}
              >
                Inicio
              </button>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold">
                Particulares
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-4 items-start">
                {particulares.map((seguro, i) => (
                  <button
                    key={i}
                    onClick={() => router.push(`${seguro.route}`)}
                    className="font-medium text-gray-700"
                  >
                    {seguro.title}
                  </button>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <PanelRightClose width={20} />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ItemsMenuMobile;
