import React from "react";
import Text from "../../../atoms/Text";
import styles from "./index.module.scss";

type MainCountDownProps = {
  displayNumber: number | string;
};

const MainCountDown = ({ displayNumber }: MainCountDownProps) => {
  return (
    <div className={styles.main}>
      <Text className={styles.number}>{displayNumber}</Text>
    </div>
  );
};

export default MainCountDown;
