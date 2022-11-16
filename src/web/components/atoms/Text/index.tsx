import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type TextProps = {} & ComponentProps<"p">;

const Text = ({ children, className }: TextProps) => {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
};

export default Text;
