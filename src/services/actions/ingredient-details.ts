import {TIngredientType} from "../../utils/types";

export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS'
export const DELETE_INGREDIENT_DETAILS = 'DELETE_INGREDIENT_DETAILS'

export const addIngredientDetails = (ingredient: TIngredientType) => ({type: ADD_INGREDIENT_DETAILS, payload: ingredient})
export const deleteIngredientDetails = () => ({type: DELETE_INGREDIENT_DETAILS})
