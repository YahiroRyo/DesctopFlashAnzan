import React from "react";
import Text from "../../../atoms/Text";
import styles from "./index.module.scss";

type MainProps = {
  displayNumber: number;
};

const Main = ({ displayNumber }: MainProps) => {
  return (
    <div className={styles.main}>
      <Text className={styles.number}>{displayNumber}</Text>
    </div>
  );
};

export default Main;
