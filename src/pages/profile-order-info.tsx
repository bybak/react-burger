import { useEffect } from "react";
import styles from './pages.module.css';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../services/actions/websockets';
import { OrderUser } from "../components/order-user/order-user";
import {useDispatch} from "react-redux";

export const ProfileOrderInfo = () => {

    const dispatch = useDispatch();

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
