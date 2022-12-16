import React, { ChangeEvent, ComponentProps } from "react";
import { ValidRegister } from "../../../types/ValidRegister";
import Checkbox from "../../atoms/Checkbox";
import Label from "../../atoms/Label";
import styles from "./index.module.scss";

type CheckboxGroupProps = {
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  validRegister?: ValidRegister;
  value?: any;
  label: string;
};

const CheckboxGroup = ({
  className,
  validRegister,
  label,
  onChange,
  value,
}: CheckboxGroupProps) => {
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <Label htmlFor={label}>{label}</Label>
      <Checkbox
        validRegister={validRegister}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CheckboxGroup;
