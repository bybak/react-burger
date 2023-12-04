import { useEffect } from "react";
import styles from './pages.module.css';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../services/actions/websockets';
import { OrderUser } from "../components/order-user/order-user";
import {useAppDispatch} from "../utils/hooks";
import {getCookie} from "../utils/cookie";

export const ProfileOrderInfo = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser(`?token=${getCookie('access')}`));
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <div className={styles.info}>
            <OrderUser />
        </div>
    )
}
