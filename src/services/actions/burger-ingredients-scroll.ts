export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export const SCROLL_INGREDIENTS = 'SCROLL_INGREDIENTS'

export const setActiveTab = (value: string) => ({type: SET_ACTIVE_TAB, payload: value})
export const scrollIngredients = (value: string) => ({type: SCROLL_INGREDIENTS, payload: value})
