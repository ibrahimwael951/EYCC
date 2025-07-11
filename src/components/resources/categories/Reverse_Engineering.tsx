import { RotateCcw } from "lucide-react";
import React from "react";

const Reverse_Engineering = () => {
  return (
    <section id="Reverse Engineering" className="py-20">
      <h1 className="text-3xl font-semibold mb-5 flex items-center gap-2">
        <RotateCcw size={50} className="text-green-600" /> Reverse Engineering
      </h1>
      <p className="text-xl mb-5">
        A structured and beginner-friendly course covering the fundamentals of
        reverse engineering:
        <a
          className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
          href="https://github.com/0xZ0F/Z0FCourse_ReverseEngineering"
        >
          Z0FCourse Reverse Engineering
        </a>
      </p>
      <p className="text-xl mb-5">
        A practical web-based guide to reverse engineering concepts, tools, and
        workflows:{" "}
        <a
          className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
          href="0xinfection.github.io/reversing/"
        >
          0xinfection Reversing Guide
        </a>
      </p>
    </section>
  );
};

export default Reverse_Engineering;
