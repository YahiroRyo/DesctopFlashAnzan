import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../atoms/Button";
import SuccessButton from "../../../atoms/SuccessButton";
import Text from "../../../atoms/Text";
import Inner from "../../../molecules/Inner";
import styles from "./index.module.scss";

type ResultProps = {
  answer: number;
  papersNum: number;
  digitNum: number;
  secondsNum: number;
  secondsLeftFromGameFinished: number;
  isEnableMinus: boolean;
};

const Result = ({
  answer,
  papersNum,
  digitNum,
  secondsNum,
  secondsLeftFromGameFinished,
  isEnableMinus,
}: ResultProps) => {
  const answerFontSize = 32 - String(answer).length;

  return (
    <div className={styles.result}>
      <Inner>
        <Text className={styles.answerText}>答え</Text>
      </Inner>
      <Text
        className={styles.answer}
        style={{ fontSize: `${answerFontSize}rem` }}
      >
        {answer}
      </Text>
      <Inner className={styles.actions}>
        <Link className={styles.button} to="/">
          <Button>フラッシュ暗算設定に戻る</Button>
        </Link>
        <Link
          className={styles.button}
          to="/flashAnzanCountDown"
          state={{
            papersNum: papersNum,
            digitNum: digitNum,
            secondsNum: secondsNum,
            secondsLeftFromGameFinished: secondsLeftFromGameFinished,
            isEnableMinus: isEnableMinus,
          }}
        >
          <SuccessButton>もう一度行う</SuccessButton>
        </Link>
      </Inner>
    </div>
  );
};

export default Result;
