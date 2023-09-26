import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredients-item.module.css'
import {ingredientsPropTypes} from "../../utils/propTypes";

export function BurgerIngredientsItem({ ingredient }) {
    return (
        <div className={style.mainDiv}>
            <Counter count={1} size="default"/>
            <img src={ingredient.image} alt={ingredient.name}/>
            <div className={style.price}>
                <div className="text text_type_digits-default">{ingredient.price}</div>
                <div className="pl-2"><CurrencyIcon type="primary"/></div>
            </div>
            <div className="pt-1 text text_type_main-small">
                {ingredient.name}
            </div>
        </div>
    )
}

BurgerIngredientsItem.propTypes = {
    ingredient: ingredientsPropTypes.isRequired
}
