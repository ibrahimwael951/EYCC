"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQData } from "@/data/FAQ";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section className="mt-20 min-h-screen px-5 lg:px-10 2xl:px-20 flex flex-col md:flex-row md:justify-evenly gap-10 z-10">
      <div className="md:w-2/4">
        <div className="flex items-center gap-1 bg-neutral-900 w-fit px-3 py-1 rounded-2xl ">
          <div className="w-3 h-3 animate-pulse bg-green-600 rounded-full " />
          FAQ
        </div>
        <h1 className="text-4xl md:text-5xl">
          Frequently Asked <span className="text-green-600"> Questions </span>
        </h1>
        <p className="text-neutral-500 mt-3">
          Providing the best solution, get answers of your common questions.
        </p>
      </div>
      <div className="border-t-2 border-l-2 border-white rounded-4xl  h-fit md:w-2/4 flex flex-col gap-6 py-6 px-10">
        {FAQData.map((item, i) => (
          <FAQCard key={i} A={item.A} Q={item.Q} />
        ))}
      </div>
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
    <div className="w-full ">
      <h1
        onClick={() => setShowA((prev) => !prev)}
        className="flex justify-between items-center cursor-pointer  py-5"
      >
        {Q}
        <Plus />
      </h1>
      {showA && <motion.p>{A}</motion.p>}
    </div>
  );
};

export default FAQ;
