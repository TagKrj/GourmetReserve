import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const AuthRoutes = () => {
    return (
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </>
    );
};

export default AuthRoutes;
