import style from './ingredient-details.module.css'
import {useSelector} from "react-redux";

export function IngredientDetails() {
    const ingredient = useSelector(state => state.ingredientDetails.ingredientDetails)
    return (
        <div className={style.ingredientDetails}>
            <img src={ingredient.image_large} alt={ingredient.name}/>
            <div className="text text_type_main-medium pt-4">{ingredient.name}</div>
            <div className={`${style.params} pt-8`}>
                <div>
                    <div className="text text_color_inactive text_type_main-default">Калории, ккал</div>
                    <div className="text text_color_inactive text_type_digits-medium">{ingredient.calories}</div>
                </div>
                <div>
                    <div className="text text_color_inactive text_type_main-default">Белки, г</div>
                    <div className="text text_color_inactive text_type_digits-medium">{ingredient.proteins}</div>
                </div>
                <div>
                    <div className="text text_color_inactive text_type_main-default">Жиры, г</div>
                    <div className="text text_color_inactive text_type_digits-medium">{ingredient.fat}</div>
                </div>
                <div>
                    <div className="text text_color_inactive text_type_main-default">Углеводы, г</div>
                    <div className="text text_color_inactive text_type_digits-medium">{ingredient.carbohydrates}</div>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
}
