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

const SITE_URL = "https://sparq-flag-football.vercel.app";
const OG_DESCRIPTION =
  "Get scored, get seen, get selected. Every drill is scored on video and ranked in real time — the verified athletic-performance standard trusted by Team USA, the NFL, and the NCAA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SPARQ — The Standard for Athletic Performance",
  description: OG_DESCRIPTION,
  openGraph: {
    title: "SPARQ — Get Scored. Get Seen. Get Selected.",
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "SPARQ",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SPARQ — The Standard for Athletic Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARQ — Get Scored. Get Seen. Get Selected.",
    description: OG_DESCRIPTION,
    images: ["/og.png"],
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
