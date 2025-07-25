import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/authPages/Login';
import ForgotPassword from '../pages/authPages/ForgotPassword';
import ResetPassword from '../pages/authPages/ResetPassword';

const AuthRoutes = () => (
    <>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
    </>
);

export default AuthRoutes;