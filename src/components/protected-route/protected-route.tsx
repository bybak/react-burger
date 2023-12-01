import {Navigate, RouteProps, useLocation} from "react-router-dom";
import {FC} from "react";
import {useAppSelector} from "../../utils/hooks";

export const ProtectedRoute: FC<RouteProps | any> = ({ children, anonymous = false }) => {
    const authorization = useAppSelector((state) => state.userAuthorization.authorization);
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
