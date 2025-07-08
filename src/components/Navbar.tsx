"use client";
import React from "react";
import { motion } from "framer-motion";
import { navData } from "@/data/Navbar";
import { GitPullRequestClosed } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";
const Navbar = () => {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <section className="select-none fixed top-0 left-2/4 -translate-x-2/4 w-full max-w-6xl flex justify-between items-center p-3">
      <Link
        href="/"
        className="p-2 rounded-2xl  flex justify-center items-center gap-2 text-2xl  font-semibold"
      >
        <GitPullRequestClosed  size={35} className="text-green-500"/>  
        EYCC    
      </Link>

      <div className="hidden md:flex justify-center items-center gap-5 bg-neutral-900 rounded-2xl p-4 ">     
        {navData.map((item, i) => (
          <Link key={i} href={item.href}>
            <motion.div>{item.title}</motion.div>
          </Link> 
        ))}
      </div>

      {isLoaded ? (
        isSignedIn ? ( 
          <UserButton  />
        ) : (   
          <SignInButton mode="modal">
            <motion.button 
           
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className=" hover:bg-transparent border font-medium border-green-500 text-black hover:text-green-500 bg-green-500 p-2 rounded-2xl  cursor-pointer"
            >
              Register   
            </motion.button>
          </SignInButton>
        )
      ) : (
        <button className="hover:bg-transparent border font-medium border-green-500 text-black hover:text-green-500 bg-green-500 p-2 rounded-2xl  cursor-pointer">
          Loading
        </button>
      )}
    </section>
  );
};





export default Navbar;
