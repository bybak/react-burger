import { useEffect } from 'react';
import styles from './pages.module.css';
import { Order } from '../components/order/order';
import { wsConnectionStart,wsConnectionClosed } from '../services/actions/websockets';
import {useDispatch} from "react-redux";

export const OrderInfo = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart());
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
