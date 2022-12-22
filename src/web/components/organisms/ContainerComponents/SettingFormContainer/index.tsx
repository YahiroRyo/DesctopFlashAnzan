import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FlashAnzanParams } from "../../../../types/FlashAnzanParams";
import SettingForm from "../../PresentationalComponents/SettingForm";

type SettingFormContainerProps = {
  className?: string;
};

const SettingFormContainer = ({ className }: SettingFormContainerProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlashAnzanParams>({
    mode: "onChange",
    defaultValues: {
      papersNum: parseInt(localStorage.getItem("papersNum") ?? "0"),
      digitNum: parseInt(localStorage.getItem("digitNum") ?? "0"),
      secondsNum: parseFloat(localStorage.getItem("secondsNum") ?? "0"),
      secondsLeftFromGameFinished: parseInt(localStorage.getItem("secondsLeftFromGameFinished") ?? "5"),
      isEnableMinus: localStorage.getItem("isEnableMinus") === "true" ?? false,
    },
  });

  const startFlashAnzan = (data: FlashAnzanParams) => {
    localStorage.setItem("papersNum", data.papersNum.toString());
    localStorage.setItem("digitNum", data.digitNum.toString());
    localStorage.setItem("secondsNum", data.secondsNum.toString());
    localStorage.setItem("secondsLeftFromGameFinished", data.secondsLeftFromGameFinished.toString());
    localStorage.setItem("isEnableMinus", data.isEnableMinus.toString());

    navigate("/flashAnzanCountDown", {
      state: {
        papersNum: data.papersNum,
        digitNum: data.digitNum,
        secondsNum: data.secondsNum,
        secondsLeftFromGameFinished: data.secondsLeftFromGameFinished,
        isEnableMinus: data.isEnableMinus,
      },
    });
  };

  return (
    <SettingForm
      className={className}
      onSubmit={startFlashAnzan}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default SettingFormContainer;
