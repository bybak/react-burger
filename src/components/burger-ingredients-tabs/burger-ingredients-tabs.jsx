import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredient-tabs.module.css'
import React from "react";

export function BurgerIngredientsTabs() {
    const [current, setCurrent] = React.useState('bun')

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={style.tabs}>
            <Tab active={current === 'bun'} value="bun" onClick={setTab}>Булки</Tab>
            <Tab active={current === 'sauce'} value="sauce" onClick={setTab}>Соусы</Tab>
            <Tab active={current === 'main'} value="main" onClick={setTab}>Начинки</Tab>
        </div>
    )
}
