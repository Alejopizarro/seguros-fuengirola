import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Seguro de salud para particulares | Seguros Fuengirola",
  description:
    "Los mejores seguros de salud para particulares. Con DKV tendrás acceso a los mejores médicos y hospitales de España.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
