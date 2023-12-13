import {TIngredientType} from "../../utils/types";

export const SET_BUN = 'SET_BUN'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR'

export const setBun = (bun: TIngredientType) => ({type: SET_BUN, payload: bun})
export const addIngredient = (ingredient: TIngredientType) => ({type: ADD_INGREDIENT, payload: ingredient})
export const deleteIngredient = (ingredient: TIngredientType) => ({type: DELETE_INGREDIENT, payload: ingredient})
export const moveIngredient = (start: number, end: number) => ({type: MOVE_INGREDIENT, payload: {start, end}})
export const clearConstructor = () => ({type: CLEAR_CONSTRUCTOR})
