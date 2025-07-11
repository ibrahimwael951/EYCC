"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { navData } from "@/data/Navbar";
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
              src="/Logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-full w-10 h-10 "
            />
            EYCC
          </motion.h1>
          <motion.p {...FadeLeft} {...ViewPort} className="text-sm">
            © 2025 EYCC . <br />
            All rights reserved.
          </motion.p>
          <div className="flex flex-col gap-2">
            <a className="text-2xl text-green-600 font-semibold border-green-600 hover:border-b"  href="https://discord.gg/YBFUZyqt">  Discord Channel</a>
            <a className="text-2xl text-green-600 font-semibold border-green-600 hover:border-b"  href="https://whatsapp.com/channel/0029Vb5tjbOIyPtNoIxKIb2a"> WhatsApp Channel</a>
            <a className="text-2xl text-green-600 font-semibold border-green-600 hover:border-b"  href="https://t.me/+gSyG_91EYYY1YjU0"> Telegram Channel</a>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center md:items-start md:w-96 ">
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
