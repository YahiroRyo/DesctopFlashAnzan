import React, { ComponentProps } from "react";
import styles from "./index.module.scss";

type TextProps = {} & ComponentProps<"p">;

const Text = ({ children }: TextProps) => {
  return <p></p>;
};

export default Text;
