import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type CloseButtonProps = {} & ComponentProps<"button">;

const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      ×
    </button>
  );
};

export default CloseButton;
