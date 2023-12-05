import React from "react";
import styles from "../styles/origin.module.css";

function CssModule() {
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.r}`}></div>
        <div className={[styles.box, styles.o].join(" ")}></div>
        <div className={`${styles.box} ${styles.y}`}></div>
        <div className={[styles.box, styles.g].join(" ")}></div>
        <div className={`${styles.box} ${styles.b}`}></div>
        <div className={[styles.box, styles.p].join(" ")}></div>
      </div>
    </>
  );
}

export default CssModule;
