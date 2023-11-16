import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredient-tabs.module.css'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {scrollIngredients, setActiveTab} from "../../services/actions/burger-ingredients-scroll";

export function BurgerIngredientsTabs() {

    const dispatch = useDispatch()
    const current = useSelector((state: any) => state.scrollIngredients.current)
    const setCurrent = (value: string) => {
        dispatch(setActiveTab(value))
        dispatch(scrollIngredients(value))
    }

    return (
        <div className={style.tabs}>
            <Tab active={current === 'bun'} value="bun" onClick={setCurrent}>Булки</Tab>
            <Tab active={current === 'sauce'} value="sauce" onClick={setCurrent}>Соусы</Tab>
            <Tab active={current === 'main'} value="main" onClick={setCurrent}>Начинки</Tab>
        </div>
    )
}
