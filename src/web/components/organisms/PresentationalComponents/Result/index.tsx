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
  isEnableMinus: boolean;
};

const Result = ({ answer, papersNum, digitNum, secondsNum, isEnableMinus }: ResultProps) => {
  return (
    <div className={styles.result}>
      <Inner>
        <Text className={styles.answerText}>答え</Text>
      </Inner>
      <Text className={styles.answer}>{answer}</Text>
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
