import { useEffect } from "react";
import styles from './pages.module.css';
import { OrderFeed } from '../components/order-feed/order-feed';
import { Orders } from '../components/orders/orders';
import { wsConnectionStart, wsConnectionClosed } from '../services/actions/websockets';
import {useDispatch} from "react-redux";

export const Feed = () => {
    const dispatch = useDispatch();

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
