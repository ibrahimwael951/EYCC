import React from "react";
import Web_Exploitation from "./categories/Web_Exploitation";
import OSINT from "./categories/OSINT";
import Cryptography from "./categories/Cryptography";
import Forensics from "./categories/Forensics";
import Reverse_Engineering from "./categories/Reverse_Engineering";

const categories_Content = () => {
  return (
    <section className="min-h-screen mt-20">
      <h1 className="text-4xl md:text-5xl font-semibold mb-10">
        Categories <span className="text-green-600"> Details </span>
      </h1>
      <section className="space-y-20">
        <Web_Exploitation />
        <hr className="text-green-600" />
        <Cryptography />
        <hr className="text-green-600" />
        <OSINT />
        <hr className="text-green-600" />
        <Forensics />
        <hr className="text-green-600" />
        <Reverse_Engineering />
      </section>
    </section>
  );
};

export default categories_Content;
