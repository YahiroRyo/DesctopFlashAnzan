import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Setting from "../pages/Setting";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index={true} element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
