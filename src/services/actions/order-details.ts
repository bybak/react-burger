import {api} from "../../utils/api";
import {clearConstructor} from "./burger-constructor";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, RootState} from "../../index";

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST'
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS'
export const GET_ORDER_DETAILS_FAILURE = 'GET_ORDER_DETAILS_FAILURE'

export const getOrderSuccess = (number: number) => ({type: GET_ORDER_DETAILS_SUCCESS, payload: number})

export function getOrderDetails(ingredients: string[]) {
    return (dispatch: AppDispatch) => {
        dispatch({type: GET_ORDER_DETAILS_REQUEST})
        api.getOrderDetails(ingredients)
            .then(({order: {number}}) =>
                dispatch(getOrderSuccess(number)
            )).then(() => {
                dispatch(clearConstructor())
            })
            .catch(() => dispatch({type: GET_ORDER_DETAILS_FAILURE}))
    }
}
