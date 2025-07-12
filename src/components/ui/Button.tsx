"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeUp, Rotate_Scale_Tap } from "@/animation/Animations";
import Link from "next/link";

interface Props {
  text: string;
  textSize?: boolean;
  rotate?: boolean;
  transBg?: boolean;
  className?: string;
  animate?: boolean;
  delay?: number;
  href?: string;
}

const Button: React.FC<Props> = ({
  text,
  animate = true,
  className = "",
  rotate = true,
  transBg = true,
  delay = 0,
  href,
  textSize =false,
}) => {
  if (href)
    return (
      <Link href={href} className="cursor-pointer">
        <Button
          text={text}
          animate={animate}
          className={className}
          delay={delay}
          rotate={rotate}
          transBg={transBg}
          textSize={textSize}
        />
      </Link>
    );
  return (
    <motion.button
      {...(rotate && Rotate_Scale_Tap)}
      {...(animate && FadeUp)}
      {...(animate && {
        viewport: { once: true, amount: 0.5 },
        whileInView: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          transition: { delay: delay },
        },
      })}
      
      className={` 
                ${className}
                 rounded-2xl p-3 duration-150 border border-green-600 cursor-pointer
                ${
                  transBg
                    ? "bg-transparent hover:bg-green-600 hover:text-white text-green-600"
                    : "bg-green-600 hover:bg-transparent hover:text-green-600 text-white"
                }
                ${textSize && "md:text-xl lg:text-2xl"}
            `}
    >
      {text}
    </motion.button>
  );
};

export default Button;
