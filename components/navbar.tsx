import { Phone } from "lucide-react";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-900 text-slate-50 justify-between items-center p-4 absolute z-1000 w-full">
      <div>
        <h1 className="text-md font-extralight">
          Seguros <span className="text-md font-semibold">Fuengirola</span>
        </h1>
      </div>
      <div className="hidden lg:flex">
        <MenuList />
      </div>
      <div className="lg:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="hidden lg:flex items-center">
        <Button className="ml-4 bg-green-600 hover:bg-green-700">
          <Phone /> Contactar
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
