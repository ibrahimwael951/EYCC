"use client";
import React from "react";
import { motion } from "framer-motion";
import { Categories_Challenges as categories } from "@/data/Categories_Challenges";
import CategoryCard from "../ui/categoryCard";
import { FadeLeft, FadeUp, ViewPort } from "@/animation/Animations";
const Categories_Challenges = () => {
  return (
    <section className="min-h-screen ">
      <motion.h1
        {...FadeLeft}
        {...ViewPort}
        className="text-4xl font-semibold mb-2"
      >
        {" "}
        Categories of <span className="text-green-600"> Challenges </span>{" "}
      </motion.h1>
      <motion.h3
        {...FadeLeft}
        {...ViewPort}
        className="text-2xl  text-neutral-400 ml-5"
      >
        In this section, you’ll get a quick tour of the main challenge
        categories you’ll encounter in the competition: Web Exploitation,
        Cryptography, OSINT, Forensics, and Reverse Engineering.
      </motion.h3>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 w-fit mx-auto gap-10">
        {categories.map((item, i) => (
          <motion.div key={i} {...FadeUp} {...ViewPort}>
            <CategoryCard
              href={`/Resources/#${item.title}`}
              WhatULearn={item.WhatULearn}
              desc={item.desc}
              icon={item.icon}
              title={item.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories_Challenges;
