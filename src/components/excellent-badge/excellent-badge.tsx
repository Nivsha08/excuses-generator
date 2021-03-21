import React from "react";
import styles from "./excellent-badge.module.scss";

import { MedalIcon } from "../medal-icon/medal-icon";

export const ExcellentBadge = () => {
  return (
    <div className={styles.excellentWrapper}>
      <MedalIcon />
      <span>אות התירוץ המצוין</span>
    </div>
  );
};
