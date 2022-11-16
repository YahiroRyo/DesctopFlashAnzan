import React, { ChangeEvent, ComponentProps } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import styles from "./index.module.scss";

type InputGroupProps = {
  className?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: any;
  label: string;
};

const InputGroup = ({
  className,
  placeholder,
  label,
  onChange,
  value,
  type,
}: InputGroupProps) => {
  return (
    <div className={className}>
      <Label htmlFor={label}>{label}</Label>
      <br />
      <Input
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
