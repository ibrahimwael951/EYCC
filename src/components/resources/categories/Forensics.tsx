import { ChartColumn } from "lucide-react";
import React from "react";

const Forensics = () => {
  return (
    <section id="Forensics">
      <h1 className="text-3xl font-semibold mb-5 flex items-center gap-2">
        <ChartColumn size={50} className="text-green-600" />
        Forensics
      </h1>
      <div className="p-5 rounded-2xl bg-red-600 text-white text-2xl">
        Note: the competition is focused on “image forensics”
      </div>
      <ul className="list-disc list-inside space-y-5 text-xl mb-5">
        <li>
          A beginner-friendly introduction to digital forensics in CTFs:{" "}
          <a
            className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
            href="https://ctf101.org/forensics/overview/"
          >
            {" "}
            forensics overview
          </a>
        </li>
        <li>
          An open-source, smart digital image forensics tool designed to help
          analyze images:{" "}
          <a
            className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
            href="https://github.com/GuidoBartoli/sherloq/"
          >
            sherloq
          </a>
        </li>
        <li>
          A curated collection of beginner to intermediate forensics challenges
          with sample files. Perfect for hands-on practice:{" "}
          <a
            className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
            href="A curated collection of beginner to intermediate forensics challenges with sample files. Perfect for hands-on practice: "
          >
            digital forensics lab
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Forensics;
