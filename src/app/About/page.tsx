"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp, ViewPort } from "@/animation/Animations";
import Loader2 from "@/components/Animation_Components/Loader2";
import Loader6 from "@/components/Animation_Components/Loader6";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const Highlight = [
    {
      title: "counterspell",
      image: "/counterspell-cairo.png",
      Link: "https://stemegypt.hackclub.com/Hackathons/counterspell",
    },
    {
      title: "scrapyard",
      image: "/scrapyard.png",
      Link: "https://stemegypt.hackclub.com/Hackathons/scrapyard",
    },
  ];
  return (
    <main className="px-5 lg:px-10 2xl:px-20  overflow-hidden">
      <section className="min-h-screen max-w-7xl mx-auto flex flex-col gap-10 justify-center md:flex-row md:justify-between md:items-center mt-20 md:mt-0 ">
        <div className="md:w-2/4">
          <motion.div
            {...FadeLeft}
            {...ViewPort}
            className="flex items-center gap-1 bg-neutral-900 w-fit px-3 py-1 rounded-2xl my-4  "
          >
            <div className="w-3 h-3 animate-pulse bg-green-600 rounded-full " />
            About
          </motion.div>
          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            transition={{ delay: 0.1 }}
            className="text-5xl font-semibold flex gap-2 items-center mb-3"
          >
            About <span className="text-green-600"> EYCC </span>
          </motion.h1>
          <motion.p
            {...FadeLeft}
            {...ViewPort}
            transition={{ delay: 0.2 }}
            className="text-xl lg:ml-8"
          >
            The Egyptian Youth Cybersecurity Challenge (EYCC) is the first-ever
            cybersecurity competition designed specifically for high school
            students in Egypt. EYCC brings together young cybersecurity
            enthusiasts from across the country to compete, learn, and grow as a
            community. Through a series of well-crafted challenges, the
            competition tests participants foundational skills in cybersecurity
            in a fun and hands-on way. Whether you are new to the field or
            already passionate about hacking, EYCC is your gateway into the
            world of ethical hacking and digital problem-solving.
          </motion.p>
        </div>
        <div className="md:w-2/5 h-80 flex items-center justify-center overflow-hidden">
          <motion.div
            {...FadeRight}
            {...ViewPort}
            transition={{ delay: 0.3 }}
            className="scale-200"
          >
            <Loader6 />
          </motion.div>
        </div>
      </section>

      <section className="  max-w-7xl mx-auto flex flex-col gap-10 justify-center md:flex-row-reverse md:justify-between md:items-center mt-20">
        <div className="md:w-2/4">
          <motion.h1
            {...FadeRight}
            {...ViewPort}
            className="text-5xl font-semibold flex gap-2 items-center mb-3"
          >
            About <span className="text-green-600"> CTF </span>
          </motion.h1>
          <motion.p {...FadeRight} {...ViewPort} className="text-xl lg:ml-8 ">
            EYCC follows a Capture The Flag (CTF) format — a popular style of
            cybersecurity competition where participants solve a variety of
            challenges to find “flags,” which are hidden bits of information
            that prove you have completed a task. Each challenge focuses on a
            specific area of cybersecurity, like cryptography, web exploitation,
            reverse engineering, or forensics. The more flags you capture, the
            higher you score.
            <br />
            <br />
            If you are new to this style, do not worry — we have got you
            covered. You can check out the Challenges page to explore the topics
            and challenge categories, and head over to the Resources page for
            beginner-friendly material to help you prepare.
          </motion.p>
        </div>
        <div className="md:w-2/5 h-80 flex items-center justify-center overflow-hidden">
          <div className="scale-75">
            <Loader2 />
          </div>
        </div>
      </section>

      <section className="min-h-screen mt-32">
        <div className="flex flex-col justify-center items-center gap-2 text-center max-w-6xl m-auto">
          <motion.h1
            {...FadeUp}
            {...ViewPort}
            className="text-5xl font-semibold mb-3"
          >
            About <span className="text-green-600"> US </span>
          </motion.h1>
          <motion.p {...FadeUp} {...ViewPort} className="text-2xl">
            EYCC is organized by
            <a
              href="https://stemegypt.hackclub.com/"
              className="text-green-600 hover:border-b border-green-600 duration-100"
            >
              {" "}
              STEM Egypt Hack Club{" "}
            </a>
            , a student-led coding club that is part of Hack Club, a
            <span className="text-green-600"> global nonprofit </span> that
            empowers student-led coding communities. We are committed to
            building a future where every student has access to the tools and
            community they need to build with technology.
          </motion.p>
        </div>
        <div className="mt-20">
          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            className="text-3xl font-bold  "
          >
            We have previously{" "}
            <span className="text-green-600"> organized </span> several
            student-led tech <span className="text-green-600"> events </span> —
            here are some of our highlights:
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
            {Highlight.map((item, i) => (
              <Link href={item.Link} key={i}>
                <motion.div
                  {...FadeUp}
                  {...ViewPort}
                  whileHover={{ y: -5 }}
                  className="bg-neutral-900 rounded-2xl p-5 border border-green-600"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-96 h-48 object-cover"
                  />
                  <h1 className="text-3xl text-center font-semibold mt-3">
                    {item.title}
                  </h1>
                </motion.div>  
              </Link> 
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
