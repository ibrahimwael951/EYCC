"use client";
import Image from "next/image";
import React from "react";
import Loader4 from "./Animation_Components/Loader4";
import { motion } from "framer-motion";
import { navData } from "@/data/Navbar";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative min-h-80   p-5 lg:p-10  ">
      {/* Bg and Animate component */}
      <div className="absolute -top-10 left-2/4 -translate-x-2/4 scale-50 md:scale-125 -z-10 ">
        <Loader4 />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-neutral-600/10 backdrop-blur-sm -z-10" />

      {/* content */}
      <p className="text-center font-semibold">
        The first Cyber Security Competition for Egyptian Youth
      </p>
      <section className="flex flex-col justify-between items-center md:items-start md:flex-row gap-10  mt-20">
        <div className="flex flex-col gap-10 w-fit">
          <h1 className="text-4xl flex  items-center w-fit">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-full w-10 h-10 "
            />
            EYCC
          </h1>
          <p className="text-sm">
            © 2025 EYCC . <br />
            All rights reserved.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-96 ">
          <h1 className="text-3xl font-semibold">Links</h1>
          <div className="flex flex-col items-center md:items-start gap-4 mt-4 ml-3 ">
            {navData.map((item) => (
              <Link key={item.title} href={item.href} className=" w-fit">
                <motion.button
                  whileHover={{ color: "green", x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-center md:justify-start items-center gap-2 text-2xl cursor-pointer"
                >
                  <item.icon size={24} />
                  {item.title}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
