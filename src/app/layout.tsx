import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Fira_Code, Montserrat } from 'next/font/google'
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exogestion | Potenciamos tu marca",
  description: "Exogestión conecta talento emergente con oportunidades reales en el mundo digital, ofreciendo proyectos profesionales y crecimiento en equipos colaborativos.",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-montserrat', 
  display: 'swap',
})
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-firacode',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.ico" />

      </head>
      <body
      style={{ overflowX: "hidden" }}
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F5F5] overflow-x-hidden`}
>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
