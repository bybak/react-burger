import styles from './order-history.module.css';
import { OrderItem } from '../order-item/order-item';
import {useAppSelector} from "../../utils/hooks";

export function OrderHistory() {

    const orders = useAppSelector((state) => state.webSocketUser.orders)

    return (
        <section>
            <ul className={`${styles.scroll} `}>
                {orders.reverse()
                    .map((order) =>
                        <li key={order._id}>
                            <OrderItem order={order} />
                        </li>
                    )}
            </ul>
        </section>
    )
}
