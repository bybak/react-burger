import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children }) => {
    const authorization = useSelector((state) => state.userAuthorization.authorization);
    const location = useLocation();

    if (!authorization) {
        return (
            <Navigate to="/login" state={{from: location}} />
        )
    }
    return children
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired
}
