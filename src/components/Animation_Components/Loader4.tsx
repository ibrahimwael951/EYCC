"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./CSS/Hero.module.css";
import {  opacityWithBlur } from "@/animation/Animations";

const Loader4 = () => {
  return (
    <motion.div {...opacityWithBlur} className={styles.loader4}>
      <div className={styles.nucleus4}></div>
      <div className={styles.ring4}></div>
      <div className={styles.ring4}></div>
      <div className={styles.ring4}></div>
      <div className={styles.ring4}></div>
      <div className={styles.ring4}></div>
      <div className={styles.ring4}></div>
    </motion.div>
  );
};

export default Loader4;
