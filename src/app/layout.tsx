import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import BottomBlur from "@/components/ui/BottomBlur";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
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
      <body className={`${firaCode.className}`}>
        <Navbar />
        {children} 
        <BottomBlur/>
      </body>
    </html>
  );
}
