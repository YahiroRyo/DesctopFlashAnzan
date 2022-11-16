import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type LabelProps = {} & ComponentProps<"label">;

const Label = ({ children, htmlFor, className }: LabelProps) => {
  return (
    <label className={`${styles.label} ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
