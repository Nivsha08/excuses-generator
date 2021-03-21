import React from "react";
import styles from "./excuses-generator.module.scss";

import { Excuse } from "../excuse/excuse";

export const ExcusesGenerator = () => {
  return (
    <div className={styles.wrapper}>
      <h1>מחולל התירוצים של רועי לבס</h1>
      <div className={styles.divider} />
      <Excuse />
    </div>
  );
};
