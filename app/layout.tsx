import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import BannerContact from "@/components/banner-contact";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seguros Fuengirola | Seguros de salud | Seguros médicos privados",
  description:
    "Contrata tu seguro en Fuengirola con DKV, compañía líder en el sector asegurador, la asistencia y los servicios financieros",
  keywords: ["Seguros Fuengirola", "Seguro de salud", "Seguro dental"],
  robots: "INDEX",
  authors: { name: "Supernova Digital" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Script id="gtm-script" strategy="afterInteractive">
        {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KN882DHG');
    `}
      </Script>
      <body className={urbanist.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KN882DHG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextTopLoader />
        <BannerContact />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
