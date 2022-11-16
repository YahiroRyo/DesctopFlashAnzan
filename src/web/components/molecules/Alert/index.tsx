import React, { ComponentProps } from "react";
import { AlertKind } from "../../../types/AlertKind";
import styles from "./index.module.scss";

type AlertProps = {
  kind: AlertKind;
} & ComponentProps<"div">;

const Alert = ({ children, className, kind }: AlertProps) => {
  return (
    <div className={`${styles.alert} ${kind === AlertKind.ERROR ? styles.error : null} ${className}`}>{children}</div>
  );
};

export default Alert;
