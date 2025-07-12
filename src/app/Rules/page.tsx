"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, ViewPort } from "@/animation/Animations";

export default function Page() {
  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 mt-20 space-y-20">
      <section className=" ">
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          className="flex items-center gap-1 bg-neutral-900 w-fit px-3 py-1 rounded-2xl "
        >
          <div className="w-3 h-3 animate-pulse bg-green-600 rounded-full " />
          Format & Rules
        </motion.div>
        <motion.h1
          {...FadeLeft}
          {...ViewPort}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Competition Format
        </motion.h1>
        <motion.p {...FadeLeft} {...ViewPort} className="text-2xl mb-10">
          The Egyptian Youth Cybersecurity Challenge (EYCC) will take place in
          two main rounds
        </motion.p>
        <motion.div {...FadeLeft} {...ViewPort} className="my-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="text-green-600"> Round 1 </span> – Online
            Qualification Round
          </h1>
          <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
            <li>
              A Capture The Flag (CTF) round where participants will solve 12
              cybersecurity challenges across different categories.
            </li>
            <li>
              The round will run for 48 continuous hours, during which
              participants can solve challenges at their own pace.
            </li>
            <li>Each challenge has a point value based on its difficulty.</li>
            <li>Points are awarded only when the correct flag is submitted.</li>
            <li>The leaderboard updates in real-time as teams submit flags.</li>
            <li>
              In case of a tie in total points, the team with the earlier
              submission time ranks higher.
            </li>
          </ul>
        </motion.div>
        <motion.div {...FadeLeft} {...ViewPort} className="my-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="text-green-600"> Round 2 </span> – On-site Final
            Round
          </h1>
          <p className="md:ml-4 text-xl font-bold text-neutral-400">
            Top-performing teams from the online qualification round will be
            invited to compete in the on-site final round. More details about
            the date, location, and format of this round will be announced
            soon.
          </p>
        </motion.div>
      </section>
      <section className="space-y-20">
        <motion.div {...FadeLeft} {...ViewPort} className="my-20">
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
        </motion.div>
        <motion.div {...FadeLeft} {...ViewPort} className="my-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Competition <span className="text-green-600"> Rules </span>{" "}
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
        </motion.div>
      </section>
    </section>
  );
}
