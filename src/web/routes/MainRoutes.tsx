import React from 'react';
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Top from '../pages/Top';

const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index={true} element={<Top />} />
            </Routes>
        </Router>
    );
}

export default MainRoutes;