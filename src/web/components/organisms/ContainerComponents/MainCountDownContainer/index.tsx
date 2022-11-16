import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInterval } from "../../../../modules/interval/useInterval";
import { FlashAnzanParams } from "../../../../types/FlashAnzanParams";
import MainCountDown from "../../PresentationalComponents/MainCountDown";

const countDown = ["③", "②", "①"];

const MainCountDownContainer = () => {
  let interval = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as FlashAnzanParams;
  const [countPapersNum, setCountPapersNum] = useState<number>(2);
  const [displayNumber, setDisplayNumber] = useState<string>("③");

  const isFinishedFlashAnzan = (): boolean => {
    return countPapersNum - 1 === countDown.length;
  };

  const flashAnzan = () => {
    if (isFinishedFlashAnzan()) {
      window.clearInterval(interval.current!);

      navigate("/flashAnzan", {
        state: state,
      });
      return;
    }

    setCountPapersNum(countPapersNum + 1);
    setDisplayNumber(countDown[countPapersNum - 1]);
  };

  interval = useInterval(flashAnzan, 1000);

  return <MainCountDown displayNumber={displayNumber} />;
};

export default MainCountDownContainer;
