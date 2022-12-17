import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type TextProps = {} & ComponentProps<"p">;

const Text = ({ children, className, style }: TextProps) => {
  return (
    <p className={`${styles.text} ${className}`} style={style}>
      {children}
    </p>
  );
};

export default Text;
