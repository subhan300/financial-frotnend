import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const  auth = useSelector((state) => state.auth);
  console.log("auth--------",!auth?.auth?.user?._id)
  if (!auth?.auth?.user?._id)  {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
