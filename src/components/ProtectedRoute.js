import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../store/authedUserSlice';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsUserLoggedIn);
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to='/login' replace state={location} />
  );
}

export default ProtectedRoute;
