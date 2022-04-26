import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //const location = useLocation();
    return localStorage.getItem('idToken') ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;

// <Route element={localStorage.getItem('idToken') ? <Navigate to="/" replace /> : children} />
