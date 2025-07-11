"use client";
import React from "react";
import { motion } from "framer-motion";
import { Categories_Challenges } from "@/data/Categories_Challenges";
import { FadeLeft, opacityWithBlur, ViewPort } from "@/animation/Animations";

export default function Page() {
  return (
    <main className=" min-h-screen px-5 lg:px-10 2xl:px-20 mt-20 overflow-hidden">
      <motion.h1
        {...FadeLeft}
        {...ViewPort}
        className="text-4xl md:text-5xl font-semibold"
      >
        {" "}
        Challenges{" "}
      </motion.h1>
      <div className="w-full max-w-7xl mx-auto my-10 overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto my-10 border-collapse  overflow-x-scroll">
          <thead className="overflow-scroll">
            <motion.tr {...opacityWithBlur}>
              <th className="text-xl font-semibold text-green-600 min-w-[250px] px-4 py-2 text-left">
                Challenge
              </th>
              <th className="text-xl font-semibold text-green-600 min-w-[250px] px-4 py-2 text-left">
                What you Will Encounter
              </th>
              <th className="text-xl font-semibold text-green-600 min-w-[250px] px-4 py-2 text-left">
                Online Round
              </th>
            </motion.tr>
          </thead>
          <tbody>
            {Categories_Challenges.map((item, i) => (
              <motion.tr key={i} {...opacityWithBlur}>
                <td className="min-w-[250px] px-4 py-4">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                </td>
                <td className="min-w-[250px] px-4 py-4">
                  <p>{item.What_you_will_encounter}</p>
                </td>
                <td className="min-w-[250px] px-2 py-4">
                  <p className="flex">
                    {" "}
                    <span className="text-green-600 mx-2">
                      {" "}
                      {item.Online_Round}{" "}
                    </span>{" "}
                    Challenges
                  </p>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
