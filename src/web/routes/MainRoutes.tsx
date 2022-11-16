import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import FlashAnzan from "../pages/FlashAnzan";
import FlashAnzanCountDown from "../pages/FlashAnzanCountDown";
import Result from "../pages/Result";
import Setting from "../pages/Setting";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Setting />} />
        <Route path="/flashAnzanCountDown" element={<FlashAnzanCountDown />} />
        <Route path="/flashAnzan" element={<FlashAnzan />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
