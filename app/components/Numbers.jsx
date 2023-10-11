import React from "react";
import styles from "./Numbers.module.css";

const Numbers = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card1}>
        <div className={styles.in}>
          <p className={styles.b}>Sign Ups</p>
          <p className={styles.p}>230</p>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.in}>
          <p className={styles.b}>Logins</p>
          <p className={styles.p}>122</p>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.in}>
          <p className={styles.b}>Upgrades</p>

          <p className={styles.p}>20</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
