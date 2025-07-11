import { GlobeLock } from "lucide-react";
import React from "react";

const Cryptography = () => {
  return (
    <section id="Cryptography">
      <h1 className="text-3xl font-semibold mb-5 flex items-center gap-2">
        {" "}
        <GlobeLock size={50} className="text-green-600" /> Cryptography
      </h1>
      <div>
        <p className="mb-5 text-xl">
          Some TryHackme rooms that contains explanation for many topics with
          Practical Learning:{" "}
        </p>
        <ul className="space-y-5 list-disc list-inside">
          <li>
            <a
              className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
              href="https://tryhackme.com/room/cryptographyfordummies"
            >
              cryptography for dummies
            </a>
          </li>
          <li>
            <a
              className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
              href="https://tryhackme.com/room/cryptographybasics"
            >
              Cryptography basics
            </a>
          </li>
          <li>
            <a
              className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
              href="https://tryhackme.com/room/cyberchefbasics"
            >
              encryption crypto 101
            </a>
          </li>
        </ul>
        <p className="mb-5 text-xl">
          Collection of crypto CTF concepts and tools:
          <a
            className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
            href="https://github.com/ashutosh1206/Crypton"
          >
            Crypton
          </a>
        </p>
      </div>
      <div>
        <h1>Main tools for Cryptography:</h1>
        <p className="mb-5 text-xl">
          Cyberchef: Visual tool for decoding, encoding, hashing, etc:{" "}
          <a
            className="hover:border-b border-green-600 text-green-600 font-semibold text-2xl"
            href="https://gchq.github.io/CyberChef"
          >
            Link
          </a>
        </p>
      </div>
    </section>
  );
};

export default Cryptography;
