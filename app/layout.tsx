import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Biothermics de Colombia | Soluciones para cadena de frío",
  description: "Diseño, fabricación y comercialización de soluciones para mantener la cadena de frío en sectores farmacéutico, veterinario, alimentos y cosméticos.",
  openGraph: { title: "Biothermics de Colombia", description: "Soluciones térmicas para cadena de frío.", url: "https://biothermics.com", images: [{ url: "/brand/og-biothermics.png" }] },
  icons: { icon: "/brand/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className={`${montserrat.variable} ${openSans.variable} font-body antialiased`}><Header />{children}<Footer /></body></html>;
}
