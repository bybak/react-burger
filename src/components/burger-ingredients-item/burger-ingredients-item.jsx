import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredients-item.module.css'
import {ingredientsPropTypes} from "../../utils/propTypes";
import {useDispatch, useSelector} from "react-redux";
import {addIngredientDetails} from "../../services/actions/ingredient-details";
import {useDrag} from "react-dnd";

export function BurgerIngredientsItem({ ingredient }) {
    const buns = useSelector(state => state.burgerConstructor.bunsList)
    const main = useSelector(state => state.burgerConstructor.mainList)

    const counter = buns.filter((item) => item._id === ingredient._id).length * 2
        || main.filter((item) => item._id === ingredient._id).length

    const dispatch = useDispatch()

    const handleIngredientClick = (ingredient) => {
        dispatch(addIngredientDetails(ingredient))
    }

    const [, drag] = useDrag(() => ({
        type: 'ingredient',
        item: {
            ingredient,
            id: ingredient._id,
            type: ingredient.type
        }
    }))

    return (
        <div className={style.mainDiv} onClick={() => handleIngredientClick(ingredient)} ref={drag}>
            <Counter count={counter} size="default"/>
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
    ingredient: ingredientsPropTypes.isRequired,
}
