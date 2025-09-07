import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const RestirictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return !isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestirictedRoute;