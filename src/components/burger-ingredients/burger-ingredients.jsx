import {BurgerIngredientsTabs} from "../burger-ingredients-tabs/burger-ingredients-tabs";
import {BurgerIngredientsSets} from "../burger-ingredients-sets/burger-ingredients-sets";
import PropTypes from "prop-types";
import {ingredientsPropTypes} from "../../utils/propTypes";

export function BurgerIngredients({ingredients}) {
    return (
        <section>
            <div className="text text_type_main-large pt-10 pb-5">Соберите бургер</div>
            <BurgerIngredientsTabs/>
            <BurgerIngredientsSets ingredients={ingredients}/>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}
