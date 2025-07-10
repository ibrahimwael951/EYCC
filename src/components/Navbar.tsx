"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navData } from "@/data/Navbar";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { FadeDown, Animate } from "@/animation/Animations";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <nav>
      <motion.div
        {...FadeDown}
        {...Animate}
        className="select-none fixed top-0 left-2/4 -translate-x-2/4 w-full max-w-6xl flex justify-between items-center p-3 z-50"
      >
        <Link
          href="/"
          className="p-2 rounded-2xl  flex justify-center items-center gap-2 text-2xl  font-semibold"
        >
          <Image
            src="/Logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-10 h-10 rounded-full"
            suppressHydrationWarning={true}
          />
          EYCC
        </Link>

        <div className="hidden md:flex justify-center items-center gap-5 bg-neutral-900 rounded-2xl p-4 ">
          {navData.map((item, i) => (
            <Link key={i} href={item.href}>
              <motion.div>{item.title}</motion.div>
            </Link>
          ))}
        </div>
        <div className="flex  items-center gap-5 ">
          <Button
            href="/register"
            text="Registration"
            rotate={false}
            transBg={false}
            className="text-sm"
            animate={false}
          />
          <button
            onClick={() => setIsMenuOpened((prev) => !prev)}
            className="md:hidden bg-neutral-900 p-2 rounded-2xl"
          >
            <Menu size={34} />
          </button>
        </div>
      </motion.div>
        <AnimatePresence>
          {isMenuOpened && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="fixed top-0 pt-20 p-5 w-full z-40 md:hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/10 backdrop-blur-xl  -z-10" /> 
              <div className="flex flex-col gap-4">
                {navData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-2 text-2xl"
                  >
                    <item.icon className="text-green-600" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

export default Navbar;
