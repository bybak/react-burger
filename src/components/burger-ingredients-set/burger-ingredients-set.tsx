import {useSelector} from "react-redux";
import {BurgerIngredientsItem} from "../burger-ingredients-item/burger-ingredients-item";
import PropTypes from "prop-types";
import {FC} from "react";
import {TBurgerIngredientsSet, TIngredientType} from "../../utils/types";

export const BurgerIngredientsSet: FC<TBurgerIngredientsSet> = ({type}) => {
    const ingredients = useSelector((state: any) => state.burgerIngredients.burgerIngredients)
    return (
        <>
            {ingredients.filter((ingredient: TIngredientType) => ingredient.type === type).map((ingredient: TIngredientType) => (
                <BurgerIngredientsItem key={ingredient._id} ingredient={ingredient}/>
            ))}
        </>
    )
}

BurgerIngredientsSet.propTypes = {
    type: PropTypes.string.isRequired
}
