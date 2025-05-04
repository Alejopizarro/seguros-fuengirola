/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const experiences = [
  {
    id: 1,
    title: "Seguros para empresas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Seguros para autonomos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Mutualistas y asegurados publicos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md bg-transparent">
            Particulares
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/category" title="Seguros de salud">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/offers" title="Seguros dentales">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/accesories" title="Seguros de decesos">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/category" title="Seguros de vida">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/offers" title="Seguros de hogar">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/accesories" title="Seguros de accidentes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/accesories" title="Seguros de viajes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md bg-transparent">
            Autónomos y Empresas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {experiences !== null &&
                experiences.map((experience) => (
                  <ListItem
                    key={experience.id}
                    title={experience.title}
                    // href={`/category/${experience.attributes.slug}`}
                  >
                    {experience.description}
                  </ListItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" passHref>
            <NavigationMenuLink className="text-md bg-transparent">
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md bg-transparent">
            Sobre Nosotros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/" title="About us">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/" title="Blog">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/" title="FAQs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href="/" title="Guide to safety measures">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem
                href="/"
                title="Legal notice, Privacy, Terms and Conditions"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
