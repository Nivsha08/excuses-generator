import React, { useState } from "react";
import styles from "./excuses-generator.module.scss";

import { Excuse } from "../excuse/excuse";
import { excusesList } from "../../excuses";

export const ExcusesGenerator = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getNextExcuse = () => {
    setCurrentIndex(
      currentIndex === excusesList.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>מחולל התירוצים של רועי לבס</h1>
      <div className={styles.divider} />
      <Excuse excuse={excusesList[currentIndex]} />
      <button className={styles.button} onClick={getNextExcuse}>
        רוצה לשבת היום?
      </button>
    </div>
  );
};
