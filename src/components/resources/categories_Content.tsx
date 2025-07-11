import React from "react";
import Web_Exploitation from "./categories/Web_Exploitation";

const categories_Content = () => {
  return (
    <section className="min-h-screen mt-20">
      <h1 className="text-4xl md:text-5xl font-semibold mb-10">
        Categories <span className="text-green-600"> Details </span>
      </h1>
      <section>
        <Web_Exploitation />
      </section>
    </section>
  );
};

export default categories_Content;
