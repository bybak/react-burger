import {
    ADD_INGREDIENT,
    CLEAR_CONSTRUCTOR,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    SET_BUN
} from "../actions/burger-constructor";

export const initialState = {
    bunsList: [],
    mainList: []
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUN: {
            return {
                ...state,
                bunsList: state.bunsList.find((item) => item._id === action.payload._id) ? [...state.bunsList] : [action.payload]
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                mainList: [...state.mainList, action.payload]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                mainList: state.mainList.filter((item) => item.id !== action.payload.id)
            }
        }
        case MOVE_INGREDIENT: {
            let result = [];
            const {start, end} = action.payload

            if (start === end) {
                return state
            } else if (start > end) {
                result = [
                    ...state.mainList.slice(0, end),
                    state.mainList[start],
                    ...state.mainList.slice(end, start),
                    ...state.mainList.slice(start + 1)
                ]
            } else {
                result = [
                    ...state.mainList.slice(0, start),
                    ...state.mainList.slice(start + 1, end + 1),
                    state.mainList[start],
                    ...state.mainList.slice(end + 1)
                ]
            }

            return {
                ...state,
                mainList: result
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                bunsList: [],
                mainList: []
            }
        }
        default: {
            return state
        }
    }
}
