// AppRoutes.js
import React from 'react';
import { useSelector } from 'react-redux';

import {
  Login,
  Register,
  Dashboard,
  VerifyEmailPage,
  VerificationMessage,
  ResetPassword,
} from '../pages/';
import ProtectedRoute from './ProtectedRoutes'; // Import the ProtectedRoute component
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword';

const AppRoutes = () => {
  const { auth } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        <Route path="/emailverification" element={<VerificationMessage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
