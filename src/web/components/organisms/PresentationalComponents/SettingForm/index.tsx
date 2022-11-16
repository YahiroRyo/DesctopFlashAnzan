import React from "react";
import SuccessButton from "../../../atoms/SuccessButton";
import InputGroup from "../../../molecules/InputGroup";
import style from "./index.module.scss";

type SettingFormProps = {
  className?: string;
  onSubmit: () => void;
  papersNum: number;
  setPapersNum: (value: number) => void;
  digitsNum: number;
  setDigitsNum: (value: number) => void;
  secondsNum: number;
  setSecondsNum: (value: number) => void;
};

const SettingForm = ({
  className,
  onSubmit,
  papersNum,
  setPapersNum,
  digitsNum,
  setDigitsNum,
  secondsNum,
  setSecondsNum,
}: SettingFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${style.form} ${className}`}
      action="POST"
    >
      <InputGroup
        className={style.inputGroup}
        value={papersNum}
        onChange={(e) => {
          setPapersNum(parseInt(e.target.value));
        }}
        placeholder="口数を入力"
        label="口数"
        type="number"
      />
      <InputGroup
        className={style.inputGroup}
        value={digitsNum}
        onChange={(e) => {
          setDigitsNum(parseInt(e.target.value));
        }}
        placeholder="桁数を入力"
        label="桁数"
        type="number"
      />
      <InputGroup
        className={style.inputGroup}
        value={secondsNum}
        onChange={(e) => {
          setSecondsNum(parseInt(e.target.value));
        }}
        placeholder="1枚あたりの秒数を入力"
        label="1枚あたりの秒数"
        type="number"
      />
      <SuccessButton className={style.submit}>
        フラッシュ暗算を始める
      </SuccessButton>
    </form>
  );
};

export default SettingForm;
