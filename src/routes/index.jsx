import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
const AppRoutes = () => {
  const { auth } = useSelector((state) => state.auth);
  console.log(auth, 'auth=====');
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicRoutes user={auth} />}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes user={auth} />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
