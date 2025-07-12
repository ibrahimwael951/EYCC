"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQData } from "@/data/FAQ";
import { motion, AnimatePresence } from "framer-motion";
import { FadeLeft, Animate, ViewPort, FadeUp } from "@/animation/Animations";

const FAQ = () => {
  return (
    <section className="mt-20 min-h-screen px-5 lg:px-10 2xl:px-20  space-y-10 z-10">
      <div className="">
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          className="flex items-center gap-1 bg-neutral-900 w-fit px-3 py-1 rounded-2xl "
        >
          <div className="w-3 h-3 animate-pulse bg-green-600 rounded-full " />
          FAQs
        </motion.div>
        <motion.h1
          transition={{ delay: 0.1 }}
          {...FadeLeft}
          {...ViewPort}
          className="text-4xl font-semibold md:text-5xl"
        >
          Frequently Asked <span className="text-green-600"> Questions </span>
        </motion.h1>
        <motion.p
          transition={{ delay: 0.2 }}
          {...FadeLeft}
          {...ViewPort}
          className="text-neutral-500 mt-3"
        >
          Providing the best solution, get answers of your common questions.
        </motion.p>
      </div>
      <motion.div
        {...FadeUp}
        {...Animate}
        className="border-t-2 border-l-2 border-green-600 rounded-4xl  h-fit  max-w-5xl mx-auto flex flex-col gap-6 py-6 px-4 md:px-10"
      >
        {FAQData.map((item, i) => (
          <FAQCard key={i} A={item.A} Q={item.Q} />
        ))}
      </motion.div>
    </section>
  );
};

interface props {
  Q: string;
  A: string;
}
export const FAQCard: React.FC<props> = ({ A, Q }) => {
  const [showA, setShowA] = useState<boolean>(false);
  return (
    <motion.div {...FadeLeft} {...ViewPort} className="w-full overflow-hidden ">
      <h1
        onClick={() => setShowA((prev) => !prev)}
        className="flex justify-between items-center cursor-pointer text-xl font-bold select-none py-5"
      >
        {Q}
        <Plus />
      </h1>
      <AnimatePresence>
        {showA && (
          <motion.p
            {...FadeLeft}
            {...Animate}
            className="text-lg bg-green-600 rounded-2xl p-2  "
          >
            {A}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
