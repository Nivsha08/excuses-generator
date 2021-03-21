import React from "react";
import styles from "./excuse.module.scss";
import { ClassicBadge } from "../classis-badge/classic-badge";
import { ExcellentBadge } from "../excellent-badge/excellent-badge";
import { ExcuseType } from "../../excuses";

type ExcuseProps = {
  excuse: ExcuseType;
};

export const Excuse = ({ excuse }: ExcuseProps) => {
  const { text, isClassic, isExcellent } = excuse;

  return (
    <div className={styles.excuseWrapper}>
      <div className={styles.text}>
        <div className={styles.excuse}>&rdquo; {text} &ldquo;</div>
        <div className={styles.credit}>(רועי לבס)</div>
      </div>
      <div className={styles.badges}>
        {isClassic && <ClassicBadge />}
        {isExcellent && <ExcellentBadge />}
      </div>
    </div>
  );
};
