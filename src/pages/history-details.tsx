import { useEffect } from 'react';
import styles from './pages.module.css';
import { Order } from '../components/order/order';
import {
    wsConnectionStart,
    wsConnectionClosed,
    wsConnectionStartUser,
    wsConnectionClosedUser
} from '../services/actions/websockets';
import {useAppDispatch} from "../utils/hooks";
import {OrderInfo} from "./order-info";
import {ProfileOrderInfo} from "./profile-order-info";
import {getCookie} from "../utils/cookie";

export const HistoryDetails = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser(`?token=${getCookie('access')}`));
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <div className={styles.info}>
            <ProfileOrderInfo />
        </div>
    )
}
