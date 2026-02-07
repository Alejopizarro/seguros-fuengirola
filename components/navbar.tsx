"use client";
import { Phone } from "lucide-react";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between bg-white items-center px-4 py-4 absolute z-1000 w-full">
      <div className="h-full flex items-center">
        <button
          className="text-md font-extralight cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo-sf.webp"
            alt="Seguros Fuengirola - Agentes Exclusivos DKV en Fuengirola y Málaga"
            title="Seguros Fuengirola - Agentes DKV"
            className="object-contain w-[50px] h-[50px]"
            width={200}
            height={200}
            quality={90}
            priority
          />
          {/* <span className="font-semibold">Seguros</span> Fuengirola */}
        </button>
      </div>
      <div className="hidden lg:flex">
        <MenuList />
      </div>
      <div className="lg:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="hidden lg:flex items-center">
        <Button
          className="ml-4 bg-blue-700"
          onClick={() => window.open("https://wa.me/34633106025", "_blank")}
        >
          <Phone /> Contactar
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
