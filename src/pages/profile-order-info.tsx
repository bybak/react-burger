import { useEffect } from "react";
import styles from './pages.module.css';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../services/actions/websockets';
import { OrderUser } from "../components/order-user/order-user";
import {useAppDispatch} from "../utils/hooks";

export const ProfileOrderInfo = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser());
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
