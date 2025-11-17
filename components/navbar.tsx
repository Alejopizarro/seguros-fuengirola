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
    <nav className="flex justify-between bg-white items-center px-8 py-4 absolute z-1000 w-full">
      <div>
        <button
          className="text-md font-extralight cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.jpeg"
            alt="Logo Seguros Fuengirola en vertical"
            title="Logo seguros fuengirola"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div className="hidden lg:flex">
        <MenuList />
      </div>
      <div className="lg:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="hidden lg:flex items-center">
        <Button className="ml-4 bg-blue-700">
          <Phone /> Contactar
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
