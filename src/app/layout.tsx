import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPARQ — The Standard for Athletic Performance | USA Football",
  description:
    "SPARQ is the verified athletic-performance score trusted by Team USA, the NFL, and the NCAA. See how USA Football uses SPARQ combines to discover the next generation of athletes — and how your athlete gets tested, ranked, and recruited.",
  openGraph: {
    title: "SPARQ — The Standard for Athletic Performance",
    description:
      "The verified testing trusted at the highest levels of sport, now open to every athlete. Get tested. Get ranked. Get discovered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
