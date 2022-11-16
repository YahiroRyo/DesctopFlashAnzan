import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type InputProps = {} & ComponentProps<"input">;

const Input = ({
  onChange,
  value,
  placeholder,
  className,
  type = "text",
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`${styles.input} ${className}`}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
