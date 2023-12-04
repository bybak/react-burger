import {
    GET_ORDER_DETAILS_FAILURE,
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS
} from "../actions/order-details";
import {TUnionAction} from "../actions/interfaces";

type TInitialState = {
    id: number | null,
    orderDetailsRequest: boolean,
    orderDetailsFailure: boolean
}

export const initialState: TInitialState = {
    id: null,
    orderDetailsRequest: false,
    orderDetailsFailure: false
}

export const orderDetailsReducer = (state = initialState, action: TUnionAction) => {
    switch (action.type) {
        // case GET_ORDER_DETAILS_REQUEST: {
        //     return {
        //         ...state,
        //         orderDetailsRequest: true
        //     }
        // }
        case GET_ORDER_DETAILS_SUCCESS: {
            return {
                ...state,
                id: action.payload,
                orderDetailsRequest: false,
                orderDetailsFailure: false
            }
        }
        // case GET_ORDER_DETAILS_FAILURE: {
        //     return {
        //         ...state,
        //         orderDetailsRequest: false,
        //         orderDetailsFailure: true
        //     }
        // }
        default: {
            return state
        }
    }
}
