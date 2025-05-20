import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import BannerContact from "@/components/banner-contact";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seguros Fuengirola",
  description:
    "Contrata tu seguro en Fuengirola con DKV, compañía líder en el sector asegurador, la asistencia y los servicios financieros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NextTopLoader />
        <BannerContact />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
