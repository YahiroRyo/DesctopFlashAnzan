import audioPath from "../../../../assets/displayNumber.mp3";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInterval } from "../../../../modules/interval/useInterval";
import {
  generateRandomPositiveNum,
  generateRandomNum,
} from "../../../../modules/number";
import { FlashAnzanParams } from "../../../../types/FlashAnzanParams";
import Main from "../../PresentationalComponents/Main";

const MainContainer = () => {
  let interval = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as FlashAnzanParams;
  const [answer, setAnswer] = useState<number>(
    generateRandomPositiveNum(state.digitNum)
  );
  const [countPapersNum, setCountPapersNum] = useState<number>(0);
  const [displayedNumber, setDisplayNumber] = useState<number>(answer);
  const [isDisplayedMinus, setIsDisplayedMinus] = useState<boolean>(false);

  const isSameDigitNum = (num: number): boolean => {
    return displayedNumber === num;
  };

  const isZero = (num: number): boolean => {
    return num === 0;
  };

  const isAnswerNegativeNumber = (num: number): boolean => {
    return answer + num < 0;
  };

  const isUnDisplayedMinus = (num: number): boolean => {
    if (isDisplayedMinus) {
      return false;
    }

    if (num < 0) {
      setIsDisplayedMinus(true);
      return false;
    }

    return isJustBeforeFinishFlashAnzan();
  };

  const isIllegalNumber = (randomNum: number): boolean => {
    return (
      isSameDigitNum(randomNum) ||
      isZero(randomNum) ||
      isAnswerNegativeNumber(randomNum) ||
      isUnDisplayedMinus(randomNum)
    );
  };

  const isFinishedFlashAnzan = (): boolean => {
    return countPapersNum === state.papersNum - 1;
  };

  const isJustBeforeFinishFlashAnzan = (): boolean => {
    return countPapersNum === state.papersNum - 2;
  };

  const generateLegalNum = (digitNum: number): number => {
    const randomNum = state.isEnableMinus
      ? generateRandomNum(digitNum)
      : generateRandomPositiveNum(digitNum);

    if (isIllegalNumber(randomNum)) {
      return generateLegalNum(digitNum);
    }

    return randomNum;
  };

  const flashAnzan = () => {
    if (isFinishedFlashAnzan()) {
      window.clearInterval(interval.current!);

      setTimeout(() => {
        navigate("/result", {
          state: {
            answer: answer,
            papersNum: location.state.papersNum,
            digitNum: location.state.digitNum,
            secondsNum: location.state.secondsNum,
            isEnableMinus: location.state.isEnableMinus,
          },
        });
      }, 5000);
      return;
    }

    const randomNum = generateLegalNum(state.digitNum);

    new Audio(audioPath).play();

    setDisplayNumber(randomNum);
    setAnswer(answer + randomNum);
    setCountPapersNum(countPapersNum + 1);
  };

  interval = useInterval(flashAnzan, state.secondsNum * 1000);

  useEffect(() => {
    new Audio(audioPath).play();
  });

  useEffect(() => {
    const killFlashAnzan = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
        return;
      }
    };

    window.addEventListener("keydown", killFlashAnzan);

    return () => window.removeEventListener("keydown", killFlashAnzan);
  });

  return <Main displayNumber={displayedNumber} />;
};

export default MainContainer;
