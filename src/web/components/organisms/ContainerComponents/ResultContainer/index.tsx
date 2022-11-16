import React from "react";
import { useLocation } from "react-router-dom";
import Result from "../../PresentationalComponents/Result";

const ResultContainer = () => {
  const location = useLocation();

  return <Result {...location.state} />;
};

export default ResultContainer;
