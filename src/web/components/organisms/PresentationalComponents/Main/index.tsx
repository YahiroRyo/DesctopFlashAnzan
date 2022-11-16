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
      <Text className={styles.kill}>ESC キーで強制終了</Text>
    </div>
  );
};

export default Main;
