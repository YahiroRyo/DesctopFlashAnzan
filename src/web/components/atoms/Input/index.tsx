import React, { ComponentProps } from "react";
import { ValidRegister } from "../../../types/ValidRegister";
import styles from "./index.module.scss";

type InputProps = {
  validRegister?: ValidRegister;
} & ComponentProps<"input">;

const Input = ({
  onChange,
  value,
  placeholder,
  className,
  validRegister,
  type = "text",
}: InputProps) => {
  return (
    <input
      {...validRegister?.register(validRegister.name, validRegister.valid)}
      onChange={onChange}
      className={`${styles.input} ${className}`}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
