import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";


const ArchivoFont = Archivo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Archivo_BlackFont = Archivo_Black({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Tony's Portfolio",
  description: "A Neobrutalism based portfolio built by Tony Terra Nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptbr">
      <body
        className={`${ArchivoFont.variable} ${Archivo_BlackFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
