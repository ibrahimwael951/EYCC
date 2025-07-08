"use client";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import styles from "./CSS/Hero.module.css";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="min-h-screen px-5 lg:px-10 2xl:px-20 flex flex-col gap-4 justify-center items-center ">
      <p className="p-2 rounded-2xl bg-neutral-900">
        Welcome to <span className="text-green-600 font-semibold"> EYCC </span>
      </p>
      <h1 className="text-4xl font-semibold text-center ">
        Egyptian Youth Cybersecurity Challenge
      </h1>
      <p className="text-xl text-neutral-400 font-semibold text-center">
        The first Cyber Security Competition for Egyptian Youth    
      </p>
      <div className="flex justify-center items-center gap-10">
        <SignInButton>
          <Button text="sign in" />
        </SignInButton>

        <Link href="/about">
          <Button text="About Us" />
        </Link>
      </div>

      <Background />
    </section>
  );
};

export const Background = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-2/4 opacity-40 scale-200 -z-20">
      <div className={styles.loader}>
        <div className={styles.eye} />
      </div>
    </div>
  );
};

export default Hero;
