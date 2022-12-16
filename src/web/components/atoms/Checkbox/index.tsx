import React, { ComponentProps } from "react";
import { ValidRegister } from "../../../types/ValidRegister";
import styles from "./index.module.scss";

type CheckboxProps = {
  validRegister?: ValidRegister;
} & ComponentProps<"input">;

const Checkbox = ({
  onChange,
  validRegister,
  value,
  className,
}: CheckboxProps) => {
  return (
    <input
      {...validRegister?.register(validRegister.name, validRegister.valid)}
      onChange={onChange}
      className={`${styles.checkbox} ${className}`}
      value={value}
      type="checkbox"
    />
  );
};

export default Checkbox;
