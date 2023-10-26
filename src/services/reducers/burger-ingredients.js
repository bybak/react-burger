import {
    GET_BURGER_INGREDIENTS_FAILURE,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS
} from "../actions/burger-ingredients";

export const initialState = {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailure: false
}

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                burgerIngredientsRequest: true
            }
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                burgerIngredients: [...action.payload],
                burgerIngredientsRequest: false,
                burgerIngredientsFailure: false
            }
        }
        case GET_BURGER_INGREDIENTS_FAILURE: {
            return {
                ...state,
                burgerIngredientsRequest: false,
                burgerIngredientsFailure: true
            }
        }
        default: {
            return state
        }
    }
}
