import React from "react";
import styles from "./classic-badge.module.scss";
import { MedalIcon } from "../medal-icon/medal-icon";

export const ClassicBadge = () => {
  return (
    <div className={styles.classicWrapper}>
      <MedalIcon />
      <span>אות התירוץ הקלאסי</span>
    </div>
  );
};
