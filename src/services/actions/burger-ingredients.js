import {api} from "../../utils/api";

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST'
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS'
export const GET_BURGER_INGREDIENTS_FAILURE = 'GET_BURGER_INGREDIENTS_FAILURE'

export const getBurgerIngredientsSuccess = (data) => ({type: GET_BURGER_INGREDIENTS_SUCCESS, payload: data})

export function getBurgerIngredients() {
    return (dispatch) => {
        dispatch({type: GET_BURGER_INGREDIENTS_REQUEST});
        api.getIngredients()
            .then(({data}) => dispatch(getBurgerIngredientsSuccess(data)))
            .catch(() => dispatch({type: GET_BURGER_INGREDIENTS_FAILURE}))
    }
}
