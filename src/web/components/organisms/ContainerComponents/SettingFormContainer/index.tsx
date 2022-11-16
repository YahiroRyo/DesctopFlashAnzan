import React, { useState } from "react";
import SettingForm from "../../PresentationalComponents/SettingForm";

type SettingFormContainerProps = {
  className?: string;
};

const SettingFormContainer = ({ className }: SettingFormContainerProps) => {
  const [papersNum, setPapersNum] = useState<number>(0);
  const [digitsNum, setDigitsNum] = useState<number>(0);
  const [secondsNum, setSecondsNum] = useState<number>(0);
  const startFlashAnzan = () => {};

  return (
    <SettingForm
      className={className}
      onSubmit={startFlashAnzan}
      papersNum={papersNum}
      setPapersNum={setPapersNum}
      digitsNum={digitsNum}
      setDigitsNum={setDigitsNum}
      secondsNum={secondsNum}
      setSecondsNum={setSecondsNum}
    />
  );
};

export default SettingFormContainer;
