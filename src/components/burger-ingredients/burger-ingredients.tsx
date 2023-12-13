import {BurgerIngredientsTabs} from "../burger-ingredients-tabs/burger-ingredients-tabs";
import {BurgerIngredientsSets} from "../burger-ingredients-sets/burger-ingredients-sets";

export function BurgerIngredients() {
    return (
        <section>
            <div className="text text_type_main-large pt-10 pb-5">Соберите бургер</div>
            <BurgerIngredientsTabs/>
            <BurgerIngredientsSets/>
        </section>
    )
}
