import React from "react";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { AlertKind } from "../../../../types/AlertKind";
import { FlashAnzanParams } from "../../../../types/FlashAnzanParams";
import SuccessButton from "../../../atoms/SuccessButton";
import Alert from "../../../molecules/Alert";
import CheckboxGroup from "../../../molecules/CheckboxGroup";
import InputGroup from "../../../molecules/InputGroup";
import styles from "./index.module.scss";

type SettingFormProps = {
  className?: string;
  errors?: Partial<FieldErrorsImpl<FlashAnzanParams>>;
  onSubmit: (data: FlashAnzanParams) => void;
  register: UseFormRegister<FlashAnzanParams>;
  handleSubmit: UseFormHandleSubmit<FlashAnzanParams>;
};

const SettingForm = ({
  className,
  onSubmit,
  register,
  handleSubmit,
  errors,
}: SettingFormProps) => {
  return (
    <>
      {errors?.digitNum || errors?.papersNum || errors?.secondsNum ? (
        <Alert kind={AlertKind.ERROR} className={styles.alert}>
          <ul>
            {errors.papersNum && <li>{errors.papersNum.message}</li>}
            {errors.digitNum && <li>{errors.digitNum.message}</li>}
            {errors.secondsNum && <li>{errors.secondsNum.message}</li>}
          </ul>
        </Alert>
      ) : (
        <></>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.form} ${className}`}
        action="POST"
      >
        <InputGroup
          className={styles.inputGroup}
          validRegister={{
            name: "papersNum",
            register: register,
            valid: {
              required: "口数を入力してください",
              min: { value: 1, message: "口数は1以上の値を入力してください" },
            },
          }}
          placeholder="口数を入力"
          label="口数"
          type="number"
        />
        <InputGroup
          className={styles.inputGroup}
          validRegister={{
            name: "digitNum",
            register: register,
            valid: {
              required: "桁数を入力してください",
              min: { value: 1, message: "桁数は1以上の値を入力してください" },
            },
          }}
          placeholder="桁数を入力"
          label="桁数"
          type="number"
        />
        <InputGroup
          className={styles.inputGroup}
          validRegister={{
            name: "secondsNum",
            register: register,
            valid: {
              required: "1枚あたりの秒数を入力してください",
              min: {
                value: 0.1,
                message: "1枚あたりの秒数は0.1以上の値を入力してください",
              },
            },
          }}
          placeholder="1枚あたりの秒数を入力"
          label="1枚あたりの秒数"
        />
        <CheckboxGroup
          className={styles.inputGroup}
          label="マイナスを有効"
          validRegister={{
            name: "isEnableMinus",
            register: register,
            valid: {},
          }}
        />
        <SuccessButton className={styles.submit}>
          フラッシュ暗算を始める
        </SuccessButton>
      </form>
    </>
  );
};

export default SettingForm;
