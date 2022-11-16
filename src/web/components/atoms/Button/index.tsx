import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type ButtonProps = {} & ComponentProps<"button">;

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
