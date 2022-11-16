import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type InnerProps = {} & ComponentProps<"div">;

const Inner = ({ className, children }: InnerProps) => {
  return <div className={`${styles.inner} ${className}`}>{children}</div>;
};

export default Inner;
