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
    reset,
    formState: { errors },
  } = useForm<FlashAnzanParams>({
    mode: "onChange",
    defaultValues: {
      papersNum: 0,
      digitsNum: 0,
      secondsNum: 0,
    },
  });

  const startFlashAnzan = (data: FlashAnzanParams) => {
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
