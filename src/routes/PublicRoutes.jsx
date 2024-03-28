import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';
const PublicRoutes = ({ user }) => {
  return <>{Object.keys(user).length ? <Navigate to="/" replace /> : <Login />}</>;
};
export default PublicRoutes;
