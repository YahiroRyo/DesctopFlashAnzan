import React from "react";
import CloseButton from "./components/atoms/CloseButton";
import MainRoutes from "./routes/MainRoutes";
import "./styles/global.scss";

export const App = () => {
  const closeApplication = async () => {
    await window.api.closeApplication();
  };

  return (
    <>
      <CloseButton onClick={closeApplication} />
      <header />
      <MainRoutes />
    </>
  );
};
