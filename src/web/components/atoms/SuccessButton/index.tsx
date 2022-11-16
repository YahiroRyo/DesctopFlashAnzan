import React, { ComponentProps } from "react";
import Button from "../Button";
import styles from "./index.module.scss";

type ButtonProps = {} & ComponentProps<"button">;

const SuccessButton = ({ onClick, children, className }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`${className} ${styles.successButton}`}
    >
      {children}
    </Button>
  );
};

export default SuccessButton;
