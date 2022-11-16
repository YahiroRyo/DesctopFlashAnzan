import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type InnerProps = {} & ComponentProps<"div">;

const Inner = ({ children }: InnerProps) => {
  return <div className={styles.inner}>{children}</div>;
};

export default Inner;
