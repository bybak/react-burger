import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children, anonymous = false }) => {
    const authorization = useSelector((state) => state.userAuthorization.authorization);
    const location = useLocation();

    const from = location.state?.from || '/';
    // Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && authorization) {
        // ...то отправляем его на предыдущую страницу
        return <Navigate to={ from } />;
    }

    // Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !authorization) {
        // ...то отправляем его на страницу логин
        return <Navigate to="/login" state={{ from: location}}/>;
    }

    // Если все ок, то рендерим внутреннее содержимое
    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired
}
