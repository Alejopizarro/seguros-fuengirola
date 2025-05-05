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
import { ChevronDown, ChevronUp, Menu, PanelRightClose } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Separator } from "./ui/separator";
import { useState } from "react";
import Link from "next/link";

const ItemsMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center">
          <Menu width={20} color="black" /> Menú
        </Button>
      </SheetTrigger>
      <SheetContent className="z-1000">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4 flex flex-col gap-y-4">
          <Collapsible onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full justify-between font-semibold">
              Particulares
              {isOpen ? <ChevronUp width={20} /> : <ChevronDown width={20} />}
            </CollapsibleTrigger>
            <CollapsibleContent>Seguros de salud</CollapsibleContent>
            <CollapsibleContent>Seguros dentales</CollapsibleContent>
            <CollapsibleContent>Seguros de decesos</CollapsibleContent>
            <CollapsibleContent>Seguros de vida</CollapsibleContent>
            <CollapsibleContent>Seguros de hogar</CollapsibleContent>
            <CollapsibleContent>Seguros de viajes</CollapsibleContent>
          </Collapsible>
          <Separator />
          <Collapsible onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full justify-between font-semibold">
              Autónomos y Empresas
              {isOpen ? <ChevronUp width={20} /> : <ChevronDown width={20} />}
            </CollapsibleTrigger>
            <CollapsibleContent>Seguros para autónomos</CollapsibleContent>
            <CollapsibleContent>Seguros para empresas</CollapsibleContent>
            <CollapsibleContent>
              Mutualistas y asegurados públicos
            </CollapsibleContent>
          </Collapsible>
          <Separator />
          <Link href="/" className="font-semibold">
            Blog
          </Link>
          <Separator />
          <Collapsible onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full justify-between font-semibold">
              Sobre Nosotros
              {isOpen ? <ChevronUp width={20} /> : <ChevronDown width={20} />}
            </CollapsibleTrigger>
            <CollapsibleContent>Blog</CollapsibleContent>
            <CollapsibleContent>FAQs</CollapsibleContent>
            <CollapsibleContent>About us</CollapsibleContent>
            <CollapsibleContent>Guide to safety measures</CollapsibleContent>
            <CollapsibleContent>
              Legal notice, Privacy, Terms and Conditions
            </CollapsibleContent>
          </Collapsible>
          <Separator />
          <Link href="/" className="font-semibold">
            Contacto
          </Link>
          <Separator />
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
