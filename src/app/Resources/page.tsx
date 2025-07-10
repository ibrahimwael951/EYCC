import Content from "@/components/resources/Content";
import Hero from "@/components/resources/Hero";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen px-5 lg:px-10 2xl:px-20 ">
      <Hero />
      <Content />
    </main>
  );
}
