"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, ViewPort } from "@/animation/Animations";

export default function Page() {
  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 mt-20">
      <section>
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          className="flex items-center gap-1 bg-neutral-900 w-fit px-3 py-1 rounded-2xl "
        >
          <div className="w-3 h-3 animate-pulse bg-green-600 rounded-full " />
          Rules
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Competition Format
        </h1>
        <p className="text-2xl mb-10">
          The Egyptian Youth Cybersecurity Challenge (EYCC) will take place in
          two main rounds:”
        </p>
        <div className="my-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="text-green-600"> Round 1 </span> – Online
            Qualification Round
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>Date: August x, 2025</li>
            <li>Duration: Continuous 48 hours</li>
            <li>
              Goal: Solve as many challenges as you can and submit your Flags to
              earn points and climb the leaderboard.
            </li>
            <li>
              Challenges: The online round will consist of 12 challenges: 4 in
              Web Exploitation, 3 in OSINT, 3 in Cryptography, 2 in Forensics,
              and 1 in Reverse Engineering.
            </li>
            <li>Top teams will qualify for the next round.</li>
          </ul>
        </div>
        <div className="my-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="text-green-600"> Round 2 </span> – On-site Final
            Round
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>
              Held physically for qualified teams at a selected location in
              Egypt (Will be detected soon).
            </li>
            <li>More advanced challenges</li>
            <li>Winning teams will be announced and awarded.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="my-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Team <span className="text-green-600"> Rules </span>{" "}
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>Teams must consist of 2 to 5 members.</li>
            <li>
              Solo participants will be grouped into random teams, but they can
              confirm that or reject and participate individually.
            </li>
            <li>
              All team members must register individually using the registration
              link in the website.
            </li>
            <li>
              Each one will receive a team confirmation email to finalize your
              team setup.
            </li>
          </ul>
        </div>
        <div className="my-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Scoring <span className="text-green-600"> System </span>{" "}
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>Each challenge has a point value based on difficulty</li>
            <li>Points are awarded only when the correct flag is submitted</li>
            <li>The leaderboard updates in real-time.</li>
            <li>
              In case of ties, the winning team will depend on the time taken to
              submit the flags.
            </li>
          </ul>
        </div>
        <div className="my-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Some <span className="text-green-600"> Important</span> Rules
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>
              Flag Sharing between teams will lead to disqualification of both
              teams.
            </li>
            <li>Bruteforcing the flags is Prohibited.</li>
            <li>
              Attacking or sabotaging the platform, other teams, or
              infrastructure will also lead to disqualification.
            </li>
            <li>
              Use of search engines, documentation, public tools, and research
              is allowed during the competition.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
