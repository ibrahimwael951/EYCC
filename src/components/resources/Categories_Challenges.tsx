import React from "react";
import { Categories_Challenges as categories } from "@/data/Categories_Challenges";
import CategoryCard from "../ui/categoryCard";
const Categories_Challenges = () => {
  return (
    <section className="min-h-screen ">
      <h1 className="text-4xl font-semibold mb-2">
        {" "}
        Categories of <span className="text-green-600"> Challenges </span>{" "}
      </h1>
      <h3 className="text-2xl  text-neutral-400 ml-5">
        In this section, you’ll get a quick tour of the main challenge
        categories you’ll encounter in the competition: Web Exploitation,
        Cryptography, OSINT, Forensics, and Reverse Engineering.
      </h3>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 w-fit mx-auto gap-10">
        {categories.map((item, i) => (
          <CategoryCard
            key={i}
            href={`/Resources/#${item.title}`}
            WhatULearn={item.WhatULearn}
            desc={item.desc}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories_Challenges;
