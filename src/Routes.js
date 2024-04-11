import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/components/Auth/Login'
import SignupPage from '../src/components/Auth/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* Other routes */}
    </Routes>
  );
};

export default AppRoutes;

