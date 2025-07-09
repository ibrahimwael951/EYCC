import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

import Footer from "@/components/Footer";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Hacked-KerX.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hacked-KerX.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-my-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EYCC",
  description: "The first Cyber Security Competition for Egyptian Youth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <body className={`${myFont.className}`}> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
