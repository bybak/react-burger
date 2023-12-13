import { GET_USER_SUCCESS } from "../actions/user";
import { UPDATE_USER_SUCCESS } from "../actions/user";
import {TUser} from "../../utils/types";
import {TUnionAction} from "../actions/interfaces";

type TInitialState = TUser

const initialState: TInitialState = {
    success: false,
    user: {
        email: '',
        name: ''
    },
};

export const profileReducer = (state = initialState, action: TUnionAction): TInitialState => {
    switch (action.type) {
        case GET_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
            }
        }
        default: {
            return state;
        }
    }
}
