import Dashboard from '../pages/Dashboard';
import { Navigate } from 'react-router-dom';
const ProtectedRoutes = ({ user }) => {
  console.log(user, 'users');
  return <>{Object.keys(user).length ? <Dashboard /> : <Navigate to="/login" replace />}</>;
};
export default ProtectedRoutes;
