"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./CSS/Hero.module.css";
import { opacity } from "@/animation/Animations";

const Loader3 = () => {
  return (
    <motion.div {...opacity}  className={styles.container3}>
        <div className={styles.top3}>
          <div className={styles.square3}>
            <div className={styles.square3}>
              <div className={styles.square3}>
                <div className={styles.square3}>
                  <div className={styles.square3}>
                    <div className={styles.square3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom3}>
          <div className={styles.square3}>
            <div className={styles.square3}>
              <div className={styles.square3}>
                <div className={styles.square3}>
                  <div className={styles.square3}>
                    <div className={styles.square3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left3}>
          <div className={styles.square3}>
            <div className={styles.square3}>
              <div className={styles.square3}>
                <div className={styles.square3}>
                  <div className={styles.square3}>
                    <div className={styles.square3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right3}>
          <div className={styles.square3}>
            <div className={styles.square3}>
              <div className={styles.square3}>
                <div className={styles.square3}>
                  <div className={styles.square3}>
                    <div className={styles.square3}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default Loader3;
