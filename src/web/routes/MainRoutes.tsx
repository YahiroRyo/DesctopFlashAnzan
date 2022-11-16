import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import FlashAnzan from "../pages/FlashAnzan";
import Setting from "../pages/Setting";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Setting />} />
        <Route path="/flashAnzan" element={<FlashAnzan />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
