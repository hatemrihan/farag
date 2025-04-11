import type { Metadata } from "next";
import { Archivo } from 'next/font/google';
import "./globals.css";
import { cn } from "@/components/lib/utils";
import Providers from "@/components/Providers";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--archivo-font",
});

export const metadata: Metadata = {
  title: "FARAG - Creative Portfolio",
  description: "A discovery engine for creatives",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/videos/TEASERRR2.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className={cn(`antialiased ${archivo.variable} font-sans`)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
