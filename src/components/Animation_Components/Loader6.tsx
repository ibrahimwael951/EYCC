"use client";
import React from "react";
import styles from "./CSS/Hero.module.css";
import { motion } from "framer-motion";
import { opacityWithBlur } from "@/animation/Animations";
const Loader6 = () => {
  return (
    <motion.div {...opacityWithBlur} className={styles.loader6}>
      <span></span>
    </motion.div>
  );
};

export default Loader6;
