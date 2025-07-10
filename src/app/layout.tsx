import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

import Footer from "@/components/Footer";

const myFont = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
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
    <html lang="en"> 
      <body className={`${myFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
