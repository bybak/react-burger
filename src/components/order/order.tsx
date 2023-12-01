import React from 'react';
import { useEffect } from 'react';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/websockets';
import styles from './order.module.css'
import { useParams } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { dateWhen, dateFormat } from '../../utils/date';
import {useSelector} from "react-redux";


function inNotUndefined<T>(item: T | undefined): item is T {
    return item !== undefined
}
export const Order = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(wsConnectionStart());
    //     return () => {
    //         dispatch(wsConnectionClosed());
    //     };
    // }, []);


    const ingredients = useSelector((store: any) => store.burgerIngredients.burgerIngredients);
    const orders = useSelector((store: any) => store.webSocket.orders);
    const { id } = useParams<{ id: string }>();
    const order = React.useMemo(() => {
        return orders.find((order: { _id: string | undefined; }) => order._id === id)
    }, [orders, id])

    const orderIngredientsForImage = ingredients.filter((ingredient: { _id: any; }) => order?.ingredients.includes(ingredient._id))

    const orderIngredients =
        order?.ingredients.map((id: any) => {
            return ingredients.find((item: { _id: any; }) => item._id === id);
        }).filter(inNotUndefined);

    const totalOrderPrice = orderIngredients?.reduce(
        (acc: any, ingredient: { price: any; }) => acc + ingredient.price,
        0
    );

    console.log(id)
    console.log(order)
    console.log(orderIngredients)


    let when = ''
    if (order) {
        when = dateWhen(new Date(order!.createdAt))
    }

    return (
        order &&
        <div className={styles.order_info}>
            <p className='text text_type_digits-default'>#{order?.number}</p>
            <p className={`${styles.title} text text_type_main-medium mt-10`}>{order?.name}</p>
            <p className={`${styles.status} text text_type_main-default mt-3`}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
            <p className={`${styles.title} text text_type_main-medium mt-15`}>Состав:</p>
            <ul className={styles.scroll}>
                {orderIngredientsForImage!
                    .map((item: any) =>
                        <li className={styles.item} key={item._id}>
                            <img className={styles.image} src={item.image_mobile} alt={item.name} />
                            <p className={`${styles.text} text_type_main-default`}>{item.name}</p>
                            <p className={`${styles.price} text text_type_digits-default`}>
                                {orderIngredients?.filter((i: { _id: any; }) => i._id === item._id).length} x {item.price} <CurrencyIcon type='primary' /></p>
                        </li>
                    )}

            </ul>
            <div className={`${styles.total} mt-10 mb-10`}>
                <p className="text text_type_main-default text_color_inactive">
                    {`${when}, ${dateFormat(order!.createdAt)}`}
                </p>
                <div className={`${styles.total_price} mt-1 mb-2`}>
                    <p className="text text_type_digits-default">{totalOrderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}
