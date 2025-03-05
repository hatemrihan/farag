import type { Metadata } from "next";
import {Archivo } from 'next/font/google';
import "./globals.css";
import { cn } from "@/components/lib/utils";


const archivo = Archivo({
  display: "swap",
  weight : "variable",
  subsets: ["latin"],
  variable: "--archivo-font",
});

export const metadata: Metadata = {
  title: "Hatum",
  description: "Where All in One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased bg-stone-900 text-stone-50 ${archivo.variable} font-sans`)}>
      {/* <ThemeProvider attribute="class" defaultTheme="black">
        
        </ThemeProvider> */}
          {children}
        </body> 
    </html>
   
  );
}
