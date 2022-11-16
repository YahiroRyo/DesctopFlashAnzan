import React, { ChangeEvent, ComponentProps } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ValidRegister } from "../../../types/ValidRegister";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import styles from "./index.module.scss";

type InputGroupProps = {
  className?: string;
  placeholder?: string;
  type?: string;
  validRegister?: ValidRegister;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  label: string;
};

const InputGroup = ({
  className,
  placeholder,
  label,
  validRegister,
  onChange,
  value,
  type,
}: InputGroupProps) => {
  return (
    <div className={className}>
      <Label htmlFor={label}>{label}</Label>
      <br />
      <Input
        validRegister={validRegister}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={label}
        className={styles.input}
        type={type}
      />
    </div>
  );
};

export default InputGroup;
