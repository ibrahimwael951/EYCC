"use client";
import { motion } from "framer-motion";
import styles from "./CSS/Hero.module.css";
import { opacity } from "@/animation/Animations";
const Loader1 = () => {
  return (
    <motion.div {...opacity} className={styles.loader}>
      <div className={styles.eye} />
    </motion.div>
  );
};

export default Loader1;
