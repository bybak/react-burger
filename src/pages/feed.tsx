import { useEffect } from "react";
import styles from './pages.module.css';
import { OrderFeed } from '../components/order-feed/order-feed';
import { Orders } from '../components/orders/orders';
import { wsConnectionStart, wsConnectionClosed } from '../services/actions/websockets';
import {useAppDispatch} from "../utils/hooks";

export const Feed = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed());
        };
    }, []);

    return (
        <section className={styles.content}>
            <OrderFeed />
            <Orders />
        </section>
    )
}
