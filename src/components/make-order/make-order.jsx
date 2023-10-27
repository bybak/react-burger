import React from 'react';
import style from "../burger-constructor/burger-constructor.module.css";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo} from "react";
import { useSelector } from 'react-redux';

export function MakeOrder({ handleOrderClick }) {
    const buns = useSelector(state => state.burgerConstructor.bunsList)
    const main = useSelector(state => state.burgerConstructor.mainList)

    const totalPrice = useMemo(() =>
        buns.reduce((acc, {price}) => acc + price, 0) * 2 + main.reduce((acc, {price}) => acc + price, 0),
        [buns, main]
    )

    return (
        <div className={`${style.order} pt-10`}>
            <div className="text text_type_digits-medium">
                {totalPrice}
            </div>
            <div className="pl-1">
                <CurrencyIcon type="primary"/>
            </div>
            <div className="pl-10">
                <Button htmlType="submit" type="primary" size="medium" onClick={handleOrderClick}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}
