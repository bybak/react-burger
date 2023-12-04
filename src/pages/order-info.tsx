import { useEffect } from 'react';
import styles from './pages.module.css';
import { Order } from '../components/order/order';
import { wsConnectionStart,wsConnectionClosed } from '../services/actions/websockets';
import {useAppDispatch} from "../utils/hooks";

export const OrderInfo = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(''));
        return () => {
            dispatch(wsConnectionClosed());
        };
    }, []);

    return (
        <div className={styles.info}>
            <Order />
        </div>
    )
}
