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
      digitsNum: parseInt(localStorage.getItem("digitsNum") ?? "0"),
      secondsNum: parseInt(localStorage.getItem("secondsNum") ?? "0"),
    },
  });

  const startFlashAnzan = (data: FlashAnzanParams) => {
    localStorage.setItem("papersNum", data.papersNum.toString());
    localStorage.setItem("digitsNum", data.digitsNum.toString());
    localStorage.setItem("secondsNum", data.secondsNum.toString());

    navigate("/flashAnzan", {
      state: {
        papersNum: data.papersNum,
        digitsNum: data.digitsNum,
        secondsNum: data.secondsNum,
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
