import {SCROLL_INGREDIENTS, SET_ACTIVE_TAB} from "../actions/burger-ingredients-scroll";
import {TUnionAction} from "../actions/interfaces";

type TInitialState = {
    current: string,
    scroll: string
}

export const initialState: TInitialState = {
    current: 'bun',
    scroll: 'bun'
}

export const scrollIngredientsReducer = (state = initialState, action: TUnionAction): TInitialState => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.payload
            }
        }
        case SCROLL_INGREDIENTS: {
            return {
                ...state,
                scroll: action.payload
            }
        }
        default: {
            return state
        }
    }
}
