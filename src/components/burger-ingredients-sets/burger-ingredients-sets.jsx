import {BurgerIngredientsItem} from "../burger-ingredients-item/burger-ingredients-item"
import style from './burger-ingredients-sets.module.css'
import PropTypes from "prop-types";
import {ingredientsPropTypes} from "../../utils/propTypes";

export function BurgerIngredientsSets({ingredients}) {
    return (
        <div className={style.sets}>
            <div id="bun" className="text text_type_main-medium">Булки</div>
            <div className={style.list}>
                {ingredients.filter((ingredient => ingredient.type === 'bun')).map((ingredient => (<BurgerIngredientsItem key={ingredient._id} ingredient={ingredient}/>)))}
            </div>
            <div id="sauce" className="pt-10 text text_type_main-medium">Соусы</div>
            <div className={style.list}>
                {ingredients.filter((ingredient => ingredient.type === 'sauce')).map((ingredient => (<BurgerIngredientsItem key={ingredient._id} ingredient={ingredient}/>)))}
            </div>
            <div id="main" className="pt-10 text text_type_main-medium">Начинки</div>
            <div className={style.list}>
                {ingredients.filter((ingredient => ingredient.type === 'main')).map((ingredient => (<BurgerIngredientsItem key={ingredient._id} ingredient={ingredient}/>)))}
            </div>
        </div>
    )
}

BurgerIngredientsSets.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}
