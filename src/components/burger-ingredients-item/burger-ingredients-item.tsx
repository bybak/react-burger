import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredients-item.module.css'
import {addIngredientDetails} from "../../services/actions/ingredient-details";
import {useDrag} from "react-dnd";
import { Link, useLocation } from 'react-router-dom';
import {FC} from "react";
import {TBurgerIngredientsItem, TIngredientType} from "../../utils/types";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";

export const BurgerIngredientsItem: FC<TBurgerIngredientsItem> = ({ ingredient }) => {
    const location = useLocation();

    const buns = useAppSelector((state) => state.burgerConstructor.bunsList)
    const main = useAppSelector((state) => state.burgerConstructor.mainList)

    const counter = buns.filter((item: TIngredientType) => item._id === ingredient._id).length * 2
        || main.filter((item: TIngredientType) => item._id === ingredient._id).length

    const dispatch = useAppDispatch()

    const handleIngredientClick = (ingredient: TIngredientType) => {
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
            <Link
                to={`/ingredients/${ingredient._id}`}
                state={{backgroundLocation: location}}
                className={`${style.link} text text_type_main-default`}
            >
                <Counter count={counter} size="default"/>
                <img src={ingredient.image} alt={ingredient.name}/>
                <div className={style.price}>
                    <div className="text text_type_digits-default">{ingredient.price}</div>
                    <div className="pl-2"><CurrencyIcon type="primary"/></div>
                </div>
                <div className="pt-1 text text_type_main-small">
                    {ingredient.name}
                </div>
            </Link>
        </div>
    )
}
