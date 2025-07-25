import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import ScreenRouter from './ScreenRouter';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {AuthRouter()}
                <Route path="/*" element={<ScreenRouter />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;