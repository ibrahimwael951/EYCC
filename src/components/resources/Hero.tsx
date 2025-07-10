"use client";
import React from "react";
import { motion } from "framer-motion";
import Loader5 from "@/components/Animation_Components/Loader5";
import { Database } from "lucide-react";
import { FadeLeft, FadeRight, ViewPort } from "@/animation/Animations";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse justify-center md:items-center md:flex-row gap-5 md:justify-between  ">
      <div className="md:w-2/4">
        <motion.h1 {...FadeLeft} {...ViewPort} className="text-5xl flex items-center gap-1 mb-5 ">
          <Database size={50} className="text-green-600" />
          Resources
        </motion.h1>
        <motion.p {...FadeLeft} {...ViewPort} className="text-lg ml-7">
          You do not need to be a hacker, a programmer, or even a tech genius to
          compete. This challenge is built for learners. Whether you’ve never
          touched a terminal or you just learned what CTF means yesterday — you
          can start today and make real progress before the competition.
          <br />
          This page has all the resources to help you learn, explore, and level
          up at your own pace.9
        </motion.p>
      </div>
      <div className="md:w-2/4 flex justify-center overflow-hidden">
        <motion.div {...FadeRight} {...ViewPort} className="md:scale-125">
          <Loader5 />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
