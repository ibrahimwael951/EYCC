"use client";

import { motion } from "framer-motion";
import React from "react";
import Button from "./ui/Button";
import { FadeUp, ViewPort } from "@/animation/Animations";
import Background from "@/components/Animation_Components/Loader1";

const Hero = () => {
  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 flex flex-col gap-4 justify-center items-center overflow-hidden ">
      <motion.p
        {...FadeUp}
        {...ViewPort}
        transition={{ delay: 0.2 }}
        className="p-3 text-lg rounded-2xl bg-neutral-900"
      >
        Welcome to <span className="text-green-600 font-semibold"> EYCC </span>
      </motion.p>
      <motion.h1
        {...FadeUp}
        {...ViewPort}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-semibold text-center "
      >
        Egyptian Youth
        <span className="text-green-600 font-extrabold"> Cybersecurity </span>
        Challenge
      </motion.h1>
      <motion.p
        {...FadeUp}
        {...ViewPort}
        transition={{ delay: 0.36 }}
        className=" md:text-2xl text-neutral-400 font-semibold text-center"
      >
        The first Cyber Security Competition for Egyptian Youth
      </motion.p>
      <div className="flex justify-center items-center gap-10">
        <Button href="/register" delay={0.5} transBg={false} text="Register" textSize />
        <Button href="/About" delay={0.6} text="About Us" textSize />
      </div>
      <div className="absolute top-2/4 left-2/4 -translate-2/4 opacity-40 scale-125 md:scale-200 -z-20">
      <div className="scale-125 lg:scale-150">
        <Background />
      </div>
      </div>

    </section>
  );
};

export default Hero;
