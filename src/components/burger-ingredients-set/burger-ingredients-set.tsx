import {BurgerIngredientsItem} from "../burger-ingredients-item/burger-ingredients-item";
import {FC} from "react";
import {TBurgerIngredientsSet, TIngredientType} from "../../utils/types";
import {useAppSelector} from "../../utils/hooks";

export const BurgerIngredientsSet: FC<TBurgerIngredientsSet> = ({type}) => {
    const ingredients = useAppSelector((state) => state.burgerIngredients.burgerIngredients)
    return (
        <>
            {ingredients.filter((ingredient: TIngredientType) => ingredient.type === type).map((ingredient: TIngredientType) => (
                <BurgerIngredientsItem key={ingredient._id} ingredient={ingredient}/>
            ))}
        </>
    )
}
