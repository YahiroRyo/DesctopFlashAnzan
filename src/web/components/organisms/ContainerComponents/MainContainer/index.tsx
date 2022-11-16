import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInterval } from "../../../../modules/interval/useInterval";
import { generateRandomNum } from "../../../../modules/number";
import { FlashAnzanParams } from "../../../../types/FlashAnzanParams";
import Main from "../../PresentationalComponents/Main";

const MainContainer = () => {
  let interval = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as FlashAnzanParams;
  const [answer, setAnswer] = useState<number>(0);
  const [countPapersNum, setCountPapersNum] = useState<number>(0);
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  const isIllegalNumber = (randomNum: number): boolean => {
    return (
      state.digitNum === 1 && randomNum === 0 && randomNum === displayNumber
    );
  };

  const isFinishedFlashAnzan = (): boolean => {
    return countPapersNum === state.papersNum;
  };

  const flashAnzan = () => {
    if (isFinishedFlashAnzan()) {
      window.clearInterval(interval.current!);

      navigate("/answer", {
        state: {
          answer: answer,
        },
      });
      return;
    }

    const randomNum = generateRandomNum(state.digitNum);

    if (isIllegalNumber(randomNum)) {
      flashAnzan();
      return;
    }

    setDisplayNumber(randomNum);
    setAnswer(answer + randomNum);
    setCountPapersNum(countPapersNum + 1);
  };

  interval = useInterval(flashAnzan, state.secondsNum * 1000);

  useEffect(() => {
    flashAnzan();
  }, []);

  return <Main displayNumber={displayNumber} />;
};

export default MainContainer;
