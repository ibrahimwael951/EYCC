"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./CSS/Hero.module.css";
import { opacityWithBlur } from "@/animation/Animations";
const Loader2 = () => {
  return (
    <motion.div {...opacityWithBlur} className="scale-200 overflow-hidden w-50">
      <div className={styles.loader2}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
        <div className={styles.bar4}></div>
        <div className={styles.bar5}></div>
        <div className={styles.bar6}></div>
        <div className={styles.bar7}></div>
        <div className={styles.bar8}></div>
        <div className={styles.bar9}></div>
      </div>
    </motion.div>
  );
};

export default Loader2;
