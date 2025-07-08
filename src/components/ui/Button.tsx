"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeUp, Rotate_Scale_Tap, ViewPort } from "@/animation/Animations";

interface Props {
  text: string;
  rotate?: boolean;
  transBg?: boolean;
  className?: string;
  animate?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  animate = true,
  className = "",
  rotate = true,
  transBg = true,
}) => {
  return (
    <motion.button
      {...(animate && FadeUp)}
      {...(animate && ViewPort)}
      {...(rotate && Rotate_Scale_Tap)}
      className={` 
                ${className}
                rounded-2xl p-3 duration-150 border border-green-600
                ${
                  transBg
                    ? "bg-transparent hover:bg-green-600 hover:text-white text-green-600"
                    : "bg-green-600 hover:bg-transparent hover:text-green-600 text-white"
                }
            `}
    >
      {text}
    </motion.button>
  );
};

export default Button;
