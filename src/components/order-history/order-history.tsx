import styles from './order-history.module.css';
import { OrderItem } from '../order-item/order-item';
import {useSelector} from "react-redux";

export function OrderHistory() {

    const orders = useSelector((state: any) => state.webSocketUser.orders)

    return (
        <section>
            <ul className={`${styles.scroll} `}>
                {orders.reverse()
                    .map((order: any) =>
                        <li key={order._id}>
                            <OrderItem order={order} />
                        </li>
                    )}
            </ul>
        </section>
    )
}
