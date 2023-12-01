import {api} from "../../utils/api";
import {TIngredientType} from "../../utils/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, RootState} from "../../index";

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST'
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS'
export const GET_BURGER_INGREDIENTS_FAILURE = 'GET_BURGER_INGREDIENTS_FAILURE'

export const getBurgerIngredientsSuccess = (data: Array<TIngredientType>) => ({type: GET_BURGER_INGREDIENTS_SUCCESS, payload: data})

export function getBurgerIngredients() {
    return (dispatch: AppDispatch) => {
        dispatch({type: GET_BURGER_INGREDIENTS_REQUEST});
        api.getIngredients()
            .then(({data}) => dispatch(getBurgerIngredientsSuccess(data)))
            .catch(() => dispatch({type: GET_BURGER_INGREDIENTS_FAILURE}))
    }
}
