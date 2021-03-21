import React from "react";
import styles from "./excuse.module.scss";
import { ClassicBadge } from "../classis-badge/classic-badge";

export const Excuse = () => {
  return (
    <div className={styles.excuseWrapper}>
      <div className={styles.text}>
        <div className={styles.excuse}>הנה יופי של תירוץ לדוגמא</div>
        <div className={styles.credit}>(רועי לבס)</div>
      </div>
      <ClassicBadge />
    </div>
  );
};
