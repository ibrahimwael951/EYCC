"use client";
import React from "react";
import styles from "./CSS/Loader5.module.css";
import { motion } from "framer-motion";
import { opacityWithBlur } from "@/animation/Animations";

const Loader5 = () => {
  return (
    <motion.div {...opacityWithBlur} className={styles.loader5}>
      <div className={styles.react_star5}>
        <div className={styles.nucleus5}></div>
        <div className={`${styles.electron15} ${styles.electron5}`}></div>
        <div className={`${styles.electron5} ${styles.electron25}`}></div>
        <div className={`${styles.electron5} ${styles.electron35}`}></div>
      </div>
    </motion.div>
  );
};

export default Loader5;
