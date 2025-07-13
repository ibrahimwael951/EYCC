"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { navData ,Social_Links } from "@/data/Navbar";
import Link from "next/link";
import { FadeLeft, FadeRight, ViewPort } from "@/animation/Animations";

const Footer = () => {
  return (
    <footer className="relative min-h-80 p-5 lg:p-10 mt-80 ">
      <div className="w-full h-full absolute top-0 left-0 bg-neutral-600/10 backdrop-blur-sm -z-10" />
      {/* content */}
      <section className="flex flex-col justify-between items-center md:items-start md:flex-row gap-10  mt-20">
        <div className="flex flex-col gap-10 w-fit">
          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            className="text-4xl flex  items-center w-fit"
          >
            <Image
              src="/very black.png"
              alt="Logo"
              width={500}
              height={500}
              className=" w-10 h-10 "
            />
            <div className="-m-2 rotate-90 bg-white opacity-20 w-10  h-1"/>
            <Image
              src="/Hack club logo whito.png"
              alt="hackclub"
              width={500}
              height={500}
              className=" w-10 h-10 "
            />
        
          </motion.h1>
          <motion.p {...FadeLeft} {...ViewPort} className="text-sm">
            © 2025 EYCC . <br />
            All rights reserved.
          </motion.p>
         
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-fit  ">
          <motion.h1
            {...FadeRight}
            {...ViewPort}
            className="text-3xl font-semibold"
          >
            Social Link
          </motion.h1>
          <div className="flex flex-col items-center md:items-start gap-4 mt-4 ml-3 ">
            {Social_Links.map((item) => (
              <Link key={item.title} href={item.Link} className=" w-fit">
                <motion.button
                  {...FadeRight}
                  {...ViewPort}
                  whileHover={{ color: "green", x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-center md:justify-start items-center gap-2 text-2xl cursor-pointer"
                >
                  <Image src={item.icon} alt={item.title} width={100} height={100} className="w-6 h-6 " />
                  {item.title}
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-60 lg:w-96 ">
          <motion.h1
            {...FadeRight}
            {...ViewPort}
            className="text-3xl font-semibold"
          >
            Links
          </motion.h1>
          <div className="flex flex-col items-center md:items-start gap-4 mt-4 ml-3 ">
            {navData.map((item) => (
              <Link key={item.title} href={item.href} className=" w-fit">
                <motion.button
                  {...FadeRight}
                  {...ViewPort}
                  whileHover={{ color: "green", x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-center md:justify-start items-center gap-2 text-2xl cursor-pointer"
                >
                  <item.icon size={24} className="text-white" />
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
