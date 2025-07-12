"use client";
import { motion } from "framer-motion";
import React from "react";
import BackGround from "@/components/Animation_Components/Loader3";
import { BlurAnimate } from "@/animation/Animations";
const Why_Participate = () => {
  const WHY = [
    "Join Egypt’s first-ever cybersecurity competition & community for high schoolers",
    "If you have potential through learning cybersecurity, this is your opportunity of learning and connecting with like-minded ethical hackers",
  ];

  return (
    <section className=" px-5 lg:px-10 2xl:px-20 ">
      <div className="relative gap-20 overflow-hidden ">
        <motion.h1
          {...BlurAnimate}
          className="text-4xl md:text-5xl font-semibold"
        >
          Why
          <span className="text-green-600"> Participate </span> ?
        </motion.h1>
        <div className="md:w-2/4 my-5 flex flex-col gap-4 ">
          {WHY.map((item) => (
            <motion.p {...BlurAnimate} key={item} className="text-xl">
              {item}
            </motion.p>
          ))}
        </div>
        <div>
          <motion.h1
            {...BlurAnimate}
            className="text-4xl md:text-5xl font-semibold"
          >
            No<span className="text-green-600"> Experience </span>?
          </motion.h1>
          <motion.p {...BlurAnimate} className="text-xl my  -5">
            No Problem, it is your chance for start learning and competing with
            others!
          </motion.p>
        </div>

        <div className="hidden md:inline opacity-35  md:opacity-100 -z-10 absolute right-2/4 -translate-x-2/4 md:right-1/5 top-32  md:translate-x-0 md: w-fit scale-125 h-60">
          <BackGround />
        </div>
      </div>
    </section>
  );
};

export default Why_Participate;
