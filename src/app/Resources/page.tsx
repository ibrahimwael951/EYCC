import React from "react";
import Hero from "@/components/resources/Hero";
import Categories_Challenges from "@/components/resources/Categories_Challenges";
import Categories_Content from "@/components/resources/categories_Content";

export default function Page() {
  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 ">
      <Hero />
      <Categories_Challenges />
      <Categories_Content />
    </main>
  );
}
